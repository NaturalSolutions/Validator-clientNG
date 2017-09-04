import { Injectable } from '@angular/core';
import { Http ,Headers,RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Poi } from 'app/contributions/poi/poi';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import 'rxjs/add/operator/catch';
@Injectable()
export class PoiService {
  private poisUrl = "http://localhost:3000/";

  constructor(private http: Http) {
  }

  getPoi(filter?): Observable<Poi[]> {
    var poisUrl = this.poisUrl+"pois";
    if (filter) {
      poisUrl += "?"
      _.forEach(filter, function (value, key) {
        if (value != null && value != "") {
          poisUrl += key + "=" + value + "&";
        }
      })
    }
    return this.http.get(poisUrl).map(res => res.json());
  }
  getPoiId(id: number) {
    var poisUrl = this.poisUrl+"pois";
    poisUrl += "/" + id;
    return this.http.get(poisUrl).map(res => res.json());
  }
  createPoi(poi : Poi) {
    var poisUrl = this.poisUrl;
      let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
    return this.http.post(poisUrl,JSON.stringify(poi),options)
    .map(res => res.json())
     .catch(this.handleError);
    
  }
  updatePoi(id: number,param : any) {
    var poisUrl = this.poisUrl+"pois/"+id;
      let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
    return this.http.patch(poisUrl,JSON.stringify(param),options)
    .map(res => res.json())
     .catch(this.handleError);
  }
  	getComments(poiId){
       var poisUrl = this.poisUrl;
		return this.http.get(poisUrl+"comments/?poiId=" + poiId)
			.map(res => res.json());
	}
  	deleteComments(commentId){
       var poisUrl = this.poisUrl;
		return this.http.delete(poisUrl+"comments/" + commentId)
			.map(res => res.json());
	}
   updateCom(comments) {
    var poisUrl = this.poisUrl+"comments/";
      let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
    return this.http.post(poisUrl,JSON.stringify(comments),options)
    .map(res => res.json())
     .catch(this.handleError);
  }
  private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}

