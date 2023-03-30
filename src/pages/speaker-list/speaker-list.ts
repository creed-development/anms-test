import { Component } from '@angular/core';

import { AlertController, ActionSheet, ActionSheetController, Config, NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

import { ConferenceData } from '../../providers/conference-data';

import { SessionDetailPage } from '../session-detail/session-detail';
import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';

@Component({
	selector: 'page-speaker-list',
	templateUrl: 'speaker-list.html'
})
export class SpeakerListPage {
	actionSheet: ActionSheet;
	speakers: any[] = [];

	constructor(
		public actionSheetCtrl: ActionSheetController,
		public navCtrl: NavController,
		public confData: ConferenceData,
		public config: Config,
		public inAppBrowser: InAppBrowser,
		public socialSharing: SocialSharing,
		public alertCtrl: AlertController
	) { }

	ionViewDidLoad() {
		this.confData.getSpeakers().subscribe((speakers: any[]) => {
			this.speakers = speakers;
		});
	}

	goToSessionDetail(session: any) {
		this.navCtrl.push(SessionDetailPage, {
			name: session.name,
			session: session
		});
	}

	goToSpeakerDetail(currentSpeaker: any) {
		this.navCtrl.push(SpeakerDetailPage, {
			speaker: currentSpeaker,
			name: this.confData.getSpeakerNameFull(currentSpeaker)
		});
	}

	goToSpeakerTwitter(speaker: any) {
		this.inAppBrowser.create('https://twitter.com/' + speaker.twitter, '_blank');
		//window.open('https://twitter.com/' + speaker.twitter, '_blank');
	}

	openSpeakerShare(speaker: any) {
		let actionSheet = this.actionSheetCtrl.create({
			title: 'Share ' + this.confData.getSpeakerNameFull(speaker),
			buttons: [
/*
				{
					text: 'Copy Speaker Info',
					handler: () => {
						console.log('Copy speaker detail: ' + this.confData.getSpeakerNameFull(speaker);
						this.clipboard.copy(this.confData.getSpeakerNameFull(speaker) + 
							(speaker.email ? ", " + speaker.email : "") + 
							(speaker.phone ? ", " + speaker.phone : "") );
					}
				},
*/
				{
					text: 'Share via ...',
					handler: () => {
						this.shareSocial("Speaker " + this.confData.getSpeakerNameFull(speaker) + " session.");
					}
				},
				{
					text: 'Cancel',
					role: 'cancel'
				}
			]
		});

		actionSheet.present();
	}

	shareSocial(shareMsg:string) {
 	  this.socialSharing.shareWithOptions({
			 message: shareMsg,
			 subject: "Shared",
			 chooserTitle: "ANMS Share"
	  }).then(() => {
		  	console.log('Shared!');
	  }).catch((err) => {
		  	console.log('Oops, something went wrong:', err);
	  });
	}

	openContact(speaker: any) {
		let mode = this.config.get('mode');
		let contactButtons: Array<any> = new Array<any>();
		
		if( speaker.email ) {			
			let emailButton = {
				text: 'Email (' + speaker.email + ')',
				icon: mode !== 'ios' ? 'mail' : null,
				handler: () => {
					window.open('mailto:' + speaker.email);
				}
			};

			contactButtons.push(emailButton);
		}
		
		if( speaker.phone ) {			
			let phoneButton = {
				text: 'Call (' + speaker.phone + ')',
				icon: mode !== 'ios' ? 'call' : null,
				handler: () => {
					window.open('tel:' + speaker.phone);
				}
			};

			contactButtons.push(phoneButton);
		}


		let actionSheet = this.actionSheetCtrl.create({
			title: 'Contact ' + this.confData.getSpeakerNameFull(speaker),
			buttons: contactButtons,
		});

		actionSheet.present();
	}
}
