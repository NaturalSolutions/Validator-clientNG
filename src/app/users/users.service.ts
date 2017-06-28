import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 import { User} from './user/user';
 
@Injectable()
export class UsersService {

 private _url = "http://localhost:3000/users";

  constructor(private _http: Http) {
  }

  getUsers() : Observable <User[]> {
    return this._http.get(this._url).map(res => res.json());
  }

  getUser(userId) {
    return this._http.get(this.getUserUrl(userId))
      .map(res => res.json());
  }

  addUser(user) {
    return this._http.post(this._url, JSON.stringify(user))
      .map(res => res.json());
  }

  updateUser(user) {
    return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
      .map(res => res.json());
  }

  deleteUser(userId) {
    return this._http.delete(this.getUserUrl(userId))
      .map(res => res.json());
  }

  private getUserUrl(userId) {
    return this._url + "/" + userId;
  }
}
