System.register(['angular2/core', './visit.component', './patients.component', "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, visit_component_1, patients_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (visit_component_1_1) {
                visit_component_1 = visit_component_1_1;
            },
            function (patients_component_1_1) {
                patients_component_1 = patients_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<visit></visit>' +
                            '<patient></patient>',
                        directives: [patients_component_1.PatientsComponent, visit_component_1.VisitComponent]
                    }),
                    router_1.RouteConfig([
                        {
                            path: "/visit",
                            template: '<patient></patient>',
                            component: visit_component_1.VisitComponent
                        },
                        {
                            path: "/patients",
                            template: '<visit></visit>',
                            component: patients_component_1.PatientsComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF0QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLGlCQUFpQjs0QkFDM0IscUJBQXFCO3dCQUNyQixVQUFVLEVBQUUsQ0FBQyxzQ0FBaUIsRUFBRSxnQ0FBYyxDQUFDO3FCQUNsRCxDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1Q7NEJBQ0ksSUFBSSxFQUFFLFFBQVE7NEJBQ2QsUUFBUSxFQUFFLHFCQUFxQjs0QkFDL0IsU0FBUyxFQUFFLGdDQUFjO3lCQUM1Qjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsV0FBVzs0QkFDakIsUUFBUSxFQUFFLGlCQUFpQjs0QkFDM0IsU0FBUyxFQUFFLHNDQUFpQjt5QkFFL0I7cUJBQ0osQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VmlzaXRDb21wb25lbnR9IGZyb20gJy4vdmlzaXQuY29tcG9uZW50JztcbmltcG9ydCB7UGF0aWVudHNDb21wb25lbnR9IGZyb20gJy4vcGF0aWVudHMuY29tcG9uZW50JztcbmltcG9ydCB7UmVnaXN0ZXJDb21wb25lbnR9IGZyb20gJy4vcmVnaXN0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiAnPHZpc2l0PjwvdmlzaXQ+JyArXG4gICAgJzxwYXRpZW50PjwvcGF0aWVudD4nLFxuICAgIGRpcmVjdGl2ZXM6IFtQYXRpZW50c0NvbXBvbmVudCwgVmlzaXRDb21wb25lbnRdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHtcbiAgICAgICAgcGF0aDogXCIvdmlzaXRcIixcbiAgICAgICAgdGVtcGxhdGU6ICc8cGF0aWVudD48L3BhdGllbnQ+JyxcbiAgICAgICAgY29tcG9uZW50OiBWaXNpdENvbXBvbmVudFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIi9wYXRpZW50c1wiLFxuICAgICAgICB0ZW1wbGF0ZTogJzx2aXNpdD48L3Zpc2l0PicsXG4gICAgICAgIGNvbXBvbmVudDogUGF0aWVudHNDb21wb25lbnRcblxuICAgIH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
