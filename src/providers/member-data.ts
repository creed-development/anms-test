import { Injectable } from '@angular/core';
import { SERVER_URL } from './config';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
//import 'rxjs/add/observable/catch';


@Injectable()
export class MemberData {
	items: any;

	constructor(
		public http: Http
	) { }

	handleError(error: any) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}

	processItems(data: any) {
		this.items = data.json();
		return this.items;
	}

	getItems(token: string): Observable<any> {
		if (this.items) {
			return Observable.of(this.items);
		} else {
			console.log('TokenMD:' + token);

			let headers = new Headers({ 'Content-Type': 'application/json', 'AUTH-TOKEN': token });
			let options = new RequestOptions({ headers: headers });
			return this.http.get(SERVER_URL + '/content/index.php', options)
				.map(this.processItems, this);
			//.catch(this.handleError);
		}
	}

	sendContent(emailAddress: string, fileName: string, token: string) {
		let body = { 'email': emailAddress, 'fileKey': fileName };
		let headers = new Headers({ 'Content-Type': 'application/json', 'AUTH-TOKEN': token });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(SERVER_URL + '/email/index.php', body, options)
			.map(res => res.json());
		//.catch(this.handleError);
	}

}
