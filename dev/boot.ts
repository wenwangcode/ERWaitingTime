import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {HTTP_PROVIDERS} from 'angular2/http';
<<<<<<< HEAD
import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Authentication} from "./authentication";


bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS,Authentication]);
=======

bootstrap(AppComponent, [HTTP_PROVIDERS]);
>>>>>>> 3f488314d31b679180ad822e64aaccf8a6942a0d
