import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


import { User } from 'app/users/user/user';

@Injectable()
export class RegisterService {


    private apiUrl = "http://localhost:4000";
    constructor(private http: Http) { }

    getAll() {
        return this.http.get(this.apiUrl + '/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get(this.apiUrl + '/users/' + _id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(this.apiUrl + '/users/register', user, this.jwt());
    }

    update(user: User) {
        return this.http.put(this.apiUrl + '/users/' + user.id, user, this.jwt());
    }

    delete(_id: string) {
        return this.http.delete(this.apiUrl + '/users/' + _id, this.jwt());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}