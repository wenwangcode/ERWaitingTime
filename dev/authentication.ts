// authentication.ts
import {Injectable} from 'angular2/core';
import {Observable} from "rxjs/Observable";
import {Headers, Http} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class Authentication {
    token: string;

    constructor(private http:Http) {
    }


    login(username: String, password: String) {
        /*
         var json = JSON.stringify({
         username:username,
         password:password
         });
         var key = "json=";
         var param = key + json;
         var headers = new Headers();
         headers.append('Content-Type', 'application/x-www-form-urlencoded');
         console.log("sending post request");
         return this.http.post('http://localhost:3002/user', param, {headers: headers})
         .map((res : any) => {
         let data = res.json();
         this.token = data.token;
         localStorage.setItem('token', this.token);
         Observable.of('token');
         });
         */
        var un = localStorage.getItem('uns');
        var pw = localStorage.getItem('pws');
        if (username === un && password === pw) {
            this.token = 'token';
            localStorage.setItem('token', this.token);
            return Observable.of('token');
        }

        return Observable.throw('authentication failure');

    }

    logout() {
        /*
         * If we had a login api, we would have done something like this
         return this.http.get(this.config.serverUrl + '/auth/logout', {
         headers: new Headers({
         'x-security-token': this.token
         })
         })
         .map((res : any) => {
         this.token = undefined;
         localStorage.removeItem('token');
         });
         */

        this.token = undefined;
        localStorage.removeItem('token');

        return Observable.of(true);
    }
}