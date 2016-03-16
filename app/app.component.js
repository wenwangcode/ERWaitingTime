System.register(['angular2/core', './visit.component', './patient.component', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, visit_component_1, patient_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (visit_component_1_1) {
                visit_component_1 = visit_component_1_1;
            },
            function (patient_component_1_1) {
                patient_component_1 = patient_component_1_1;
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
                        directives: [patient_component_1.PatientComponent, visit_component_1.VisitComponent]
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
                            component: patient_component_1.PatientComponent
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF0QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLGlCQUFpQjs0QkFDM0IscUJBQXFCO3dCQUNyQixVQUFVLEVBQUUsQ0FBQyxvQ0FBZ0IsRUFBRSxnQ0FBYyxDQUFDO3FCQUNqRCxDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1Q7NEJBQ0ksSUFBSSxFQUFFLFFBQVE7NEJBQ2QsUUFBUSxFQUFFLHFCQUFxQjs0QkFDL0IsU0FBUyxFQUFFLGdDQUFjO3lCQUM1Qjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsV0FBVzs0QkFDakIsUUFBUSxFQUFFLGlCQUFpQjs0QkFDM0IsU0FBUyxFQUFFLG9DQUFnQjt5QkFFOUI7cUJBQ0osQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VmlzaXRDb21wb25lbnR9IGZyb20gJy4vdmlzaXQuY29tcG9uZW50JztcbmltcG9ydCB7UGF0aWVudENvbXBvbmVudH0gZnJvbSAnLi9wYXRpZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge1JvdXRlQ29uZmlnfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogJzx2aXNpdD48L3Zpc2l0PicgK1xuICAgICc8cGF0aWVudD48L3BhdGllbnQ+JyxcbiAgICBkaXJlY3RpdmVzOiBbUGF0aWVudENvbXBvbmVudCwgVmlzaXRDb21wb25lbnRdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHtcbiAgICAgICAgcGF0aDogXCIvdmlzaXRcIixcbiAgICAgICAgdGVtcGxhdGU6ICc8cGF0aWVudD48L3BhdGllbnQ+JyxcbiAgICAgICAgY29tcG9uZW50OiBWaXNpdENvbXBvbmVudFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIi9wYXRpZW50c1wiLFxuICAgICAgICB0ZW1wbGF0ZTogJzx2aXNpdD48L3Zpc2l0PicsXG4gICAgICAgIGNvbXBvbmVudDogUGF0aWVudENvbXBvbmVudFxuXG4gICAgfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
