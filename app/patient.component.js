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
                function PatientComponent(_httpService) {
                    this._httpService = _httpService;
                    this.testString = 'Hello world';
                    this.patients = [];
                }
                PatientComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._httpService.getPQuery().subscribe(function (data) { return _this.parsePatient(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                PatientComponent.prototype.parsePatient = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addPatient(item.p_lname, item.p_fname, item.pid, item.is_male, item.dob);
                    });
                };
                PatientComponent.prototype.testPost = function (p_lname, p_fname, pid, is_male, dob) {
                    this._httpService.post({
                        p_lname: p_lname,
                        p_fname: p_fname,
                        pid: pid,
                        is_male: is_male,
                        dob: dob
                    }, 'patient').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                PatientComponent.prototype.addPatient = function (p_lname, p_fname, pid, is_male, dob) {
                    var patient = new Patient_1.Patient(p_lname, p_fname, pid, is_male, dob);
                    this.patients.push(patient);
                };
                PatientComponent.prototype.removePatient = function (patient) {
                    var index = this.patients.indexOf(patient);
                    this.patients.splice(index, 1);
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

//# sourceMappingURL=data:application/json;base64,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KlxuICogQ3JlYXRlZCBieSBKb3kgb24gMjAxNi0wMy0yOC5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BhdGllbnR9IGZyb20gJy4vUGF0aWVudCc7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidwYXRpZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wYXRpZW50cy5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOltIVFRQU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUGF0aWVudENvbXBvbmVudHtcblxuICAgIHRlc3RTdHJpbmcgPSAnSGVsbG8gd29ybGQnO1xuICAgIHBhdGllbnRzOiBQYXRpZW50W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFBRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVBhdGllbnQoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZVBhdGllbnQoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFBhdGllbnQoaXRlbS5wX2xuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0ucF9mbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnBpZCxcbiAgICAgICAgICAgICAgICBpdGVtLmlzX21hbGUsXG4gICAgICAgICAgICAgICAgaXRlbS5kb2IpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRlc3RQb3N0KHBfbG5hbWUsIHBfZm5hbWUsIHBpZCwgaXNfbWFsZSwgZG9iKXtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwX2xuYW1lOiBwX2xuYW1lLFxuICAgICAgICAgICAgICAgIHBfZm5hbWU6IHBfZm5hbWUsXG4gICAgICAgICAgICAgICAgcGlkOiBwaWQsXG4gICAgICAgICAgICAgICAgaXNfbWFsZTogaXNfbWFsZSxcbiAgICAgICAgICAgICAgICBkb2I6IGRvYlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwYXRpZW50J1xuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhZGRQYXRpZW50KHBfbG5hbWU6IHN0cmluZywgcF9mbmFtZTogc3RyaW5nLCBwaWQ6bnVtYmVyLCBpc19tYWxlOnN0cmluZywgZG9iOkRhdGUpe1xuICAgICAgICBsZXQgcGF0aWVudCA9IG5ldyBQYXRpZW50KHBfbG5hbWUscF9mbmFtZSxwaWQsaXNfbWFsZSxkb2IpO1xuICAgICAgICB0aGlzLnBhdGllbnRzLnB1c2gocGF0aWVudCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUGF0aWVudChwYXRpZW50OlBhdGllbnQpe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnBhdGllbnRzLmluZGV4T2YocGF0aWVudCk7XG4gICAgICAgIHRoaXMucGF0aWVudHMuc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
