import { Injectable } from '@angular/core';
import { SERVER_URL } from './config';
import { Http, Headers, RequestOptions } from '@angular/http';

import { UserData } from './user-data';

import { Observable } from 'rxjs/Observable';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class ConferenceData {
	data: any;
	public totalDays: number = 0;
	public dayStartIndx: number = 0;

	constructor(
		public http: Http,
		public userData: UserData)
	{}

	load(): any {
		if (this.data) {
			return Observable.of(this.data);
		} else {
//			return this.http.get('assets/data/data-real2.json')
			let headers = new Headers({ 'Content-Type': 'application/json', 'AUTH-TOKEN': this.userData.getLoginToken() });
			let options = new RequestOptions({ headers: headers });
			return this.http.get(SERVER_URL + '/meeting/', options)
				.map(this.processData, this);
		}
	}

	hasConferenceData(): boolean {
		return this.data && this.data.schedule && this.data.schedule.length > 0;
	};

	processData(data: any) {
		// just some good 'ol JS fun with objects and arrays
		// build up the data by linking speakers to sessions
		this.data = data.json();
		console.log(this.data);
		this.data.tracks = [];
		
		if( !this.hasConferenceData() ) {
			return;
		}

		let currIndx: number = 0;
		// loop through each day in the schedule
		this.data.schedule.forEach((day: any) => {
			// loop through each timeline group in the day
			let schedDate = new Date(day.day + "T12:00:00");
			let currDate = new Date();
			let isSameDay = (schedDate.getDate() == currDate.getDate() 
			        && schedDate.getMonth() == currDate.getMonth()
			        && schedDate.getFullYear() == currDate.getFullYear());
			
			if( isSameDay ) {
				this.dayStartIndx = currIndx;
			}
			
			this.totalDays++;
			currIndx++;
			
			day.groups.forEach((group: any) => {
				// loop through each session in the timeline group
				group.sessions.forEach((session: any) => {
					session.speakers = [];
					if (session.speakerNames) {
						session.speakerNames.forEach((speakerName: any) => {
							let speaker = this.data.speakers.find((s: any) => this.getSpeakerNameFull(s) === speakerName);
							if (speaker) {
								session.speakers.push(speaker);
								speaker.sessions = speaker.sessions || [];
								speaker.sessions.push(session);
							}
						});
					}

					if (session.tracks) {
						session.tracks.forEach((track: any) => {
							if (this.data.tracks.indexOf(track) < 0) {
								this.data.tracks.push(track);
							}
						});
					}
				});
			});
		});

		return this.data;
	}

	getTimeline(dayIndex: number, queryText = '', excludeTracks: any[] = [], segment = 'all') {
		return this.load().map((data: any) => {
			
			if( !this.hasConferenceData() ) {
				//no conference is available, return safe blank data
				return null;
			}
			
			//initial load only, try to start on CurrentDay of schedule
			if( this.dayStartIndx > 0 ) {
				dayIndex = this.dayStartIndx;
				this.dayStartIndx = 0; //clear this
			}
			
			let day = data.schedule[dayIndex];
			day.shownSessions = 0;
			day.currentDayIndx = dayIndex;
			
			day.dayIndexDay = new Date(day.day + "T12:00:00").toLocaleString("en-us", { month: "short", day : "numeric" }); //make date and then format

			queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
			let queryWords = queryText.split(' ').filter(w => !!w.trim().length);

			day.groups.forEach((group: any) => {

				group.sessions.forEach((session: any) => {
					// check if this session should show or not
					this.filterSession(session, queryWords, excludeTracks, segment);

					if (!session.hide) {
						// if this session is not hidden then this group should show
						group.hide = false;
						day.shownSessions++;
					}
					else {
						group.hide = true;
					}
					
				});

			});

			return day;
		});
	}


	filterSession(session: any, queryWords: string[], excludeTracks: any[], segment: string) {
		let matchesQueryText = false;
		if (queryWords.length) {
			// of any query word is in the session name than it passes the query test
			queryWords.forEach((queryWord: string) => {
				if( session.name && session.name.toLowerCase().indexOf(queryWord) > -1) {
					matchesQueryText = true;
				}
			});
		} else {
			// if there are no query words then this session passes the query test
			matchesQueryText = true;
		}

		// if any of the sessions tracks are not in the
		// exclude tracks then this session passes the track test
		let matchesTracks = false;
		if (session.tracks.length) {
			session.tracks.forEach((trackName: string) => {
				if (excludeTracks.indexOf(trackName) === -1) {
					matchesTracks = true;
				}
			});
		}
		else {
			//if there are no tracks then check for the special case "empty"
			if (excludeTracks.indexOf("(empty)") === -1) { 
				matchesTracks = true;
			}
			else {
				matchesTracks = false;
			}
		}
		

		// if the segement is 'favorites', but session is not a user favorite
		// then this session does not pass the segment test
		let matchesSegment = false;
		if (segment === 'favorites') {
			if (this.userData.hasFavorite(session.id)) {
				matchesSegment = true;
			}
		} else {
			matchesSegment = true;
		}

		// all tests must be true if it should not be hidden
		session.hide =  !(matchesQueryText && matchesTracks && matchesSegment);
	}

	getSpeakers() {
		if( this.hasConferenceData() ) {
			return this.load().map((data: any) => {
				return data.speakers.sort((a: any, b: any) => {
					let aName = a.name_last;
					let bName = b.name_last;
					return aName.localeCompare(bName);
				});
			});
		}
		else {
			return new EmptyObservable();
		}
	}

	getPosters() {
		if( this.hasConferenceData() ) {
			return this.load().map((data: any) => {
				return data.posters.sort((a: any, b: any) => {
					let aVal = a.title;
					let bVal = b.title;
					return aVal.localeCompare(bVal);
				});
			});
		}
		else {
			return new EmptyObservable();
		}
	}

	hasPosters(): boolean {
		if( this.hasConferenceData() ) {
			return this.data.posters.length > 0;
		}
		else {
			return false;
		}
	}


	getSpeakerNameFull(speaker: any): string {
		//convienent method to concat speaker names into a single name
		return speaker.name_first + ' ' + speaker.name_last + (speaker.name_suffix ? ', ' + speaker.name_suffix : '');
	}

	getTracks() {
		if( this.hasConferenceData() ) {
			return this.load().map((data: any) => {
				return data.tracks.sort();
			});
		}
		else {
			return new EmptyObservable();
		}	
	}

	getSession(sessionId:number):any {
		if( this.hasConferenceData() ) {
			for (let day of this.data.schedule) {
				for (let group of day.groups) {
					// loop through each session in the group
					for (let session of group.sessions) {
						//console.log("session--id= " + session.id +  "  :: " + sessionId);
						if (session.id == sessionId) {
							return session;
						}
					}
				}
			}
		}
		else {
			return null;
		}	
	}
	
	getMap() {
		if( this.hasConferenceData() ) {
			return this.load().map((data: any) => {
				return data.map;
			});
		}
		else {
			return new EmptyObservable();
		}

	}

}
