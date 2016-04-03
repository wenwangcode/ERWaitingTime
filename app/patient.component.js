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
                    console.log("I am here!!!");
                    this._httpService.joinpv()
                        .subscribe(function (data) { return _this.parsepv(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                    console.log("I am there!!!");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBTUksMEJBQW9CLFlBQXdCO29CQUF4QixpQkFBWSxHQUFaLFlBQVksQ0FBWTtvQkFKNUMsYUFBUSxHQUFhLEVBQUUsQ0FBQztvQkFDeEIsa0JBQWEsR0FBa0IsRUFBRSxDQUFDO29CQUNsQyxtQkFBYyxHQUFtQixFQUFFLENBQUM7Z0JBR3BDLENBQUM7Z0JBQ0Qsa0NBQU8sR0FBUDtvQkFBQSxpQkFTQztvQkFSRyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTt5QkFDckIsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBbEIsQ0FBa0IsRUFDMUIsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQztvQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUNELGtDQUFPLEdBQVA7b0JBQUEsaUJBT0M7b0JBTkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7eUJBQ3JCLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQWxCLENBQWtCLEVBQzFCLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ1YsQ0FBQztnQkFD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QUMsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELHNDQUFXLEdBQVgsVUFBWSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRztvQkFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ2xCO3dCQUNJLE9BQU8sRUFBRSxPQUFPO3dCQUNoQixPQUFPLEVBQUUsT0FBTzt3QkFDaEIsT0FBTyxFQUFFLE9BQU87d0JBQ2hCLEdBQUcsRUFBRSxHQUFHO3FCQUNYLEVBQ0QsU0FBUyxDQUNaLENBQUMsU0FBUyxDQUNQLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQztnQkFDTixDQUFDO2dCQXBJTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxTQUFTO3dCQUNsQixXQUFXLEVBQUUsbUNBQW1DO3dCQUNoRCxTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO3FCQUMxQixDQUFDOztvQ0FBQTtnQkFpSUYsdUJBQUM7WUFBRCxDQWhJQSxBQWdJQyxJQUFBO1lBaElELCtDQWdJQyxDQUFBIiwiZmlsZSI6InBhdGllbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTI4LlxuICovXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UGF0aWVudH0gZnJvbSAnLi9QYXRpZW50JztcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7UGF0aWVudFZpc2l0fSBmcm9tIFwiLi9wYXRpZW50X3Zpc2l0XCI7XG5pbXBvcnQge1BhdGllbnRSZXBvcnR9IGZyb20gXCIuL3BhdGllbnRfcmVwb3J0XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidwYXRpZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wYXRpZW50cy5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOltIVFRQU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUGF0aWVudENvbXBvbmVudCB7XG5cbiAgICBwYXRpZW50czpQYXRpZW50W10gPSBbXTtcbiAgICBwYXRpZW50dmlzaXRzOlBhdGllbnRWaXNpdFtdID0gW107XG4gICAgcGF0aWVudHJlcG9ydHM6UGF0aWVudFJlcG9ydFtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTpIVFRQU2VydmljZSkge1xuICAgIH1cbiAgICBqb2lucHZzKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBoZXJlISEhXCIpO1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5qb2lucHYoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VwdihkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gdGhlcmUhISFcIik7XG4gICAgfVxuICAgIGpvaW5wcnMoKXtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2Uuam9pbnByKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlcHIoZGF0YSksXG4gICAgICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgcGFyc2Vwdihqc29uKXtcbiAgICAgICAganNvbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRQdihcbiAgICAgICAgICAgICAgICBpdGVtLnBfbG5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbS5wX2ZuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0ucGlkLFxuICAgICAgICAgICAgICAgIGl0ZW0uaXNfbWFsZSxcbiAgICAgICAgICAgICAgICBpdGVtLmRvYixcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2l0SWQsXG4gICAgICAgICAgICAgICAgaXRlbS5zaWQsXG4gICAgICAgICAgICAgICAgaXRlbS5yb29tLFxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaXRfZGF0ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBhZGRQdihwX2xuYW1lOnN0cmluZywgcF9mbmFtZTpzdHJpbmcsIHBpZDpudW1iZXIsIGlzX21hbGU6c3RyaW5nLCBkb2I6RGF0ZSxcbiAgICAgICAgICB2aXNpdElkOm51bWJlcixzaWQ6bnVtYmVyLHJvb206bnVtYmVyLHZpc2l0X2RhdGU6RGF0ZSl7XG4gICAgICAgIGxldCBwYXRpZW50dmlzaXQgPSBuZXcgUGF0aWVudFZpc2l0KHBfbG5hbWUscF9mbmFtZSxwaWQsaXNfbWFsZSxkb2IsdmlzaXRJZCxzaWQscm9vbSx2aXNpdF9kYXRlKTtcbiAgICAgICAgdGhpcy5wYXRpZW50dmlzaXRzLnB1c2gocGF0aWVudHZpc2l0KTtcbiAgICB9XG4gICAgcGFyc2Vwcihqc29uKXtcbiAgICAgICAganNvbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRQcihcbiAgICAgICAgICAgICAgICBpdGVtLnBfbG5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbS5wX2ZuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0ucGlkLFxuICAgICAgICAgICAgICAgIGl0ZW0uaXNfbWFsZSxcbiAgICAgICAgICAgICAgICBpdGVtLmRvYixcbiAgICAgICAgICAgICAgICBpdGVtLnJpZCxcbiAgICAgICAgICAgICAgICBpdGVtLmRpYWdub3NpcyxcbiAgICAgICAgICAgICAgICBpdGVtLnJlcG9ydF9kYXRlLFxuICAgICAgICAgICAgICAgIGl0ZW0udmlkXG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBhZGRQcihwX2xuYW1lOnN0cmluZywgcF9mbmFtZTpzdHJpbmcsIHBpZDpudW1iZXIsIGlzX21hbGU6c3RyaW5nLCBkb2I6RGF0ZSxcbiAgICAgICAgICByaWQ6bnVtYmVyLGRpYWdub3NpczpzdHJpbmcscmVwb3J0X2RhdGU6RGF0ZSx2aWQ6bnVtYmVyKXtcbiAgICAgICAgbGV0IHBhdGllbnRyZXBvcnQgPSBuZXcgUGF0aWVudFJlcG9ydChwX2xuYW1lLHBfZm5hbWUscGlkLGlzX21hbGUsZG9iLHJpZCxkaWFnbm9zaXMscmVwb3J0X2RhdGUsdmlkKTtcbiAgICAgICAgdGhpcy5wYXRpZW50cmVwb3J0cy5wdXNoKHBhdGllbnRyZXBvcnQpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRQUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VQYXRpZW50KGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpbnR0ZXN0KCl7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFBRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZVBhdGllbnQoanNvbikge1xuICAgICAgICBqc29uLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFBhdGllbnQoaXRlbS5wX2xuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0ucF9mbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnBpZCxcbiAgICAgICAgICAgICAgICBpdGVtLmlzX21hbGUsXG4gICAgICAgICAgICAgICAgaXRlbS5kb2IpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBkZWxldGVQYXRpZW50KHBhdGllbnRJZDpudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLmRlbGV0ZShwYXRpZW50SWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICAgICAgKVxuICAgIH1cblxuXG4gICAgYWRkUGF0aWVudChwX2xuYW1lOnN0cmluZywgcF9mbmFtZTpzdHJpbmcsIHBpZDpudW1iZXIsIGlzX21hbGU6c3RyaW5nLCBkb2I6RGF0ZSkge1xuICAgICAgICBsZXQgcGF0aWVudCA9IG5ldyBQYXRpZW50KHBfbG5hbWUsIHBfZm5hbWUsIHBpZCwgaXNfbWFsZSwgZG9iKTtcbiAgICAgICAgdGhpcy5wYXRpZW50cy5wdXNoKHBhdGllbnQpO1xuICAgIH1cblxuICAgIHJlbW92ZVBhdGllbnQocGF0aWVudDpQYXRpZW50KSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucGF0aWVudHMuaW5kZXhPZihwYXRpZW50KTtcbiAgICAgICAgdGhpcy5wYXRpZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHBvc3RQYXRpZW50KHBfbG5hbWUsIHBfZm5hbWUsIHBpZCwgaXNfbWFsZSwgZG9iKSB7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3QoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcF9sbmFtZTogcF9sbmFtZSxcbiAgICAgICAgICAgICAgICBwX2ZuYW1lOiBwX2ZuYW1lLFxuICAgICAgICAgICAgICAgIGlzX21hbGU6IGlzX21hbGUsXG4gICAgICAgICAgICAgICAgZG9iOiBkb2JcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncGF0aWVudCdcbiAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
