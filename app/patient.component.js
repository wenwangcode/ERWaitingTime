System.register(['angular2/core', './Patient', './http.service'], function(exports_1, context_1) {
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
    var core_1, Patient_1, http_service_1;
    var PatientComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Patient_1_1) {
                Patient_1 = Patient_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            PatientComponent = (function () {
                function PatientComponent(httpService) {
                    var _this = this;
                    this.httpService = httpService;
                    this.patients = [];
                    this.httpService.getPQuery().subscribe(function (data) { return _this.parsePatient(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                }
                PatientComponent.prototype.parsePatient = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addPatient(item.p_lname, item.p_fname, item.pid, item.is_male, item.dob);
                    });
                };
                PatientComponent.prototype.addPatient = function (p_lname, p_fname, pid, is_male, dob) {
                    var _this = this;
                    var patient = new Patient_1.Patient(p_lname, p_fname, pid, is_male, dob);
                    this.httpService.postPQuery().subscribe(function (data) { return _this.parsePatient(data); }, function (err) { return alert(err); }, function () { return console.log("post complete"); });
                };
                PatientComponent.prototype.removePatient = function (patient) {
                    var index = this.patients.indexOf(patient);
                    this.patients.splice(index, 1);
                };
                PatientComponent = __decorate([
                    core_1.Component({
                        selector: 'patient',
                        template: "\n        <table>\n            <tr>\n                <th> patient_lastname </th>\n                <th> patient_firstname</th>\n                <th> patient_id</th>\n                <th> patient_gender</th>\n                <th> patient_date</th>\n            </tr>\n            <tr *ngFor=\"#patient of patients\"> \n                <td> {{patient.p_lname}} </td>\n                <td> {{patient.p_fname}} </td>\n                <td> {{patient.pid}} </td>\n                <td> {{patient.is_male}} </td>\n                <td> {{patient.dob}} </td>\n            </tr>\n        </table>\n        \n        <br/><br/>\n        <input type=\"text\"   #p_lname>\n        <input type=\"text\" #p_fname>\n        <input type=\"number\" min=\"0\" max=\"10000\"#pid>\n        <input type=\"text\"  #is_male>\n        <input type=\"number\" min=\"0\" max=\"10000\" #dob>\n        <input type=\"submit\" (click)=\"\n            addPatient(p_lname.value,p_fname.value,pid.value,is_male.value,dob.value)\">\n            \n",
                        providers: [http_service_1.HTTPService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], PatientComponent);
                return PatientComponent;
            }());
            exports_1("PatientComponent", PatientComponent);
        }
    }
});
//# sourceMappingURL=patient.component.js.map