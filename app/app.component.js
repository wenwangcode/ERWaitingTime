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
                        templateUrl: '../view/login.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFwQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsV0FBVyxFQUFFLG9CQUFvQjtxQkFDcEMsQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNUOzRCQUNJLElBQUksRUFBRSxRQUFROzRCQUNkLFFBQVEsRUFBRSxxQkFBcUI7NEJBQy9CLFNBQVMsRUFBRSxnQ0FBYzt5QkFDNUI7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLFdBQVc7NEJBQ2pCLFFBQVEsRUFBRSxpQkFBaUI7NEJBQzNCLFNBQVMsRUFBRSxzQ0FBaUI7eUJBRS9CO3FCQUNKLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Zpc2l0Q29tcG9uZW50fSBmcm9tICcuL3Zpc2l0LmNvbXBvbmVudCc7XG5pbXBvcnQge1BhdGllbnRzQ29tcG9uZW50fSBmcm9tICcuL3BhdGllbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQge1JlZ2lzdGVyQ29tcG9uZW50fSBmcm9tICcuL3JlZ2lzdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1JvdXRlQ29uZmlnfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4uL3ZpZXcvbG9naW4uaHRtbCcsXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHtcbiAgICAgICAgcGF0aDogXCIvdmlzaXRcIixcbiAgICAgICAgdGVtcGxhdGU6ICc8cGF0aWVudD48L3BhdGllbnQ+JyxcbiAgICAgICAgY29tcG9uZW50OiBWaXNpdENvbXBvbmVudFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIi9wYXRpZW50c1wiLFxuICAgICAgICB0ZW1wbGF0ZTogJzx2aXNpdD48L3Zpc2l0PicsXG4gICAgICAgIGNvbXBvbmVudDogUGF0aWVudHNDb21wb25lbnRcblxuICAgIH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
