System.register(['angular2/core', 'angular2/router', 'angular2/http', 'rxjs/Rx', "./login", "./dashboard.component", "./equipment-add.component", "./equipment.component", "./patient.component", "./visit.component", "./patient-register.component", "./staff.component", "./staff-register.component", "./report.component", "./report-add.component", "./prescription.component", "./prescription-add.component", "./vital.component", "./vital-add.component", './http.service'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, login_1, dashboard_component_1, equipment_add_component_1, equipment_component_1, patient_component_1, visit_component_1, patient_register_component_1, staff_component_1, staff_register_component_1, report_component_1, report_add_component_1, prescription_component_1, prescription_add_component_1, vital_component_1, vital_add_component_1, http_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (equipment_add_component_1_1) {
                equipment_add_component_1 = equipment_add_component_1_1;
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
            },
            function (vital_add_component_1_1) {
                vital_add_component_1 = vital_add_component_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            http_service_1.HTTPService,
                            http_1.HTTP_PROVIDERS,
                        ],
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
                            name: 'Equipments',
                            component: equipment_component_1.EquipmentComponent,
                        },
                        {
                            path: '/equipment/add',
                            name: 'Add Equipment',
                            component: equipment_add_component_1.EquipmentAddComponent,
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
                            path: '/vital/add',
                            name: 'Add Vital',
                            component: vital_add_component_1.VitalAddComponent,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkhBO2dCQUFBO2dCQUNBLENBQUM7Z0JBM0ZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixTQUFTLEVBQUU7NEJBQ1AsMEJBQVc7NEJBQ1gscUJBQWM7eUJBQ2pCO3dCQUNELFdBQVcsRUFBRSw4QkFBOEI7cUJBQzlDLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVDs0QkFDSSxJQUFJLEVBQUUsUUFBUTs0QkFDZCxJQUFJLEVBQUUsT0FBTzs0QkFDYixTQUFTLEVBQUUsYUFBSzs0QkFDaEIsWUFBWSxFQUFFLElBQUk7eUJBQ3JCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxZQUFZOzRCQUNsQixJQUFJLEVBQUUsV0FBVzs0QkFDakIsU0FBUyxFQUFFLHdDQUFrQjt5QkFDaEM7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLFdBQVc7NEJBQ2pCLElBQUksRUFBRSxVQUFVOzRCQUNoQixTQUFTLEVBQUUsb0NBQWdCO3lCQUM5Qjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsb0JBQW9COzRCQUMxQixJQUFJLEVBQUUsc0JBQXNCOzRCQUM1QixTQUFTLEVBQUUscURBQXdCO3lCQUN0Qzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsaUJBQWlCOzRCQUN2QixJQUFJLEVBQUUsb0JBQW9COzRCQUMxQixTQUFTLEVBQUUsaURBQXNCO3lCQUNwQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsaUJBQWlCOzRCQUN2QixJQUFJLEVBQUUsT0FBTzs0QkFDYixTQUFTLEVBQUUsZ0NBQWM7eUJBQzVCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxpQkFBaUI7NEJBQ3ZCLElBQUksRUFBRSxZQUFZOzRCQUNsQixTQUFTLEVBQUUsd0NBQWtCO3lCQUNoQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsZ0JBQWdCOzRCQUN0QixJQUFJLEVBQUUsZUFBZTs0QkFDckIsU0FBUyxFQUFFLCtDQUFxQjt5QkFDbkM7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLFFBQVE7NEJBQ2QsSUFBSSxFQUFFLE9BQU87NEJBQ2IsU0FBUyxFQUFFLGdDQUFjO3lCQUM1Qjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsU0FBUzs0QkFDZixJQUFJLEVBQUUsUUFBUTs0QkFDZCxTQUFTLEVBQUUsa0NBQWU7eUJBQzdCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxhQUFhOzRCQUNuQixJQUFJLEVBQUUsWUFBWTs0QkFDbEIsU0FBUyxFQUFFLHlDQUFrQjt5QkFDaEM7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLFNBQVM7NEJBQ2YsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsU0FBUyxFQUFFLGdDQUFjO3lCQUM1Qjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsWUFBWTs0QkFDbEIsSUFBSSxFQUFFLFdBQVc7NEJBQ2pCLFNBQVMsRUFBRSx1Q0FBaUI7eUJBQy9CO3dCQUNEOzRCQUNJLElBQUksRUFBRSxlQUFlOzRCQUNyQixJQUFJLEVBQUUsY0FBYzs0QkFDcEIsU0FBUyxFQUFFLDhDQUFxQjt5QkFDbkM7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLG1CQUFtQjs0QkFDekIsSUFBSSxFQUFFLGtCQUFrQjs0QkFDeEIsU0FBUyxFQUFFLHFEQUF3Qjt5QkFDdEM7cUJBQ0osQ0FBQzs7Z0NBQUE7Z0JBSUYsbUJBQUM7WUFBRCxDQURBLEFBQ0MsSUFBQTtZQURELHVDQUNDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7XG4gICAgUm91dGVDb25maWcsXG4gICAgUk9VVEVSX0RJUkVDVElWRVMsXG4gICAgUm91dGVyLFxuICAgIENhbkFjdGl2YXRlLFxuICAgIFJvdXRlck91dGxldCxcbiAgICBSb3V0ZXJMaW5rXG59IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge3JvdXRlck9uQWN0aXZhdGV9IGZyb20gXCJhbmd1bGFyMi9zcmMvcm91dGVyL2xpZmVjeWNsZV9hbm5vdGF0aW9uc19pbXBsXCI7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuLy8gQWRkIGFsbCBvcGVyYXRvcnMgdG8gT2JzZXJ2YWJsZVxuaW1wb3J0ICdyeGpzL1J4JztcblxuaW1wb3J0IHtpc0xvZ2dlZGlufSBmcm9tIFwiLi9pcy1sb2dnZWRpblwiO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbn0gZnJvbSBcIi4vYXV0aGVudGljYXRpb25cIjtcbmltcG9ydCB7TG9naW59IGZyb20gXCIuL2xvZ2luXCI7XG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFcXVpcG1lbnRBZGRDb21wb25lbnR9IGZyb20gXCIuL2VxdWlwbWVudC1hZGQuY29tcG9uZW50XCI7XG5pbXBvcnQge0VxdWlwbWVudENvbXBvbmVudH0gZnJvbSBcIi4vZXF1aXBtZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQYXRpZW50Q29tcG9uZW50fSBmcm9tIFwiLi9wYXRpZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWaXNpdENvbXBvbmVudH0gZnJvbSBcIi4vdmlzaXQuY29tcG9uZW50XCI7XG5pbXBvcnQge1BhdGllbnRSZWdpc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vcGF0aWVudC1yZWdpc3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7U3RhZmZDb21wb25lbnR9IGZyb20gXCIuL3N0YWZmLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTdGFmZlJlZ2lzdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9zdGFmZi1yZWdpc3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVwb3J0Q29tcG9uZW50fSBmcm9tIFwiLi9yZXBvcnQuY29tcG9uZW50XCI7XG5pbXBvcnQge1JlcG9ydEFkZENvbXBvbmVudH0gZnJvbSBcIi4vcmVwb3J0LWFkZC5jb21wb25lbnRcIjtcbmltcG9ydCB7UHJlc2NyaXB0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9wcmVzY3JpcHRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQge1ByZXNjcmlwdGlvbkFkZENvbXBvbmVudH0gZnJvbSBcIi4vcHJlc2NyaXB0aW9uLWFkZC5jb21wb25lbnRcIjtcbmltcG9ydCB7Vml0YWxDb21wb25lbnR9IGZyb20gXCIuL3ZpdGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWaXRhbEFkZENvbXBvbmVudH0gZnJvbSBcIi4vdml0YWwtYWRkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBIVFRQU2VydmljZSxcbiAgICAgICAgSFRUUF9QUk9WSURFUlMsXG4gICAgXSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hcHAuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHtcbiAgICAgICAgcGF0aDogJy9sb2dpbicsXG4gICAgICAgIG5hbWU6ICdMb2dpbicsXG4gICAgICAgIGNvbXBvbmVudDogTG9naW4sXG4gICAgICAgIHVzZUFzRGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL2Rhc2hib2FyZCcsXG4gICAgICAgIG5hbWU6ICdEYXNoYm9hcmQnLFxuICAgICAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9wYXRpZW50cycsXG4gICAgICAgIG5hbWU6ICdQYXRpZW50cycsXG4gICAgICAgIGNvbXBvbmVudDogUGF0aWVudENvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9wYXRpZW50cy9yZWdpc3RlcicsXG4gICAgICAgIG5hbWU6ICdQYXRpZW50IFJlZ2lzdHJhdGlvbicsXG4gICAgICAgIGNvbXBvbmVudDogUGF0aWVudFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3N0YWZmL3JlZ2lzdGVyJyxcbiAgICAgICAgbmFtZTogJ1N0YWZmIFJlZ2lzdHJhdGlvbicsXG4gICAgICAgIGNvbXBvbmVudDogU3RhZmZSZWdpc3RlckNvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9wYXRpZW50cy92aXNpdCcsXG4gICAgICAgIG5hbWU6ICdWaXNpdCcsXG4gICAgICAgIGNvbXBvbmVudDogVmlzaXRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvZXF1aXBtZW50L2xpc3QnLFxuICAgICAgICBuYW1lOiAnRXF1aXBtZW50cycsXG4gICAgICAgIGNvbXBvbmVudDogRXF1aXBtZW50Q29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL2VxdWlwbWVudC9hZGQnLFxuICAgICAgICBuYW1lOiAnQWRkIEVxdWlwbWVudCcsXG4gICAgICAgIGNvbXBvbmVudDogRXF1aXBtZW50QWRkQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3N0YWZmJyxcbiAgICAgICAgbmFtZTogJ1N0YWZmJyxcbiAgICAgICAgY29tcG9uZW50OiBTdGFmZkNvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9yZXBvcnQnLFxuICAgICAgICBuYW1lOiAnUmVwb3J0JyxcbiAgICAgICAgY29tcG9uZW50OiBSZXBvcnRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcmVwb3J0L2FkZCcsXG4gICAgICAgIG5hbWU6ICdBZGQgUmVwb3J0JyxcbiAgICAgICAgY29tcG9uZW50OiBSZXBvcnRBZGRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvdml0YWxzJyxcbiAgICAgICAgbmFtZTogJ1ZpdGFscycsXG4gICAgICAgIGNvbXBvbmVudDogVml0YWxDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvdml0YWwvYWRkJyxcbiAgICAgICAgbmFtZTogJ0FkZCBWaXRhbCcsXG4gICAgICAgIGNvbXBvbmVudDogVml0YWxBZGRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcHJlc2NyaXB0aW9uJyxcbiAgICAgICAgbmFtZTogJ1ByZXNjcmlwdGlvbicsXG4gICAgICAgIGNvbXBvbmVudDogUHJlc2NyaXB0aW9uQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3ByZXNjcmlwdGlvbi9hZGQnLFxuICAgICAgICBuYW1lOiAnQWRkIFByZXNjcmlwdGlvbicsXG4gICAgICAgIGNvbXBvbmVudDogUHJlc2NyaXB0aW9uQWRkQ29tcG9uZW50LFxuICAgIH0sXG5dKVxuXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
