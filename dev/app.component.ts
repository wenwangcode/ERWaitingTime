import {Component} from 'angular2/core';
import {VisitComponent} from './visit.component';
import {PatientComponent} from './patient.component';
import {RouteConfig} from "angular2/router";

@Component({
    selector: 'my-app',
    //template: '<patient></patient>, <visit></visit>',
    directives: [PatientComponent, VisitComponent]
})

@RouteConfig([
    {
        path: "/visit",
        name: "visit",
        template: '<patient></patient>',
        component: VisitComponent,
        useAsDefault: true
    },
    {
        path: "/patients",
        name: "patient",
        template: '<visit></visit>',
        component: PatientComponent

    }
])
export class AppComponent {

}
