import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
 
@Injectable()
export class BadgesService {

 private _url = "http://localhost:4000/badges";

  constructor(private _http: Http) {
  }

  getBadges() : Observable <any[]> {
    return this._http.get(this._url).map(res => res.json());
  }

  getBadge(badgeId) {
    return this._http.get(this._url + "/" + badgeId)
      .map(res => res.json());
  }

  
}
