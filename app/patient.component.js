System.register(['angular2/core', './Patient', './http.service', "./patient_visit", "./patient_report"], function(exports_1, context_1) {
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
    var core_1, Patient_1, http_service_1, patient_visit_1, patient_report_1;
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
            },
            function (patient_visit_1_1) {
                patient_visit_1 = patient_visit_1_1;
            },
            function (patient_report_1_1) {
                patient_report_1 = patient_report_1_1;
            }],
        execute: function() {
            PatientComponent = (function () {
                function PatientComponent(_httpService) {
                    this._httpService = _httpService;
                    this.patients = [];
                    this.patientvisits = [];
                    this.patientreports = [];
                }
                PatientComponent.prototype.joinpvs = function () {
                    var _this = this;
                    this._httpService.joinpv()
                        .subscribe(function (data) { return _this.parsepv(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                PatientComponent.prototype.joinprs = function () {
                    var _this = this;
                    this._httpService.joinpr()
                        .subscribe(function (data) { return _this.parsepr(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                PatientComponent.prototype.parsepv = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addPv(item.p_lname, item.p_fname, item.pid, item.is_male, item.dob, item.visitId, item.sid, item.room, item.visit_date);
                    });
                };
                PatientComponent.prototype.addPv = function (p_lname, p_fname, pid, is_male, dob, visitId, sid, room, visit_date) {
                    var patientvisit = new patient_visit_1.PatientVisit(p_lname, p_fname, pid, is_male, dob, visitId, sid, room, visit_date);
                    this.patientvisits.push(patientvisit);
                };
                PatientComponent.prototype.parsepr = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addPr(item.p_lname, item.p_fname, item.pid, item.is_male, item.dob, item.rid, item.diagnosis, item.report_date, item.vid);
                    });
                };
                PatientComponent.prototype.addPr = function (p_lname, p_fname, pid, is_male, dob, rid, diagnosis, report_date, vid) {
                    var patientreport = new patient_report_1.PatientReport(p_lname, p_fname, pid, is_male, dob, rid, diagnosis, report_date, vid);
                    this.patientreports.push(patientreport);
                };
                PatientComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._httpService.getPQuery().subscribe(function (data) { return _this.parsePatient(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                PatientComponent.prototype.printtest = function () {
                    this._httpService.getPQuery().subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                PatientComponent.prototype.parsePatient = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addPatient(item.p_lname, item.p_fname, item.pid, item.is_male, item.dob);
                    });
                };
                PatientComponent.prototype.deletePatient = function (patientId) {
                    var _this = this;
                    return this._httpService.delete(patientId)
                        .subscribe(function (data) { return _this.dbErrorHandler(data); }, function (error) { return _this.errorMessage = error; }, function () { return console.log("patient delete request complete"); });
                };
                PatientComponent.prototype.dbErrorHandler = function (error) {
                    /* The server is not handling the delete error. I can see the server message,
                    but as far as Angular is concerned, the GET request is a success. I will hack
                    this on the front end for now since the delete operation cannot happen because
                    of the database configuration on this table, but for production this would absolutely
                    have to be changed.
                    */
                    console.log("The database returned: " + JSON.stringify(error));
                    this.errorMessage = "delete failed";
                };
                //  dob: "1996-02-26T08:00:00.000Z"
                PatientComponent.prototype.updatePatient_ts = function (p_lname, p_fname, dob, gender, pid) {
                    //let dob = year + '-' + month + '-' + day;
                    console.log(gender);
                    console.log(gender.data[0]);
                    this._httpService.updatePatient_http({
                        p_lname: p_lname,
                        p_fname: p_fname,
                        pid: pid,
                        is_male: gender.data,
                        dob: dob.slice(0, 10)
                    }, pid).subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                PatientComponent.prototype.addPatient = function (p_lname, p_fname, pid, is_male, dob) {
                    var patient = new Patient_1.Patient(p_lname, p_fname, pid, is_male, dob);
                    this.patients.push(patient);
                };
                PatientComponent.prototype.removePatient = function (patient) {
                    var index = this.patients.indexOf(patient);
                    this.patients.splice(index, 1);
                };
                PatientComponent.prototype.postPatient = function (p_lname, p_fname, pid, is_male, dob) {
                    this._httpService.post({
                        p_lname: p_lname,
                        p_fname: p_fname,
                        is_male: is_male,
                        dob: dob
                    }, 'patient').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                PatientComponent = __decorate([
                    core_1.Component({
                        selector: 'patient',
                        templateUrl: 'templates/patients.component.html',
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