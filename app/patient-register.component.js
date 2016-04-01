/**
 * Created by joshua on 2016-03-31.
 */
System.register(['angular2/core', "./http.service", "./patient"], function(exports_1, context_1) {
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
    var core_1, http_service_1, patient_1;
    var PatientRegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (patient_1_1) {
                patient_1 = patient_1_1;
            }],
        execute: function() {
            PatientRegisterComponent = (function () {
                function PatientRegisterComponent(_httpService) {
                    this._httpService = _httpService;
                    this.patients = [];
                }
                PatientRegisterComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._httpService.getPQuery(function (data) { return _this.parsePatient(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                PatientRegisterComponent.prototype.parsePatient = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addPatient(item.p_lname, item.p_fname, item.pid, item.is_male, item.dob);
                    });
                };
                PatientRegisterComponent.prototype.addPatient = function (p_lname, p_fname, pid, is_male, dob) {
                    var patient = new patient_1.Patient(p_lname, p_fname, pid, is_male, dob);
                    this.patients.push(patient);
                };
                PatientRegisterComponent = __decorate([
                    core_1.Component({
                        selector: '',
                        templateUrl: '',
                        providers: [http_service_1.HTTPService,],
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], PatientRegisterComponent);
                return PatientRegisterComponent;
            }());
            exports_1("PatientRegisterComponent", PatientRegisterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhSDtnQkFJSSxrQ0FBb0IsWUFBeUI7b0JBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUY3QyxhQUFRLEdBQWMsRUFBRSxDQUFDO2dCQUd6QixDQUFDO2dCQUVELDJDQUFRLEdBQVI7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQ3ZCLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsRUFDL0IsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQTtnQkFDTCxDQUFDO2dCQUVELCtDQUFZLEdBQVosVUFBYSxJQUFJO29CQUFqQixpQkFVQztvQkFURyxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQUEsSUFBSTt3QkFDZCxLQUFJLENBQUMsVUFBVSxDQUNYLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsR0FBRyxFQUNSLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLEdBQUcsQ0FDWCxDQUFDO29CQUNOLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRUQsNkNBQVUsR0FBVixVQUFXLE9BQWMsRUFBRSxPQUFjLEVBQUUsR0FBVSxFQUFFLE9BQWMsRUFBRSxHQUFRO29CQUMzRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFyQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsRUFBRTt3QkFDWixXQUFXLEVBQUUsRUFBRTt3QkFDZixTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFO3FCQUU1QixDQUFDOzs0Q0FBQTtnQkFpQ0YsK0JBQUM7WUFBRCxDQS9CQSxBQStCQyxJQUFBO1lBL0JELCtEQStCQyxDQUFBIiwiZmlsZSI6InBhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGpvc2h1YSBvbiAyMDE2LTAzLTMxLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSBcIi4vaHR0cC5zZXJ2aWNlXCI7XG5pbXBvcnQge1BhdGllbnR9IGZyb20gXCIuL3BhdGllbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBwcm92aWRlcnM6IFtIVFRQU2VydmljZSxdLFxuICAgIFxufSlcblxuZXhwb3J0IGNsYXNzIFBhdGllbnRSZWdpc3RlckNvbXBvbmVudCB7XG4gICAgXG4gICAgcGF0aWVudHM6IFBhdGllbnRbXSA9IFtdO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSkge1xuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0UFF1ZXJ5KFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlUGF0aWVudChkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgcGFyc2VQYXRpZW50KGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRQYXRpZW50KFxuICAgICAgICAgICAgICAgIGl0ZW0ucF9sbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnBfZm5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbS5waWQsXG4gICAgICAgICAgICAgICAgaXRlbS5pc19tYWxlLFxuICAgICAgICAgICAgICAgIGl0ZW0uZG9iXG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFBhdGllbnQocF9sbmFtZTpzdHJpbmcsIHBfZm5hbWU6c3RyaW5nLCBwaWQ6bnVtYmVyLCBpc19tYWxlOnN0cmluZywgZG9iOkRhdGUpe1xuICAgICAgICBsZXQgcGF0aWVudCA9IG5ldyBQYXRpZW50KHBfbG5hbWUsIHBfZm5hbWUsIHBpZCwgaXNfbWFsZSwgZG9iKTtcbiAgICAgICAgdGhpcy5wYXRpZW50cy5wdXNoKHBhdGllbnQpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
