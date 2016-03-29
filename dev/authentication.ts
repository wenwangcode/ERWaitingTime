/**
 * Created by Joy on 2016-03-28.
 */
// authentication.ts
import {Injectable} from 'angular2/core';
import {Headers} from "angular2/http";
import {Http} from 'angular2/http';

@Injectable()
export class Authentication {
    token: string;
    http:Http;

    constructor() {
        this.token = localStorage.getItem('token');
    }

    login(username: String, password: String) {
        fetch('http://localhost:3001/sessions/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, password
            })
        })
            .then(status)
            .then(json)
            .then((response) => {
                // Once we get the JWT in the response, we save it into localStorage
                localStorage.setItem('jwt', response.id_token);
                // and then we redirect the user to the home
                this.router.parent.navigate('/home');
            })
            .catch((error) => {
                alert(error.message);
                console.log(error.message);
            });
    }

    logout() {

         return this.http.get(this.config.serverUrl + '/auth/logout', {
         headers: new Headers({
         'x-security-token': this.token
         })
         })
         .map((res : any) => {
         this.token = undefined;
         localStorage.removeItem('token');
         });


    }
}