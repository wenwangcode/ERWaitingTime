/**
 * Created by Joy on 2016-03-28.
 */
import {Component} from 'angular2/core';
import {Router, CanActivate, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {EquipmentComponent} from "./equipment.component.ts";
import {PatientComponent} from "./patient.component";
import {VisitComponent} from "./visit.component";
import {isLoggedin} from "./is-loggedin";
import {Authentication} from "./authentication";

@Component({
    selector: 'home',
    directives: [],
    template: `
        <h1>this is home page.</h1>
            
`,
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