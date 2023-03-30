webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPage = (function () {
    function AboutPage(popoverCtrl, userData, viewCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.userData = userData;
        this.viewCtrl = viewCtrl;
        this.fetchAlerts();
    }
    AboutPage.prototype.fetchAlerts = function () {
        var _this = this;
        this.userData.getAlerts().subscribe(function (data) {
            console.log("Success fetching alerts");
            _this.alertMessage = data.alert;
        }, function (error) {
            console.log('failed:' + error);
        });
    };
    AboutPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__["a" /* PopoverPage */]);
        popover.present({ ev: event });
    };
    AboutPage.prototype.close = function (url) {
        window.open(url, '_system');
        //this.viewCtrl.dismiss();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>About</ion-title>\n\n    \n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="about-header">\n\n    <img src="assets/img/anms-logo.png" alt="ANMS logo">\n\n  </div>\n\n  <div padding class="about-info">\n\n    <h4>About the ANMS</h4>\n\n\n\n    <p ion-text [hidden]="alertMessage == null" padding-left>      \n\n      <span class="alert-msg" [innerHTML]=alertMessage></span>\n\n    </p>\n\n    <p>\n\n      The American Neurogastroenterology and Motility Society (ANMS) is an organization established in \n\n      1980 dedicated to the study of neurogastroenterology and gastrointestinal motility and functional GI\n\n      disorders.\n\n    </p>\n\n\n\n    \n\n	<ion-row responsive-sm>\n\n		<ion-col>\n\n			<button ion-button (click)="close(\'https://motilitysociety.org/application.php\');" type="submit" block>Join</button>\n\n		</ion-col>\n\n		<ion-col>\n\n			<button ion-button (click)="close(\'https://motilitysociety.org/donation_form.php\');" color="primary" block>Donate</button>\n\n		</ion-col>\n\n	</ion-row>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_URL; });
function isLocalHost() {
    // Rudimentary check to see if we are running local
    return window.location.hostname.indexOf('localhost') > 0;
}
var SERVER_URL = isLocalHost() ? "/" : "https://motilitysociety.org/mobile";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speaker_list_speaker_list__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__["a" /* SchedulePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__speaker_list_speaker_list__["a" /* SpeakerListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex">\n\n  <ion-tab [root]="tab1Root" tabTitle="Schedule" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Speakers" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Map" tabIcon="map"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_conference_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = (function () {
    function MapPage(confData, platform) {
        this.confData = confData;
        this.platform = platform;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getMap().subscribe(function (mapData) {
            var mapEle = _this.mapElement.nativeElement;
            var myLatLng = mapData.find(function (d) { return d.center; });
            var map = new google.maps.Map(mapEle, {
                center: { lat: Number(myLatLng.lat), lng: Number(myLatLng.lng) },
                zoom: 16
            });
            mapData.forEach(function (markerData) {
                var infoWindow = new google.maps.InfoWindow({
                    content: "<h5>" + markerData.name + "</h5>"
                });
                var myLatLng = { lat: Number(markerData.lat), lng: Number(markerData.lng) };
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: markerData.name
                });
                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                });
            });
            google.maps.event.addListenerOnce(map, 'idle', function () {
                mapEle.classList.add('show-map');
            });
        });
    };
    return MapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mapCanvas'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MapPage.prototype, "mapElement", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-map',template:/*ion-inline-start:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/map/map.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Map</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="map-page">\n\n  <div style="height: 100%; width: 100%" #mapCanvas id="map_canvas"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/map/map.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Platform */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_detail_session_detail__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedule_filter_schedule_filter__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SchedulePage = (function () {
    function SchedulePage(alertCtrl, app, loadingCtrl, modalCtrl, navCtrl, toastCtrl, confData, userData, socialSharing) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.confData = confData;
        this.userData = userData;
        this.socialSharing = socialSharing;
        this.dayIndex = 0;
        this.dayIndexDay = '';
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Schedule');
        console.log('aa');
        this.doRefresh();
    };
    SchedulePage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], this.excludeTracks);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeTracks = data;
                _this.doRefresh();
            }
        });
    };
    SchedulePage.prototype.changeDayIndex = function () {
        if ((this.dayIndex + 1) >= this.confData.totalDays) {
            this.dayIndex = 0;
        }
        else {
            this.dayIndex++;
        }
        //refresh everything
        this.doRefresh();
    };
    SchedulePage.prototype.goToSessionDetail = function (sessionData) {
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__session_detail_session_detail__["a" /* SessionDetailPage */], {
            name: sessionData.name,
            session: sessionData
        });
    };
    SchedulePage.prototype.addFavorite = function (slidingItem, sessionData) {
        if (this.userData.hasFavorite(sessionData.id)) {
            // woops, they already favorited it! What shall we do!?
            // prompt them to remove it
            this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
        }
        else {
            // remember this session as a user favorite
            this.userData.addFavorite(sessionData.id);
            // create an alert instance
            var alert_1 = this.alertCtrl.create({
                title: 'Favorite Added',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            // close the sliding item
                            slidingItem.close();
                        }
                    }]
            });
            // now present the alert on top of all other content
            alert_1.present();
        }
    };
    SchedulePage.prototype.removeFavorite = function (slidingItem, sessionData, title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: 'Would you like to remove this session from your favorites?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        // they clicked the cancel button, do not remove the session
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        // they want to remove this session from their favorites
                        _this.userData.removeFavorite(sessionData.id);
                        _this.doRefresh();
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                }
            ]
        });
        // now present the alert on top of all other content
        alert.present();
    };
    SchedulePage.prototype.shareSocial = function (network, fab) {
        this.socialSharing.shareWithOptions({
            message: "Attending the ANMS Conference",
            subject: "Shared",
            url: "http://www.motilitysociety.org/",
            chooserTitle: "ANMS Share"
        }).then(function () {
            console.log('Shared!');
            fab.close();
        }).catch(function (err) {
            console.log('Oops, something went wrong:', err);
            fab.close();
        });
    };
    SchedulePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        // Close any open sliding items when the schedule updates
        this.scheduleList && this.scheduleList.closeSlidingItems();
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            //console.log('here: ' + JSON.stringify(data));
            if (data !== null) {
                _this.dayIndex = data.currentDayIndx;
                _this.dayIndexDay = data.dayIndexDay;
                _this.shownSessions = data.shownSessions;
                _this.groups = data.groups;
                _this.content.scrollToTop();
            }
            if (refresher) {
                refresher.complete();
            }
        });
    };
    return SchedulePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scheduleList', { read: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* List */] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* List */])
], SchedulePage.prototype, "scheduleList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
], SchedulePage.prototype, "content", void 0);
SchedulePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-schedule',template:/*ion-inline-start:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/schedule/schedule.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n\n\n    <ion-segment [(ngModel)]="segment" (ionChange)="doRefresh()">\n\n      <ion-segment-button value="all">\n\n        All\n\n      </ion-segment-button>\n\n      <ion-segment-button value="favorites">\n\n        Favorites\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentFilter()">\n\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar color="primary"\n\n                   [(ngModel)]="queryText"\n\n                   (ionInput)="doRefresh()"\n\n                   placeholder="Search">\n\n    </ion-searchbar>    \n\n    <ion-buttons [hidden]="confData.totalDays <= 1" end>\n\n	    <button ion-button icon-only (click)="changeDayIndex()">\n\n	      Day {{dayIndex+1}} of {{confData.totalDays}} ({{dayIndexDay}})\n\n	    </button>\n\n	</ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list #scheduleList>\n\n\n\n    <ion-item-group *ngFor="let group of groups" [hidden]="group.hide">\n\n\n\n      <ion-item-divider sticky class="group-row">\n\n        <ion-label>\n\n          <ion-row class="group-row-bold">\n\n          	{{group.time}} &mdash; {{group.endTime}}\n\n          </ion-row>\n\n          <ion-row class="group-row-bold" text-wrap>\n\n          	{{group.name}} &bull; {{group.location}}\n\n          </ion-row>\n\n          <ion-row *ngIf="group.moderatorNames" text-wrap>\n\n          	Moderators: {{group.moderatorNames}}\n\n          </ion-row>\n\n        </ion-label>\n\n      </ion-item-divider>\n\n\n\n      <ion-item-sliding *ngFor="let session of group.sessions" #slidingItem [attr.track]="session.tracks[0] | lowercase" [hidden]="session.hide">\n\n\n\n        <button ion-item (click)="goToSessionDetail(session)" text-wrap>\n\n          <h3>{{session.name}}</h3>\n\n          <p>\n\n            {{session.timeStart}} &mdash; {{session.timeEnd}} ({{session.location}})\n\n          </p>\n\n          <p *ngFor="let speaker of session.speakers">\n\n            &bull; {{this.confData.getSpeakerNameFull(speaker)}}\n\n          </p>\n\n        </button>\n\n\n\n        <ion-item-options>\n\n          <button ion-button color="favorite" (click)="addFavorite(slidingItem, session)" *ngIf="segment === \'all\'">\n\n            Favorite\n\n          </button>\n\n          <button ion-button color="danger" (click)="removeFavorite(slidingItem, session, \'Remove Favorite\')" *ngIf="segment === \'favorites\'">\n\n            Remove\n\n          </button>\n\n        </ion-item-options>\n\n\n\n      </ion-item-sliding>\n\n\n\n    </ion-item-group>\n\n\n\n  </ion-list>\n\n\n\n  <ion-list-header [hidden]="shownSessions > 0 || !confData.hasConferenceData()">\n\n      No Sessions Found\n\n  </ion-list-header>\n\n\n\n  <ion-list-header [hidden]="confData.hasConferenceData()" text-wrap>\n\n      <ion-icon name="time"></ion-icon>\n\n      No conferences at this time, check back soon!\n\n  </ion-list-header>\n\n\n\n  <ion-fab bottom right #fab>\n\n    <button ion-fab (click)="shareSocial(\'Generic\', fab)"><ion-icon name="share"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/schedule/schedule.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__["a" /* ConferenceData */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
], SchedulePage);

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_detail_session_detail__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpeakerDetailPage = (function () {
    function SpeakerDetailPage(navCtrl, inAppBrowser, navParams) {
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
        this.navParams = navParams;
        this.speaker = this.navParams.data.speaker;
    }
    SpeakerDetailPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__session_detail_session_detail__["a" /* SessionDetailPage */], {
            name: session.name,
            session: session
        });
    };
    SpeakerDetailPage.prototype.goToSpeakerTwitter = function (speaker) {
        this.inAppBrowser.create('https://twitter.com/' + speaker.twitter, '_blank');
        //window.open('https://twitter.com/' + speaker.twitter, '_blank');
    };
    SpeakerDetailPage.prototype.emailSpeaker = function (speaker) {
        //this.inAppBrowser.create('mailto:' + speaker.email, '_blank');
        window.open('mailto:' + speaker.email);
    };
    return SpeakerDetailPage;
}());
SpeakerDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-speaker-detail',template:/*ion-inline-start:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/speaker-detail/speaker-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{speaker.name_first}} {{speaker.name_last}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="speaker-detail">\n\n\n\n  <div text-center>\n\n    <img [src]="speaker.profilePic" [alt]="speaker.name_last" src-fallback="assets/img/default-person.png"><br>\n\n\n\n    <button ion-button icon-only clear small color="twitter" (click)="goToSpeakerTwitter(speaker)" *ngIf="speaker.twitter">\n\n      <ion-icon name="logo-twitter"></ion-icon>\n\n    </button>\n\n    <button ion-button icon-only clear small (click)="emailSpeaker(speaker);" *ngIf="speaker.email">\n\n      <ion-icon name="mail"></ion-icon>\n\n    </button>\n\n  </div>\n\n\n\n  <p>{{speaker.about}}</p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/speaker-detail/speaker-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
], SpeakerDetailPage);

