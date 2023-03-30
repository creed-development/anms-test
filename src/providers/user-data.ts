import { Injectable } from '@angular/core';
import { SERVER_URL } from './config';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class UserData {
	_favorites: string[] = [];
	private authLevel: string = null;	//MEMBER CONFERENCE
	private loginToken: string = null;
	private USERNAME_TOKEN: string = 'username';
	private PASSWORD_TOKEN: string = 'password';
	private FAVORITES_TOKEN: string = 'fav-anms';


	constructor(
		public events: Events,
		public storage: Storage,
		public http: Http
	) {
	
		this.storage.get(this.FAVORITES_TOKEN).then((value) => {
			if( value !== null )
				this._favorites = value;
		});

	}

	getLoginToken(): string {
		return this.loginToken;
	};

	hasFavorite(sessionId: string): boolean {
		return (this._favorites.indexOf(sessionId) > -1);
	};

	addFavorite(sessionId: string): void {
		this._favorites.push(sessionId);
		this.storage.set(this.FAVORITES_TOKEN, this._favorites);
	};

	removeFavorite(sessionId: string): void {
		let index = this._favorites.indexOf(sessionId);
		if (index > -1) {
			this._favorites.splice(index, 1);
			this.storage.set(this.FAVORITES_TOKEN, this._favorites);
		}
	};

	login(username: string, password: string): Observable<any> {
		let body = { 'username': username, 'password': password };
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(SERVER_URL + '/login/index.php', body, options)
			.map(res => res.json());
	}

	getAlerts(): Observable<any> {
		console.log('Fetching latest alerts');
		let headers = new Headers({ 'Content-Type': 'application/json'});
		let options = new RequestOptions({ headers: headers });
		return this.http.get(SERVER_URL + '/alert.php', options)
			.map(res => res.json());
		//.catch(this.handleError);
	}

	getPostings(): Observable<any> {
		console.log('Fetching latest postings');
		let headers = new Headers({ 'Content-Type': 'application/json'});
		let options = new RequestOptions({ headers: headers });
		return this.http.get(SERVER_URL + '/pages.php', options)
			.map(res => res.json());
		//.catch(this.handleError);
	}

	setLoggedIn(username: string, password: string, token: string, authorization: string): void {
		this.loginToken = token;
		this.authLevel = authorization;
		this.setUsername(username);
		this.setPassword(password);
		this.events.publish('user:login');
	};

	signup(username: string): void {
		this.setUsername(username);
		this.events.publish('user:signup');
	};

	logout(): void {
		this.loginToken = null;
		this.events.publish('user:logout');
	};

	private setUsername(username: string): void {
		this.storage.set(this.USERNAME_TOKEN, username);
	};

	private setPassword(password: string): void {
		this.storage.set(this.PASSWORD_TOKEN, password);
	};

	getUsername(): Promise<string> {
		return this.storage.get(this.USERNAME_TOKEN).then((value) => {
			return value;
		});
	};

	getPassword(): Promise<string> {
		return this.storage.get(this.PASSWORD_TOKEN).then((value) => {
			return value;
		});
	};

	hasLoggedIn(): boolean {
		return this.loginToken !== null;
	};

	hasConferenceAccess(): boolean {
		return this.authLevel && this.authLevel.indexOf("CONFERENCE") >= 0;
	};
				
	hasMemberAccess(): boolean {
		return this.authLevel && this.authLevel.indexOf("MEMBER") >= 0;
	};

}
