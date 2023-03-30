import { Component, ViewChild } from '@angular/core';

import { AlertController, App, FabContainer, ItemSliding, List, ModalController, NavController, ToastController, LoadingController, Refresher, Content } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

import { SessionDetailPage } from '../session-detail/session-detail';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';

@Component({
	selector: 'page-schedule',
	templateUrl: 'schedule.html'
})
export class SchedulePage {
	// the list is a child of the schedule page
	// @ViewChild('scheduleList') gets a reference to the list
	// with the variable #scheduleList, `read: List` tells it to return
	// the List and not a reference to the element
	@ViewChild('scheduleList', { read: List }) scheduleList: List;
	@ViewChild(Content) content: Content;

	dayIndex: number = 0;
	dayIndexDay: string = '';
	queryText: string = '';
	segment: string = 'all';
	excludeTracks: any = [];
	shownSessions: any = [];
	groups: any = [];

	constructor(
		public alertCtrl: AlertController,
		public app: App,
		public loadingCtrl: LoadingController,
		public modalCtrl: ModalController,
		public navCtrl: NavController,
		public toastCtrl: ToastController,
		public confData: ConferenceData,
		public userData: UserData,
		public socialSharing: SocialSharing
	) { }

	ionViewDidLoad() {
		this.app.setTitle('Schedule');
		console.log('aa');
		this.doRefresh();
	}

	presentFilter() {
		let modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
		modal.present();

		modal.onWillDismiss((data: any[]) => {
			if (data) {
				this.excludeTracks = data;
				this.doRefresh();
			}
		});

	}

	changeDayIndex() {
		if( (this.dayIndex+1) >= this.confData.totalDays ) {
			this.dayIndex = 0;
		}
		else {		
			this.dayIndex++;
		}
		
		//refresh everything
		this.doRefresh();
	}

	goToSessionDetail(sessionData: any) {
		// go to the session detail page
		// and pass in the session data
		this.navCtrl.push(SessionDetailPage, {
			name: sessionData.name,
			session: sessionData
		});
	}

	addFavorite(slidingItem: ItemSliding, sessionData: any) {

		if (this.userData.hasFavorite(sessionData.id)) {
			// woops, they already favorited it! What shall we do!?
			// prompt them to remove it
			this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
		} else {
			// remember this session as a user favorite
			this.userData.addFavorite(sessionData.id);

			// create an alert instance
			let alert = this.alertCtrl.create({
				title: 'Favorite Added',
				buttons: [{
					text: 'OK',
					handler: () => {
						// close the sliding item
						slidingItem.close();
					}
				}]
			});
			// now present the alert on top of all other content
			alert.present();
		}

	}

	removeFavorite(slidingItem: ItemSliding, sessionData: any, title: string) {
		let alert = this.alertCtrl.create({
			title: title,
			message: 'Would you like to remove this session from your favorites?',
			buttons: [
				{
					text: 'Cancel',
					handler: () => {
						// they clicked the cancel button, do not remove the session
						// close the sliding item and hide the option buttons
						slidingItem.close();
					}
				},
				{
					text: 'Remove',
					handler: () => {
						// they want to remove this session from their favorites
						this.userData.removeFavorite(sessionData.id);
						this.doRefresh();

						// close the sliding item and hide the option buttons
						slidingItem.close();
					}
				}
			]
		});
		// now present the alert on top of all other content
		alert.present();
	}
	
	shareSocial(network: string, fab: FabContainer) {
 	  this.socialSharing.shareWithOptions({
			 message: "Attending the ANMS Conference",
			 subject: "Shared",
			 url: "http://www.motilitysociety.org/",
			 chooserTitle: "ANMS Share"
	  }).then(() => {
		  	console.log('Shared!');
		  	fab.close();
	  }).catch((err) => {
		  	console.log('Oops, something went wrong:', err);
		  	fab.close();
	  });
	}
	
	doRefresh(refresher?: Refresher) {
		// Close any open sliding items when the schedule updates
		this.scheduleList && this.scheduleList.closeSlidingItems();

		this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
			//console.log('here: ' + JSON.stringify(data));
			if( data !== null ) {
				this.dayIndex = data.currentDayIndx;
				this.dayIndexDay = data.dayIndexDay;
				this.shownSessions = data.shownSessions;
				this.groups = data.groups;
				this.content.scrollToTop();
			}

			if( refresher ) {
				refresher.complete();
			}
		});
	}
}