//# sourceMappingURL=speaker-detail.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_conference_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_detail_session_detail__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__speaker_detail_speaker_detail__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SpeakerListPage = (function () {
    function SpeakerListPage(actionSheetCtrl, navCtrl, confData, config, inAppBrowser, socialSharing, alertCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.confData = confData;
        this.config = config;
        this.inAppBrowser = inAppBrowser;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.speakers = [];
    }
    SpeakerListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getSpeakers().subscribe(function (speakers) {
            _this.speakers = speakers;
        });
    };
    SpeakerListPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__session_detail_session_detail__["a" /* SessionDetailPage */], {
            name: session.name,
            session: session
        });
    };
    SpeakerListPage.prototype.goToSpeakerDetail = function (currentSpeaker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], {
            speaker: currentSpeaker,
            name: this.confData.getSpeakerNameFull(currentSpeaker)
        });
    };
    SpeakerListPage.prototype.goToSpeakerTwitter = function (speaker) {
        this.inAppBrowser.create('https://twitter.com/' + speaker.twitter, '_blank');
        //window.open('https://twitter.com/' + speaker.twitter, '_blank');
    };
    SpeakerListPage.prototype.openSpeakerShare = function (speaker) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
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
                    handler: function () {
                        _this.shareSocial("Speaker " + _this.confData.getSpeakerNameFull(speaker) + " session.");
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage.prototype.shareSocial = function (shareMsg) {
        this.socialSharing.shareWithOptions({
            message: shareMsg,
            subject: "Shared",
            chooserTitle: "ANMS Share"
        }).then(function () {
            console.log('Shared!');
        }).catch(function (err) {
            console.log('Oops, something went wrong:', err);
        });
    };
    SpeakerListPage.prototype.openContact = function (speaker) {
        var mode = this.config.get('mode');
        var contactButtons = new Array();
        if (speaker.email) {
            var emailButton = {
                text: 'Email (' + speaker.email + ')',
                icon: mode !== 'ios' ? 'mail' : null,
                handler: function () {
                    window.open('mailto:' + speaker.email);
                }
            };
            contactButtons.push(emailButton);
        }
        if (speaker.phone) {
            var phoneButton = {
                text: 'Call (' + speaker.phone + ')',
                icon: mode !== 'ios' ? 'call' : null,
                handler: function () {
                    window.open('tel:' + speaker.phone);
                }
            };
            contactButtons.push(phoneButton);
        }
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Contact ' + this.confData.getSpeakerNameFull(speaker),
            buttons: contactButtons,
        });
        actionSheet.present();
    };
    return SpeakerListPage;
}());
SpeakerListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-speaker-list',template:/*ion-inline-start:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/speaker-list/speaker-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Speakers</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content speaker-list">\n\n  <ion-list [virtualScroll]="speakers">\n\n    <ion-grid fixed>\n\n      <ion-row align-items-stretch>\n\n\n\n        <ion-col col-12 col-md-6 align-self-stretch align-self-center *virtualItem="let speaker" approxItemHeight="457px">\n\n\n\n          <ion-card class="speaker-card">\n\n            <ion-card-header text-wrap>\n\n              <button ion-item detail-none (click)="goToSpeakerDetail(speaker)">\n\n                <ion-avatar item-left>\n\n                  <img [src]="speaker.profilePic" alt="Speaker profile pic" src-fallback="assets/img/default-person.png">\n\n                </ion-avatar>\n\n                {{speaker.name_first}} {{speaker.name_last}}\n\n              </button>\n\n            </ion-card-header>\n\n\n\n            <ion-card-content class="outer-content" text-wrap>\n\n              <ion-list>\n\n                <button ion-item *ngFor="let session of speaker.sessions" (click)="goToSessionDetail(session)">\n\n                  <h3>{{session.name}}</h3>\n\n                </button>\n\n\n\n                <button ion-item (click)="goToSpeakerDetail(speaker)">\n\n                  <h3>About {{speaker.name_first}} {{speaker.name_last}}</h3>\n\n                </button>\n\n              </ion-list>\n\n            </ion-card-content>\n\n\n\n            <ion-row no-padding>\n\n              <ion-col col-12 col-lg-auto text-center text-lg-left>\n\n                <button ion-button clear small color="primary" icon-left (click)="goToSpeakerTwitter(speaker)" *ngIf="speaker.twitter">\n\n                  <ion-icon name="logo-twitter"></ion-icon>\n\n                  Tweet\n\n                </button>\n\n              </ion-col>\n\n              <ion-col col-12 col-lg-auto text-center>\n\n                <button ion-button clear small color="primary" icon-left (click)="openSpeakerShare(speaker)">\n\n                  <ion-icon name=\'share-alt\'></ion-icon>\n\n                  Share\n\n                </button>\n\n              </ion-col>\n\n              <ion-col col-12 col-lg-auto text-center text-lg-right>\n\n                <button ion-button clear small color="primary" icon-left (click)="openContact(speaker)" *ngIf="speaker.email || speaker.phone">\n\n                  <ion-icon name=\'chatboxes\'></ion-icon>\n\n                  Contact\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n          </ion-card>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/speaker-list/speaker-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_conference_data__["a" /* ConferenceData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], SpeakerListPage);

