System.register(['angular2/core', 'angular2/router', "./dashboard.component", "./login", "./equipment.component", "./patient.component", "./visit.component", "./patient-register.component", "./staff.component", "./staff-register.component", "./report.component", "./report-add.component"], function(exports_1, context_1) {
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
    var core_1, router_1, dashboard_component_1, login_1, equipment_component_1, patient_component_1, visit_component_1, patient_register_component_1, staff_component_1, staff_register_component_1, report_component_1, report_add_component_1;
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
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4RUE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkE5REQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFdBQVcsRUFBRSw4QkFBOEI7cUJBQzlDLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVDs0QkFDSSxJQUFJLEVBQUUsUUFBUTs0QkFDZCxJQUFJLEVBQUUsT0FBTzs0QkFDYixTQUFTLEVBQUUsYUFBSzs0QkFDaEIsWUFBWSxFQUFFLElBQUk7eUJBQ3JCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxZQUFZOzRCQUNsQixJQUFJLEVBQUUsV0FBVzs0QkFDakIsU0FBUyxFQUFFLHdDQUFrQjt5QkFDaEM7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLFdBQVc7NEJBQ2pCLElBQUksRUFBRSxVQUFVOzRCQUNoQixTQUFTLEVBQUUsb0NBQWdCO3lCQUM5Qjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsb0JBQW9COzRCQUMxQixJQUFJLEVBQUUsc0JBQXNCOzRCQUM1QixTQUFTLEVBQUUscURBQXdCO3lCQUN0Qzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsaUJBQWlCOzRCQUN2QixJQUFJLEVBQUUsb0JBQW9COzRCQUMxQixTQUFTLEVBQUUsaURBQXNCO3lCQUNwQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsaUJBQWlCOzRCQUN2QixJQUFJLEVBQUUsT0FBTzs0QkFDYixTQUFTLEVBQUUsZ0NBQWM7eUJBQzVCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxpQkFBaUI7NEJBQ3ZCLElBQUksRUFBRSxXQUFXOzRCQUNqQixTQUFTLEVBQUUsd0NBQWtCO3lCQUNoQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsUUFBUTs0QkFDZCxJQUFJLEVBQUUsT0FBTzs0QkFDYixTQUFTLEVBQUUsZ0NBQWM7eUJBQzVCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxTQUFTOzRCQUNmLElBQUksRUFBRSxRQUFROzRCQUNkLFNBQVMsRUFBRSxrQ0FBZTt5QkFDN0I7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLGFBQWE7NEJBQ25CLElBQUksRUFBRSxZQUFZOzRCQUNsQixTQUFTLEVBQUUseUNBQWtCO3lCQUNoQztxQkFDSixDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBREEsQUFDQyxJQUFBO1lBREQsdUNBQ0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Q2FuQWN0aXZhdGUsICBSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmt9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge2lzTG9nZ2VkaW59IGZyb20gXCIuL2lzLWxvZ2dlZGluXCI7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9ufSBmcm9tIFwiLi9hdXRoZW50aWNhdGlvblwiO1xuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7TG9naW59IGZyb20gXCIuL2xvZ2luXCI7XG5pbXBvcnQge0VxdWlwbWVudENvbXBvbmVudH0gZnJvbSBcIi4vZXF1aXBtZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQYXRpZW50Q29tcG9uZW50fSBmcm9tIFwiLi9wYXRpZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWaXNpdENvbXBvbmVudH0gZnJvbSBcIi4vdmlzaXQuY29tcG9uZW50XCI7XG5pbXBvcnQge1BhdGllbnRSZWdpc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vcGF0aWVudC1yZWdpc3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7cm91dGVyT25BY3RpdmF0ZX0gZnJvbSBcImFuZ3VsYXIyL3NyYy9yb3V0ZXIvbGlmZWN5Y2xlX2Fubm90YXRpb25zX2ltcGxcIjtcbmltcG9ydCB7U3RhZmZDb21wb25lbnR9IGZyb20gXCIuL3N0YWZmLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTdGFmZlJlZ2lzdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9zdGFmZi1yZWdpc3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVwb3J0Q29tcG9uZW50fSBmcm9tIFwiLi9yZXBvcnQuY29tcG9uZW50XCI7XG5pbXBvcnQge1JlcG9ydEFkZENvbXBvbmVudH0gZnJvbSBcIi4vcmVwb3J0LWFkZC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvbG9naW4nLFxuICAgICAgICBuYW1lOiAnTG9naW4nLFxuICAgICAgICBjb21wb25lbnQ6IExvZ2luLFxuICAgICAgICB1c2VBc0RlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9kYXNoYm9hcmQnLFxuICAgICAgICBuYW1lOiAnRGFzaGJvYXJkJyxcbiAgICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcGF0aWVudHMnLFxuICAgICAgICBuYW1lOiAnUGF0aWVudHMnLFxuICAgICAgICBjb21wb25lbnQ6IFBhdGllbnRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcGF0aWVudHMvcmVnaXN0ZXInLFxuICAgICAgICBuYW1lOiAnUGF0aWVudCBSZWdpc3RyYXRpb24nLFxuICAgICAgICBjb21wb25lbnQ6IFBhdGllbnRSZWdpc3RlckNvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9zdGFmZi9yZWdpc3RlcicsXG4gICAgICAgIG5hbWU6ICdTdGFmZiBSZWdpc3RyYXRpb24nLFxuICAgICAgICBjb21wb25lbnQ6IFN0YWZmUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcGF0aWVudHMvdmlzaXQnLFxuICAgICAgICBuYW1lOiAnVmlzaXQnLFxuICAgICAgICBjb21wb25lbnQ6IFZpc2l0Q29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL2VxdWlwbWVudC9saXN0JyxcbiAgICAgICAgbmFtZTogJ0VxdWlwbWVudCcsXG4gICAgICAgIGNvbXBvbmVudDogRXF1aXBtZW50Q29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3N0YWZmJyxcbiAgICAgICAgbmFtZTogJ1N0YWZmJyxcbiAgICAgICAgY29tcG9uZW50OiBTdGFmZkNvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9yZXBvcnQnLFxuICAgICAgICBuYW1lOiAnUmVwb3J0JyxcbiAgICAgICAgY29tcG9uZW50OiBSZXBvcnRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcmVwb3J0L2FkZCcsXG4gICAgICAgIG5hbWU6ICdBZGQgUmVwb3J0JyxcbiAgICAgICAgY29tcG9uZW50OiBSZXBvcnRBZGRDb21wb25lbnQsXG4gICAgfSxcbl0pXG5cblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
