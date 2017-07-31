import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Poi } from 'app/contribustions/poi/poi';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { LoginService} from 'app/services/login.service';
@Component({
  selector: 'details-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.css']
})
export class DetailsInfoComponent implements OnInit {

  update=false;
  private typePoi = ["Jardins", "Parcs"];
  mymap;
  mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
  mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>';
   infoForm: FormGroup;
  constructor(private connect :LoginService,
    private fb: FormBuilder) {
  }


  ngOnInit() {
     this.infoForm = this.fb.group({
      name: [this.pois.name],
      typespois: [this.pois.typespois],
      postal_code: [this.pois.postal_code],
      street: [this.pois.street],
      city: [this.pois.city],
      phone: [this.pois.phone],
      price: [this.pois.price],
      visit_time_max: [this.pois.visit_time_max],
      visit_time_min: [this.pois.visit_time_min],
    })
    this.mymap = L.map('mapid').setView([this.pois.latitude, this.pois.longitude], 11);
    var street = L.tileLayer(this.mbUrl, {
      attribution: this.mbAttr,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiYW1pbmVoYW1vdWRhIiwiYSI6ImNqM3dwYmdqdTAwMG8zMnBrNms0NG1pNDYifQ.odRR1wKtv3NpwNy3fsp5yw'
    }).addTo(this.mymap);

    L.marker([this.pois.latitude, this.pois.longitude]).addTo(this.mymap);

  }

  change(infoForm) {
    this.update=false;
    let newValue = infoForm.value;
    console.log("info",newValue);
    this.info.emit(newValue);
    
  }
 reset() {
     this.update=false;
  }
 modifie(){
   this.update=true;
 }

  @Input() pois :Poi;
  @Output() info = new EventEmitter();

}
