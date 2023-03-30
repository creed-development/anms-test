import { Component } from '@angular/core';
import { LoadingController, Platform, AlertController, NavParams, NavController } from 'ionic-angular';
import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';

import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { UserData } from '../../providers/user-data';
import { File } from '@ionic-native/file';
import { ConferenceData } from '../../providers/conference-data';

@Component({
	selector: 'page-session-detail',
	templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
	session: any;

	constructor(
		public loadingCtrl: LoadingController,
		public navParams: NavParams,
		public navCtrl: NavController,
		public userData: UserData,
		public confData: ConferenceData,
		public alertCtrl: AlertController,
		public transfer: Transfer,
		public platform: Platform,
		public fileOpener: FileOpener,
		public file: File
	) {
		this.session = navParams.data.session;
	}
	
	
	goToSpeakerDetail(currentSpeaker: any) {
		this.navCtrl.push(SpeakerDetailPage, {
			speaker: currentSpeaker,
			name: this.confData.getSpeakerNameFull(currentSpeaker)
		});
	}

	openPDF(resource: any) {
		//show loading screen
  	 	let loading = this.loadingCtrl.create({content: "Loading Content"});
  	 	loading.present();

		let fileName: string = resource.name;
		let pdfURL: string = resource.url;
		
		//let targetPath: string = this.file.dataDirectory + fileName;
		let targetPath: string = this.file.externalDataDirectory + fileName; //Android default
		if (this.platform.is('ios')) {
			targetPath = this.file.documentsDirectory + fileName;
		}
		
		const options = {
			headers: {
				"AUTH-TOKEN": this.userData.getLoginToken()
			},
			mimeType: "application/pdf"
		};

		const fileTransfer: TransferObject = this.transfer.create();
		fileTransfer.download(pdfURL, targetPath, true, options).then((entry) => {
			// Success!
			this.fileOpener.open(targetPath, 'application/pdf').then(() => {
					console.log('File is opened: ' + targetPath);
					loading.dismiss();
				}
			).catch(e => {
					console.log('Error openening file: ' + targetPath, e)
					loading.dismiss();
				}
			);

		}, function(err) {
			console.log('error... ' + JSON.stringify(err, null, 2));
			loading.dismiss();
		});
	}

}
