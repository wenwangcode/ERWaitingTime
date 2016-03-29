import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {HTTP_PROVIDERS} from 'angular2/http';
<<<<<<< HEAD

bootstrap(AppComponent, [HTTP_PROVIDERS]);
=======
import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Authentication} from "./authentication";


bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS,Authentication]);
>>>>>>> ac10ee06669a4363b67d96c92be35b4890af3b4f
