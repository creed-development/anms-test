import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Transfer } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { SocialSharing } from '@ionic-native/social-sharing';
import { StatusBar } from '@ionic-native/status-bar';
import { FileOpener } from '@ionic-native/file-opener';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs/tabs';
import { SupportPage } from '../pages/support/support';
import { MemberPage } from '../pages/member/member';
import { PostingsPage } from '../pages/postings/postings';
import { PosterPage } from '../pages/poster/poster';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { MemberData } from '../providers/member-data';
import { Ng2ImgFallbackModule } from 'ng2-img-fallback';


@NgModule({
	declarations: [
		ConferenceApp,
		AboutPage,
		LoginPage,
		MapPage,
		PopoverPage,
		SchedulePage,
		ScheduleFilterPage,
		SessionDetailPage,
		SpeakerDetailPage,
		SpeakerListPage,
		TabsPage,
		SupportPage,
		MemberPage,
		PostingsPage,
		PosterPage
	],
	imports: [
		Ng2ImgFallbackModule,
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(ConferenceApp, {}, {
			links: [
				{ component: TabsPage, name: 'TabsPage', segment: 'tabs' },
				{ component: SchedulePage, name: 'Schedule', segment: 'schedule' },
				{ component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:name' },
				{ component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
				{ component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
				{ component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:name' },
				{ component: MapPage, name: 'Map', segment: 'map' },
				{ component: AboutPage, name: 'AboutPage', segment: 'about' },
				{ component: SupportPage, name: 'SupportPage', segment: 'support' },
				{ component: LoginPage, name: 'LoginPage', segment: 'login' },
				{ component: MemberPage, name: 'MemberPage', segment: 'member' },
				{ component: PostingsPage, name: 'PostingsPage', segment: 'postings' },
				{ component: PosterPage, name: 'PosterPage', segment: 'poster' }
			]
		}),
		IonicStorageModule.forRoot()
	],
	bootstrap: [IonicApp],
	entryComponents: [
		ConferenceApp,
		AboutPage,
		LoginPage,
		MapPage,
		PopoverPage,
		SchedulePage,
		ScheduleFilterPage,
		SessionDetailPage,
		SpeakerDetailPage,
		SpeakerListPage,
		TabsPage,
		SupportPage,
		MemberPage,
		PostingsPage,
		PosterPage
	],
	providers: [
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		ConferenceData,
		UserData,
		MemberData,
		InAppBrowser,
		SplashScreen,
		Transfer,
		File,
		SocialSharing,
		StatusBar,
		FileOpener
	]
})
export class AppModule { }
