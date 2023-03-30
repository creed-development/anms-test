import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SessionDetailPage } from '../session-detail/session-detail';


@Component({
	selector: 'page-speaker-detail',
	templateUrl: 'speaker-detail.html'
})
export class SpeakerDetailPage {
	speaker: any;

	constructor(
		public navCtrl: NavController,
		public inAppBrowser: InAppBrowser,
		public navParams: NavParams) {
		this.speaker = this.navParams.data.speaker;
	}

	goToSessionDetail(session: any) {
		this.navCtrl.push(SessionDetailPage, {
			name: session.name,
			session: session
		});
	}

	goToSpeakerTwitter(speaker: any) {
		this.inAppBrowser.create('https://twitter.com/' + speaker.twitter, '_blank');
		//window.open('https://twitter.com/' + speaker.twitter, '_blank');
	}

	emailSpeaker(speaker: any) {
		//this.inAppBrowser.create('mailto:' + speaker.email, '_blank');
		window.open('mailto:' + speaker.email);
	}

}
