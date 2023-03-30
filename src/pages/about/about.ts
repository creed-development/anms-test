import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../about-popover/about-popover';
import { ViewController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
export class AboutPage {
	alertMessage: String;

	constructor(
		public popoverCtrl: PopoverController,
		public userData: UserData,
		public viewCtrl: ViewController
	) {
		this.fetchAlerts();

	}

	fetchAlerts() {
		this.userData.getAlerts().subscribe((data: any) => {
			console.log("Success fetching alerts");
			this.alertMessage = data.alert;
		}, (error: any) => {
			console.log('failed:' + error);
		});
	}

	presentPopover(event: Event) {
		let popover = this.popoverCtrl.create(PopoverPage);
		popover.present({ ev: event });
	}

	close(url: string) {
		window.open(url, '_system');
		//this.viewCtrl.dismiss();
	}

}
