import { Component, Input, OnChanges,ElementRef } from '@angular/core';
import { Poi } from 'app/poi/poi';
import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
  selector: 'poi-map',
  templateUrl: './poi-map.component.html',
  styleUrls: ['./poi-map.component.css']
})
export class PoiMapComponent implements OnChanges {
  mymap;
  markers;
  mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
  mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>'

  ngOnChanges() {

    if (this.pois) {

      if (this.mymap != undefined || this.mymap != null) {
        this.mymap.remove();
      }

      this.mymap = L.map('mapid').setView([43.3, 5.4], 13);


      var street = L.tileLayer(this.mbUrl, {
        attribution: this.mbAttr,
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYW1pbmVoYW1vdWRhIiwiYSI6ImNqM3dwYmdqdTAwMG8zMnBrNms0NG1pNDYifQ.odRR1wKtv3NpwNy3fsp5yw'
      }).addTo(this.mymap);
      var satellite = L.tileLayer(this.mbUrl, {
        attribution: this.mbAttr,
        maxZoom: 18,
        id: 'mapbox.satellite',
        accessToken: 'pk.eyJ1IjoiYW1pbmVoYW1vdWRhIiwiYSI6ImNqM3dwYmdqdTAwMG8zMnBrNms0NG1pNDYifQ.odRR1wKtv3NpwNy3fsp5yw'
      })

      var baseLayers = {
        "Satellite": satellite,
        "Streets": street
      };

      L.control.layers(baseLayers).addTo(this.mymap);

  var markersList = L.markerClusterGroup();
      this.pois.forEach(element => {
        markersList.addLayer(L.marker([element.latitude, element.longitude])
        .bindPopup('<b>' + element.desc + '</b>' + '<br>'
         + '<a href="/contributions/'+ element.id+'">'+ element.name+'</a>'));
      });

this.mymap.addLayer(markersList);
    };
  }

  @Input() pois: Poi[];
     
}