//# sourceMappingURL=speaker-list.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserData = (function () {
    function UserData(events, storage, http) {
        var _this = this;
        this.events = events;
        this.storage = storage;
        this.http = http;
        this._favorites = [];
        this.authLevel = null; //MEMBER CONFERENCE
        this.loginToken = null;
        this.USERNAME_TOKEN = 'username';
        this.PASSWORD_TOKEN = 'password';
        this.FAVORITES_TOKEN = 'fav-anms';
        this.storage.get(this.FAVORITES_TOKEN).then(function (value) {
            if (value !== null)
                _this._favorites = value;
        });
    }
    UserData.prototype.getLoginToken = function () {
        return this.loginToken;
    };
    ;
    UserData.prototype.hasFavorite = function (sessionId) {
        return (this._favorites.indexOf(sessionId) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionId) {
        this._favorites.push(sessionId);
        this.storage.set(this.FAVORITES_TOKEN, this._favorites);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionId) {
        var index = this._favorites.indexOf(sessionId);
        if (index > -1) {
            this._favorites.splice(index, 1);
            this.storage.set(this.FAVORITES_TOKEN, this._favorites);
        }
    };
    ;
    UserData.prototype.login = function (username, password) {
        var body = { 'username': username, 'password': password };
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* SERVER_URL */] + '/login/index.php', body, options)
            .map(function (res) { return res.json(); });
    };
    UserData.prototype.getAlerts = function () {
        console.log('Fetching latest alerts');
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* SERVER_URL */] + '/alert.php', options)
            .map(function (res) { return res.json(); });
        //.catch(this.handleError);
    };
    UserData.prototype.getPostings = function () {
        console.log('Fetching latest postings');
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* SERVER_URL */] + '/pages.php', options)
            .map(function (res) { return res.json(); });
        //.catch(this.handleError);
    };
    UserData.prototype.setLoggedIn = function (username, password, token, authorization) {
        this.loginToken = token;
        this.authLevel = authorization;
        this.setUsername(username);
        this.setPassword(password);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.loginToken = null;
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set(this.USERNAME_TOKEN, username);
    };
    ;
    UserData.prototype.setPassword = function (password) {
        this.storage.set(this.PASSWORD_TOKEN, password);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get(this.USERNAME_TOKEN).then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.getPassword = function () {
        return this.storage.get(this.PASSWORD_TOKEN).then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.loginToken !== null;
    };
    ;
    UserData.prototype.hasConferenceAccess = function () {
        return this.authLevel && this.authLevel.indexOf("CONFERENCE") >= 0;
    };
    ;
    UserData.prototype.hasMemberAccess = function () {
        return this.authLevel && this.authLevel.indexOf("MEMBER") >= 0;
    };
    ;
    return UserData;
}());
UserData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], UserData);

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
    }
    PopoverPage.prototype.contact = function () {
        this.app.getRootNav().push('SupportPage');
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_system');
        this.viewCtrl.dismiss();
    };
    return PopoverPage;
}());
PopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: "\n    <ion-list>\n      <button ion-item (click)=\"close('http://motilitysociety.org')\">ANMS Site</button>\n\t\t<button ion-item (click)=\"close('http://motilitysociety.org/page.php?id=382')\">Journal</button>\n\t\t<button ion-item (click)=\"close('http://motilitysociety.org/page.php?id=312')\">Information</button>\n      <button ion-item (click)=\"contact()\">Contact</button>\n    </ion-list>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */]])
], PopoverPage);

