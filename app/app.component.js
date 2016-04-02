System.register(['angular2/core', 'angular2/router', "./dashboard.component", "./equipment.component", "./patient.component", "./visit.component", "./patient-register.component"], function(exports_1, context_1) {
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
    var core_1, router_1, dashboard_component_1, equipment_component_1, patient_component_1, visit_component_1, patient_register_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (equipment_component_1_1) {
                equipment_component_1 = equipment_component_1_1;
            },
            function (patient_component_1_1) {
                patient_component_1 = patient_component_1_1;
            },
            function (visit_component_1_1) {
                visit_component_1 = visit_component_1_1;
            },
            function (patient_register_component_1_1) {
                patient_register_component_1 = patient_register_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'templates/app.component.html'
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/patients',
                            name: 'Patients',
                            component: patient_component_1.PatientComponent,
                        },
                        {
                            path: '/patients/register',
                            name: 'Patient Registration',
                            component: patient_register_component_1.PatientRegisterComponent,
                        },
                        {
                            path: '/patients/visit',
                            name: 'Visit',
                            component: visit_component_1.VisitComponent,
                        },
                        {
                            path: '/equipment/list',
                            name: 'Equipment',
                            component: equipment_component_1.EquipmentComponent,
                        },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4Q0E7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF0Q0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFdBQVcsRUFBRSw4QkFBOEI7cUJBQzlDLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVDs0QkFDSSxJQUFJLEVBQUUsWUFBWTs0QkFDbEIsSUFBSSxFQUFFLFdBQVc7NEJBQ2pCLFNBQVMsRUFBRSx3Q0FBa0I7NEJBQzdCLFlBQVksRUFBRSxJQUFJO3lCQUNyQjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsV0FBVzs0QkFDakIsSUFBSSxFQUFFLFVBQVU7NEJBQ2hCLFNBQVMsRUFBRSxvQ0FBZ0I7eUJBQzlCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxvQkFBb0I7NEJBQzFCLElBQUksRUFBRSxzQkFBc0I7NEJBQzVCLFNBQVMsRUFBRSxxREFBd0I7eUJBQ3RDO3dCQUNEOzRCQUNJLElBQUksRUFBRSxpQkFBaUI7NEJBQ3ZCLElBQUksRUFBRSxPQUFPOzRCQUNiLFNBQVMsRUFBRSxnQ0FBYzt5QkFDNUI7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLGlCQUFpQjs0QkFDdkIsSUFBSSxFQUFFLFdBQVc7NEJBQ2pCLFNBQVMsRUFBRSx3Q0FBa0I7eUJBQ2hDO3FCQUNKLENBQUM7O2dDQUFBO2dCQUtGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMb2dpbn0gZnJvbSBcIi4vbG9naW5cIjtcbmltcG9ydCB7RXF1aXBtZW50Q29tcG9uZW50fSBmcm9tIFwiLi9lcXVpcG1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge1BhdGllbnRDb21wb25lbnR9IGZyb20gXCIuL3BhdGllbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge1Zpc2l0Q29tcG9uZW50fSBmcm9tIFwiLi92aXNpdC5jb21wb25lbnRcIjtcbmltcG9ydCB7UGF0aWVudFJlZ2lzdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9wYXRpZW50LXJlZ2lzdGVyLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hcHAuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHtcbiAgICAgICAgcGF0aDogJy9kYXNoYm9hcmQnLFxuICAgICAgICBuYW1lOiAnRGFzaGJvYXJkJyxcbiAgICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgICAgIHVzZUFzRGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3BhdGllbnRzJyxcbiAgICAgICAgbmFtZTogJ1BhdGllbnRzJyxcbiAgICAgICAgY29tcG9uZW50OiBQYXRpZW50Q29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3BhdGllbnRzL3JlZ2lzdGVyJyxcbiAgICAgICAgbmFtZTogJ1BhdGllbnQgUmVnaXN0cmF0aW9uJyxcbiAgICAgICAgY29tcG9uZW50OiBQYXRpZW50UmVnaXN0ZXJDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcGF0aWVudHMvdmlzaXQnLFxuICAgICAgICBuYW1lOiAnVmlzaXQnLFxuICAgICAgICBjb21wb25lbnQ6IFZpc2l0Q29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL2VxdWlwbWVudC9saXN0JyxcbiAgICAgICAgbmFtZTogJ0VxdWlwbWVudCcsXG4gICAgICAgIGNvbXBvbmVudDogRXF1aXBtZW50Q29tcG9uZW50LFxuICAgIH0sXG5dKVxuXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
