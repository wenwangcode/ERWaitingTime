import {Component} from 'angular2/core';
import {VisitComponent} from './visit.component';
import {PatientsComponent} from './patients.component';
import {RegisterComponent} from './register.component';
import {RouteConfig} from "angular2/router";

@Component({
    selector: 'my-app',
    templateUrl: '../view/login.html',
})

@RouteConfig([
    {
        path: "/visit",
        template: '<patient></patient>',
        component: VisitComponent
    },
    {
        path: "/patients",
        template: '<visit></visit>',
        component: PatientsComponent

    }
])
export class AppComponent {

}
