import {Component} from 'angular2/core';
import {VisitComponent} from './visit.component';
import {PatientsComponent} from './patients.component';
import {RegisterComponent} from './register.component';
import {RouteConfig} from "angular2/router";

@Component({
    selector: 'my-app',
    template: '<visit></visit>' +
    '<patient></patient>',
    directives: [PatientsComponent, VisitComponent]
})

export class AppComponent {

}
