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
                function PatientComponent(httpService) {
                    var _this = this;
                    this.httpService = httpService;
                    this.patients = [];
                    this.httpService.getPQuery().subscribe(function (data) { return _this.parsePatient(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                }
                PatientComponent.prototype.parsePatient = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addPatient(item.p_lname, item.p_fname, item.pid, item.is_male, item.dob);
                    });
                };
                PatientComponent.prototype.addPatient = function (p_lname, p_fname, pid, is_male, dob) {
                    var _this = this;
                    var patient = new Patient_1.Patient(p_lname, p_fname, pid, is_male, dob);
                    this.httpService.postPQuery().subscribe(function (data) { return _this.parsePatient(data); }, function (err) { return alert(err); }, function () { return console.log("post complete"); });
                };
                PatientComponent.prototype.removePatient = function (patient) {
                    var index = this.patients.indexOf(patient);
                    this.patients.splice(index, 1);
                };
                PatientComponent = __decorate([
                    core_1.Component({
                        selector: 'patient',
                        template: "\n        <table>\n            <tr>\n                <th> patient_lastname </th>\n                <th> patient_firstname</th>\n                <th> patient_id</th>\n                <th> patient_gender</th>\n                <th> patient_date</th>\n            </tr>\n            <tr *ngFor=\"#patient of patients\"> \n                <td> {{patient.p_lname}} </td>\n                <td> {{patient.p_fname}} </td>\n                <td> {{patient.pid}} </td>\n                <td> {{patient.is_male}} </td>\n                <td> {{patient.dob}} </td>\n            </tr>\n        </table>\n        \n        <br/><br/>\n        <input type=\"text\"   #p_lname>\n        <input type=\"text\" #p_fname>\n        <input type=\"number\" min=\"0\" max=\"10000\"#pid>\n        <input type=\"text\"  #is_male>\n        <input type=\"number\" min=\"0\" max=\"10000\" #dob>\n        <input type=\"submit\" (click)=\"\n            addPatient(p_lname.value,p_fname.value,pid.value,is_male.value,dob.value)\">\n            \n",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUNBO2dCQUdJLDBCQUFvQixXQUF3QjtvQkFIaEQsaUJBb0NDO29CQWpDdUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FDbEMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUF2QixDQUF1QixFQUMvQixVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsdUNBQVksR0FBWixVQUFhLElBQUk7b0JBQWpCLGlCQVFDO29CQVBHLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJO3dCQUNkLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFDeEIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsR0FBRyxFQUNSLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUVELHFDQUFVLEdBQVYsVUFBVyxPQUFlLEVBQUUsT0FBZSxFQUFFLEdBQVUsRUFBQyxPQUFjLEVBQUUsR0FBUTtvQkFBaEYsaUJBTUM7b0JBTEcsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQ25DLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsRUFDL0IsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUdELHdDQUFhLEdBQWIsVUFBYyxPQUFlO29CQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQWxFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxTQUFTO3dCQUNsQixRQUFRLEVBQUUsbS9CQTJCYjt3QkFDRyxTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO3FCQUMxQixDQUFDOztvQ0FBQTtnQkFxQ0YsdUJBQUM7WUFBRCxDQXBDQSxBQW9DQyxJQUFBO1lBcENELCtDQW9DQyxDQUFBIiwiZmlsZSI6InBhdGllbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTI4LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BhdGllbnR9IGZyb20gJy4vUGF0aWVudCc7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidwYXRpZW50JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPiBwYXRpZW50X2xhc3RuYW1lIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiBwYXRpZW50X2ZpcnN0bmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiBwYXRpZW50X2lkPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+IHBhdGllbnRfZ2VuZGVyPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+IHBhdGllbnRfZGF0ZTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiNwYXRpZW50IG9mIHBhdGllbnRzXCI+IFxuICAgICAgICAgICAgICAgIDx0ZD4ge3twYXRpZW50LnBfbG5hbWV9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge3twYXRpZW50LnBfZm5hbWV9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge3twYXRpZW50LnBpZH19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7e3BhdGllbnQuaXNfbWFsZX19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7e3BhdGllbnQuZG9ifX0gPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIFxuICAgICAgICA8YnIvPjxici8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICAgI3BfbG5hbWU+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNwX2ZuYW1lPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBtYXg9XCIxMDAwMFwiI3BpZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgICNpc19tYWxlPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBtYXg9XCIxMDAwMFwiICNkb2I+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cIlxuICAgICAgICAgICAgYWRkUGF0aWVudChwX2xuYW1lLnZhbHVlLHBfZm5hbWUudmFsdWUscGlkLnZhbHVlLGlzX21hbGUudmFsdWUsZG9iLnZhbHVlKVwiPlxuICAgICAgICAgICAgXG5gLFxuICAgIHByb3ZpZGVyczpbSFRUUFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFBhdGllbnRDb21wb25lbnR7XG4gICAgcGF0aWVudHM6QXJyYXk8UGF0aWVudD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7XG4gICAgICAgIHRoaXMucGF0aWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5nZXRQUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VQYXRpZW50KGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VQYXRpZW50KGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRQYXRpZW50KGl0ZW0ucF9sbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnBfZm5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbS5waWQsXG4gICAgICAgICAgICAgICAgaXRlbS5pc19tYWxlLFxuICAgICAgICAgICAgICAgIGl0ZW0uZG9iKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRQYXRpZW50KHBfbG5hbWU6IHN0cmluZywgcF9mbmFtZTogc3RyaW5nLCBwaWQ6bnVtYmVyLGlzX21hbGU6c3RyaW5nLCBkb2I6RGF0ZSl7XG4gICAgICAgIGxldCBwYXRpZW50ID0gbmV3IFBhdGllbnQocF9sbmFtZSxwX2ZuYW1lLHBpZCxpc19tYWxlLGRvYik7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UucG9zdFBRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVBhdGllbnQoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwicG9zdCBjb21wbGV0ZVwiKSk7XG4gICAgfVxuXG5cbiAgICByZW1vdmVQYXRpZW50KHBhdGllbnQ6UGF0aWVudCl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucGF0aWVudHMuaW5kZXhPZihwYXRpZW50KTtcbiAgICAgICAgdGhpcy5wYXRpZW50cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
