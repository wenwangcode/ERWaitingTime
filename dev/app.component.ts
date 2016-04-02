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
import {StaffComponent} from "./staff.component";
import {StaffRegisterComponent} from "./staff-register.component";
import {ReportComponent} from "./report.component";
import {ReportAddComponent} from "./report-add.component";
import {VitalComponent} from "./vital.component";

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
        path: '/staff/register',
        name: 'Staff Registration',
        component: StaffRegisterComponent,
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
    {
        path: '/staff',
        name: 'Staff',
        component: StaffComponent,
    },
    {
        path: '/report',
        name: 'Report',
        component: ReportComponent,
    },
    {
        path: '/report/add',
        name: 'Add Report',
        component: ReportAddComponent,
    },
    {
        path: '/vitals',
        name: 'Vitals',
        component: VitalComponent,
    },
])


export class AppComponent {
}


