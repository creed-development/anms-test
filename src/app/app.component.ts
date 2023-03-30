import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { TabsPage } from '../pages/tabs/tabs';
import { SchedulePage } from '../pages/schedule/schedule';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { SupportPage } from '../pages/support/support';
import { MemberPage } from '../pages/member/member';
import { PostingsPage } from '../pages/postings/postings';
import { PosterPage } from '../pages/poster/poster';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

export interface PageInterface {
	title: string;
	name: string;
	component: any;
	icon: string;
	logsOut?: boolean;
	link?: string;
	index?: number;
	tabName?: string;
	tabComponent?: any;
	content?: any;
}

@Component({
	templateUrl: 'app.template.html'
})
export class ConferenceApp {
	// the root nav is a child of the root app component
	// @ViewChild(Nav) gets a reference to the app's root nav
	@ViewChild(Nav) nav: Nav;

	// List of pages that can be navigated to from the left menu
	// the left menu only works after login
	// the login page disables the left menu
	conferencePages: PageInterface[] = [
		{ title: 'Schedule', name: 'Tabs', component: TabsPage, tabComponent: SchedulePage, index: 0, icon: 'calendar' },
		{ title: 'Speakers', name: 'Tabs', component: TabsPage, tabComponent: SpeakerListPage, index: 1, icon: 'contacts' },
		{ title: 'Posters', name: 'Tabs', component: PosterPage, icon: 'person' },
		{ title: 'Map', name: 'Tabs', component: TabsPage, tabComponent: MapPage, index: 2, icon: 'map' },
		{ title: 'Venue', name: 'Tabs', component: MemberPage, icon: 'locate', link: 'https://motilitysociety.org/meeting/hotel' },		
		{ title: 'Exhibitors', name: 'Tabs', component: MemberPage, icon: 'photos', link: 'https://motilitysociety.org/meeting/exhibitors' },
		{ title: 'Sponsors', name: 'Tabs', component: MemberPage, icon: 'happy', link: 'https://motilitysociety.org/meeting/sponsors' }
	];
	loggedInPages: PageInterface[] = [
		{ title: 'Contact', name: 'SupportPage', component: SupportPage, icon: 'help' },
		{ title: 'About', name: 'AboutPage', component: AboutPage, icon: 'information-circle' },
		{ title: 'Member', name: 'MemberPage', component: MemberPage, icon: 'person' },
		{ title: 'Logout', name: 'Tabs', component: TabsPage, icon: 'log-out', logsOut: true }
	];
	loggedOutPages: PageInterface[] = [
		{ title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
		{ title: 'Contact', name: 'SupportPage', component: SupportPage, icon: 'help' },
		{ title: 'About', name: 'AboutPage', component: AboutPage, icon: 'information-circle' }
	];

	rootPage: any;
	postings: PageInterface[] = [];

	constructor(
		public events: Events,
		public userData: UserData,
		public menu: MenuController,
		public platform: Platform,
		public confData: ConferenceData,
		public splashScreen: SplashScreen,
		public statusBar: StatusBar
	) {
		this.rootPage = LoginPage; //starting page
		this.platformReady();

		//load any custom postings
		this.loadPostings();

		// load the conference data
		this.confData.load();

		// decide which menu items should be hidden by current login status
		this.showMenu(this.userData.hasLoggedIn());

		this.listenToLoginEvents();
	}

	loadPostings() {
		this.userData.getPostings().subscribe((data: any) => {
			console.log("Success fetching postings");
			data.forEach((posting: any) => {
				this.postings.push( { title: posting.title, content: posting.content, name: posting.title, component: PostingsPage, icon: 'disc' } );
			});
		}, (error: any) => {
			console.log('failed:' + error);
		});
	}

	openPage(page: PageInterface) {
		// the nav component was found using @ViewChild(Nav)
		// reset the nav to remove previous pages and only have this page
		// we wouldn't want the back button to show in this scenario
		if (page.index) {
			this.nav.setRoot(page.component, { tabIndex: page.index });
		} else {
			if ( !page.link ) {
				//if no link associated, do this
				this.nav.setRoot(page.component)
					.then(() => {
						let view = this.nav.getActive();
						//special case for all PostingsPage instances
						if( view.instance instanceof PostingsPage ) {
							view.instance.title = page.title;
							view.instance.content = page.content;
						}
					})
					.catch((v) => {
						console.log("Didn't set nav root: " + v);
					});
			}
		}


		//handle pages that a just links
		if (page.link) {
			window.open(page.link, '_system');
		}

		if (page.logsOut === true) {
			this.userData.logout();
		}
	}

	listenToLoginEvents() {
		this.events.subscribe('user:login', () => {
			this.showMenu(true);
		});

		this.events.subscribe('user:logout', () => {
			this.showMenu(false);
			this.nav.setRoot(LoginPage); //send the user to a basic page
		});
	}

	showMenu(loggedIn: boolean) {
		this.menu.enable(loggedIn, 'loggedInMenu');
		this.menu.enable(!loggedIn, 'loggedOutMenu');
	}

	platformReady() {
		// Call any initial plugins when ready
		this.platform.ready().then(() => {
			console.log("...hiding splash");
			this.splashScreen.hide();
			
			//ensure the StatusBar at the top matches the apps color
			this.statusBar.overlaysWebView(false);
			this.statusBar.backgroundColorByHexString('#12816f'); //should be the 'primary' color
		});
	}

	isActive(page: PageInterface) {
		//let childNav = this.nav.getActiveChildNav();
		let childNav = this.nav.getActiveChildNavs()[0];

		// Tabs are a special case because they have their own navigation
		if (childNav) {
			if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
				return 'primary';
			}
			return;
		}

		if (this.nav.getActive() && this.nav.getActive().name === page.name) {
			return 'primary';
		}

		return;
	}
}
