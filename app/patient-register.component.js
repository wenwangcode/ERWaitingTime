/**
 * Created by joshua on 2016-03-31.
 */
System.register(['angular2/core', 'angular2/router', "./http.service", "./patient", "./is-loggedin"], function(exports_1, context_1) {
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
    var core_1, router_1, http_service_1, patient_1, router_2, is_loggedin_1;
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
            },
            function (is_loggedin_1_1) {
                is_loggedin_1 = is_loggedin_1_1;
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
                    router_1.CanActivate(function () { return is_loggedin_1.isLoggedin(); }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService, router_1.Router])
                ], PatientRegisterComponent);
                return PatientRegisterComponent;
            }());
            exports_1("PatientRegisterComponent", PatientRegisterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JIO2dCQWNJLGtDQUNZLFlBQXlCLEVBQ3pCLE9BQWU7b0JBRGYsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBVjNCLGtCQUFhLEdBQUc7d0JBQ1osT0FBTyxFQUFFLEVBQUU7d0JBQ1gsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsR0FBRyxFQUFFLEVBQUU7cUJBQ1YsQ0FBQztnQkFLQyxDQUFDO2dCQUVKLDJDQUFRLEdBQVI7b0JBQ0ksZ0NBQWdDO29CQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBRUQsOENBQVcsR0FBWDtvQkFBQSxpQkFNQztvQkFMRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7eUJBQ3ZDLFNBQVMsQ0FDTixVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixFQUNwQyxVQUFBLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUMzQyxDQUFDO2dCQUNWLENBQUM7Z0JBRUQsNEJBQTRCO2dCQUM1QiwrQ0FBK0M7Z0JBQy9DLCtDQUErQztnQkFDL0MsNkJBQTZCO2dCQUM3Qix1RUFBdUU7Z0JBQ3ZFLFNBQVM7Z0JBQ1QsSUFBSTtnQkFFSSw0Q0FBUyxHQUFqQjtvQkFBa0IsZ0JBQVM7eUJBQVQsV0FBUyxDQUFULHNCQUFTLENBQVQsSUFBUzt3QkFBVCwrQkFBUzs7b0JBQ3ZCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQztvQkFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElB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QUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzt3QkFDL0MsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzs0QkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUN6RCxDQUFDO29CQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7Z0JBcklMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsV0FBVyxFQUFFLDJDQUEyQzt3QkFDeEQsU0FBUyxFQUFFOzRCQUNQLDBCQUFXOzRCQUNYLG1CQUFVO3lCQUNiO3dCQUNELFVBQVUsRUFBRSxDQUFDLG1CQUFVLENBQUM7cUJBQzNCLENBQUM7b0JBRUQsb0JBQVcsQ0FBQyxjQUFNLE9BQUEsd0JBQVUsRUFBRSxFQUFaLENBQVksQ0FBQzs7NENBQUE7Z0JBNEhoQywrQkFBQztZQUFELENBMUhBLEFBMEhDLElBQUE7WUExSEQsK0RBMEhDLENBQUEiLCJmaWxlIjoicGF0aWVudC1yZWdpc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgam9zaHVhIG9uIDIwMTYtMDMtMzEuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgQ2FuQWN0aXZhdGV9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcbmltcG9ydCB7UGF0aWVudH0gZnJvbSBcIi4vcGF0aWVudFwiO1xuaW1wb3J0IHtSb3V0ZXJMaW5rfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge1BhdGllbnRWaXNpdH0gZnJvbSBcIi4vcGF0aWVudF92aXNpdFwiO1xuaW1wb3J0IHtpc0xvZ2dlZGlufSBmcm9tIFwiLi9pcy1sb2dnZWRpblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BhdGllbnQtcmVnaXN0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3BhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBIVFRQU2VydmljZSxcbiAgICAgICAgUm91dGVyTGlua1xuICAgIF0sXG4gICAgZGlyZWN0aXZlczogW1JvdXRlckxpbmtdLFxufSlcblxuQENhbkFjdGl2YXRlKCgpID0+IGlzTG9nZ2VkaW4oKSlcblxuZXhwb3J0IGNsYXNzIFBhdGllbnRSZWdpc3RlckNvbXBvbmVudCB7XG5cbiAgICBwYXRpZW50czpBcnJheTxQYXRpZW50PjtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBuZXh0X2lkOiBudW1iZXI7XG4gICAgc2V4OiBudW1iZXI7XG4gICAgZXJyb3JNZXNzYWdlcyA9IHtcbiAgICAgICAgcF9sbmFtZTogJycsXG4gICAgICAgIHBfZm5hbWU6ICcnLFxuICAgICAgICB5ZWFyOiAnJyxcbiAgICAgICAgbW9udGg6ICcnLFxuICAgICAgICBkYXk6ICcnLFxuICAgIH07XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gdGhpcy5wcmVwcm9jZXNzUGF0aWVudEZvcm0oKTtcbiAgICAgICAgdGhpcy5nZXRQYXRpZW50cygpO1xuICAgIH1cblxuICAgIGdldFBhdGllbnRzKCkge1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRBbGxGcm9tVGFibGUoJ3BhdGllbnQnKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBwYXRpZW50cyA9PiB0aGlzLnBhdGllbnRzID0gcGF0aWVudHMsXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLy8gcHJlcHJvY2Vzc1BhdGllbnRGb3JtKCkge1xuICAgIC8vICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRQUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgLy8gICAgICAgICBkYXRhID0+IHRoaXMuZ2V0UGF0aWVudE5leHRJZChkYXRhKSxcbiAgICAvLyAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgIC8vICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJHRVQgcGF0aWVudCBkYXRhIHByZXByb2Nlc3NpbmcgY29tcGxldGVcIilcbiAgICAvLyAgICAgKTtcbiAgICAvLyB9XG5cbiAgICBwcml2YXRlIGNoZWNrTnVsbCguLi5wYXJhbXMpIHtcbiAgICAgICAgbGV0IG51bGxEZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgICBwYXJhbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtID09ICcnKSB7XG4gICAgICAgICAgICAgICAgbnVsbERldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChudWxsRGV0ZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcG9zdFBhdGllbnQocF9sbmFtZTogc3RyaW5nLCBwX2ZuYW1lOiBzdHJpbmcsIHllYXI6IHN0cmluZywgbW9udGg6IHN0cmluZywgZGF5OiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xuICAgICAgICBpZiAodGhpcy5jaGVja051bGwuYXBwbHkodGhpcywgYXJndW1lbnRzKSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1pc3NpbmcgYXJndW1lbnRzXCIpO1xuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnbWlzc2luZyc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRvYiA9IHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheTtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwaWQ6IHRoaXMubmV4dF9pZCxcbiAgICAgICAgICAgICAgICBwX2xuYW1lOiBwX2xuYW1lLFxuICAgICAgICAgICAgICAgIHBfZm5hbWU6IHBfZm5hbWUsXG4gICAgICAgICAgICAgICAgaXNfbWFsZTogdGhpcy5zZXgsXG4gICAgICAgICAgICAgICAgZG9iOiBkb2JcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncGF0aWVudCdcbiAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcixcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG5cbiAgICAvLyBhc3NpZ25zIGEgdW5pcXVlIG5ldyBwYXRpZW50IGlkIChjYWxsZWQgdGhlIHBpZCBpbiB0aGUgZGF0YSBtb2RlbClcbiAgICAvLyBnZXRQYXRpZW50TmV4dElkKGpzb24pe1xuICAgIC8vICAgICBsZXQgcGF0aWVudF9pZHM6IG51bWJlcltdID0gW107XG4gICAgLy8gICAgIGxldCBuZXh0X2lkOiBudW1iZXIgPSAwO1xuICAgIC8vICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgIC8vICAgICAgICAgcGF0aWVudF9pZHMucHVzaChpdGVtLnBpZCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGllbnRfaWRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgLy8gICAgICAgICBpZiAocGF0aWVudF9pZHNbaV0gPiBuZXh0X2lkKSBuZXh0X2lkID0gcGF0aWVudF9pZHNbaV1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBjb25zb2xlLmxvZyhuZXh0X2lkICsgMSk7XG4gICAgLy8gICAgIHRoaXMubmV4dF9pZCA9IG5leHRfaWQgKyAxO1xuICAgIC8vIH1cblxuICAgIC8vIHBhcnNlUGF0aWVudChqc29uKXtcbiAgICAvLyAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMuYWRkUGF0aWVudChcbiAgICAvLyAgICAgICAgICAgICBpdGVtLnBfbG5hbWUsXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5wX2ZuYW1lLFxuICAgIC8vICAgICAgICAgICAgIGl0ZW0ucGlkLFxuICAgIC8vICAgICAgICAgICAgIGl0ZW0uaXNfbWFsZSxcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmRvYlxuICAgIC8vICAgICAgICAgKTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG5cblxuICAgIGFkZFBhdGllbnQocF9sbmFtZTpzdHJpbmcsIHBfZm5hbWU6c3RyaW5nLCBwaWQ6bnVtYmVyLCBpc19tYWxlOnN0cmluZywgZG9iOkRhdGUpe1xuICAgICAgICBsZXQgcGF0aWVudCA9IG5ldyBQYXRpZW50KHBfbG5hbWUsIHBfZm5hbWUsIHBpZCwgaXNfbWFsZSwgZG9iKTtcbiAgICAgICAgaWYgKCF0aGlzLmZpbmRQYXRpZW50KHBhdGllbnQpKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGllbnRzLnB1c2gocGF0aWVudCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBmaW5kUGF0aWVudChwYXRpZW50OiBQYXRpZW50KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXRpZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHBhdGllbnQucGlkID09IHRoaXMucGF0aWVudHNbMF0ucGlkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
