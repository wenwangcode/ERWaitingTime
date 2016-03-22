// home.ts
import {Component} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {Authentication} from './authentication.ts';
import {isLoggedin}  from './is-loggedin.ts';

@Component({
    selector: 'home',
    directives: [],
    templateUrl: '../view/dashboard.html'
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