System.register(['angular2/platform/browser', "./app.component", 'angular2/http', 'angular2/core', 'angular2/router', "./authentication"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, http_1, core_1, router_1, authentication_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_1_1) {
                authentication_1 = authentication_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                http_1.HTTP_PROVIDERS,
                authentication_1.Authentication]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBLG1CQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLHlCQUFnQjtnQkFDckMsY0FBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUFvQixFQUFDLENBQUM7Z0JBQzNELHFCQUFjO2dCQUNkLCtCQUFjLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSUywgSHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7QXV0aGVudGljYXRpb259IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uXCI7XG5cblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1JPVVRFUl9QUk9WSURFUlMsXG4gICAgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSksXG4gICAgSFRUUF9QUk9WSURFUlMsXG4gICAgQXV0aGVudGljYXRpb25dKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
