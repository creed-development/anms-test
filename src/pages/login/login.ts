import { Component, ElementRef, Renderer } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { TabsPage } from '../tabs/tabs';
import { AboutPage } from '../about/about';


@Component({
	selector: 'page-user',
	templateUrl: 'login.html'
})
export class LoginPage {
	login: { username?: string, password?: string } = {};
	submitted = false;
	loginError = false;

	constructor(
		public navCtrl: NavController,
		public userData: UserData,
		private renderer: Renderer,
		private elementRef: ElementRef)
	{ }

	ionViewDidLoad() {
		this.userData.getUsername().then((value: any) => {
			if( value == null ) { //null or undefined
				let element = this.elementRef.nativeElement.querySelector("input[name='username']"); //find the username input element
				setTimeout(() => {
					this.renderer.invokeElementMethod(element, 'focus', []);
				}, 200);
			}
			else {
				this.login.username = value;
			}

			this.userData.getPassword().then((value: any) => {
				if( value == null ) { //null or undefines
					if( this.login.username ) {  //only set focus of password if the username is set already
						let element = this.elementRef.nativeElement.querySelector("input[name='password']"); //find the password input element
						setTimeout(() => {
							this.renderer.invokeElementMethod(element, 'focus', []);
						}, 200);
					}
				}
				else {
					this.login.password = value;
				}
			}, (error: any) => {
				console.log('failed:' + error);
			});

		}, (error: any) => {
			console.log('failed:' + error);
		});

	}

	onLogin(form: NgForm) {
		this.submitted = true;
		this.loginError = false;

		if (form.valid) {
			this.userData.login(this.login.username, this.login.password).subscribe((data: any) => {
				console.log("Success login, token: " + data.token + ",  auth: " + data.authorization);
				this.userData.setLoggedIn(this.login.username, this.login.password, data.token, data.authorization); //save the auth token for later

				if( this.userData.hasConferenceAccess() ) {
					this.navCtrl.push(TabsPage);
				}
				else {
					this.navCtrl.setRoot(AboutPage); //no access to conference
				}
			}, (error: any) => {
				console.log('failed:' + error);
				this.loginError = true;
			});
		}
	}

	close(url: string) {
		window.open(url, '_system');
	}

}
