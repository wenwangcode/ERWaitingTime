System.register(['angular2/core', 'angular2/router', "./dashboard.component", "./login", "./equipment.component", "./patient.component", "./visit.component", "./patient-register.component", "./staff.component", "./staff-register.component", "./report.component", "./report-add.component", "./prescription.component", "./prescription-add.component", "./vital.component"], function(exports_1, context_1) {
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
    var core_1, router_1, dashboard_component_1, login_1, equipment_component_1, patient_component_1, visit_component_1, patient_register_component_1, staff_component_1, staff_register_component_1, report_component_1, report_add_component_1, prescription_component_1, prescription_add_component_1, vital_component_1;
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
            function (prescription_component_1_1) {
                prescription_component_1 = prescription_component_1_1;
            },
            function (prescription_add_component_1_1) {
                prescription_add_component_1 = prescription_add_component_1_1;
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
                        {
                            path: '/prescription',
                            name: 'Prescription',
                            component: prescription_component_1.PrescriptionComponent,
                        },
                        {
                            path: '/prescription/add',
                            name: 'Add Prescription',
                            component: prescription_add_component_1.PrescriptionAddComponent,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnR0E7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkE3RUQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFdBQVcsRUFBRSw4QkFBOEI7cUJBQzlDLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVDs0QkFDSSxJQUFJLEVBQUUsUUFBUTs0QkFDZCxJQUFJLEVBQUUsT0FBTzs0QkFDYixTQUFTLEVBQUUsYUFBSzs0QkFDaEIsWUFBWSxFQUFFLElBQUk7eUJBQ3JCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxZQUFZOzRCQUNsQixJQUFJLEVBQUUsV0FBVzs0QkFDakIsU0FBUyxFQUFFLHdDQUFrQjt5QkFDaEM7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLFdBQVc7NEJBQ2pCLElBQUksRUFBRSxVQUFVOzRCQUNoQixTQUFTLEVBQUUsb0NBQWdCO3lCQUM5Qjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsb0JBQW9COzRCQUMxQixJQUFJLEVBQUUsc0JBQXNCOzRCQUM1QixTQUFTLEVBQUUscURBQXdCO3lCQUN0Qzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsaUJBQWlCOzRCQUN2QixJQUFJLEVBQUUsb0JBQW9COzRCQUMxQixTQUFTLEVBQUUsaURBQXNCO3lCQUNwQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsaUJBQWlCOzRCQUN2QixJQUFJLEVBQUUsT0FBTzs0QkFDYixTQUFTLEVBQUUsZ0NBQWM7eUJBQzVCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxpQkFBaUI7NEJBQ3ZCLElBQUksRUFBRSxXQUFXOzRCQUNqQixTQUFTLEVBQUUsd0NBQWtCO3lCQUNoQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsUUFBUTs0QkFDZCxJQUFJLEVBQUUsT0FBTzs0QkFDYixTQUFTLEVBQUUsZ0NBQWM7eUJBQzVCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxTQUFTOzRCQUNmLElBQUksRUFBRSxRQUFROzRCQUNkLFNBQVMsRUFBRSxrQ0FBZTt5QkFDN0I7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLGFBQWE7NEJBQ25CLElBQUksRUFBRSxZQUFZOzRCQUNsQixTQUFTLEVBQUUseUNBQWtCO3lCQUNoQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsU0FBUzs0QkFDZixJQUFJLEVBQUUsUUFBUTs0QkFDZCxTQUFTLEVBQUUsZ0NBQWM7eUJBQzVCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxlQUFlOzRCQUNyQixJQUFJLEVBQUUsY0FBYzs0QkFDcEIsU0FBUyxFQUFFLDhDQUFxQjt5QkFDbkM7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLG1CQUFtQjs0QkFDekIsSUFBSSxFQUFFLGtCQUFrQjs0QkFDeEIsU0FBUyxFQUFFLHFEQUF3Qjt5QkFDdEM7cUJBQ0osQ0FBQzs7Z0NBQUE7Z0JBSUYsbUJBQUM7WUFBRCxDQURBLEFBQ0MsSUFBQTtZQURELHVDQUNDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0NhbkFjdGl2YXRlLCAgUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtpc0xvZ2dlZGlufSBmcm9tIFwiLi9pcy1sb2dnZWRpblwiO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbn0gZnJvbSBcIi4vYXV0aGVudGljYXRpb25cIjtcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi9kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQge0xvZ2lufSBmcm9tIFwiLi9sb2dpblwiO1xuaW1wb3J0IHtFcXVpcG1lbnRDb21wb25lbnR9IGZyb20gXCIuL2VxdWlwbWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7UGF0aWVudENvbXBvbmVudH0gZnJvbSBcIi4vcGF0aWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7VmlzaXRDb21wb25lbnR9IGZyb20gXCIuL3Zpc2l0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQYXRpZW50UmVnaXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL3BhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge3JvdXRlck9uQWN0aXZhdGV9IGZyb20gXCJhbmd1bGFyMi9zcmMvcm91dGVyL2xpZmVjeWNsZV9hbm5vdGF0aW9uc19pbXBsXCI7XG5pbXBvcnQge1N0YWZmQ29tcG9uZW50fSBmcm9tIFwiLi9zdGFmZi5jb21wb25lbnRcIjtcbmltcG9ydCB7U3RhZmZSZWdpc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vc3RhZmYtcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge1JlcG9ydENvbXBvbmVudH0gZnJvbSBcIi4vcmVwb3J0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZXBvcnRBZGRDb21wb25lbnR9IGZyb20gXCIuL3JlcG9ydC1hZGQuY29tcG9uZW50XCI7XG5pbXBvcnQge1ByZXNjcmlwdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vcHJlc2NyaXB0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcmVzY3JpcHRpb25BZGRDb21wb25lbnR9IGZyb20gXCIuL3ByZXNjcmlwdGlvbi1hZGQuY29tcG9uZW50XCI7XG5pbXBvcnQge1ZpdGFsQ29tcG9uZW50fSBmcm9tIFwiLi92aXRhbC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvbG9naW4nLFxuICAgICAgICBuYW1lOiAnTG9naW4nLFxuICAgICAgICBjb21wb25lbnQ6IExvZ2luLFxuICAgICAgICB1c2VBc0RlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9kYXNoYm9hcmQnLFxuICAgICAgICBuYW1lOiAnRGFzaGJvYXJkJyxcbiAgICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcGF0aWVudHMnLFxuICAgICAgICBuYW1lOiAnUGF0aWVudHMnLFxuICAgICAgICBjb21wb25lbnQ6IFBhdGllbnRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcGF0aWVudHMvcmVnaXN0ZXInLFxuICAgICAgICBuYW1lOiAnUGF0aWVudCBSZWdpc3RyYXRpb24nLFxuICAgICAgICBjb21wb25lbnQ6IFBhdGllbnRSZWdpc3RlckNvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9zdGFmZi9yZWdpc3RlcicsXG4gICAgICAgIG5hbWU6ICdTdGFmZiBSZWdpc3RyYXRpb24nLFxuICAgICAgICBjb21wb25lbnQ6IFN0YWZmUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcGF0aWVudHMvdmlzaXQnLFxuICAgICAgICBuYW1lOiAnVmlzaXQnLFxuICAgICAgICBjb21wb25lbnQ6IFZpc2l0Q29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL2VxdWlwbWVudC9saXN0JyxcbiAgICAgICAgbmFtZTogJ0VxdWlwbWVudCcsXG4gICAgICAgIGNvbXBvbmVudDogRXF1aXBtZW50Q29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3N0YWZmJyxcbiAgICAgICAgbmFtZTogJ1N0YWZmJyxcbiAgICAgICAgY29tcG9uZW50OiBTdGFmZkNvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9yZXBvcnQnLFxuICAgICAgICBuYW1lOiAnUmVwb3J0JyxcbiAgICAgICAgY29tcG9uZW50OiBSZXBvcnRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcmVwb3J0L2FkZCcsXG4gICAgICAgIG5hbWU6ICdBZGQgUmVwb3J0JyxcbiAgICAgICAgY29tcG9uZW50OiBSZXBvcnRBZGRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvdml0YWxzJyxcbiAgICAgICAgbmFtZTogJ1ZpdGFscycsXG4gICAgICAgIGNvbXBvbmVudDogVml0YWxDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcHJlc2NyaXB0aW9uJyxcbiAgICAgICAgbmFtZTogJ1ByZXNjcmlwdGlvbicsXG4gICAgICAgIGNvbXBvbmVudDogUHJlc2NyaXB0aW9uQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3ByZXNjcmlwdGlvbi9hZGQnLFxuICAgICAgICBuYW1lOiAnQWRkIFByZXNjcmlwdGlvbicsXG4gICAgICAgIGNvbXBvbmVudDogUHJlc2NyaXB0aW9uQWRkQ29tcG9uZW50LFxuICAgIH0sXG5dKVxuXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
