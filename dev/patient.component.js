var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by wendywang on 2016-03-13.
 */
var core_1 = require('angular2/core');
var patient_1 = require('./patient');
var PatientComponent = (function () {
    function PatientComponent() {
        this.patients = [];
    }
    PatientComponent.prototype.addPatient = function (gender, pname, pid, dob) {
        var patient = new patient_1.Patient(gender, pname, pid, dob);
        this.patients.push(patient);
    };
    PatientComponent.prototype.removeVisit = function (patient) {
        var index = this.patients.indexOf(patient);
        this.patients.splice(index, 1);
    };
    PatientComponent = __decorate([
        core_1.Component({
            selector: 'patient',
            template: "<h1>hello world</h1>"
        })
    ], PatientComponent);
    return PatientComponent;
})();
exports.PatientComponent = PatientComponent;
