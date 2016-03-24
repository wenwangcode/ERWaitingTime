import {Component} from 'angular2/core';
import {VisitComponent} from './visit.component';
import {PatientsComponent} from './patients.component';
import {RegisterComponent} from './register.component';
import {ReportComponent} from './report.component';
import {PatientRegisterComponent} from './patientRegister.component';
import {VitalComponent} from './vital.component';
import {RouteConfig} from "angular2/router";

@Component({
    selector: 'my-app',
    template: '<patient></patient>',
    directives: [PatientRegisterComponent]
})

export class AppComponent {

}
