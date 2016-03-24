/**
 * Created by Joy on 2016-03-21.
 */
import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {App} from './app.ts';
import {Authentication} from './authentication.ts';

bootstrap(App, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    Authentication
]);