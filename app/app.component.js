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
//# sourceMappingURL=app.component.js.map