//# sourceMappingURL=about-popover.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, userData, renderer, elementRef) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.login = {};
        this.submitted = false;
        this.loginError = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userData.getUsername().then(function (value) {
            if (value == null) {
                var element_1 = _this.elementRef.nativeElement.querySelector("input[name='username']"); //find the username input element
                setTimeout(function () {
                    _this.renderer.invokeElementMethod(element_1, 'focus', []);
                }, 200);
            }
            else {
                _this.login.username = value;
            }
            _this.userData.getPassword().then(function (value) {
                if (value == null) {
                    if (_this.login.username) {
                        var element_2 = _this.elementRef.nativeElement.querySelector("input[name='password']"); //find the password input element
                        setTimeout(function () {
                            _this.renderer.invokeElementMethod(element_2, 'focus', []);
                        }, 200);
                    }
                }
                else {
                    _this.login.password = value;
                }
            }, function (error) {
                console.log('failed:' + error);
            });
        }, function (error) {
            console.log('failed:' + error);
        });
    };
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        this.submitted = true;
        this.loginError = false;
        if (form.valid) {
            this.userData.login(this.login.username, this.login.password).subscribe(function (data) {
                console.log("Success login, token: " + data.token + ",  auth: " + data.authorization);
                _this.userData.setLoggedIn(_this.login.username, _this.login.password, data.token, data.authorization); //save the auth token for later
                if (_this.userData.hasConferenceAccess()) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */]); //no access to conference
                }
            }, function (error) {
                console.log('failed:' + error);
                _this.loginError = true;
            });
        }
    };
    LoginPage.prototype.close = function (url) {
        window.open(url, '_system');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/login/login.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n		<ion-title>Login</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<div class="logo">\n\n		<img src="assets/img/anms-logo.png" alt="ANMS logo">\n\n	</div>\n\n\n\n	<form #loginForm="ngForm" novalidate>\n\n		<ion-list no-lines>\n\n			<ion-item>\n\n				<ion-label stacked color="primary">Username or email</ion-label>\n\n				<ion-input [(ngModel)]="login.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n\n				Username is required\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label stacked color="primary">Password</ion-label>\n\n				<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n				Password is required\n\n			</p>\n\n			<p ion-text [hidden]="loginError == false" color="danger" padding-left>\n\n				Invalid username or password\n\n			</p>\n\n		</ion-list>\n\n\n\n		<ion-row responsive-sm>\n\n			<ion-col>\n\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>Login</button>\n\n			</ion-col>\n\n			<ion-col>\n\n				<button ion-button (click)="close(\'https://motilitysociety.org/password_reset_email.php\')" color="secondary" block>Reset Password</button>\n\n			</ion-col>\n\n		</ion-row>\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleFilterPage = (function () {
    function ScheduleFilterPage(confData, navParams, viewCtrl) {
        var _this = this;
        this.confData = confData;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tracks = [];
        // passed in array of track names that should be excluded (unchecked)
        var excludedTrackNames = this.navParams.data;
        //always include "empty" tracks as an option
        this.tracks.push({
            name: "(empty)",
            isChecked: (excludedTrackNames.indexOf("(empty)") === -1)
        });
        this.confData.getTracks().subscribe(function (trackNames) {
            trackNames.forEach(function (trackName) {
                _this.tracks.push({
                    name: trackName,
                    isChecked: (excludedTrackNames.indexOf(trackName) === -1)
                });
            });
        });
    }
    ScheduleFilterPage.prototype.resetFilters = function () {
        // reset all of the toggles to be checked
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    ScheduleFilterPage.prototype.applyFilters = function () {
        // Pass back a new array of track names to exclude
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedTrackNames);
    };
    ScheduleFilterPage.prototype.dismiss = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(data);
    };
    return ScheduleFilterPage;
}());
ScheduleFilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-schedule-filter',template:/*ion-inline-start:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/schedule-filter/schedule-filter.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">Cancel</button>\n\n    </ion-buttons>\n\n\n\n    <ion-title>\n\n      Filter Sessions\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button (click)="applyFilters()" strong>Done</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n  <ion-list>\n\n    <ion-list-header>Tracks</ion-list-header>\n\n\n\n    <ion-item *ngFor="let track of tracks" [attr.track]="track.name | lowercase">\n\n      <span item-left class="dot"></span>\n\n      <ion-label>{{track.name}}</ion-label>\n\n      <ion-toggle [(ngModel)]="track.isChecked" color="secondary"></ion-toggle>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n\n      Reset All Filters\n\n    </button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/schedule-filter/schedule-filter.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
], ScheduleFilterPage);

