import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Poi } from 'app/poi/poi';
import { Filtre } from 'app/filter-poi/filtre';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';




@Injectable()
export class PoiService {
  private poisUrl = "http://localhost:3000/pois";
  private url = "http://localhost:3000/pois";
  constructor(private http: Http) {
  }
  getPoi(filter?: Filtre): Observable<Poi[]> {

    var poisUrl = this.poisUrl;
    
    if (filter) {
      poisUrl += "?"
      _.forEach(filter, function (value, key) {
        if (value != null && value != "") {
          poisUrl += key + "=" + value + "&";
        }
      })
      console.log(poisUrl);

    }


    return this.http.get(poisUrl).map(res => res.json());
  }

  getPoiId(id: number) {

    var poisUrl = this.poisUrl;
    poisUrl += "/" + id;
    return this.http.get(poisUrl).map(res => res.json());
  }
}

