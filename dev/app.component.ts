import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {DashboardComponent} from "./dashboard.component";
import {Login} from "./login";
import {EquipmentComponent} from "./equipment.component";
import {PatientComponent} from "./patient.component";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'templates/app.component.html'
})

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/patients',
        name: 'Patients',
        component: PatientComponent,
    },
])


export class AppComponent {

}


