System.register(['angular2/core', 'angular2/router', 'angular2/http', 'rxjs/Rx', "./authentication", "./login", "./dashboard.component", "./equipment-add.component", "./equipment.component", "./patient.component", "./visit.component", "./patient-register.component", "./staff.component", "./staff-register.component", "./report.component", "./report-add.component", "./prescription.component", "./prescription-add.component", "./vital.component", "./vital-add.component", './http.service', "./patient-update.component"], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, authentication_1, login_1, dashboard_component_1, equipment_add_component_1, equipment_component_1, patient_component_1, visit_component_1, patient_register_component_1, staff_component_1, staff_register_component_1, report_component_1, report_add_component_1, prescription_component_1, prescription_add_component_1, vital_component_1, vital_add_component_1, http_service_1, patient_update_component_1;
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
            },
            function (patient_update_component_1_1) {
                patient_update_component_1 = patient_update_component_1_1;
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
                            router_1.ROUTER_PROVIDERS,
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
                            path: '/patients/update/:pid',
                            name: 'Patient Update',
                            component: patient_update_component_1.PatientUpdateComponent,
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

//# sourceMappingURL=data:application/json;base64,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U0FBUyxFQUFFLHFEQUF3Qjt5QkFDdEM7cUJBQ0osQ0FBQzs7Z0NBQUE7Z0JBV0YsbUJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHVDQVFDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7XG4gICAgUm91dGVDb25maWcsXG4gICAgUk9VVEVSX0RJUkVDVElWRVMsXG4gICAgUk9VVEVSX1BST1ZJREVSUyxcbiAgICBSb3V0ZXIsXG4gICAgQ2FuQWN0aXZhdGUsXG4gICAgUm91dGVyT3V0bGV0LFxuICAgIFJvdXRlckxpbmtcbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7cm91dGVyT25BY3RpdmF0ZX0gZnJvbSBcImFuZ3VsYXIyL3NyYy9yb3V0ZXIvbGlmZWN5Y2xlX2Fubm90YXRpb25zX2ltcGxcIjtcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG4vLyBBZGQgYWxsIG9wZXJhdG9ycyB0byBPYnNlcnZhYmxlXG5pbXBvcnQgJ3J4anMvUngnO1xuXG5pbXBvcnQge2lzTG9nZ2VkaW59IGZyb20gXCIuL2lzLWxvZ2dlZGluXCI7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9ufSBmcm9tIFwiLi9hdXRoZW50aWNhdGlvblwiO1xuaW1wb3J0IHtMb2dpbn0gZnJvbSBcIi4vbG9naW5cIjtcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tIFwiLi9kYXNoYm9hcmQuY29tcG9uZW50XCI7XG5pbXBvcnQge0VxdWlwbWVudEFkZENvbXBvbmVudH0gZnJvbSBcIi4vZXF1aXBtZW50LWFkZC5jb21wb25lbnRcIjtcbmltcG9ydCB7RXF1aXBtZW50Q29tcG9uZW50fSBmcm9tIFwiLi9lcXVpcG1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge1BhdGllbnRDb21wb25lbnR9IGZyb20gXCIuL3BhdGllbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge1Zpc2l0Q29tcG9uZW50fSBmcm9tIFwiLi92aXNpdC5jb21wb25lbnRcIjtcbmltcG9ydCB7UGF0aWVudFJlZ2lzdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9wYXRpZW50LXJlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTdGFmZkNvbXBvbmVudH0gZnJvbSBcIi4vc3RhZmYuY29tcG9uZW50XCI7XG5pbXBvcnQge1N0YWZmUmVnaXN0ZXJDb21wb25lbnR9IGZyb20gXCIuL3N0YWZmLXJlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZXBvcnRDb21wb25lbnR9IGZyb20gXCIuL3JlcG9ydC5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVwb3J0QWRkQ29tcG9uZW50fSBmcm9tIFwiLi9yZXBvcnQtYWRkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQcmVzY3JpcHRpb25Db21wb25lbnR9IGZyb20gXCIuL3ByZXNjcmlwdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UHJlc2NyaXB0aW9uQWRkQ29tcG9uZW50fSBmcm9tIFwiLi9wcmVzY3JpcHRpb24tYWRkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWaXRhbENvbXBvbmVudH0gZnJvbSBcIi4vdml0YWwuY29tcG9uZW50XCI7XG5pbXBvcnQge1ZpdGFsQWRkQ29tcG9uZW50fSBmcm9tIFwiLi92aXRhbC1hZGQuY29tcG9uZW50XCI7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5pbXBvcnQge1BhdGllbnRVcGRhdGVDb21wb25lbnR9IGZyb20gXCIuL3BhdGllbnQtdXBkYXRlLmNvbXBvbmVudFwiO1xuXG4vLyBAQ2FuQWN0aXZhdGUoKCkgPT4gaXNMb2dnZWRpbigpKVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgZGlyZWN0aXZlczogW1xuICAgICAgICBST1VURVJfRElSRUNUSVZFUyxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBIVFRQU2VydmljZSxcbiAgICAgICAgSFRUUF9QUk9WSURFUlMsXG4gICAgICAgIFJPVVRFUl9QUk9WSURFUlMsXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uLFxuICAgICAgICBDYW5BY3RpdmF0ZSxcbiAgICBdLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2FwcC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gICAge1xuICAgICAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICAgICAgbmFtZTogJ0xvZ2luJyxcbiAgICAgICAgY29tcG9uZW50OiBMb2dpbixcbiAgICAgICAgdXNlQXNEZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvZGFzaGJvYXJkJyxcbiAgICAgICAgbmFtZTogJ0Rhc2hib2FyZCcsXG4gICAgICAgIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3BhdGllbnRzJyxcbiAgICAgICAgbmFtZTogJ1BhdGllbnRzJyxcbiAgICAgICAgY29tcG9uZW50OiBQYXRpZW50Q29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3BhdGllbnRzL3JlZ2lzdGVyJyxcbiAgICAgICAgbmFtZTogJ1BhdGllbnQgUmVnaXN0cmF0aW9uJyxcbiAgICAgICAgY29tcG9uZW50OiBQYXRpZW50UmVnaXN0ZXJDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvc3RhZmYvcmVnaXN0ZXInLFxuICAgICAgICBuYW1lOiAnU3RhZmYgUmVnaXN0cmF0aW9uJyxcbiAgICAgICAgY29tcG9uZW50OiBTdGFmZlJlZ2lzdGVyQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3BhdGllbnRzL3Zpc2l0JyxcbiAgICAgICAgbmFtZTogJ1Zpc2l0JyxcbiAgICAgICAgY29tcG9uZW50OiBWaXNpdENvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9wYXRpZW50cy91cGRhdGUvOnBpZCcsXG4gICAgICAgIG5hbWU6ICdQYXRpZW50IFVwZGF0ZScsXG4gICAgICAgIGNvbXBvbmVudDogUGF0aWVudFVwZGF0ZUNvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9lcXVpcG1lbnQvbGlzdCcsXG4gICAgICAgIG5hbWU6ICdFcXVpcG1lbnRzJyxcbiAgICAgICAgY29tcG9uZW50OiBFcXVpcG1lbnRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvZXF1aXBtZW50L2FkZCcsXG4gICAgICAgIG5hbWU6ICdBZGQgRXF1aXBtZW50JyxcbiAgICAgICAgY29tcG9uZW50OiBFcXVpcG1lbnRBZGRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvc3RhZmYnLFxuICAgICAgICBuYW1lOiAnU3RhZmYnLFxuICAgICAgICBjb21wb25lbnQ6IFN0YWZmQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3JlcG9ydCcsXG4gICAgICAgIG5hbWU6ICdSZXBvcnQnLFxuICAgICAgICBjb21wb25lbnQ6IFJlcG9ydENvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9yZXBvcnQvYWRkJyxcbiAgICAgICAgbmFtZTogJ0FkZCBSZXBvcnQnLFxuICAgICAgICBjb21wb25lbnQ6IFJlcG9ydEFkZENvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy92aXRhbHMnLFxuICAgICAgICBuYW1lOiAnVml0YWxzJyxcbiAgICAgICAgY29tcG9uZW50OiBWaXRhbENvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy92aXRhbC9hZGQnLFxuICAgICAgICBuYW1lOiAnQWRkIFZpdGFsJyxcbiAgICAgICAgY29tcG9uZW50OiBWaXRhbEFkZENvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9wcmVzY3JpcHRpb24nLFxuICAgICAgICBuYW1lOiAnUHJlc2NyaXB0aW9uJyxcbiAgICAgICAgY29tcG9uZW50OiBQcmVzY3JpcHRpb25Db21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvcHJlc2NyaXB0aW9uL2FkZCcsXG4gICAgICAgIG5hbWU6ICdBZGQgUHJlc2NyaXB0aW9uJyxcbiAgICAgICAgY29tcG9uZW50OiBQcmVzY3JpcHRpb25BZGRDb21wb25lbnQsXG4gICAgfSxcbl0pXG5cblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoOiBBdXRoZW50aWNhdGlvbikge1xuXG4gICAgfVxuICAgIG9uTG9nb3V0KCkge1xuICAgICAgICB0aGlzLl9hdXRoLmxvZ291dCgpO1xuICAgIH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