//# sourceMappingURL=schedule-filter.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupportPage = (function () {
    function SupportPage(navCtrl, inAppBrowser, config) {
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
        this.config = config;
        this.submitted = false;
    }
    SupportPage.prototype.open = function (url) {
        var mode = this.config.get('mode');
        if (url.startsWith('maps') && mode !== 'ios') {
            url = url.replace('maps://?ll=', 'geo:?daddr=');
        }
        this.inAppBrowser.create(url, '_system');
    };
    return SupportPage;
}());
SupportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-support',template:/*ion-inline-start:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/support/support.html"*/'<ion-header>\n\n\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n		<ion-title>Contact</ion-title>\n\n	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n	<ion-list no-lines>\n\n		<button ion-item (click)="open(\'mailto:admin@motilitysociety.org\')">\n\n			<ion-icon item-left name="mail"></ion-icon>\n\n			admin@motilitysociety.org\n\n		</button>\n\n		\n\n		<button ion-item (click)="open(\'tel:17346991130\')">\n\n			<ion-icon item-left name="call"></ion-icon>\n\n			734-699-1130\n\n		</button>\n\n\n\n		<button ion-item (click)="open(\'http://motilitysociety.org\')">\n\n			<ion-icon item-left name="globe"></ion-icon>\n\n			motilitysociety.org\n\n		</button>\n\n\n\n		<button ion-item (click)="open(\'maps://?ll=42.213459,-83.4907557\')">\n\n			<ion-icon item-left name="pin"></ion-icon>\n\n			45685 Harmony Lane, Belleville, MI 48111\n\n		</button>\n\n	</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/support/support.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */]])
], SupportPage);

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_member_data__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validators_email_validator__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MemberPage = (function () {
    function MemberPage(loadingCtrl, viewCtrl, transfer, memberData, userData, alertCtrl, file, platform, formBuilder, fileOpener) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.transfer = transfer;
        this.memberData = memberData;
        this.userData = userData;
        this.alertCtrl = alertCtrl;
        this.file = file;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.fileOpener = fileOpener;
        this.content = [];
        this.email = {};
        this.emailFormGrp = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_8__validators_email_validator__["a" /* EmailValidator */].checkEmail])]
        });
        if (userData.hasLoggedIn()) {
            console.log('TokenMD:' + userData.getLoginToken());
            //load our data
            this.memberData.getItems(userData.getLoginToken()).subscribe(function (data) {
                _this.content = data;
            }, function (error) {
                console.log('Warning:' + error);
            });
        }
    }
    MemberPage.prototype.selectedItems = function () {
        var cnt = 0;
        for (var _i = 0, _a = this.content; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.checked === true) {
                cnt++;
            }
        }
        return cnt;
    };
    MemberPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.viewCtrl.dismiss();
    };
    MemberPage.prototype.emailPatient = function (emailForm) {
        //esnure the email address given is valid
        if (this.emailFormGrp.dirty && !this.emailFormGrp.valid) {
            var alert_1 = this.alertCtrl.create({
                subTitle: "Invalid email address",
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        var fileNames = new Array();
        for (var _i = 0, _a = this.content; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.checked === true) {
                fileNames.push(item.filename);
            }
        }
        if (fileNames.length > 0) {
            var isSuccess = true;
            var emailIn = this.email.emailAddress; //TODO for some reason, this loses scope in the below Promise with fat arrow??
            //send 1 request per file
            for (var _b = 0, fileNames_1 = fileNames; _b < fileNames_1.length; _b++) {
                var item = fileNames_1[_b];
                if (this.userData.hasLoggedIn()) {
                    console.log('TokenMD:' + this.userData.getLoginToken());
                    console.log('email:' + emailIn);
                    //load our data
                    this.memberData.sendContent(emailIn, item, this.userData.getLoginToken()).subscribe(function (data) {
                        console.log('Success, Data:' + data);
                    }, function (error) {
                        isSuccess = false;
                        console.log('failed:' + error);
                    });
                }
            }
            //message fields
            var txtTitle = 'Success';
            var txtSubTitle = 'Your request has been completed.';
            //show the results to the user
            if (isSuccess) {
                //clear all inputs
                for (var _c = 0, _d = this.content; _c < _d.length; _c++) {
                    var item = _d[_c];
                    item.checked = false;
                }
                this.email.emailAddress = '';
            }
            else {
                txtTitle = 'Error';
                txtSubTitle = 'An error occurred, please try again later.';
            }
            // create an alert instance
            var alert_2 = this.alertCtrl.create({
                title: txtTitle,
                subTitle: txtSubTitle,
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    MemberPage.prototype.previewPDF = function (pdfURL, fileName) {
        var _this = this;
        //show loading screen
        var loading = this.loadingCtrl.create({ content: "Loading Content" });
        loading.present();
        //let targetPath: string = this.file.dataDirectory + fileName;
        var targetPath = this.file.externalDataDirectory + fileName; //Android default
        if (this.platform.is('ios')) {
            targetPath = this.file.documentsDirectory + fileName;
        }
        var options = {
            headers: {
                "AUTH-TOKEN": this.userData.getLoginToken()
            },
            mimeType: "application/pdf"
        };
        console.log('tokenReq: ' + options.headers["AUTH-TOKEN"]);
        console.log('targetPath: ' + targetPath);
        console.log('pdfURL: ' + pdfURL);
        console.log('fileName: ' + fileName);
        var fileTransfer = this.transfer.create();
        fileTransfer.download(pdfURL, targetPath, true, options).then(function (entry) {
            // Success!
            _this.fileOpener.open(targetPath, 'application/pdf').then(function () {
                console.log('File is opened: ' + targetPath);
                loading.dismiss();
            }).catch(function (e) {
                console.log('Error openening file: ' + targetPath, e);
                loading.dismiss();
            });
        }, function (err) {
            console.log('error... ' + JSON.stringify(err, null, 2));
            loading.dismiss();
        });
    };
    return MemberPage;
}());
MemberPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-member',template:/*ion-inline-start:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/member/member.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Members</ion-title>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div padding class="about-info">\n\n    <h4>ANMS Brochures</h4>\n\n\n\n		<ion-grid>\n\n			<ion-row *ngFor="let contentItem of content" align-items-end>\n\n				<ion-col width-80 no-padding text-wrap>\n\n					<ion-item no-padding>\n\n						<ion-checkbox item-left [(ngModel)]="contentItem.checked" checked="contentItem.checked"></ion-checkbox>\n\n						<ion-label>{{contentItem.name}}</ion-label>\n\n					</ion-item>\n\n				</ion-col>\n\n\n\n				<ion-col width-20 no-padding>\n\n					<ion-item no-padding>\n\n						<ion-thumbnail item-right>\n\n							<button (click)="previewPDF(contentItem.location, contentItem.filename + \'.pdf\')" no-padding>\n\n								<img src="http://www.motilitysociety.org/mobile/img/{{contentItem.filename}}.png" alt="Item preview" />\n\n							</button>\n\n						</ion-thumbnail>\n\n					</ion-item>\n\n				</ion-col>\n\n\n\n			</ion-row>\n\n		</ion-grid>\n\n		\n\n\n\n		<form [formGroup]="emailFormGrp" (ngSubmit)="emailPatient(emailForm)">\n\n			<ion-row>\n\n				<ion-input placeholder="Email Address" formControlName="email" name="emailAddress" [(ngModel)]="email.emailAddress"\n\n						type="text" clearInput required></ion-input>\n\n	\n\n			    <button ion-button>\n\n					<ion-icon name="send" class="icon-button" ></ion-icon>\n\n				</button>\n\n			</ion-row>\n\n		</form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/member/member.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_4__providers_member_data__["a" /* MemberData */],
        __WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__["a" /* FileOpener */]])
], MemberPage);

//# sourceMappingURL=member.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import 'rxjs/add/observable/catch';
var MemberData = (function () {
    function MemberData(http) {
        this.http = http;
    }
    MemberData.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    MemberData.prototype.processItems = function (data) {
        this.items = data.json();
        return this.items;
    };
    MemberData.prototype.getItems = function (token) {
        if (this.items) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.items);
        }
        else {
            console.log('TokenMD:' + token);
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'AUTH-TOKEN': token });
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return this.http.get(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* SERVER_URL */] + '/content/index.php', options)
                .map(this.processItems, this);
            //.catch(this.handleError);
        }
    };
    MemberData.prototype.sendContent = function (emailAddress, fileName, token) {
        var body = { 'email': emailAddress, 'fileKey': fileName };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'AUTH-TOKEN': token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* SERVER_URL */] + '/email/index.php', body, options)
            .map(function (res) { return res.json(); });
        //.catch(this.handleError);
    };
    return MemberData;
}());
MemberData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], MemberData);

