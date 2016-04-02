/**
 * Created by Joy on 2016-03-28.
 */
import {Component} from 'angular2/core';
import {Router, CanActivate, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet, RouterLink} from 'angular2/router';
import {isLoggedin} from "./is-loggedin";
import {Authentication} from "./authentication";

@Component({
    selector: 'dashboard',
    templateUrl: 'templates/dashboard.html',
    directives: [RouterLink, ROUTER_DIRECTIVES],
})


@CanActivate(() => isLoggedin())
export class DashboardComponent {
    constructor(public auth: Authentication, public router: Router) {}

    onLogout() {
        this.auth.logout()
            .subscribe(
                () => this.router.navigate(['../Login'])
            );
    }
}