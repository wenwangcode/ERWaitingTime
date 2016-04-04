/**
 * Created by joshua on 2016-03-31.
 */
System.register(['angular2/core', 'angular2/router', "./http.service", "./patient"], function(exports_1, context_1) {
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
    var core_1, router_1, http_service_1, patient_1, router_2;
    var PatientRegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (patient_1_1) {
                patient_1 = patient_1_1;
            }],
        execute: function() {
            PatientRegisterComponent = (function () {
                function PatientRegisterComponent(_httpService, _router) {
                    this._httpService = _httpService;
                    this._router = _router;
                    this.errorMessages = {
                        p_lname: '',
                        p_fname: '',
                        year: '',
                        month: '',
                        day: '',
                    };
                }
                PatientRegisterComponent.prototype.ngOnInit = function () {
                    // this.preprocessPatientForm();
                    this.getPatients();
                };
                PatientRegisterComponent.prototype.getPatients = function () {
                    var _this = this;
                    this._httpService.getAllFromTable('patient')
                        .subscribe(function (patients) { return _this.patients = patients; }, function (error) { return _this.errorMessage = error; });
                };
                // preprocessPatientForm() {
                //     this._httpService.getPQuery().subscribe(
                //         data => this.getPatientNextId(data),
                //         err => alert(err),
                //         () => console.log("GET patient data preprocessing complete")
                //     );
                // }
                PatientRegisterComponent.prototype.checkNull = function () {
                    var params = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        params[_i - 0] = arguments[_i];
                    }
                    var nullDetected = false;
                    params.forEach(function (item) {
                        if (item == '') {
                            nullDetected = true;
                        }
                    });
                    if (nullDetected) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                PatientRegisterComponent.prototype.postPatient = function (p_lname, p_fname, year, month, day) {
                    var _this = this;
                    this.errorMessage = '';
                    if (this.checkNull.apply(this, arguments)) {
                        console.log("missing arguments");
                        this.errorMessage = 'missing';
                        return;
                    }
                    var dob = year + '-' + month + '-' + day;
                    this._httpService.post({
                        pid: this.next_id,
                        p_lname: p_lname,
                        p_fname: p_fname,
                        is_male: this.sex,
                        dob: dob
                    }, 'patient').subscribe(function (data) { return console.log(data); }, function (error) { return _this.errorMessage = error; }, function () { return console.log("complete"); });
                };
                // assigns a unique new patient id (called the pid in the data model)
                // getPatientNextId(json){
                //     let patient_ids: number[] = [];
                //     let next_id: number = 0;
                //     json.forEach( item => {
                //         patient_ids.push(item.pid);
                //     });
                //     for (let i = 0; i < patient_ids.length; i += 1) {
                //         if (patient_ids[i] > next_id) next_id = patient_ids[i]
                //     }
                //     console.log(next_id + 1);
                //     this.next_id = next_id + 1;
                // }
                // parsePatient(json){
                //     json.forEach( item => {
                //         this.addPatient(
                //             item.p_lname,
                //             item.p_fname,
                //             item.pid,
                //             item.is_male,
                //             item.dob
                //         );
                //     })
                // }
                PatientRegisterComponent.prototype.addPatient = function (p_lname, p_fname, pid, is_male, dob) {
                    var patient = new patient_1.Patient(p_lname, p_fname, pid, is_male, dob);
                    if (!this.findPatient(patient)) {
                        this.patients.push(patient);
                        return true;
                    }
                    return false;
                };
                PatientRegisterComponent.prototype.findPatient = function (patient) {
                    for (var i = 0; i < this.patients.length; i += 1) {
                        if (patient.pid == this.patients[0].pid)
                            return true;
                    }
                    return false;
                };
                PatientRegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'patient-register',
                        templateUrl: 'templates/patient-register.component.html',
                        providers: [
                            http_service_1.HTTPService,
                            router_2.RouterLink
                        ],
                        directives: [router_2.RouterLink],
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService, router_1.Router])
                ], PatientRegisterComponent);
                return PatientRegisterComponent;
            }());
            exports_1("PatientRegisterComponent", PatientRegisterComponent);
        }
    }
});
//# sourceMappingURL=patient-register.component.js.map