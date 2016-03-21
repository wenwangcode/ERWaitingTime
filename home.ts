/**
 * Created by Joy on 2016-03-21.
 */
import {Component} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {Authentication} from './authentication.ts';
import {isLoggedin}  from './is-loggedin.ts';

@Component({
    selector: 'home',
    directives: [],
    template: `
    <h2>I am logged in,this should be a dash board!</h2>
    <a href="#" (click)="onLogout()">Logout</a>
  `
})

@CanActivate(() => isLoggedin())
export class Home {
    constructor(public auth: Authentication, public router: Router) {}

    onLogout() {
        this.auth.logout()
            .subscribe(
                () => this.router.navigate(['../Login']),
            );
    }
}