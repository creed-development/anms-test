import { Component } from '@angular/core';
import { LoadingController, ViewController, Platform, AlertController } from 'ionic-angular';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { MemberData } from '../../providers/member-data';
import { UserData } from '../../providers/user-data';
import { FileOpener } from '@ionic-native/file-opener';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailValidator} from  '../../validators/email-validator';

@Component({
	selector: 'page-member',
	templateUrl: 'member.html'
})
export class MemberPage {
	content: any = [];
	email: { emailAddress?: string } = {};
	emailFormGrp: FormGroup;
 
	constructor(
		public loadingCtrl: LoadingController,
		public viewCtrl: ViewController,
		public transfer: Transfer,
		public memberData: MemberData,
		public userData: UserData,
		public alertCtrl: AlertController,
		public file: File,
		public platform: Platform,
		public formBuilder: FormBuilder,
		public fileOpener: FileOpener
	) {

  	 	this.emailFormGrp = formBuilder.group({
		 		email: ['', Validators.compose([Validators.required, EmailValidator.checkEmail])]
	 		}
		);
		
		if( userData.hasLoggedIn() ) {
			console.log('TokenMD:' + userData.getLoginToken());

			//load our data
			this.memberData.getItems(userData.getLoginToken()).subscribe((data: any) => {
				this.content = data;
			}, (error: any) => {
				console.log('Warning:' + error);
			});
		}

	}

	selectedItems() {
		var cnt = 0;
		for (let item of this.content) {
			if (item.checked === true) {
				cnt++;
			}
		}
		return cnt;
	}

	close(url: string) {
		window.open(url, '_blank');
		this.viewCtrl.dismiss();
	}


	emailPatient(emailForm: any) {
		//esnure the email address given is valid
		if( this.emailFormGrp.dirty && !this.emailFormGrp.valid) {
			let alert = this.alertCtrl.create({
				subTitle: "Invalid email address",
				buttons: ['OK']
			});
			alert.present();
			
			return;
		}
		
		let fileNames: string[] = new Array<string>();
		for (let item of this.content) {
			if (item.checked === true) {
				fileNames.push(item.filename);
			}
		}

		if (fileNames.length > 0) {
			var isSuccess = true;

			let emailIn = this.email.emailAddress; //TODO for some reason, this loses scope in the below Promise with fat arrow??
			//send 1 request per file
			for (let item of fileNames) {
						 
				if( this.userData.hasLoggedIn() ) {
					console.log('TokenMD:' + this.userData.getLoginToken() );
					console.log('email:' + emailIn);

					//load our data
					this.memberData.sendContent(emailIn, item, this.userData.getLoginToken()).subscribe((data: any) => {
						console.log('Success, Data:' + data);
					}, (error: any) => {
						isSuccess = false;
						console.log('failed:' + error);
					});
				}

			}

			//message fields
			let txtTitle: string = 'Success';
			let txtSubTitle: string = 'Your request has been completed.';

			//show the results to the user
			if (isSuccess) {
				//clear all inputs
				for (let item of this.content) {
					item.checked = false;
				}
				this.email.emailAddress = '';
			}
			else {
				txtTitle = 'Error';
				txtSubTitle = 'An error occurred, please try again later.';
			}


			// create an alert instance
			let alert = this.alertCtrl.create({
				title: txtTitle,
				subTitle: txtSubTitle,
				buttons: ['OK']
			});
			alert.present();
		}

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

}
