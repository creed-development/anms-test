import { Component } from '@angular/core';
import { NavController, LoadingController, ViewController, Platform, AlertController } from 'ionic-angular';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { FileOpener } from '@ionic-native/file-opener';
import { SessionDetailPage } from '../session-detail/session-detail';

@Component({
	selector: 'page-poster',
	templateUrl: 'poster.html'
})
export class PosterPage {
 	posters: any[] = [];

	constructor(
		public navCtrl: NavController,
		public loadingCtrl: LoadingController,
		public viewCtrl: ViewController,
		public transfer: Transfer,
		public confData: ConferenceData,
		public userData: UserData,
		public alertCtrl: AlertController,
		public file: File,
		public platform: Platform,
		public fileOpener: FileOpener
	) {

	}

	ionViewDidLoad() {
		this.confData.getPosters().subscribe((posters: any[]) => {
			this.posters = posters;
		});
	}


	close(url: string) {
		window.open(url, '_blank');
		this.viewCtrl.dismiss();
	}

	previewPDF(pdfURL: string, fileName: string) {
		//show loading screen
  	 	let loading = this.loadingCtrl.create({content: "Loading Content"});
  	 	loading.present();
		
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

		console.log('tokenReq: ' + options.headers["AUTH-TOKEN"]);
		console.log('targetPath: ' + targetPath);
		console.log('pdfURL: ' + pdfURL);
		console.log('fileName: ' + fileName);
		
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

	goToSessionDetail(sessionId: any) {
		let session:any = this.confData.getSession(sessionId);
		if( session ) {
			if( session ) {
				this.navCtrl.push(SessionDetailPage, {
					name: session.name,
					session: session
				});
			};
		}
	}

}