//# sourceMappingURL=member-data.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostingsPage = (function () {
    function PostingsPage() {
    }
    return PostingsPage;
}());
PostingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-postings',template:/*ion-inline-start:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/postings/postings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{title}}</ion-title>\n\n    \n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div padding class="postings-info">\n\n    <h4>{{title}}</h4>\n\n\n\n    <span [innerHTML]=content></span>\n\n    \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/postings/postings.html"*/
    }),
    __metadata("design:paramtypes", [])
], PostingsPage);

//# sourceMappingURL=postings.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_conference_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__session_detail_session_detail__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PosterPage = (function () {
    function PosterPage(navCtrl, loadingCtrl, viewCtrl, transfer, confData, userData, alertCtrl, file, platform, fileOpener) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.transfer = transfer;
        this.confData = confData;
        this.userData = userData;
        this.alertCtrl = alertCtrl;
        this.file = file;
        this.platform = platform;
        this.fileOpener = fileOpener;
        this.posters = [];
    }
    PosterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getPosters().subscribe(function (posters) {
            _this.posters = posters;
        });
    };
    PosterPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.viewCtrl.dismiss();
    };
    PosterPage.prototype.previewPDF = function (pdfURL, fileName) {
        var _this = this;
        //show loading screen
        var loading = this.loadingCtrl.create({ content: "Loading Content" });
        loading.present();
        //let targetPath: string = this.file.dataDirectory + fileName;
        var targetPath = this.file.externalDataDirectory + fileName; //Android default
        if (this.platform.is('ios')) {
            targetPath = this.file.documentsDirectory + fileName;
        }
        var options = {
            headers: {
                "AUTH-TOKEN": this.userData.getLoginToken()
            },
            mimeType: "application/pdf"
        };
        console.log('tokenReq: ' + options.headers["AUTH-TOKEN"]);
        console.log('targetPath: ' + targetPath);
        console.log('pdfURL: ' + pdfURL);
        console.log('fileName: ' + fileName);
        var fileTransfer = this.transfer.create();
        fileTransfer.download(pdfURL, targetPath, true, options).then(function (entry) {
            // Success!
            _this.fileOpener.open(targetPath, 'application/pdf').then(function () {
                console.log('File is opened: ' + targetPath);
                loading.dismiss();
            }).catch(function (e) {
                console.log('Error openening file: ' + targetPath, e);
                loading.dismiss();
            });
        }, function (err) {
            console.log('error... ' + JSON.stringify(err, null, 2));
            loading.dismiss();
        });
    };
    PosterPage.prototype.goToSessionDetail = function (sessionId) {
        var session = this.confData.getSession(sessionId);
        if (session) {
            if (session) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__session_detail_session_detail__["a" /* SessionDetailPage */], {
                    name: session.name,
                    session: session
                });
            }
            ;
        }
    };
    return PosterPage;
}());
PosterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-poster',template:/*ion-inline-start:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/poster/poster.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Posters</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div padding class="poster-info">\n\n	<ion-grid>\n\n		<ion-row *ngFor="let posterItem of posters" align-items-end>\n\n			<ion-col no-padding text-wrap>\n\n				<ion-item no-padding>\n\n					<ion-label>\n\n						{{posterItem.title}}\n\n						<button class="session-txt-bold" (click)="previewPDF(posterItem.file_url, posterItem.file_name)" no-padding>\n\n							<ion-icon item-right name="cloud-download"></ion-icon>\n\n						</button>\n\n\n\n						<p *ngFor="let presenter of posterItem.presenters">\n\n							{{presenter.name}}\n\n						</p>\n\n\n\n						<div *ngIf="posterItem.MeetingSessionID > 0">\n\n							<button class="session-txt-bold" (click)="goToSessionDetail(posterItem.MeetingSessionID)">\n\n								(Abstract chosen for oral presentation)\n\n							</button>\n\n						</div>\n\n\n\n<!--\n\n						<ion-thumbnail item-left>\n\n							<button (click)="previewPDF(posterItem.file_url, posterItem.file_name)" no-padding>\n\n								<img src="{{posterItem.file_url}}" alt="Item preview" />\n\n							</button>\n\n						</ion-thumbnail>\n\n-->\n\n						<!--<div>{{posterItem.content}}</div>-->\n\n					</ion-label>\n\n				</ion-item>\n\n			</ion-col>\n\n\n\n		</ion-row>\n\n	</ion-grid>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/poster/poster.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_4__providers_conference_data__["a" /* ConferenceData */],
        __WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__["a" /* FileOpener */]])
], PosterPage);

