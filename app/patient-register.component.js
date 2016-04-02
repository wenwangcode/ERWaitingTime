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
                }
                PatientRegisterComponent.prototype.ngOnInit = function () {
                    this.preprocessPatientForm();
                };
                PatientRegisterComponent.prototype.preprocessPatientForm = function () {
                    var _this = this;
                    this._httpService.getPQuery().subscribe(function (data) { return _this.getPatientNextId(data); }, function (err) { return alert(err); }, function () { return console.log("GET patient data preprocessing complete"); });
                };
                PatientRegisterComponent.prototype.postPatient = function (p_lname, p_fname, year, month, day) {
                    var dob = year + '-' + month + '-' + day;
                    this._httpService.post({
                        p_lname: p_lname,
                        p_fname: p_fname,
                        is_male: this.sex,
                        dob: dob
                    }, 'patient').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                // assigns a unique new patient id (called the pid in the data model)
                PatientRegisterComponent.prototype.getPatientNextId = function (json) {
                    var patient_ids = [];
                    var next_id = 0;
                    json.forEach(function (item) {
                        patient_ids.push(item.pid);
                    });
                    for (var i = 0; i < patient_ids.length; i += 1) {
                        if (patient_ids[i] > next_id)
                            next_id = patient_ids[i];
                    }
                    console.log(next_id + 1);
                    this.next_id = next_id + 1;
                };
                PatientRegisterComponent.prototype.parsePatient = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addPatient(item.p_lname, item.p_fname, item.pid, item.is_male, item.dob);
                    });
                };
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
                        providers: [http_service_1.HTTPService, router_2.RouterLink],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JIO2dCQU9JLGtDQUNZLFlBQXlCLEVBQ3pCLE9BQWU7b0JBRGYsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBQ3hCLENBQUM7Z0JBRUosMkNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCx3REFBcUIsR0FBckI7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQ25DLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUEzQixDQUEyQixFQUNuQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLEVBQXRELENBQXNELENBQy9ELENBQUM7Z0JBQ04sQ0FBQztnQkFFRCw4Q0FBVyxHQUFYLFVBQVksT0FBZSxFQUFFLE9BQWUsRUFBRSxJQUFZLEVBQUUsS0FBYSxFQUFFLEdBQVc7b0JBQ2xGLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBRXpDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNsQjt3QkFDSSxPQUFPLEVBQUUsT0FBTzt3QkFDaEIsT0FBTyxFQUFFLE9BQU87d0JBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRzt3QkFDakIsR0FBRyxFQUFFLEdBQUc7cUJBQ1gsRUFDRCxTQUFTLENBQ1osQ0FBQyxTQUFTLENBQ1AsVUFBQSxJQUFJLElBQUksT0FBQSxP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QUFELENBbkZBLEFBbUZDLElBQUE7WUFuRkQsK0RBbUZDLENBQUEiLCJmaWxlIjoicGF0aWVudC1yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgam9zaHVhIG9uIDIwMTYtMDMtMzEuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSBcIi4vaHR0cC5zZXJ2aWNlXCI7XG5pbXBvcnQge1BhdGllbnR9IGZyb20gXCIuL3BhdGllbnRcIjtcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BhdGllbnQtcmVnaXN0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3BhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0hUVFBTZXJ2aWNlLFJvdXRlckxpbmtdLFxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJMaW5rXSxcblxufSlcblxuZXhwb3J0IGNsYXNzIFBhdGllbnRSZWdpc3RlckNvbXBvbmVudCB7XG5cbiAgICBwYXRpZW50czpBcnJheTxQYXRpZW50PjtcbiAgICBuZXh0X2lkOiBudW1iZXI7XG5cbiAgICBzZXg6IG51bWJlcjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NQYXRpZW50Rm9ybSgpO1xuICAgIH1cbiAgICBcbiAgICBwcmVwcm9jZXNzUGF0aWVudEZvcm0oKSB7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFBRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5nZXRQYXRpZW50TmV4dElkKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkdFVCBwYXRpZW50IGRhdGEgcHJlcHJvY2Vzc2luZyBjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBvc3RQYXRpZW50KHBfbG5hbWU6IHN0cmluZywgcF9mbmFtZTogc3RyaW5nLCB5ZWFyOiBzdHJpbmcsIG1vbnRoOiBzdHJpbmcsIGRheTogc3RyaW5nKXtcbiAgICAgICAgbGV0IGRvYiA9IHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheTtcblxuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBfbG5hbWU6IHBfbG5hbWUsXG4gICAgICAgICAgICAgICAgcF9mbmFtZTogcF9mbmFtZSxcbiAgICAgICAgICAgICAgICBpc19tYWxlOiB0aGlzLnNleCxcbiAgICAgICAgICAgICAgICBkb2I6IGRvYlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwYXRpZW50J1xuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBhc3NpZ25zIGEgdW5pcXVlIG5ldyBwYXRpZW50IGlkIChjYWxsZWQgdGhlIHBpZCBpbiB0aGUgZGF0YSBtb2RlbClcbiAgICBnZXRQYXRpZW50TmV4dElkKGpzb24pe1xuICAgICAgICBsZXQgcGF0aWVudF9pZHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGxldCBuZXh0X2lkOiBudW1iZXIgPSAwO1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgcGF0aWVudF9pZHMucHVzaChpdGVtLnBpZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGllbnRfaWRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAocGF0aWVudF9pZHNbaV0gPiBuZXh0X2lkKSBuZXh0X2lkID0gcGF0aWVudF9pZHNbaV1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhuZXh0X2lkICsgMSk7XG4gICAgICAgIHRoaXMubmV4dF9pZCA9IG5leHRfaWQgKyAxO1xuICAgIH1cblxuICAgIHBhcnNlUGF0aWVudChqc29uKXtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkUGF0aWVudChcbiAgICAgICAgICAgICAgICBpdGVtLnBfbG5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbS5wX2ZuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0ucGlkLFxuICAgICAgICAgICAgICAgIGl0ZW0uaXNfbWFsZSxcbiAgICAgICAgICAgICAgICBpdGVtLmRvYlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRQYXRpZW50KHBfbG5hbWU6c3RyaW5nLCBwX2ZuYW1lOnN0cmluZywgcGlkOm51bWJlciwgaXNfbWFsZTpzdHJpbmcsIGRvYjpEYXRlKXtcbiAgICAgICAgbGV0IHBhdGllbnQgPSBuZXcgUGF0aWVudChwX2xuYW1lLCBwX2ZuYW1lLCBwaWQsIGlzX21hbGUsIGRvYik7XG4gICAgICAgIGlmICghdGhpcy5maW5kUGF0aWVudChwYXRpZW50KSkge1xuICAgICAgICAgICAgdGhpcy5wYXRpZW50cy5wdXNoKHBhdGllbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBmaW5kUGF0aWVudChwYXRpZW50OiBQYXRpZW50KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXRpZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHBhdGllbnQucGlkID09IHRoaXMucGF0aWVudHNbMF0ucGlkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
