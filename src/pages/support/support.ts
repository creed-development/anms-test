import { Component } from '@angular/core';

import { NavController, Config } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
	selector: 'page-support',
	templateUrl: 'support.html'
})
export class SupportPage {

	submitted: boolean = false;
	supportMessage: string;

	constructor(
		public navCtrl: NavController,
		public inAppBrowser: InAppBrowser,
		public config: Config
	) {
	}

	open(url: string) {
		let mode = this.config.get('mode');
		if (url.startsWith('maps') && mode !== 'ios') {
			url = url.replace('maps://?ll=', 'geo:?daddr=');
		}

		this.inAppBrowser.create(url, '_system');
	}

}
