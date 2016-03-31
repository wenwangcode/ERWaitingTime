import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {DashboardComponent} from "./dashboard.component";
import {Login} from "./login";
import {EquipmentComponent} from "./equipment.component";

@Component({
    selector: 'my-app',
    directives: [DashboardComponent],
    template: `<dashboard></dashboard>`
})

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
])


export class AppComponent {

}


