import {Component} from 'angular2/core';
import {VisitComponent} from './visit.component';
import {PatientsComponent} from './patients.component';
import {RouteConfig} from "angular2/router";

@Component({
    selector: 'my-app',
    template: '<visit></visit>' +
    '<patient></patient>',
    directives: [PatientsComponent, VisitComponent]
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
