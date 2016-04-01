/**
 * Created by joshua on 2016-03-31.
 */
System.register(['angular2/core', "./http.service", "./patient"], function(exports_1, context_1) {
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
    var core_1, http_service_1, patient_1;
    var PatientRegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (patient_1_1) {
                patient_1 = patient_1_1;
            }],
        execute: function() {
            PatientRegisterComponent = (function () {
                function PatientRegisterComponent(_httpService) {
                    this._httpService = _httpService;
                    this.patients = [];
                }
                PatientRegisterComponent.prototype.preprocessPatientForm = function () {
                    var _this = this;
                    this._httpService.getPQuery().subscribe(function (data) { return _this.next_id = _this.parsePatientPreprocess(data); }, function (err) { return alert(err); }, function () { return console.log("GET patient data preprocessing complete"); });
                    this.patients.push(new patient_1.Patient('test', 'test', this.next_id, '0', '2016-03-31'));
                };
                PatientRegisterComponent.prototype.postPatient = function (p_lname, p_fname, pid, is_male, dob) {
                    this.addPatient(p_lname, p_fname, pid, is_male, dob);
                    this._httpService.post({
                        p_lname: p_lname,
                        p_fname: p_fname,
                        pid: pid,
                        is_male: is_male,
                        dob: dob
                    }, 'patient').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                // ngOnInit() {
                //     this._httpService.getPQuery().subscribe(
                //         data => this.parsePatient(data),
                //         err => alert(err),
                //         () => console.log("complete")
                //     )
                // }
                PatientRegisterComponent.prototype.parsePatientPreprocess = function (json) {
                    var patient_ids = [];
                    var next_id = 0;
                    json.forEach(function (item) {
                        patient_ids.push(item.pid);
                    });
                    for (var i = 0; i < patient_ids.length; i += 1) {
                        if (patient_ids[i] > next_id)
                            next_id = patient_ids[i];
                    }
                    console.log(patient_ids);
                    console.log(next_id + 1);
                    return (next_id + 1);
                };
                PatientRegisterComponent.prototype.parsePatient = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addPatient(item.p_lname, item.p_fname, item.pid, item.is_male, item.dob);
                    });
                };
                PatientRegisterComponent.prototype.addPatient = function (p_lname, p_fname, pid, is_male, dob) {
                    var patient = new patient_1.Patient(p_lname, p_fname, pid, is_male, dob);
                    this.patients.push(patient);
                };
                PatientRegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'patient-register',
                        templateUrl: 'templates/patient-register.component.html',
                        providers: [http_service_1.HTTPService,],
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], PatientRegisterComponent);
                return PatientRegisterComponent;
            }());
            exports_1("PatientRegisterComponent", PatientRegisterComponent);
        }
    }
});
//# sourceMappingURL=patient-register.component.js.map