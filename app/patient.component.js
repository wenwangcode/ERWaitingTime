System.register(['angular2/core', 'angular2/router', './Patient', './http.service', "./patient_visit", "./patient_report", "./is-loggedin"], function(exports_1, context_1) {
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
    var core_1, router_1, Patient_1, http_service_1, patient_visit_1, patient_report_1, is_loggedin_1;
    var PatientComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            },
            function (is_loggedin_1_1) {
                is_loggedin_1 = is_loggedin_1_1;
            }],
        execute: function() {
            PatientComponent = (function () {
                function PatientComponent(_httpService, _router) {
                    this._httpService = _httpService;
                    this._router = _router;
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
                PatientComponent.prototype.checkNull = function () {
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
                //  dob: "1996-02-26T08:00:00.000Z"
                PatientComponent.prototype.updatePatient_ts = function (p_lname, p_fname, dob, gender, pid) {
                    //let dob = year + '-' + month + '-' + day;
                    if (this.checkNull.apply(this, arguments)) {
                        console.log("missing arguments");
                        this.errorMessage = 'update missing';
                        return;
                    }
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
                PatientComponent.prototype.goUpdate = function (id) {
                    var link = ['Patient Update', { pid: id }];
                    this._router.navigate(link);
                };
                PatientComponent = __decorate([
                    core_1.Component({
                        selector: 'patient',
                        templateUrl: 'templates/patients.component.html',
                        // directives: [PatientUpdateComponent],
                        providers: [http_service_1.HTTPService]
                    }),
                    router_1.CanActivate(function () { return is_loggedin_1.isLoggedin(); }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService, router_1.Router])
                ], PatientComponent);
                return PatientComponent;
            }());
            exports_1("PatientComponent", PatientComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxtQ0FBUSxHQUFSLFVBQVMsRUFBVTtvQkFDZixJQUFJLElBQUksR0FBRyxDQUFDLGdCQUFnQixFQUFFLEVBQUMsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQWxNTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxTQUFTO3dCQUNsQixXQUFXLEVBQUUsbUNBQW1DO3dCQUNoRCx3Q0FBd0M7d0JBQ3hDLFNBQVMsRUFBQyxDQUFDLDBCQUFXLENBQUM7cUJBQzFCLENBQUM7b0JBRUQsb0JBQVcsQ0FBQyxjQUFNLE9BQUEsd0JBQVUsRUFBRSxFQUFaLENBQVksQ0FBQzs7b0NBQUE7Z0JBNExoQyx1QkFBQztZQUFELENBMUxBLEFBMExDLElBQUE7WUExTEQsK0NBMExDLENBQUEiLCJmaWxlIjoicGF0aWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDMtMjguXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDYW5BY3RpdmF0ZSwgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQge1BhdGllbnR9IGZyb20gJy4vUGF0aWVudCc7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5pbXBvcnQge1BhdGllbnRWaXNpdH0gZnJvbSBcIi4vcGF0aWVudF92aXNpdFwiO1xuaW1wb3J0IHtQYXRpZW50UmVwb3J0fSBmcm9tIFwiLi9wYXRpZW50X3JlcG9ydFwiO1xuaW1wb3J0IHtpc0xvZ2dlZGlufSBmcm9tIFwiLi9pcy1sb2dnZWRpblwiO1xuaW1wb3J0IHtQYXRpZW50VXBkYXRlQ29tcG9uZW50fSBmcm9tIFwiLi9wYXRpZW50LXVwZGF0ZS5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3BhdGllbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3BhdGllbnRzLmNvbXBvbmVudC5odG1sJyxcbiAgICAvLyBkaXJlY3RpdmVzOiBbUGF0aWVudFVwZGF0ZUNvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOltIVFRQU2VydmljZV1cbn0pXG5cbkBDYW5BY3RpdmF0ZSgoKSA9PiBpc0xvZ2dlZGluKCkpXG5cbmV4cG9ydCBjbGFzcyBQYXRpZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIHBhdGllbnRzOlBhdGllbnRbXSA9IFtdO1xuICAgIHBhdGllbnR2aXNpdHM6UGF0aWVudFZpc2l0W10gPSBbXTtcbiAgICBwYXRpZW50cmVwb3J0czpQYXRpZW50UmVwb3J0W10gPSBbXTtcbiAgICBzZXg6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfaHR0cFNlcnZpY2U6SFRUUFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXG4gICAgKSB7fVxuXG4gICAgam9pbnB2cygpe1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5qb2lucHYoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VwdihkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICBqb2lucHJzKCl7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmpvaW5wcigpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZXByKGRhdGEpLFxuICAgICAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIHBhcnNlcHYoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkUHYoXG4gICAgICAgICAgICAgICAgaXRlbS5wX2xuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0ucF9mbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnBpZCxcbiAgICAgICAgICAgICAgICBpdGVtLmlzX21hbGUsXG4gICAgICAgICAgICAgICAgaXRlbS5kb2IsXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpdElkLFxuICAgICAgICAgICAgICAgIGl0ZW0uc2lkLFxuICAgICAgICAgICAgICAgIGl0ZW0ucm9vbSxcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2l0X2RhdGVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgYWRkUHYocF9sbmFtZTpzdHJpbmcsIHBfZm5hbWU6c3RyaW5nLCBwaWQ6bnVtYmVyLCBpc19tYWxlOnN0cmluZywgZG9iOkRhdGUsXG4gICAgICAgICAgdmlzaXRJZDpudW1iZXIsc2lkOm51bWJlcixyb29tOm51bWJlcix2aXNpdF9kYXRlOkRhdGUpe1xuICAgICAgICBsZXQgcGF0aWVudHZpc2l0ID0gbmV3IFBhdGllbnRWaXNpdChwX2xuYW1lLHBfZm5hbWUscGlkLGlzX21hbGUsZG9iLHZpc2l0SWQsc2lkLHJvb20sdmlzaXRfZGF0ZSk7XG4gICAgICAgIHRoaXMucGF0aWVudHZpc2l0cy5wdXNoKHBhdGllbnR2aXNpdCk7XG4gICAgfVxuICAgIHBhcnNlcHIoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkUHIoXG4gICAgICAgICAgICAgICAgaXRlbS5wX2xuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0ucF9mbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnBpZCxcbiAgICAgICAgICAgICAgICBpdGVtLmlzX21hbGUsXG4gICAgICAgICAgICAgICAgaXRlbS5kb2IsXG4gICAgICAgICAgICAgICAgaXRlbS5yaWQsXG4gICAgICAgICAgICAgICAgaXRlbS5kaWFnbm9zaXMsXG4gICAgICAgICAgICAgICAgaXRlbS5yZXBvcnRfZGF0ZSxcbiAgICAgICAgICAgICAgICBpdGVtLnZpZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYWRkUHIocF9sbmFtZTpzdHJpbmcsIHBfZm5hbWU6c3RyaW5nLCBwaWQ6bnVtYmVyLCBpc19tYWxlOnN0cmluZywgZG9iOkRhdGUsXG4gICAgICAgICAgcmlkOm51bWJlcixkaWFnbm9zaXM6c3RyaW5nLHJlcG9ydF9kYXRlOkRhdGUsdmlkOm51bWJlcil7XG4gICAgICAgIGxldCBwYXRpZW50cmVwb3J0ID0gbmV3IFBhdGllbnRSZXBvcnQocF9sbmFtZSxwX2ZuYW1lLHBpZCxpc19tYWxlLGRvYixyaWQsZGlhZ25vc2lzLHJlcG9ydF9kYXRlLHZpZCk7XG4gICAgICAgIHRoaXMucGF0aWVudHJlcG9ydHMucHVzaChwYXRpZW50cmVwb3J0KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0UFF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlUGF0aWVudChkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaW50dGVzdCgpe1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRQUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VQYXRpZW50KGpzb24pIHtcbiAgICAgICAganNvbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRQYXRpZW50KGl0ZW0ucF9sbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnBfZm5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbS5waWQsXG4gICAgICAgICAgICAgICAgaXRlbS5pc19tYWxlLFxuICAgICAgICAgICAgICAgIGl0ZW0uZG9iKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkZWxldGVQYXRpZW50KHBhdGllbnRJZDpudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLmRlbGV0ZShwYXRpZW50SWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5kYkVycm9ySGFuZGxlcihkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IsXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJwYXRpZW50IGRlbGV0ZSByZXF1ZXN0IGNvbXBsZXRlXCIpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgZGJFcnJvckhhbmRsZXIoZXJyb3IpIHtcbiAgICAgICAgLyogVGhlIHNlcnZlciBpcyBub3QgaGFuZGxpbmcgdGhlIGRlbGV0ZSBlcnJvci4gSSBjYW4gc2VlIHRoZSBzZXJ2ZXIgbWVzc2FnZSxcbiAgICAgICAgYnV0IGFzIGZhciBhcyBBbmd1bGFyIGlzIGNvbmNlcm5lZCwgdGhlIEdFVCByZXF1ZXN0IGlzIGEgc3VjY2Vzcy4gSSB3aWxsIGhhY2tcbiAgICAgICAgdGhpcyBvbiB0aGUgZnJvbnQgZW5kIGZvciBub3cgc2luY2UgdGhlIGRlbGV0ZSBvcGVyYXRpb24gY2Fubm90IGhhcHBlbiBiZWNhdXNlXG4gICAgICAgIG9mIHRoZSBkYXRhYmFzZSBjb25maWd1cmF0aW9uIG9uIHRoaXMgdGFibGUsIGJ1dCBmb3IgcHJvZHVjdGlvbiB0aGlzIHdvdWxkIGFic29sdXRlbHlcbiAgICAgICAgaGF2ZSB0byBiZSBjaGFuZ2VkLlxuICAgICAgICAqL1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBkYXRhYmFzZSByZXR1cm5lZDogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiZGVsZXRlIGZhaWxlZFwiO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tOdWxsKC4uLnBhcmFtcykge1xuICAgICAgICBsZXQgbnVsbERldGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHBhcmFtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gJycpIHtcbiAgICAgICAgICAgICAgICBudWxsRGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG51bGxEZXRlY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgLy8gIGRvYjogXCIxOTk2LTAyLTI2VDA4OjAwOjAwLjAwMFpcIlxuICAgIHVwZGF0ZVBhdGllbnRfdHMocF9sbmFtZTogc3RyaW5nLCBwX2ZuYW1lOiBzdHJpbmcsIGRvYjpzdHJpbmcsIGdlbmRlcjogc3RyaW5nLCBwaWQ6IG51bWJlcil7XG4gICAgICAgIC8vbGV0IGRvYiA9IHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheTtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tOdWxsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtaXNzaW5nIGFyZ3VtZW50c1wiKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ3VwZGF0ZSBtaXNzaW5nJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhnZW5kZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhnZW5kZXIuZGF0YVswXSk7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnVwZGF0ZVBhdGllbnRfaHR0cCAoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcF9sbmFtZTogcF9sbmFtZSxcbiAgICAgICAgICAgICAgICBwX2ZuYW1lOiBwX2ZuYW1lLFxuICAgICAgICAgICAgICAgIHBpZDogcGlkLFxuICAgICAgICAgICAgICAgIGlzX21hbGU6IGdlbmRlci5kYXRhLFxuICAgICAgICAgICAgICAgIGRvYjogZG9iLnNsaWNlKDAsMTApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGlkXG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFkZFBhdGllbnQocF9sbmFtZTpzdHJpbmcsIHBfZm5hbWU6c3RyaW5nLCBwaWQ6bnVtYmVyLCBpc19tYWxlOnN0cmluZywgZG9iOkRhdGUpIHtcbiAgICAgICAgbGV0IHBhdGllbnQgPSBuZXcgUGF0aWVudChwX2xuYW1lLCBwX2ZuYW1lLCBwaWQsIGlzX21hbGUsIGRvYik7XG4gICAgICAgIHRoaXMucGF0aWVudHMucHVzaChwYXRpZW50KTtcbiAgICB9XG5cbiAgICByZW1vdmVQYXRpZW50KHBhdGllbnQ6UGF0aWVudCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnBhdGllbnRzLmluZGV4T2YocGF0aWVudCk7XG4gICAgICAgIHRoaXMucGF0aWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBwb3N0UGF0aWVudChwX2xuYW1lLCBwX2ZuYW1lLCBwaWQsIGlzX21hbGUsIGRvYikge1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBfbG5hbWU6IHBfbG5hbWUsXG4gICAgICAgICAgICAgICAgcF9mbmFtZTogcF9mbmFtZSxcbiAgICAgICAgICAgICAgICBpc19tYWxlOiBpc19tYWxlLFxuICAgICAgICAgICAgICAgIGRvYjogZG9iXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3BhdGllbnQnXG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdvVXBkYXRlKGlkOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGxpbmsgPSBbJ1BhdGllbnQgVXBkYXRlJywge3BpZDogaWR9XTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKGxpbmspO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