//# sourceMappingURL=poster.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_popover_about_popover__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_map_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_schedule_schedule__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_schedule_filter_schedule_filter__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_session_detail_session_detail__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_speaker_detail_speaker_detail__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_speaker_list_speaker_list__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_support_support__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_member_member__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_postings_postings__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_poster_poster__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_conference_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_member_data__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_img_fallback__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_img_fallback___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ng2_img_fallback__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* ConferenceApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_about_popover_about_popover__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_support_support__["a" /* SupportPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_member_member__["a" /* MemberPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_postings_postings__["a" /* PostingsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_poster_poster__["a" /* PosterPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_30_ng2_img_fallback__["Ng2ImgFallbackModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* ConferenceApp */], {}, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs' },
                    { component: __WEBPACK_IMPORTED_MODULE_17__pages_schedule_schedule__["a" /* SchedulePage */], name: 'Schedule', segment: 'schedule' },
                    { component: __WEBPACK_IMPORTED_MODULE_19__pages_session_detail_session_detail__["a" /* SessionDetailPage */], name: 'SessionDetail', segment: 'sessionDetail/:name' },
                    { component: __WEBPACK_IMPORTED_MODULE_18__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], name: 'ScheduleFilter', segment: 'scheduleFilter' },
                    { component: __WEBPACK_IMPORTED_MODULE_21__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], name: 'SpeakerList', segment: 'speakerList' },
                    { component: __WEBPACK_IMPORTED_MODULE_20__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], name: 'SpeakerDetail', segment: 'speakerDetail/:name' },
                    { component: __WEBPACK_IMPORTED_MODULE_16__pages_map_map__["a" /* MapPage */], name: 'Map', segment: 'map' },
                    { component: __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */], name: 'AboutPage', segment: 'about' },
                    { component: __WEBPACK_IMPORTED_MODULE_23__pages_support_support__["a" /* SupportPage */], name: 'SupportPage', segment: 'support' },
                    { component: __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                    { component: __WEBPACK_IMPORTED_MODULE_24__pages_member_member__["a" /* MemberPage */], name: 'MemberPage', segment: 'member' },
                    { component: __WEBPACK_IMPORTED_MODULE_25__pages_postings_postings__["a" /* PostingsPage */], name: 'PostingsPage', segment: 'postings' },
                    { component: __WEBPACK_IMPORTED_MODULE_26__pages_poster_poster__["a" /* PosterPage */], name: 'PosterPage', segment: 'poster' }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* ConferenceApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_about_popover_about_popover__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_support_support__["a" /* SupportPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_member_member__["a" /* MemberPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_postings_postings__["a" /* PostingsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_poster_poster__["a" /* PosterPage */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_27__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_28__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_29__providers_member_data__["a" /* MemberData */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__["a" /* FileOpener */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_EmptyObservable__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_EmptyObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_EmptyObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConferenceData = (function () {
    function ConferenceData(http, userData) {
        this.http = http;
        this.userData = userData;
        this.totalDays = 0;
        this.dayStartIndx = 0;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            //			return this.http.get('assets/data/data-real2.json')
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'AUTH-TOKEN': this.userData.getLoginToken() });
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return this.http.get(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* SERVER_URL */] + '/meeting/', options)
                .map(this.processData, this);
        }
    };
    ConferenceData.prototype.hasConferenceData = function () {
        return this.data && this.data.schedule && this.data.schedule.length > 0;
    };
    ;
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data.json();
        console.log(this.data);
        this.data.tracks = [];
        if (!this.hasConferenceData()) {
            return;
        }
        var currIndx = 0;
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            var schedDate = new Date(day.day + "T12:00:00");
            var currDate = new Date();
            var isSameDay = (schedDate.getDate() == currDate.getDate()
                && schedDate.getMonth() == currDate.getMonth()
                && schedDate.getFullYear() == currDate.getFullYear());
            if (isSameDay) {
                _this.dayStartIndx = currIndx;
            }
            _this.totalDays++;
            currIndx++;
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return _this.getSpeakerNameFull(s) === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().map(function (data) {
            if (!_this.hasConferenceData()) {
                //no conference is available, return safe blank data
                return null;
            }
            //initial load only, try to start on CurrentDay of schedule
            if (_this.dayStartIndx > 0) {
                dayIndex = _this.dayStartIndx;
                _this.dayStartIndx = 0; //clear this
            }
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            day.currentDayIndx = dayIndex;
            day.dayIndexDay = new Date(day.day + "T12:00:00").toLocaleString("en-us", { month: "short", day: "numeric" }); //make date and then format
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                    else {
                        group.hide = true;
                    }
                });
            });
            return day;
        });
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name && session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        if (session.tracks.length) {
            session.tracks.forEach(function (trackName) {
                if (excludeTracks.indexOf(trackName) === -1) {
                    matchesTracks = true;
                }
            });
        }
        else {
            //if there are no tracks then check for the special case "empty"
            if (excludeTracks.indexOf("(empty)") === -1) {
                matchesTracks = true;
            }
            else {
                matchesTracks = false;
            }
        }
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.userData.hasFavorite(session.id)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        if (this.hasConferenceData()) {
            return this.load().map(function (data) {
                return data.speakers.sort(function (a, b) {
                    var aName = a.name_last;
                    var bName = b.name_last;
                    return aName.localeCompare(bName);
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_EmptyObservable__["EmptyObservable"]();
        }
    };
    ConferenceData.prototype.getPosters = function () {
        if (this.hasConferenceData()) {
            return this.load().map(function (data) {
                return data.posters.sort(function (a, b) {
                    var aVal = a.title;
                    var bVal = b.title;
                    return aVal.localeCompare(bVal);
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_EmptyObservable__["EmptyObservable"]();
        }
    };
    ConferenceData.prototype.hasPosters = function () {
        if (this.hasConferenceData()) {
            return this.data.posters.length > 0;
        }
        else {
            return false;
        }
    };
    ConferenceData.prototype.getSpeakerNameFull = function (speaker) {
        //convienent method to concat speaker names into a single name
        return speaker.name_first + ' ' + speaker.name_last + (speaker.name_suffix ? ', ' + speaker.name_suffix : '');
    };
    ConferenceData.prototype.getTracks = function () {
        if (this.hasConferenceData()) {
            return this.load().map(function (data) {
                return data.tracks.sort();
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_EmptyObservable__["EmptyObservable"]();
        }
    };
    ConferenceData.prototype.getSession = function (sessionId) {
        if (this.hasConferenceData()) {
            for (var _i = 0, _a = this.data.schedule; _i < _a.length; _i++) {
                var day = _a[_i];
                for (var _b = 0, _c = day.groups; _b < _c.length; _b++) {
                    var group = _c[_b];
                    // loop through each session in the group
                    for (var _d = 0, _e = group.sessions; _d < _e.length; _d++) {
                        var session = _e[_d];
                        //console.log("session--id= " + session.id +  "  :: " + sessionId);
                        if (session.id == sessionId) {
                            return session;
                        }
                    }
                }
            }
        }
        else {
            return null;
        }
    };
    ConferenceData.prototype.getMap = function () {
        if (this.hasConferenceData()) {
            return this.load().map(function (data) {
                return data.map;
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_EmptyObservable__["EmptyObservable"]();
        }
    };
    return ConferenceData;
}());
ConferenceData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__user_data__["a" /* UserData */]])
], ConferenceData);

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_schedule_schedule__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_speaker_list_speaker_list__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_support_support__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_member_member__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_postings_postings__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_poster_poster__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_conference_data__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_user_data__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, splashScreen, statusBar) {
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.conferencePages = [
            { title: 'Schedule', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_8__pages_schedule_schedule__["a" /* SchedulePage */], index: 0, icon: 'calendar' },
            { title: 'Speakers', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_9__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], index: 1, icon: 'contacts' },
            { title: 'Posters', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_13__pages_poster_poster__["a" /* PosterPage */], icon: 'person' },
            { title: 'Map', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */], index: 2, icon: 'map' },
            { title: 'Venue', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_11__pages_member_member__["a" /* MemberPage */], icon: 'locate', link: 'https://motilitysociety.org/meeting/hotel' },
            { title: 'Exhibitors', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_11__pages_member_member__["a" /* MemberPage */], icon: 'photos', link: 'https://motilitysociety.org/meeting/exhibitors' },
            { title: 'Sponsors', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_11__pages_member_member__["a" /* MemberPage */], icon: 'happy', link: 'https://motilitysociety.org/meeting/sponsors' }
        ];
        this.loggedInPages = [
            { title: 'Contact', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'About', name: 'AboutPage', component: __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */], icon: 'information-circle' },
            { title: 'Member', name: 'MemberPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_member_member__["a" /* MemberPage */], icon: 'person' },
            { title: 'Logout', name: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Contact', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'About', name: 'AboutPage', component: __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */], icon: 'information-circle' }
        ];
        this.postings = [];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]; //starting page
        this.platformReady();
        //load any custom postings
        this.loadPostings();
        // load the conference data
        this.confData.load();
        // decide which menu items should be hidden by current login status
        this.showMenu(this.userData.hasLoggedIn());
        this.listenToLoginEvents();
    }
    ConferenceApp.prototype.loadPostings = function () {
        var _this = this;
        this.userData.getPostings().subscribe(function (data) {
            console.log("Success fetching postings");
            data.forEach(function (posting) {
                _this.postings.push({ title: posting.title, content: posting.content, name: posting.title, component: __WEBPACK_IMPORTED_MODULE_12__pages_postings_postings__["a" /* PostingsPage */], icon: 'disc' });
            });
        }, function (error) {
            console.log('failed:' + error);
        });
    };
    ConferenceApp.prototype.openPage = function (page) {
        var _this = this;
        // the nav component was found using @ViewChild(Nav)
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            this.nav.setRoot(page.component, { tabIndex: page.index });
        }
        else {
            if (!page.link) {
                //if no link associated, do this
                this.nav.setRoot(page.component)
                    .then(function () {
                    var view = _this.nav.getActive();
                    //special case for all PostingsPage instances
                    if (view.instance instanceof __WEBPACK_IMPORTED_MODULE_12__pages_postings_postings__["a" /* PostingsPage */]) {
                        view.instance.title = page.title;
                        view.instance.content = page.content;
                    }
                })
                    .catch(function (v) {
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
    };
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.showMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.showMenu(false);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]); //send the user to a basic page
        });
    };
    ConferenceApp.prototype.showMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            console.log("...hiding splash");
            _this.splashScreen.hide();
            //ensure the StatusBar at the top matches the apps color
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.backgroundColorByHexString('#12816f'); //should be the 'primary' color
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
        //let childNav = this.nav.getActiveChildNav();
        var childNav = this.nav.getActiveChildNavs()[0];
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
    };
    return ConferenceApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */])
], ConferenceApp.prototype, "nav", void 0);
ConferenceApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/andrewderse/Documents/repos/anms-mobile/src/app/app.template.html"*/'<ion-split-pane>\n\n\n\n  <!-- logged out menu -->\n\n  <ion-menu id="loggedOutMenu" [content]="content">\n\n\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content class="outer-content">\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          General\n\n        </ion-list-header>\n\n        <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n\n          <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n      <ion-list *ngIf="postings && postings.length > 0">\n\n        <ion-list-header>\n\n          Postings\n\n        </ion-list-header>\n\n        <button ion-item menuClose *ngFor="let p of postings" (click)="openPage(p)">\n\n          <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n    </ion-content>\n\n\n\n  </ion-menu>\n\n\n\n  <!-- logged in menu -->\n\n  <ion-menu id="loggedInMenu" [content]="content">\n\n\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content class="outer-content">\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          General\n\n        </ion-list-header>\n\n        <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)"\n\n        		[attr.disabled]="p.name === \'MemberPage\' && !this.userData.hasMemberAccess() ? true : null" >\n\n          <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n      <ion-list *ngIf="this.userData.hasConferenceAccess()">\n\n        <ion-list-header>\n\n          Conference\n\n        </ion-list-header>\n\n		<button ion-item menuClose *ngFor="let p of conferencePages" (click)="openPage(p)"\n\n			[attr.disabled]="p.title === \'Posters\' && !this.confData.hasPosters() ? true : null" >\n\n          <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n\n\n      <ion-list *ngIf="postings && postings.length > 0">\n\n        <ion-list-header>\n\n          Postings\n\n        </ion-list-header>\n\n        <button ion-item menuClose *ngFor="let p of postings" (click)="openPage(p)">\n\n          <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n    </ion-content>\n\n\n\n  </ion-menu>\n\n\n\n  <!-- main navigation -->\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main></ion-nav>\n\n\n\n</ion-split-pane>\n\n'/*ion-inline-end:"/Users/andrewderse/Documents/repos/anms-mobile/src/app/app.template.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_15__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_14__providers_conference_data__["a" /* ConferenceData */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]])
], ConferenceApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.checkEmail = function (control) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value);
        if (re) {
            return null;
        }
        return { "invalidEmail": true };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email-validator.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speaker_detail_speaker_detail__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_conference_data__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SessionDetailPage = (function () {
    function SessionDetailPage(loadingCtrl, navParams, navCtrl, userData, confData, alertCtrl, transfer, platform, fileOpener, file) {
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.confData = confData;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.platform = platform;
        this.fileOpener = fileOpener;
        this.file = file;
        this.session = navParams.data.session;
    }
    SessionDetailPage.prototype.goToSpeakerDetail = function (currentSpeaker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], {
            speaker: currentSpeaker,
            name: this.confData.getSpeakerNameFull(currentSpeaker)
        });
    };
    SessionDetailPage.prototype.openPDF = function (resource) {
        var _this = this;
        //show loading screen
        var loading = this.loadingCtrl.create({ content: "Loading Content" });
        loading.present();
        var fileName = resource.name;
        var pdfURL = resource.url;
        //let targetPath: string = this.file.dataDirectory + fileName;
        var targetPath = this.file.externalDataDirectory + fileName; //Android default
        if (this.platform.is('ios')) {
            targetPath = this.file.documentsDirectory + fileName;
        }
        var options = {
            headers: {
                "AUTH-TOKEN": this.userData.getLoginToken()
            },
            mimeType: "application/pdf"
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.download(pdfURL, targetPath, true, options).then(function (entry) {
            // Success!
            _this.fileOpener.open(targetPath, 'application/pdf').then(function () {
                console.log('File is opened: ' + targetPath);
                loading.dismiss();
            }).catch(function (e) {
                console.log('Error openening file: ' + targetPath, e);
                loading.dismiss();
            });
        }, function (err) {
            console.log('error... ' + JSON.stringify(err, null, 2));
            loading.dismiss();
        });
    };
    return SessionDetailPage;
}());
SessionDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-session-detail',template:/*ion-inline-start:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/session-detail/session-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Session</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h1>{{session.name}}</h1>\n\n\n\n  <p *ngFor="let speaker of session.speakers">\n\n  	<button class="speaker-name" clear (click)="goToSpeakerDetail(speaker)">\n\n    	<h4>{{speaker.name_first}} {{speaker.name_last}}</h4>\n\n    </button>\n\n  </p>\n\n\n\n  <p>\n\n    {{session.timeStart}} - {{session.timeEnd}}\n\n  </p>\n\n\n\n  <p>{{session.location}}</p>\n\n  \n\n	<button ion-item class="resource-name" detail-none *ngFor="let resource of session.resources" (click)="openPDF(resource)">\n\n		<ion-icon item-right name="download"></ion-icon>\n\n		<p>{{resource.name}}</p>\n\n	</button>\n\n\n\n\n\n  <p>{{session.description}}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/andrewderse/Documents/repos/anms-mobile/src/pages/session-detail/session-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_7__providers_conference_data__["a" /* ConferenceData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]])
], SessionDetailPage);

//# sourceMappingURL=session-detail.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.js.map