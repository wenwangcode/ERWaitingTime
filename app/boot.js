System.register(['angular2/platform/browser', "./app.component", 'angular2/http', 'angular2/router', "./authentication"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, http_1, router_1, authentication_1;
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
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_1_1) {
                authentication_1 = authentication_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, authentication_1.Authentication]);
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BLG1CQUFTLENBQUMsNEJBQVksRUFBRSxDQUFDLHlCQUFnQixFQUFFLHFCQUFjLEVBQUMsK0JBQWMsQ0FBQyxDQUFDLENBQUM7WUFDM0UsbUJBQVMsQ0FBQyw0QkFBWSxFQUFFLENBQUMscUJBQWMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7cHJvdmlkZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlMsIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbn0gZnJvbSBcIi4vYXV0aGVudGljYXRpb25cIjtcbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtST1VURVJfUFJPVklERVJTLCBIVFRQX1BST1ZJREVSUyxBdXRoZW50aWNhdGlvbl0pO1xuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW0hUVFBfUFJPVklERVJTXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
