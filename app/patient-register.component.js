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
                    this.errorMessages = {
                        p_lname: '',
                        p_fname: '',
                        year: '',
                        month: '',
                        day: '',
                    };
                }
                PatientRegisterComponent.prototype.ngOnInit = function () {
                    // this.preprocessPatientForm();
                    this.getPatients();
                };
                PatientRegisterComponent.prototype.getPatients = function () {
                    var _this = this;
                    this._httpService.getAllFromTable('patient')
                        .subscribe(function (patients) { return _this.patients = patients; }, function (error) { return _this.errorMessage = error; });
                };
                // preprocessPatientForm() {
                //     this._httpService.getPQuery().subscribe(
                //         data => this.getPatientNextId(data),
                //         err => alert(err),
                //         () => console.log("GET patient data preprocessing complete")
                //     );
                // }
                PatientRegisterComponent.prototype.checkNull = function () {
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
                PatientRegisterComponent.prototype.postPatient = function (p_lname, p_fname, year, month, day) {
                    var _this = this;
                    this.errorMessage = '';
                    if (this.checkNull.apply(this, arguments)) {
                        console.log("missing arguments");
                        this.errorMessage = 'missing';
                        return;
                    }
                    var dob = year + '-' + month + '-' + day;
                    this._httpService.post({
                        pid: this.next_id,
                        p_lname: p_lname,
                        p_fname: p_fname,
                        is_male: this.sex,
                        dob: dob
                    }, 'patient').subscribe(function (data) { return console.log(data); }, function (error) { return _this.errorMessage = error; }, function () { return console.log("complete"); });
                };
                // assigns a unique new patient id (called the pid in the data model)
                // getPatientNextId(json){
                //     let patient_ids: number[] = [];
                //     let next_id: number = 0;
                //     json.forEach( item => {
                //         patient_ids.push(item.pid);
                //     });
                //     for (let i = 0; i < patient_ids.length; i += 1) {
                //         if (patient_ids[i] > next_id) next_id = patient_ids[i]
                //     }
                //     console.log(next_id + 1);
                //     this.next_id = next_id + 1;
                // }
                // parsePatient(json){
                //     json.forEach( item => {
                //         this.addPatient(
                //             item.p_lname,
                //             item.p_fname,
                //             item.pid,
                //             item.is_male,
                //             item.dob
                //         );
                //     })
                // }
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
                        providers: [
                            http_service_1.HTTPService,
                            router_2.RouterLink
                        ],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JIO2dCQWNJLGtDQUNZLFlBQXlCLEVBQ3pCLE9BQWU7b0JBRGYsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBVjNCLGtCQUFhLEdBQUc7d0JBQ1osT0FBTyxFQUFFLEVBQUU7d0JBQ1gsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsR0FBRyxFQUFFLEVBQUU7cUJBQ1YsQ0FBQztnQkFLQyxDQUFDO2dCQUVKLDJDQUFRLEdBQVI7b0JBQ0ksZ0NBQWdDO29CQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBRUQsOENBQVcsR0FBWDtvQkFBQSxpQkFNQztvQkFMRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7eUJBQ3ZDLFNBQVMsQ0FDTixVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixFQUNwQyxVQUFBLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUMzQyxDQUFDO2dCQUNWLENBQUM7Z0JBRUQsNEJBQTRCO2dCQUM1QiwrQ0FBK0M7Z0JBQy9DLCtDQUErQztnQkFDL0MsNkJBQTZCO2dCQUM3Qix1RUFBdUU7Z0JBQ3ZFLFNBQVM7Z0JBQ1QsSUFBSTtnQkFFSSw0Q0FBUyxHQUFqQjtvQkFBa0IsZ0JBQVM7eUJBQVQsV0FBUyxDQUFULHNCQUFTLENBQVQsSUFBUzt3QkFBVCwrQkFBUzs7b0JBQ3ZCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7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LEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzt3QkFDL0MsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzs0QkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUN6RCxDQUFDO29CQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7Z0JBcElMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsV0FBVyxFQUFFLDJDQUEyQzt3QkFDeEQsU0FBUyxFQUFFOzRCQUNQLDBCQUFXOzRCQUNYLG1CQUFVO3lCQUNiO3dCQUNELFVBQVUsRUFBRSxDQUFDLG1CQUFVLENBQUM7cUJBRTNCLENBQUM7OzRDQUFBO2dCQTRIRiwrQkFBQztZQUFELENBMUhBLEFBMEhDLElBQUE7WUExSEQsK0RBMEhDLENBQUEiLCJmaWxlIjoicGF0aWVudC1yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgam9zaHVhIG9uIDIwMTYtMDMtMzEuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gXCIuL2h0dHAuc2VydmljZVwiO1xuaW1wb3J0IHtQYXRpZW50fSBmcm9tIFwiLi9wYXRpZW50XCI7XG5pbXBvcnQge1JvdXRlckxpbmt9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7UGF0aWVudFZpc2l0fSBmcm9tIFwiLi9wYXRpZW50X3Zpc2l0XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGF0aWVudC1yZWdpc3RlcicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcGF0aWVudC1yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEhUVFBTZXJ2aWNlLFxuICAgICAgICBSb3V0ZXJMaW5rXG4gICAgXSxcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyTGlua10sXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBQYXRpZW50UmVnaXN0ZXJDb21wb25lbnQge1xuXG4gICAgcGF0aWVudHM6QXJyYXk8UGF0aWVudD47XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgbmV4dF9pZDogbnVtYmVyO1xuICAgIHNleDogbnVtYmVyO1xuICAgIGVycm9yTWVzc2FnZXMgPSB7XG4gICAgICAgIHBfbG5hbWU6ICcnLFxuICAgICAgICBwX2ZuYW1lOiAnJyxcbiAgICAgICAgeWVhcjogJycsXG4gICAgICAgIG1vbnRoOiAnJyxcbiAgICAgICAgZGF5OiAnJyxcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9odHRwU2VydmljZTogSFRUUFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIHRoaXMucHJlcHJvY2Vzc1BhdGllbnRGb3JtKCk7XG4gICAgICAgIHRoaXMuZ2V0UGF0aWVudHMoKTtcbiAgICB9XG5cbiAgICBnZXRQYXRpZW50cygpIHtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0QWxsRnJvbVRhYmxlKCdwYXRpZW50JylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcGF0aWVudHMgPT4gdGhpcy5wYXRpZW50cyA9IHBhdGllbnRzLFxuICAgICAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8vIHByZXByb2Nlc3NQYXRpZW50Rm9ybSgpIHtcbiAgICAvLyAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0UFF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgIC8vICAgICAgICAgZGF0YSA9PiB0aGlzLmdldFBhdGllbnROZXh0SWQoZGF0YSksXG4gICAgLy8gICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAvLyAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiR0VUIHBhdGllbnQgZGF0YSBwcmVwcm9jZXNzaW5nIGNvbXBsZXRlXCIpXG4gICAgLy8gICAgICk7XG4gICAgLy8gfVxuXG4gICAgcHJpdmF0ZSBjaGVja051bGwoLi4ucGFyYW1zKSB7XG4gICAgICAgIGxldCBudWxsRGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgcGFyYW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSA9PSAnJykge1xuICAgICAgICAgICAgICAgIG51bGxEZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobnVsbERldGVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvc3RQYXRpZW50KHBfbG5hbWU6IHN0cmluZywgcF9mbmFtZTogc3RyaW5nLCB5ZWFyOiBzdHJpbmcsIG1vbnRoOiBzdHJpbmcsIGRheTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tOdWxsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtaXNzaW5nIGFyZ3VtZW50c1wiKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ21pc3NpbmcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkb2IgPSB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3QoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGlkOiB0aGlzLm5leHRfaWQsXG4gICAgICAgICAgICAgICAgcF9sbmFtZTogcF9sbmFtZSxcbiAgICAgICAgICAgICAgICBwX2ZuYW1lOiBwX2ZuYW1lLFxuICAgICAgICAgICAgICAgIGlzX21hbGU6IHRoaXMuc2V4LFxuICAgICAgICAgICAgICAgIGRvYjogZG9iXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3BhdGllbnQnXG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IsXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gYXNzaWducyBhIHVuaXF1ZSBuZXcgcGF0aWVudCBpZCAoY2FsbGVkIHRoZSBwaWQgaW4gdGhlIGRhdGEgbW9kZWwpXG4gICAgLy8gZ2V0UGF0aWVudE5leHRJZChqc29uKXtcbiAgICAvLyAgICAgbGV0IHBhdGllbnRfaWRzOiBudW1iZXJbXSA9IFtdO1xuICAgIC8vICAgICBsZXQgbmV4dF9pZDogbnVtYmVyID0gMDtcbiAgICAvLyAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAvLyAgICAgICAgIHBhdGllbnRfaWRzLnB1c2goaXRlbS5waWQpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRpZW50X2lkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIC8vICAgICAgICAgaWYgKHBhdGllbnRfaWRzW2ldID4gbmV4dF9pZCkgbmV4dF9pZCA9IHBhdGllbnRfaWRzW2ldXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgY29uc29sZS5sb2cobmV4dF9pZCArIDEpO1xuICAgIC8vICAgICB0aGlzLm5leHRfaWQgPSBuZXh0X2lkICsgMTtcbiAgICAvLyB9XG5cbiAgICAvLyBwYXJzZVBhdGllbnQoanNvbil7XG4gICAgLy8gICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLmFkZFBhdGllbnQoXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5wX2xuYW1lLFxuICAgIC8vICAgICAgICAgICAgIGl0ZW0ucF9mbmFtZSxcbiAgICAvLyAgICAgICAgICAgICBpdGVtLnBpZCxcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmlzX21hbGUsXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5kb2JcbiAgICAvLyAgICAgICAgICk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuXG5cbiAgICBhZGRQYXRpZW50KHBfbG5hbWU6c3RyaW5nLCBwX2ZuYW1lOnN0cmluZywgcGlkOm51bWJlciwgaXNfbWFsZTpzdHJpbmcsIGRvYjpEYXRlKXtcbiAgICAgICAgbGV0IHBhdGllbnQgPSBuZXcgUGF0aWVudChwX2xuYW1lLCBwX2ZuYW1lLCBwaWQsIGlzX21hbGUsIGRvYik7XG4gICAgICAgIGlmICghdGhpcy5maW5kUGF0aWVudChwYXRpZW50KSkge1xuICAgICAgICAgICAgdGhpcy5wYXRpZW50cy5wdXNoKHBhdGllbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgZmluZFBhdGllbnQocGF0aWVudDogUGF0aWVudCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGF0aWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChwYXRpZW50LnBpZCA9PSB0aGlzLnBhdGllbnRzWzBdLnBpZCkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
