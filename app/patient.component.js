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
                    return this._httpService.delete(patientId)
                        .subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                //  dob: "1996-02-26T08:00:00.000Z"
                PatientComponent.prototype.updatePatient_ts = function (p_lname, p_fname, dob, gender, pid) {
                    //let dob = year + '-' + month + '-' + day;
                    this._httpService.updatePatient_http({
                        pid: pid,
                        p_lname: p_lname,
                        p_fname: p_fname,
                        is_male: gender,
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

//# sourceMappingURL=data:application/json;base64,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LENBQUM7d0JBQ1AsUUFBUSxFQUFDLFNBQVM7d0JBQ2xCLFdBQVcsRUFBRSxtQ0FBbUM7d0JBQ2hELFNBQVMsRUFBQyxDQUFDLDBCQUFXLENBQUM7cUJBQzFCLENBQUM7O29DQUFBO2dCQWtKRix1QkFBQztZQUFELENBakpBLEFBaUpDLElBQUE7WUFqSkQsK0NBaUpDLENBQUEiLCJmaWxlIjoicGF0aWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDMtMjguXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UGF0aWVudH0gZnJvbSAnLi9QYXRpZW50JztcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7UGF0aWVudFZpc2l0fSBmcm9tIFwiLi9wYXRpZW50X3Zpc2l0XCI7XG5pbXBvcnQge1BhdGllbnRSZXBvcnR9IGZyb20gXCIuL3BhdGllbnRfcmVwb3J0XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidwYXRpZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wYXRpZW50cy5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOltIVFRQU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUGF0aWVudENvbXBvbmVudCB7XG4gICAgcGF0aWVudHM6UGF0aWVudFtdID0gW107XG4gICAgcGF0aWVudHZpc2l0czpQYXRpZW50VmlzaXRbXSA9IFtdO1xuICAgIHBhdGllbnRyZXBvcnRzOlBhdGllbnRSZXBvcnRbXSA9IFtdO1xuICAgIHNleDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOkhUVFBTZXJ2aWNlKSB7fVxuXG4gICAgam9pbnB2cygpe1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5qb2lucHYoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VwdihkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICBqb2lucHJzKCl7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmpvaW5wcigpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZXByKGRhdGEpLFxuICAgICAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIHBhcnNlcHYoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkUHYoXG4gICAgICAgICAgICAgICAgaXRlbS5wX2xuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0ucF9mbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnBpZCxcbiAgICAgICAgICAgICAgICBpdGVtLmlzX21hbGUsXG4gICAgICAgICAgICAgICAgaXRlbS5kb2IsXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpdElkLFxuICAgICAgICAgICAgICAgIGl0ZW0uc2lkLFxuICAgICAgICAgICAgICAgIGl0ZW0ucm9vbSxcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2l0X2RhdGVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgYWRkUHYocF9sbmFtZTpzdHJpbmcsIHBfZm5hbWU6c3RyaW5nLCBwaWQ6bnVtYmVyLCBpc19tYWxlOnN0cmluZywgZG9iOkRhdGUsXG4gICAgICAgICAgdmlzaXRJZDpudW1iZXIsc2lkOm51bWJlcixyb29tOm51bWJlcix2aXNpdF9kYXRlOkRhdGUpe1xuICAgICAgICBsZXQgcGF0aWVudHZpc2l0ID0gbmV3IFBhdGllbnRWaXNpdChwX2xuYW1lLHBfZm5hbWUscGlkLGlzX21hbGUsZG9iLHZpc2l0SWQsc2lkLHJvb20sdmlzaXRfZGF0ZSk7XG4gICAgICAgIHRoaXMucGF0aWVudHZpc2l0cy5wdXNoKHBhdGllbnR2aXNpdCk7XG4gICAgfVxuICAgIHBhcnNlcHIoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkUHIoXG4gICAgICAgICAgICAgICAgaXRlbS5wX2xuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0ucF9mbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnBpZCxcbiAgICAgICAgICAgICAgICBpdGVtLmlzX21hbGUsXG4gICAgICAgICAgICAgICAgaXRlbS5kb2IsXG4gICAgICAgICAgICAgICAgaXRlbS5yaWQsXG4gICAgICAgICAgICAgICAgaXRlbS5kaWFnbm9zaXMsXG4gICAgICAgICAgICAgICAgaXRlbS5yZXBvcnRfZGF0ZSxcbiAgICAgICAgICAgICAgICBpdGVtLnZpZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYWRkUHIocF9sbmFtZTpzdHJpbmcsIHBfZm5hbWU6c3RyaW5nLCBwaWQ6bnVtYmVyLCBpc19tYWxlOnN0cmluZywgZG9iOkRhdGUsXG4gICAgICAgICAgcmlkOm51bWJlcixkaWFnbm9zaXM6c3RyaW5nLHJlcG9ydF9kYXRlOkRhdGUsdmlkOm51bWJlcil7XG4gICAgICAgIGxldCBwYXRpZW50cmVwb3J0ID0gbmV3IFBhdGllbnRSZXBvcnQocF9sbmFtZSxwX2ZuYW1lLHBpZCxpc19tYWxlLGRvYixyaWQsZGlhZ25vc2lzLHJlcG9ydF9kYXRlLHZpZCk7XG4gICAgICAgIHRoaXMucGF0aWVudHJlcG9ydHMucHVzaChwYXRpZW50cmVwb3J0KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0UFF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlUGF0aWVudChkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaW50dGVzdCgpe1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRQUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VQYXRpZW50KGpzb24pIHtcbiAgICAgICAganNvbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRQYXRpZW50KGl0ZW0ucF9sbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnBfZm5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbS5waWQsXG4gICAgICAgICAgICAgICAgaXRlbS5pc19tYWxlLFxuICAgICAgICAgICAgICAgIGl0ZW0uZG9iKTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgZGVsZXRlUGF0aWVudChwYXRpZW50SWQ6bnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5kZWxldGUocGF0aWVudElkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgICAgIClcbiAgICB9XG4gIC8vICBkb2I6IFwiMTk5Ni0wMi0yNlQwODowMDowMC4wMDBaXCJcbiAgICB1cGRhdGVQYXRpZW50X3RzKHBfbG5hbWU6IHN0cmluZywgcF9mbmFtZTogc3RyaW5nLCBkb2I6c3RyaW5nLCBnZW5kZXI6IHN0cmluZywgcGlkOiBudW1iZXIpe1xuICAgICAgICAvL2xldCBkb2IgPSB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnVwZGF0ZVBhdGllbnRfaHR0cCAoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGlkOiBwaWQsXG4gICAgICAgICAgICAgICAgcF9sbmFtZTogcF9sbmFtZSxcbiAgICAgICAgICAgICAgICBwX2ZuYW1lOiBwX2ZuYW1lLFxuICAgICAgICAgICAgICAgIGlzX21hbGU6IGdlbmRlcixcbiAgICAgICAgICAgICAgICBkb2I6IGRvYi5zbGljZSgwLDEwKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBpZFxuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhZGRQYXRpZW50KHBfbG5hbWU6c3RyaW5nLCBwX2ZuYW1lOnN0cmluZywgcGlkOm51bWJlciwgaXNfbWFsZTpzdHJpbmcsIGRvYjpEYXRlKSB7XG4gICAgICAgIGxldCBwYXRpZW50ID0gbmV3IFBhdGllbnQocF9sbmFtZSwgcF9mbmFtZSwgcGlkLCBpc19tYWxlLCBkb2IpO1xuICAgICAgICB0aGlzLnBhdGllbnRzLnB1c2gocGF0aWVudCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUGF0aWVudChwYXRpZW50OlBhdGllbnQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5wYXRpZW50cy5pbmRleE9mKHBhdGllbnQpO1xuICAgICAgICB0aGlzLnBhdGllbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgcG9zdFBhdGllbnQocF9sbmFtZSwgcF9mbmFtZSwgcGlkLCBpc19tYWxlLCBkb2IpIHtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwX2xuYW1lOiBwX2xuYW1lLFxuICAgICAgICAgICAgICAgIHBfZm5hbWU6IHBfZm5hbWUsXG4gICAgICAgICAgICAgICAgaXNfbWFsZTogaXNfbWFsZSxcbiAgICAgICAgICAgICAgICBkb2I6IGRvYlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwYXRpZW50J1xuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
