import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Home} from "./dashboard";
import {Login} from "./login";
import {EquipmentComponent} from "./equipment.component";

@Component({ 
    selector: 'my-app', 
    directives: [ROUTER_DIRECTIVES], 
    template: `<router-outlet></router-outlet>` })  

@RouteConfig([ 
    { path: '/', redirectTo: ['Login'] }, 
    { path: '/dev/home', as: 'Home', component: Home }, 
    { path: '/dev/login', as: 'Login', component: Login }, 
    { path: '/dev/equipment.component', as: 'Equip', component: EquipmentComponent } ])



export class AppComponent {

}


