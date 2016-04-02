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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JIO2dCQU9JLGtDQUNZLFlBQXlCLEVBQ3pCLE9BQWU7b0JBRGYsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBQ3hCLENBQUM7Z0JBRUosMkNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCx3REFBcUIsR0FBckI7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQ25DLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUEzQixDQUEyQixFQUNuQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLEVBQXRELENBQXNELENBQy9ELENBQUM7Z0JBQ04sQ0FBQztnQkFFRCw4Q0FBVyxHQUFYLFVBQVksT0FBZSxFQUFFLE9BQWUsRUFBRSxJQUFZLEVBQUUsS0FBYSxFQUFFLEdBQVc7b0JBQ2xGLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBRXpDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNsQjt3QkFDSSxPQUFPLEVBQUUsT0FBTzt3QkFDaEIsT0FBTyxFQUFFLE9BQU87d0JBQ2hCLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRzt3QkFDakIsR0FBRyxFQUFFLEdBQUc7cUJBQ1gsRUFDRCxTQUFTLENBQ1osQ0FBQyxTQUFTLENBQ1AsVUFBQSxJQUFJLElBQUksT0FBQSxP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QUFELENBbkZBLEFBbUZDLElBQUE7WUFuRkQsK0RBbUZDLENBQUEiLCJmaWxlIjoicGF0aWVudC1yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgam9zaHVhIG9uIDIwMTYtMDMtMzEuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gXCIuL2h0dHAuc2VydmljZVwiO1xuaW1wb3J0IHtQYXRpZW50fSBmcm9tIFwiLi9wYXRpZW50XCI7XG5pbXBvcnQge1JvdXRlckxpbmt9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwYXRpZW50LXJlZ2lzdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wYXRpZW50LXJlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtIVFRQU2VydmljZSxSb3V0ZXJMaW5rXSxcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyTGlua10sXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBQYXRpZW50UmVnaXN0ZXJDb21wb25lbnQge1xuXG4gICAgcGF0aWVudHM6QXJyYXk8UGF0aWVudD47XG4gICAgbmV4dF9pZDogbnVtYmVyO1xuXG4gICAgc2V4OiBudW1iZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzUGF0aWVudEZvcm0oKTtcbiAgICB9XG4gICAgXG4gICAgcHJlcHJvY2Vzc1BhdGllbnRGb3JtKCkge1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRQUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMuZ2V0UGF0aWVudE5leHRJZChkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJHRVQgcGF0aWVudCBkYXRhIHByZXByb2Nlc3NpbmcgY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwb3N0UGF0aWVudChwX2xuYW1lOiBzdHJpbmcsIHBfZm5hbWU6IHN0cmluZywgeWVhcjogc3RyaW5nLCBtb250aDogc3RyaW5nLCBkYXk6IHN0cmluZyl7XG4gICAgICAgIGxldCBkb2IgPSB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XG5cbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwX2xuYW1lOiBwX2xuYW1lLFxuICAgICAgICAgICAgICAgIHBfZm5hbWU6IHBfZm5hbWUsXG4gICAgICAgICAgICAgICAgaXNfbWFsZTogdGhpcy5zZXgsXG4gICAgICAgICAgICAgICAgZG9iOiBkb2JcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncGF0aWVudCdcbiAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gYXNzaWducyBhIHVuaXF1ZSBuZXcgcGF0aWVudCBpZCAoY2FsbGVkIHRoZSBwaWQgaW4gdGhlIGRhdGEgbW9kZWwpXG4gICAgZ2V0UGF0aWVudE5leHRJZChqc29uKXtcbiAgICAgICAgbGV0IHBhdGllbnRfaWRzOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBsZXQgbmV4dF9pZDogbnVtYmVyID0gMDtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIHBhdGllbnRfaWRzLnB1c2goaXRlbS5waWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRpZW50X2lkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHBhdGllbnRfaWRzW2ldID4gbmV4dF9pZCkgbmV4dF9pZCA9IHBhdGllbnRfaWRzW2ldXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobmV4dF9pZCArIDEpO1xuICAgICAgICB0aGlzLm5leHRfaWQgPSBuZXh0X2lkICsgMTtcbiAgICB9XG5cbiAgICBwYXJzZVBhdGllbnQoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFBhdGllbnQoXG4gICAgICAgICAgICAgICAgaXRlbS5wX2xuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0ucF9mbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnBpZCxcbiAgICAgICAgICAgICAgICBpdGVtLmlzX21hbGUsXG4gICAgICAgICAgICAgICAgaXRlbS5kb2JcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkUGF0aWVudChwX2xuYW1lOnN0cmluZywgcF9mbmFtZTpzdHJpbmcsIHBpZDpudW1iZXIsIGlzX21hbGU6c3RyaW5nLCBkb2I6RGF0ZSl7XG4gICAgICAgIGxldCBwYXRpZW50ID0gbmV3IFBhdGllbnQocF9sbmFtZSwgcF9mbmFtZSwgcGlkLCBpc19tYWxlLCBkb2IpO1xuICAgICAgICBpZiAoIXRoaXMuZmluZFBhdGllbnQocGF0aWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMucGF0aWVudHMucHVzaChwYXRpZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgZmluZFBhdGllbnQocGF0aWVudDogUGF0aWVudCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGF0aWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChwYXRpZW50LnBpZCA9PSB0aGlzLnBhdGllbnRzWzBdLnBpZCkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
