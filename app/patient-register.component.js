/**
 * Created by joshua on 2016-03-31.
 */
System.register(['angular2/core', 'angular2/router', 'angular2/http', "./http.service", "./patient"], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, http_service_1, patient_1;
    var PatientRegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
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
                    this._httpService.getPQuery().subscribe(function (data) { return _this.parsePatientPreprocess(data); }, function (err) { return alert(err); }, function () { return console.log("GET patient data preprocessing complete"); });
                };
                PatientRegisterComponent.prototype.postPatient = function (p_lname, p_fname, year, month, day) {
                    var dob = year + '-' + month + '-' + day;
                    this._httpService.post({
                        p_lname: p_lname,
                        p_fname: p_fname,
                        pid: this.next_id,
                        is_male: this.sex,
                        dob: dob
                    }, 'patient').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                    var headers = new http_1.Headers();
                    console.log(headers.getAll());
                    this._router.navigate(['Dashboard']);
                };
                // assigns a unique new patient id (called the pid in the data model)
                PatientRegisterComponent.prototype.parsePatientPreprocess = function (json) {
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
                        providers: [http_service_1.HTTPService,],
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService, router_1.Router])
                ], PatientRegisterComponent);
                return PatientRegisterComponent;
            }());
            exports_1("PatientRegisterComponent", PatientRegisterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlSDtnQkFPSSxrQ0FDWSxZQUF5QixFQUN6QixPQUFlO29CQURmLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO2dCQUN4QixDQUFDO2dCQUVKLDJDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsd0RBQXFCLEdBQXJCO29CQUFBLGlCQU1DO29CQUxHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUNuQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBakMsQ0FBaUMsRUFDekMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxFQUF0RCxDQUFzRCxDQUMvRCxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsOENBQVcsR0FBWCxVQUFZLE9BQWUsRUFBRSxPQUFlLEVBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxHQUFXO29CQUNsRixJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO29CQUV6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDbEI7d0JBQ0ksT0FBTyxFQUFFLE9BQU87d0JBQ2hCLE9BQU8sRUFBRSxPQUFPO3dCQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU87d0JBRWpCLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRzt3QkFFakIsR0FBRyxFQUFFLEdBQUc7cUJBQ1gsRUFDRCxTQUFTLENBQ1osQ0FB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O2dCQUNqQixDQUFDO2dCQS9GTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFdBQVcsRUFBRSwyQ0FBMkM7d0JBQ3hELFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUU7cUJBRTVCLENBQUM7OzRDQUFBO2dCQTJGRiwrQkFBQztZQUFELENBekZBLEFBeUZDLElBQUE7WUF6RkQsK0RBeUZDLENBQUEiLCJmaWxlIjoicGF0aWVudC1yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgam9zaHVhIG9uIDIwMTYtMDMtMzEuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcbmltcG9ydCB7UGF0aWVudH0gZnJvbSBcIi4vcGF0aWVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BhdGllbnQtcmVnaXN0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3BhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0hUVFBTZXJ2aWNlLF0sXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBQYXRpZW50UmVnaXN0ZXJDb21wb25lbnQge1xuXG4gICAgcGF0aWVudHM6QXJyYXk8UGF0aWVudD47XG4gICAgbmV4dF9pZDogbnVtYmVyO1xuXG4gICAgc2V4OiBudW1iZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzUGF0aWVudEZvcm0oKTtcbiAgICB9XG4gICAgXG4gICAgcHJlcHJvY2Vzc1BhdGllbnRGb3JtKCkge1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRQUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VQYXRpZW50UHJlcHJvY2VzcyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJHRVQgcGF0aWVudCBkYXRhIHByZXByb2Nlc3NpbmcgY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwb3N0UGF0aWVudChwX2xuYW1lOiBzdHJpbmcsIHBfZm5hbWU6IHN0cmluZywgeWVhcjogc3RyaW5nLCBtb250aDogc3RyaW5nLCBkYXk6IHN0cmluZyl7XG4gICAgICAgIGxldCBkb2IgPSB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XG5cbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwX2xuYW1lOiBwX2xuYW1lLFxuICAgICAgICAgICAgICAgIHBfZm5hbWU6IHBfZm5hbWUsXG4gICAgICAgICAgICAgICAgcGlkOiB0aGlzLm5leHRfaWQsXG5cbiAgICAgICAgICAgICAgICBpc19tYWxlOiB0aGlzLnNleCxcblxuICAgICAgICAgICAgICAgIGRvYjogZG9iXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3BhdGllbnQnXG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGhlYWRlcnMuZ2V0QWxsKCkpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydEYXNoYm9hcmQnXSk7XG4gICAgfVxuXG4gICAgLy8gYXNzaWducyBhIHVuaXF1ZSBuZXcgcGF0aWVudCBpZCAoY2FsbGVkIHRoZSBwaWQgaW4gdGhlIGRhdGEgbW9kZWwpXG4gICAgcGFyc2VQYXRpZW50UHJlcHJvY2Vzcyhqc29uKXtcbiAgICAgICAgbGV0IHBhdGllbnRfaWRzOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBsZXQgbmV4dF9pZDogbnVtYmVyID0gMDtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIHBhdGllbnRfaWRzLnB1c2goaXRlbS5waWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRpZW50X2lkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHBhdGllbnRfaWRzW2ldID4gbmV4dF9pZCkgbmV4dF9pZCA9IHBhdGllbnRfaWRzW2ldXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobmV4dF9pZCArIDEpO1xuICAgICAgICB0aGlzLm5leHRfaWQgPSBuZXh0X2lkICsgMTtcbiAgICB9XG5cbiAgICBwYXJzZVBhdGllbnQoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFBhdGllbnQoXG4gICAgICAgICAgICAgICAgaXRlbS5wX2xuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0ucF9mbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnBpZCxcbiAgICAgICAgICAgICAgICBpdGVtLmlzX21hbGUsXG4gICAgICAgICAgICAgICAgaXRlbS5kb2JcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkUGF0aWVudChwX2xuYW1lOnN0cmluZywgcF9mbmFtZTpzdHJpbmcsIHBpZDpudW1iZXIsIGlzX21hbGU6c3RyaW5nLCBkb2I6RGF0ZSl7XG4gICAgICAgIGxldCBwYXRpZW50ID0gbmV3IFBhdGllbnQocF9sbmFtZSwgcF9mbmFtZSwgcGlkLCBpc19tYWxlLCBkb2IpO1xuICAgICAgICBpZiAoIXRoaXMuZmluZFBhdGllbnQocGF0aWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMucGF0aWVudHMucHVzaChwYXRpZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgZmluZFBhdGllbnQocGF0aWVudDogUGF0aWVudCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGF0aWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChwYXRpZW50LnBpZCA9PSB0aGlzLnBhdGllbnRzWzBdLnBpZCkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
