import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {CanActivate,  RouterOutlet, RouterLink} from 'angular2/router';
import {isLoggedin} from "./is-loggedin";
import {Authentication} from "./authentication";
import {DashboardComponent} from "./dashboard.component";
import {Login} from "./login";
import {EquipmentComponent} from "./equipment.component";
import {PatientComponent} from "./patient.component";
import {VisitComponent} from "./visit.component";
import {PatientRegisterComponent} from "./patient-register.component";
import {routerOnActivate} from "angular2/src/router/lifecycle_annotations_impl";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'templates/app.component.html'
})

@RouteConfig([
    {
        path: '/login',
        name: 'Login',
        component: Login,
        useAsDefault: true
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
    },
    {
        path: '/patients',
        name: 'Patients',
        component: PatientComponent,
    },
    {
        path: '/patients/register',
        name: 'Patient Registration',
        component: PatientRegisterComponent,
    },
    {
        path: '/patients/visit',
        name: 'Visit',
        component: VisitComponent,
    },
    {
        path: '/equipment/list',
        name: 'Equipment',
        component: EquipmentComponent,
    },
])


export class AppComponent {
}


