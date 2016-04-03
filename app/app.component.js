System.register(['angular2/core', 'angular2/router', "./dashboard.component", "./login", "./equipment-add.component", "./equipment.component", "./patient.component", "./visit.component", "./patient-register.component", "./staff.component", "./staff-register.component", "./report.component", "./report-add.component", "./prescription.component", "./prescription-add.component", "./vital.component"], function(exports_1, context_1) {
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
    var core_1, router_1, dashboard_component_1, login_1, equipment_add_component_1, equipment_component_1, patient_component_1, visit_component_1, patient_register_component_1, staff_component_1, staff_register_component_1, report_component_1, report_add_component_1, prescription_component_1, prescription_add_component_1, vital_component_1;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzR0E7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFsRkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFdBQVcsRUFBRSw4QkFBOEI7cUJBQzlDLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVDs0QkFDSSxJQUFJLEVBQUUsUUFBUTs0QkFDZCxJQUFJLEVBQUUsT0FBTzs0QkFDYixTQUFTLEVBQUUsYUFBSzs0QkFDaEIsWUFBWSxFQUFFLElBQUk7eUJBQ3JCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxZQUFZOzRCQUNsQixJQUFJLEVBQUUsV0FBVzs0QkFDakIsU0FBUyxFQUFFLHdDQUFrQjt5QkFDaEM7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLFdBQVc7NEJBQ2pCLElBQUksRUFBRSxVQUFVOzRCQUNoQixTQUFTLEVBQUUsb0NBQWdCO3lCQUM5Qjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsb0JBQW9COzRCQUMxQixJQUFJLEVBQUUsc0JBQXNCOzRCQUM1QixTQUFTLEVBQUUscURBQXdCO3lCQUN0Qzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsaUJBQWlCOzRCQUN2QixJQUFJLEVBQUUsb0JBQW9COzRCQUMxQixTQUFTLEVBQUUsaURBQXNCO3lCQUNwQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsaUJBQWlCOzRCQUN2QixJQUFJLEVBQUUsT0FBTzs0QkFDYixTQUFTLEVBQUUsZ0NBQWM7eUJBQzVCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxpQkFBaUI7NEJBQ3ZCLElBQUksRUFBRSxZQUFZOzRCQUNsQixTQUFTLEVBQUUsd0NBQWtCO3lCQUNoQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsZ0JBQWdCOzRCQUN0QixJQUFJLEVBQUUsZUFBZTs0QkFDckIsU0FBUyxFQUFFLCtDQUFxQjt5QkFDbkM7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLFFBQVE7NEJBQ2QsSUFBSSxFQUFFLE9BQU87NEJBQ2IsU0FBUyxFQUFFLGdDQUFjO3lCQUM1Qjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsU0FBUzs0QkFDZixJQUFJLEVBQUUsUUFBUTs0QkFDZCxTQUFTLEVBQUUsa0NBQWU7eUJBQzdCO3dCQUNEOzRCQUNJLElBQUksRUFBRSxhQUFhOzRCQUNuQixJQUFJLEVBQUUsWUFBWTs0QkFDbEIsU0FBUyxFQUFFLHlDQUFrQjt5QkFDaEM7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLFNBQVM7NEJBQ2YsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsU0FBUyxFQUFFLGdDQUFjO3lCQUM1Qjt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsZUFBZTs0QkFDckIsSUFBSSxFQUFFLGNBQWM7NEJBQ3BCLFNBQVMsRUFBRSw4Q0FBcUI7eUJBQ25DO3dCQUNEOzRCQUNJLElBQUksRUFBRSxtQkFBbUI7NEJBQ3pCLElBQUksRUFBRSxrQkFBa0I7NEJBQ3hCLFNBQVMsRUFBRSxxREFBd0I7eUJBQ3RDO3FCQUNKLENBQUM7O2dDQUFBO2dCQUlGLG1CQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCx1Q0FDQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtDYW5BY3RpdmF0ZSwgIFJvdXRlck91dGxldCwgUm91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7aXNMb2dnZWRpbn0gZnJvbSBcIi4vaXMtbG9nZ2VkaW5cIjtcbmltcG9ydCB7QXV0aGVudGljYXRpb259IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uXCI7XG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMb2dpbn0gZnJvbSBcIi4vbG9naW5cIjtcbmltcG9ydCB7RXF1aXBtZW50QWRkQ29tcG9uZW50fSBmcm9tIFwiLi9lcXVpcG1lbnQtYWRkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFcXVpcG1lbnRDb21wb25lbnR9IGZyb20gXCIuL2VxdWlwbWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7UGF0aWVudENvbXBvbmVudH0gZnJvbSBcIi4vcGF0aWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7VmlzaXRDb21wb25lbnR9IGZyb20gXCIuL3Zpc2l0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQYXRpZW50UmVnaXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL3BhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge3JvdXRlck9uQWN0aXZhdGV9IGZyb20gXCJhbmd1bGFyMi9zcmMvcm91dGVyL2xpZmVjeWNsZV9hbm5vdGF0aW9uc19pbXBsXCI7XG5pbXBvcnQge1N0YWZmQ29tcG9uZW50fSBmcm9tIFwiLi9zdGFmZi5jb21wb25lbnRcIjtcbmltcG9ydCB7U3RhZmZSZWdpc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vc3RhZmYtcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge1JlcG9ydENvbXBvbmVudH0gZnJvbSBcIi4vcmVwb3J0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZXBvcnRBZGRDb21wb25lbnR9IGZyb20gXCIuL3JlcG9ydC1hZGQuY29tcG9uZW50XCI7XG5pbXBvcnQge1ByZXNjcmlwdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vcHJlc2NyaXB0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcmVzY3JpcHRpb25BZGRDb21wb25lbnR9IGZyb20gXCIuL3ByZXNjcmlwdGlvbi1hZGQuY29tcG9uZW50XCI7XG5pbXBvcnQge1ZpdGFsQ29tcG9uZW50fSBmcm9tIFwiLi92aXRhbC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvbG9naW4nLFxuICAgICAgICBuYW1lOiAnTG9naW4nLFxuICAgICAgICBjb21wb25lbnQ6IExvZ2luLFxuICAgICAgICB1c2VBc0RlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9kYXNoYm9hcmQnLFxuICAgICAgICBuYW1lOiAnRGFzaGJvYXJkJyxcbiAgICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcGF0aWVudHMnLFxuICAgICAgICBuYW1lOiAnUGF0aWVudHMnLFxuICAgICAgICBjb21wb25lbnQ6IFBhdGllbnRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcGF0aWVudHMvcmVnaXN0ZXInLFxuICAgICAgICBuYW1lOiAnUGF0aWVudCBSZWdpc3RyYXRpb24nLFxuICAgICAgICBjb21wb25lbnQ6IFBhdGllbnRSZWdpc3RlckNvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9zdGFmZi9yZWdpc3RlcicsXG4gICAgICAgIG5hbWU6ICdTdGFmZiBSZWdpc3RyYXRpb24nLFxuICAgICAgICBjb21wb25lbnQ6IFN0YWZmUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcGF0aWVudHMvdmlzaXQnLFxuICAgICAgICBuYW1lOiAnVmlzaXQnLFxuICAgICAgICBjb21wb25lbnQ6IFZpc2l0Q29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL2VxdWlwbWVudC9saXN0JyxcbiAgICAgICAgbmFtZTogJ0VxdWlwbWVudHMnLFxuICAgICAgICBjb21wb25lbnQ6IEVxdWlwbWVudENvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9lcXVpcG1lbnQvYWRkJyxcbiAgICAgICAgbmFtZTogJ0FkZCBFcXVpcG1lbnQnLFxuICAgICAgICBjb21wb25lbnQ6IEVxdWlwbWVudEFkZENvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9zdGFmZicsXG4gICAgICAgIG5hbWU6ICdTdGFmZicsXG4gICAgICAgIGNvbXBvbmVudDogU3RhZmZDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcmVwb3J0JyxcbiAgICAgICAgbmFtZTogJ1JlcG9ydCcsXG4gICAgICAgIGNvbXBvbmVudDogUmVwb3J0Q29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3JlcG9ydC9hZGQnLFxuICAgICAgICBuYW1lOiAnQWRkIFJlcG9ydCcsXG4gICAgICAgIGNvbXBvbmVudDogUmVwb3J0QWRkQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3ZpdGFscycsXG4gICAgICAgIG5hbWU6ICdWaXRhbHMnLFxuICAgICAgICBjb21wb25lbnQ6IFZpdGFsQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3ByZXNjcmlwdGlvbicsXG4gICAgICAgIG5hbWU6ICdQcmVzY3JpcHRpb24nLFxuICAgICAgICBjb21wb25lbnQ6IFByZXNjcmlwdGlvbkNvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9wcmVzY3JpcHRpb24vYWRkJyxcbiAgICAgICAgbmFtZTogJ0FkZCBQcmVzY3JpcHRpb24nLFxuICAgICAgICBjb21wb25lbnQ6IFByZXNjcmlwdGlvbkFkZENvbXBvbmVudCxcbiAgICB9LFxuXSlcblxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
