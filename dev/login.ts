/**
 * Created by Joy on 2016-03-28.
 */
import {Component} from 'angular2/core';
import {Router, CanActivate, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Http, Headers} from "angular2/http";
import {Authentication} from './authentication';
import {HTTPService} from "./http.service";
import {User} from "./user";

@Component({
    selector: 'login',
    directives: [ FORM_DIRECTIVES, NgIf ],
    templateUrl:'/templates/login.html',
    providers: [HTTPService]
})


export class Login {
    form: ControlGroup;
    error: boolean = false;
    constructor(fb: FormBuilder, public auth: Authentication, public router: Router) {
        this.form = fb.group({
            username:  ['', Validators.required],
            password:  ['', Validators.required]
        });
    }

    onSubmit(value: any) {
        this.auth.login(value.username, value.password)
            .subscribe(
                (token: any) => { this.router.navigate(['../Home']); },
                () => { this.error = true; }
            );
    }
    store(unser,pass) {
    localStorage.setItem('uns', unser);
    localStorage.setItem('pws', pass);
        alert("Account successfully registered! Please login.");
}

}