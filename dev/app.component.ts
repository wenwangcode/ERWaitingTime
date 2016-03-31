import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Home} from "./dashboard";
import {Login} from "./login";
import {EquipmentComponent} from "./equipment.component";

@Component({
    selector: 'my-app',
    directives: [EquipmentComponent],
    template: `<equipment></equipment>`
})


export class AppComponent {

}


