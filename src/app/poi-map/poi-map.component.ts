import { Component, Input, OnChanges } from '@angular/core';
import { Poi } from 'app/poi/poi';
import 'leaflet';

@Component({
  selector: 'poi-map',
  templateUrl: './poi-map.component.html',
  styleUrls: ['./poi-map.component.css']
})
export class PoiMapComponent implements OnChanges {
  mymap;
  name="bbbbb"
  ngOnChanges() {

    if (this.pois) {
      console.log("changeing");
      if (this.mymap != undefined || this.mymap != null) {
        this.mymap.remove();
      }
      this.mymap = L.map('mapid').setView([43.3, 5.4], 13);
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYW1pbmVoYW1vdWRhIiwiYSI6ImNqM3dwYmdqdTAwMG8zMnBrNms0NG1pNDYifQ.odRR1wKtv3NpwNy3fsp5yw'
      }).addTo(this.mymap);
      var icon = L.icon({
        iconUrl: './assets/images_leaflet/marker-icon.png',
        iconAnchor: [11, 22],
        shadowUrl: './assets/images_leaflet/marker-shadow.png',
      })
      this.pois.forEach(element => {
        this.markers = L.marker([element.latitude, element.longitude], { icon: icon }).addTo(this.mymap);
        this.markers.bindPopup('<b>'+element.desc+'</b>'+'<br>'+element.name);

      });

    };
  }

  markers;
  constructor() { }


  @Input() pois: Poi[];
}
