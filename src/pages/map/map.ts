import { Component, ViewChild, ElementRef } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

import { Platform } from 'ionic-angular';


declare var google: any;


@Component({
	selector: 'page-map',
	templateUrl: 'map.html'
})
export class MapPage {
	data: any;

	@ViewChild('mapCanvas') mapElement: ElementRef;
	constructor(public confData: ConferenceData, public platform: Platform) {
	}

	ionViewDidLoad() {

		this.confData.getMap().subscribe((mapData: any) => {
			let mapEle = this.mapElement.nativeElement;

			let myLatLng = mapData.find((d: any) => d.center);
			let map = new google.maps.Map(mapEle, {
				center: {lat: Number(myLatLng.lat), lng: Number(myLatLng.lng)},
				zoom: 16
			});

			mapData.forEach((markerData: any) => {
				let infoWindow = new google.maps.InfoWindow({
					content: `<h5>${markerData.name}</h5>`
				});

				let myLatLng = {lat: Number(markerData.lat), lng: Number(markerData.lng)};
				let marker = new google.maps.Marker({
					position: myLatLng,
					map: map,
					title: markerData.name
				});

				marker.addListener('click', () => {
					infoWindow.open(map, marker);
				});
			});

			google.maps.event.addListenerOnce(map, 'idle', () => {
				mapEle.classList.add('show-map');
			});

		});

	}
	
/*
	processMapquestData(data: any) {
		// just some good 'ol JS fun with objects and arrays
		// build up the data by linking speakers to sessions
		this.data = data.json();
		
		// loop through each day in the schedule
		this.data.results.forEach((result: any) => {

			result.locations.forEach((location: any) => {
				location.latLng.lat;
				location.latLng.lng;
			});
		});

		return this.data;
	}
*/
	
}
