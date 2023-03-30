import { Component } from '@angular/core';

import { App, NavController, ModalController, ViewController } from 'ionic-angular';


@Component({
	template: `
    <ion-list>
      <button ion-item (click)="close('http://motilitysociety.org')">ANMS Site</button>
		<button ion-item (click)="close('http://motilitysociety.org/page.php?id=382')">Journal</button>
		<button ion-item (click)="close('http://motilitysociety.org/page.php?id=312')">Information</button>
      <button ion-item (click)="contact()">Contact</button>
    </ion-list>
  `
})
export class PopoverPage {

	constructor(
		public viewCtrl: ViewController,
		public navCtrl: NavController,
		public app: App,
		public modalCtrl: ModalController
	) { }

	contact() {
		this.app.getRootNav().push('SupportPage');
		this.viewCtrl.dismiss();
	}

	close(url: string) {
		window.open(url, '_system');
		this.viewCtrl.dismiss();
	}
}