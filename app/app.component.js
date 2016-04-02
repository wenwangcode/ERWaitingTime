System.register(['angular2/core', 'angular2/router', "./dashboard.component", "./login", "./equipment.component", "./patient.component", "./visit.component", "./patient-register.component", "./staff.component", "./staff-register.component", "./report.component", "./report-add.component", "./vital.component"], function(exports_1, context_1) {
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
    var core_1, router_1, dashboard_component_1, login_1, equipment_component_1, patient_component_1, visit_component_1, patient_register_component_1, staff_component_1, staff_register_component_1, report_component_1, report_add_component_1, vital_component_1;
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
            function (login_1_1) {
                login_1 = login_1_1;
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
            },
            function (staff_component_1_1) {
                staff_component_1 = staff_component_1_1;
            },
            function (staff_register_component_1_1) {
                staff_register_component_1 = staff_register_component_1_1;
            },
            function (report_component_1_1) {
                report_component_1 = report_component_1_1;
            },
            function (report_add_component_1_1) {
                report_add_component_1 = report_add_component_1_1;
            },
            function (vital_component_1_1) {
                vital_component_1 = vital_component_1_1;
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
                            path: '/login',
                            name: 'Login',
                            component: login_1.Login,
                            useAsDefault: true
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
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
                            path: '/staff/register',
                            name: 'Staff Registration',
                            component: staff_register_component_1.StaffRegisterComponent,
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
                        {
                            path: '/staff',
                            name: 'Staff',
                            component: staff_component_1.StaffComponent,
                        },
                        {
                            path: '/report',
                            name: 'Report',
                            component: report_component_1.ReportComponent,
                        },
                        {
                            path: '/report/add',
                            name: 'Add Report',
                            component: report_add_component_1.ReportAddComponent,
                        },
                        {
                            path: '/vitals',
                            name: 'Vitals',
                            component: vital_component_1.VitalComponent,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvRkE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFuRUQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFdBQVcsRUFBRSw4QkFBOEI7cUJBQzlDLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVDs0QkFDSSxJQUFJLEVBQUUsUUFBUTs0QkFDZCxJQUFJLEVBQUUsT0FBTzs0QkFDYixTQUFTLEVBQUUsYUFBSzs0QkFDaEIsWUFBWSxFQUFFLElBQUk7eUJBQ3JCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxZQUFZOzRCQUNsQixJQUFJLEVBQUUsV0FBVzs0QkFDakIsU0FBUyxFQUFFLHdDQUFrQjt5QkFDaEM7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLFdBQVc7NEJBQ2pCLElBQUksRUFBRSxVQUFVOzRCQUNoQixTQUFTLEVBQUUsb0NBQWdCO3lCQUM5Qjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsb0JBQW9COzRCQUMxQixJQUFJLEVBQUUsc0JBQXNCOzRCQUM1QixTQUFTLEVBQUUscURBQXdCO3lCQUN0Qzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsaUJBQWlCOzRCQUN2QixJQUFJLEVBQUUsb0JBQW9COzRCQUMxQixTQUFTLEVBQUUsaURBQXNCO3lCQUNwQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsaUJBQWlCOzRCQUN2QixJQUFJLEVBQUUsT0FBTzs0QkFDYixTQUFTLEVBQUUsZ0NBQWM7eUJBQzVCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxpQkFBaUI7NEJBQ3ZCLElBQUksRUFBRSxXQUFXOzRCQUNqQixTQUFTLEVBQUUsd0NBQWtCO3lCQUNoQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsUUFBUTs0QkFDZCxJQUFJLEVBQUUsT0FBTzs0QkFDYixTQUFTLEVBQUUsZ0NBQWM7eUJBQzVCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxTQUFTOzRCQUNmLElBQUksRUFBRSxRQUFROzRCQUNkLFNBQVMsRUFBRSxrQ0FBZTt5QkFDN0I7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLGFBQWE7NEJBQ25CLElBQUksRUFBRSxZQUFZOzRCQUNsQixTQUFTLEVBQUUseUNBQWtCO3lCQUNoQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsU0FBUzs0QkFDZixJQUFJLEVBQUUsUUFBUTs0QkFDZCxTQUFTLEVBQUUsZ0NBQWM7eUJBQzVCO3FCQUNKLENBQUM7O2dDQUFBO2dCQUlGLG1CQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCx1Q0FDQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtDYW5BY3RpdmF0ZSwgIFJvdXRlck91dGxldCwgUm91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7aXNMb2dnZWRpbn0gZnJvbSBcIi4vaXMtbG9nZ2VkaW5cIjtcbmltcG9ydCB7QXV0aGVudGljYXRpb259IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uXCI7XG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMb2dpbn0gZnJvbSBcIi4vbG9naW5cIjtcbmltcG9ydCB7RXF1aXBtZW50Q29tcG9uZW50fSBmcm9tIFwiLi9lcXVpcG1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge1BhdGllbnRDb21wb25lbnR9IGZyb20gXCIuL3BhdGllbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge1Zpc2l0Q29tcG9uZW50fSBmcm9tIFwiLi92aXNpdC5jb21wb25lbnRcIjtcbmltcG9ydCB7UGF0aWVudFJlZ2lzdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9wYXRpZW50LXJlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtyb3V0ZXJPbkFjdGl2YXRlfSBmcm9tIFwiYW5ndWxhcjIvc3JjL3JvdXRlci9saWZlY3ljbGVfYW5ub3RhdGlvbnNfaW1wbFwiO1xuaW1wb3J0IHtTdGFmZkNvbXBvbmVudH0gZnJvbSBcIi4vc3RhZmYuY29tcG9uZW50XCI7XG5pbXBvcnQge1N0YWZmUmVnaXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL3N0YWZmLXJlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZXBvcnRDb21wb25lbnR9IGZyb20gXCIuL3JlcG9ydC5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVwb3J0QWRkQ29tcG9uZW50fSBmcm9tIFwiLi9yZXBvcnQtYWRkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWaXRhbENvbXBvbmVudH0gZnJvbSBcIi4vdml0YWwuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2FwcC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gICAge1xuICAgICAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICAgICAgbmFtZTogJ0xvZ2luJyxcbiAgICAgICAgY29tcG9uZW50OiBMb2dpbixcbiAgICAgICAgdXNlQXNEZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvZGFzaGJvYXJkJyxcbiAgICAgICAgbmFtZTogJ0Rhc2hib2FyZCcsXG4gICAgICAgIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3BhdGllbnRzJyxcbiAgICAgICAgbmFtZTogJ1BhdGllbnRzJyxcbiAgICAgICAgY29tcG9uZW50OiBQYXRpZW50Q29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3BhdGllbnRzL3JlZ2lzdGVyJyxcbiAgICAgICAgbmFtZTogJ1BhdGllbnQgUmVnaXN0cmF0aW9uJyxcbiAgICAgICAgY29tcG9uZW50OiBQYXRpZW50UmVnaXN0ZXJDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvc3RhZmYvcmVnaXN0ZXInLFxuICAgICAgICBuYW1lOiAnU3RhZmYgUmVnaXN0cmF0aW9uJyxcbiAgICAgICAgY29tcG9uZW50OiBTdGFmZlJlZ2lzdGVyQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3BhdGllbnRzL3Zpc2l0JyxcbiAgICAgICAgbmFtZTogJ1Zpc2l0JyxcbiAgICAgICAgY29tcG9uZW50OiBWaXNpdENvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9lcXVpcG1lbnQvbGlzdCcsXG4gICAgICAgIG5hbWU6ICdFcXVpcG1lbnQnLFxuICAgICAgICBjb21wb25lbnQ6IEVxdWlwbWVudENvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9zdGFmZicsXG4gICAgICAgIG5hbWU6ICdTdGFmZicsXG4gICAgICAgIGNvbXBvbmVudDogU3RhZmZDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcmVwb3J0JyxcbiAgICAgICAgbmFtZTogJ1JlcG9ydCcsXG4gICAgICAgIGNvbXBvbmVudDogUmVwb3J0Q29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3JlcG9ydC9hZGQnLFxuICAgICAgICBuYW1lOiAnQWRkIFJlcG9ydCcsXG4gICAgICAgIGNvbXBvbmVudDogUmVwb3J0QWRkQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3ZpdGFscycsXG4gICAgICAgIG5hbWU6ICdWaXRhbHMnLFxuICAgICAgICBjb21wb25lbnQ6IFZpdGFsQ29tcG9uZW50LFxuICAgIH0sXG5dKVxuXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
