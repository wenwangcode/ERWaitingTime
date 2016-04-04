System.register(['angular2/core', 'angular2/router', 'angular2/http', 'rxjs/Rx', "./authentication", "./login", "./dashboard.component", "./equipment-add.component", "./equipment.component", "./patient.component", "./visit.component", "./patient-register.component", "./staff.component", "./staff-register.component", "./report.component", "./report-add.component", "./prescription.component", "./prescription-add.component", "./vital.component", "./vital-add.component", './http.service'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, authentication_1, login_1, dashboard_component_1, equipment_add_component_1, equipment_component_1, patient_component_1, visit_component_1, patient_register_component_1, staff_component_1, staff_register_component_1, report_component_1, report_add_component_1, prescription_component_1, prescription_add_component_1, vital_component_1, vital_add_component_1, http_service_1;
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
            function (authentication_1_1) {
                authentication_1 = authentication_1_1;
            },
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
            // @CanActivate(() => isLoggedin())
            AppComponent = (function () {
                function AppComponent(_auth) {
                    this._auth = _auth;
                }
                AppComponent.prototype.onLogout = function () {
                    this._auth.logout();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                        ],
                        providers: [
                            http_service_1.HTTPService,
                            http_1.HTTP_PROVIDERS,
                            authentication_1.Authentication,
                            router_1.CanActivate,
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
                    __metadata('design:paramtypes', [authentication_1.Authentication])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1xuICAgIFJvdXRlQ29uZmlnLFxuICAgIFJPVVRFUl9ESVJFQ1RJVkVTLFxuICAgIFJvdXRlcixcbiAgICBDYW5BY3RpdmF0ZSxcbiAgICBSb3V0ZXJPdXRsZXQsXG4gICAgUm91dGVyTGlua1xufSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtyb3V0ZXJPbkFjdGl2YXRlfSBmcm9tIFwiYW5ndWxhcjIvc3JjL3JvdXRlci9saWZlY3ljbGVfYW5ub3RhdGlvbnNfaW1wbFwiO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbi8vIEFkZCBhbGwgb3BlcmF0b3JzIHRvIE9ic2VydmFibGVcbmltcG9ydCAncnhqcy9SeCc7XG5cbmltcG9ydCB7aXNMb2dnZWRpbn0gZnJvbSBcIi4vaXMtbG9nZ2VkaW5cIjtcbmltcG9ydCB7QXV0aGVudGljYXRpb259IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uXCI7XG5pbXBvcnQge0xvZ2lufSBmcm9tIFwiLi9sb2dpblwiO1xuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7RXF1aXBtZW50QWRkQ29tcG9uZW50fSBmcm9tIFwiLi9lcXVpcG1lbnQtYWRkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFcXVpcG1lbnRDb21wb25lbnR9IGZyb20gXCIuL2VxdWlwbWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7UGF0aWVudENvbXBvbmVudH0gZnJvbSBcIi4vcGF0aWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7VmlzaXRDb21wb25lbnR9IGZyb20gXCIuL3Zpc2l0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQYXRpZW50UmVnaXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL3BhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge1N0YWZmQ29tcG9uZW50fSBmcm9tIFwiLi9zdGFmZi5jb21wb25lbnRcIjtcbmltcG9ydCB7U3RhZmZSZWdpc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vc3RhZmYtcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge1JlcG9ydENvbXBvbmVudH0gZnJvbSBcIi4vcmVwb3J0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZXBvcnRBZGRDb21wb25lbnR9IGZyb20gXCIuL3JlcG9ydC1hZGQuY29tcG9uZW50XCI7XG5pbXBvcnQge1ByZXNjcmlwdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vcHJlc2NyaXB0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcmVzY3JpcHRpb25BZGRDb21wb25lbnR9IGZyb20gXCIuL3ByZXNjcmlwdGlvbi1hZGQuY29tcG9uZW50XCI7XG5pbXBvcnQge1ZpdGFsQ29tcG9uZW50fSBmcm9tIFwiLi92aXRhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7Vml0YWxBZGRDb21wb25lbnR9IGZyb20gXCIuL3ZpdGFsLWFkZC5jb21wb25lbnRcIjtcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcblxuLy8gQENhbkFjdGl2YXRlKCgpID0+IGlzTG9nZ2VkaW4oKSlcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgUk9VVEVSX0RJUkVDVElWRVMsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSFRUUFNlcnZpY2UsXG4gICAgICAgIEhUVFBfUFJPVklERVJTLFxuICAgICAgICBBdXRoZW50aWNhdGlvbixcbiAgICAgICAgQ2FuQWN0aXZhdGUsXG4gICAgXSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hcHAuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHtcbiAgICAgICAgcGF0aDogJy9sb2dpbicsXG4gICAgICAgIG5hbWU6ICdMb2dpbicsXG4gICAgICAgIGNvbXBvbmVudDogTG9naW4sXG4gICAgICAgIHVzZUFzRGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL2Rhc2hib2FyZCcsXG4gICAgICAgIG5hbWU6ICdEYXNoYm9hcmQnLFxuICAgICAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9wYXRpZW50cycsXG4gICAgICAgIG5hbWU6ICdQYXRpZW50cycsXG4gICAgICAgIGNvbXBvbmVudDogUGF0aWVudENvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9wYXRpZW50cy9yZWdpc3RlcicsXG4gICAgICAgIG5hbWU6ICdQYXRpZW50IFJlZ2lzdHJhdGlvbicsXG4gICAgICAgIGNvbXBvbmVudDogUGF0aWVudFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3N0YWZmL3JlZ2lzdGVyJyxcbiAgICAgICAgbmFtZTogJ1N0YWZmIFJlZ2lzdHJhdGlvbicsXG4gICAgICAgIGNvbXBvbmVudDogU3RhZmZSZWdpc3RlckNvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9wYXRpZW50cy92aXNpdCcsXG4gICAgICAgIG5hbWU6ICdWaXNpdCcsXG4gICAgICAgIGNvbXBvbmVudDogVmlzaXRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvZXF1aXBtZW50L2xpc3QnLFxuICAgICAgICBuYW1lOiAnRXF1aXBtZW50cycsXG4gICAgICAgIGNvbXBvbmVudDogRXF1aXBtZW50Q29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL2VxdWlwbWVudC9hZGQnLFxuICAgICAgICBuYW1lOiAnQWRkIEVxdWlwbWVudCcsXG4gICAgICAgIGNvbXBvbmVudDogRXF1aXBtZW50QWRkQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3N0YWZmJyxcbiAgICAgICAgbmFtZTogJ1N0YWZmJyxcbiAgICAgICAgY29tcG9uZW50OiBTdGFmZkNvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9yZXBvcnQnLFxuICAgICAgICBuYW1lOiAnUmVwb3J0JyxcbiAgICAgICAgY29tcG9uZW50OiBSZXBvcnRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcmVwb3J0L2FkZCcsXG4gICAgICAgIG5hbWU6ICdBZGQgUmVwb3J0JyxcbiAgICAgICAgY29tcG9uZW50OiBSZXBvcnRBZGRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvdml0YWxzJyxcbiAgICAgICAgbmFtZTogJ1ZpdGFscycsXG4gICAgICAgIGNvbXBvbmVudDogVml0YWxDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvdml0YWwvYWRkJyxcbiAgICAgICAgbmFtZTogJ0FkZCBWaXRhbCcsXG4gICAgICAgIGNvbXBvbmVudDogVml0YWxBZGRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcHJlc2NyaXB0aW9uJyxcbiAgICAgICAgbmFtZTogJ1ByZXNjcmlwdGlvbicsXG4gICAgICAgIGNvbXBvbmVudDogUHJlc2NyaXB0aW9uQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3ByZXNjcmlwdGlvbi9hZGQnLFxuICAgICAgICBuYW1lOiAnQWRkIFByZXNjcmlwdGlvbicsXG4gICAgICAgIGNvbXBvbmVudDogUHJlc2NyaXB0aW9uQWRkQ29tcG9uZW50LFxuICAgIH0sXG5dKVxuXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aDogQXV0aGVudGljYXRpb24pIHtcblxuICAgIH1cbiAgICBvbkxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5fYXV0aC5sb2dvdXQoKTtcbiAgICB9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
