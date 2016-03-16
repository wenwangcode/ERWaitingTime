import {Component} from 'angular2/core';
import {VisitComponent} from './visit.component';
import {PatientComponent} from './patient.component';
import {RouteConfig} from "angular2/router";

@Component({
    selector: 'my-app',
    template: '<visit></visit>' +
    '<patient></patient>',
    directives: [PatientComponent, VisitComponent]
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
        component: PatientComponent

    }
])
export class AppComponent {

}
