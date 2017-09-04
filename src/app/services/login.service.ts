import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {
    private apiUrl = "http://localhost:4000";
   
    constructor(private http: Http) { }

    login(email: string, password: string) {
        return this.http.post(this.apiUrl + '/users/authenticate', { email: email, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.token));
                    return true;
                }
                return false
            });
    }

isconnected(){
    if (localStorage.getItem('currentUser')) {
            return true;
        }
return false
}
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}