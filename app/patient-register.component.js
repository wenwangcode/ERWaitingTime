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
                        pid: this.next_id,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJIO2dCQU1JLGtDQUNZLFlBQXlCLEVBQ3pCLE9BQWU7b0JBRGYsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBQ3hCLENBQUM7Z0JBRUosMkNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCx3REFBcUIsR0FBckI7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQ25DLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUEzQixDQUEyQixFQUNuQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLEVBQXRELENBQXNELENBQy9ELENBQUM7Z0JBQ04sQ0FBQztnQkFFRCw4Q0FBVyxHQUFYLFVBQVksT0FBZSxFQUFFLE9BQWUsRUFBRSxJQUFZLEVBQUUsS0FBYSxFQUFFLEdBQVc7b0JBQ2xGLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNsQjt3QkFDSSxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU87d0JBQ2pCLE9BQU8sRUFBRSxPQUFPO3dCQUNoQixPQUFPLEVBQUUsT0FBTzt3QkFDaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHO3dCQUNqQixHQUFHLEVBQUUsR0FBRztxQkFDWCxFQUNELFNBQVMsQ0FDWixDQUFD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QkFFM0IsQ0FBQzs7NENBQUE7Z0JBdUZGLCtCQUFDO1lBQUQsQ0FyRkEsQUFxRkMsSUFBQTtZQXJGRCwrREFxRkMsQ0FBQSIsImZpbGUiOiJwYXRpZW50LXJlZ2lzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBqb3NodWEgb24gMjAxNi0wMy0zMS5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSBcIi4vaHR0cC5zZXJ2aWNlXCI7XG5pbXBvcnQge1BhdGllbnR9IGZyb20gXCIuL3BhdGllbnRcIjtcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtQYXRpZW50VmlzaXR9IGZyb20gXCIuL3BhdGllbnRfdmlzaXRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwYXRpZW50LXJlZ2lzdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wYXRpZW50LXJlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtIVFRQU2VydmljZSxSb3V0ZXJMaW5rXSxcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyTGlua10sXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBQYXRpZW50UmVnaXN0ZXJDb21wb25lbnQge1xuXG4gICAgcGF0aWVudHM6QXJyYXk8UGF0aWVudD47XG4gICAgbmV4dF9pZDogbnVtYmVyO1xuICAgIHNleDogbnVtYmVyO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9odHRwU2VydmljZTogSFRUUFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc1BhdGllbnRGb3JtKCk7XG4gICAgfVxuICAgIFxuICAgIHByZXByb2Nlc3NQYXRpZW50Rm9ybSgpIHtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0UFF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLmdldFBhdGllbnROZXh0SWQoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiR0VUIHBhdGllbnQgZGF0YSBwcmVwcm9jZXNzaW5nIGNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcG9zdFBhdGllbnQocF9sbmFtZTogc3RyaW5nLCBwX2ZuYW1lOiBzdHJpbmcsIHllYXI6IHN0cmluZywgbW9udGg6IHN0cmluZywgZGF5OiBzdHJpbmcpe1xuICAgICAgICBsZXQgZG9iID0geWVhciArICctJyArIG1vbnRoICsgJy0nICsgZGF5O1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBpZDogdGhpcy5uZXh0X2lkLFxuICAgICAgICAgICAgICAgIHBfbG5hbWU6IHBfbG5hbWUsXG4gICAgICAgICAgICAgICAgcF9mbmFtZTogcF9mbmFtZSxcbiAgICAgICAgICAgICAgICBpc19tYWxlOiB0aGlzLnNleCxcbiAgICAgICAgICAgICAgICBkb2I6IGRvYlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwYXRpZW50J1xuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG5cbiAgICAvLyBhc3NpZ25zIGEgdW5pcXVlIG5ldyBwYXRpZW50IGlkIChjYWxsZWQgdGhlIHBpZCBpbiB0aGUgZGF0YSBtb2RlbClcbiAgICBnZXRQYXRpZW50TmV4dElkKGpzb24pe1xuICAgICAgICBsZXQgcGF0aWVudF9pZHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGxldCBuZXh0X2lkOiBudW1iZXIgPSAwO1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgcGF0aWVudF9pZHMucHVzaChpdGVtLnBpZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGllbnRfaWRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAocGF0aWVudF9pZHNbaV0gPiBuZXh0X2lkKSBuZXh0X2lkID0gcGF0aWVudF9pZHNbaV1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhuZXh0X2lkICsgMSk7XG4gICAgICAgIHRoaXMubmV4dF9pZCA9IG5leHRfaWQgKyAxO1xuICAgIH1cblxuICAgIHBhcnNlUGF0aWVudChqc29uKXtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkUGF0aWVudChcbiAgICAgICAgICAgICAgICBpdGVtLnBfbG5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbS5wX2ZuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0ucGlkLFxuICAgICAgICAgICAgICAgIGl0ZW0uaXNfbWFsZSxcbiAgICAgICAgICAgICAgICBpdGVtLmRvYlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIGFkZFBhdGllbnQocF9sbmFtZTpzdHJpbmcsIHBfZm5hbWU6c3RyaW5nLCBwaWQ6bnVtYmVyLCBpc19tYWxlOnN0cmluZywgZG9iOkRhdGUpe1xuICAgICAgICBsZXQgcGF0aWVudCA9IG5ldyBQYXRpZW50KHBfbG5hbWUsIHBfZm5hbWUsIHBpZCwgaXNfbWFsZSwgZG9iKTtcbiAgICAgICAgaWYgKCF0aGlzLmZpbmRQYXRpZW50KHBhdGllbnQpKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGllbnRzLnB1c2gocGF0aWVudCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBmaW5kUGF0aWVudChwYXRpZW50OiBQYXRpZW50KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXRpZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHBhdGllbnQucGlkID09IHRoaXMucGF0aWVudHNbMF0ucGlkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
