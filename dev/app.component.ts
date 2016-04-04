import {Component} from 'angular2/core';
import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    Router,
    CanActivate,
    RouterOutlet,
    RouterLink
} from 'angular2/router';
import {routerOnActivate} from "angular2/src/router/lifecycle_annotations_impl";
import {HTTP_PROVIDERS} from 'angular2/http';

// Add all operators to Observable
import 'rxjs/Rx';

import {isLoggedin} from "./is-loggedin";
import {Authentication} from "./authentication";
import {Login} from "./login";
import {DashboardComponent} from "./dashboard.component";
import {EquipmentAddComponent} from "./equipment-add.component";
import {EquipmentComponent} from "./equipment.component";
import {PatientComponent} from "./patient.component";
import {VisitComponent} from "./visit.component";
import {PatientRegisterComponent} from "./patient-register.component";
import {StaffComponent} from "./staff.component";
import {StaffRegisterComponent} from "./staff-register.component";
import {ReportComponent} from "./report.component";
import {ReportAddComponent} from "./report-add.component";
import {PrescriptionComponent} from "./prescription.component";
import {PrescriptionAddComponent} from "./prescription-add.component";
import {VitalComponent} from "./vital.component";
import {VitalAddComponent} from "./vital-add.component";
import {HTTPService} from './http.service';
import {PatientUpdateComponent} from "./patient-update.component";

// @CanActivate(() => isLoggedin())

@Component({
    selector: 'my-app',
    directives: [
        ROUTER_DIRECTIVES,
    ],
    providers: [
        HTTPService,
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        Authentication,
        CanActivate,
    ],
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
        path: '/patients/update/:pid',
        name: 'Patient Update',
        component: PatientUpdateComponent,
    },
    {
        path: '/equipment/list',
        name: 'Equipments',
        component: EquipmentComponent,
    },
    {
        path: '/equipment/add',
        name: 'Add Equipment',
        component: EquipmentAddComponent,
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
    {
        path: '/vital/add',
        name: 'Add Vital',
        component: VitalAddComponent,
    },
    {
        path: '/prescription',
        name: 'Prescription',
        component: PrescriptionComponent,
    },
    {
        path: '/prescription/add',
        name: 'Add Prescription',
        component: PrescriptionAddComponent,
    },
])


export class AppComponent {

    constructor(private _auth: Authentication) {

    }
    onLogout() {
        this._auth.logout();
    }
}


