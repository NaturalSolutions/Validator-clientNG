import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import { Poi } from 'app/poi/poi';
import { Filtre } from 'app/filter-poi/filtre';
import 'rxjs/add/operator/map';


@Injectable()
export class PoiService {
    private poisUrl="http://localhost:3000/pois"; 
    
    constructor(private http: Http){
    }
   getPoi (filter? :Filtre) : Observable <Poi[]> {
       
          var poisUrl = this.poisUrl;
      

              if (filter  && filter.typePoi && filter.codePostal  && filter.user)
             poisUrl += "?postal_code=" + filter.codePostal+"&desc=" + filter.typePoi+"&userId=" + filter.user;
             else  if (filter && filter.typePoi)
             poisUrl += "?desc=" + filter.typePoi;
             else if (filter && filter.codePostal)
             poisUrl += "?postal_code=" + filter.codePostal;
             else if (filter &&  filter.user)
             poisUrl += "?userId=" + filter.user;
           
        
      return this.http.get(poisUrl).map(res => res.json());
    }
}

 