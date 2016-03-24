/**
 * Created by Joy on 2016-03-21.
 */
// app.ts
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Home} from './home.ts';
import {Login} from './login.ts';
import {VisitComponent} from "./dev/visit.component.ts";



@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: `

    <router-outlet></router-outlet>

  `

})
@RouteConfig([
    { path: '/', redirectTo: ['Login'] },
    { path: '/home', as: 'Home', component: Home },
    { path: '/login', as: 'Login', component: Login }
])
export class App {
    constructor() {}
}