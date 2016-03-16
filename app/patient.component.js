System.register(['angular2/core', './patient'], function(exports_1, context_1) {
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
    var core_1, patient_1;
    var PatientComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (patient_1_1) {
                patient_1 = patient_1_1;
            }],
        execute: function() {
            PatientComponent = (function () {
                function PatientComponent() {
                    this.patients = [];
                }
                PatientComponent.prototype.addPatient = function (gender, pname, pid, dob) {
                    var patient = new patient_1.Patient(gender, pname, pid, dob);
                    this.patients.push(patient);
                };
                PatientComponent.prototype.removeVisit = function (patient) {
                    var index = this.patients.indexOf(patient);
                    this.patients.splice(index, 1);
                };
                PatientComponent = __decorate([
                    core_1.Component({
                        selector: 'patient',
                        template: "<h1>hello world</h1>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PatientComponent);
                return PatientComponent;
            }());
            exports_1("PatientComponent", PatientComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBR0k7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBRUQscUNBQVUsR0FBVixVQUFXLE1BQWEsRUFBRSxLQUFZLEVBQUUsR0FBVSxFQUFFLEdBQVE7b0JBQ3hELElBQUksT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztvQkFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQsc0NBQVcsR0FBWCxVQUFZLE9BQWdCO29CQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQXRCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxTQUFTO3dCQUNsQixRQUFRLEVBQ0osc0JBQXNCO3FCQUM3QixDQUFDOztvQ0FBQTtnQkFvQkYsdUJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELCtDQWlCQyxDQUFBIiwiZmlsZSI6InBhdGllbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHdlbmR5d2FuZyBvbiAyMDE2LTAzLTEzLlxuICovXG5pbXBvcnQge0NvbXBvbmVudCxWaWV3fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UGF0aWVudH0gZnJvbSAnLi9wYXRpZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3BhdGllbnQnLFxuICAgIHRlbXBsYXRlOlxuICAgICAgICBgPGgxPmhlbGxvIHdvcmxkPC9oMT5gXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBQYXRpZW50Q29tcG9uZW50e1xuICAgIHBhdGllbnRzOkFycmF5PFBhdGllbnQ+O1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wYXRpZW50cyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFBhdGllbnQoZ2VuZGVyOnN0cmluZywgcG5hbWU6c3RyaW5nLCBwaWQ6bnVtYmVyLCBkb2I6RGF0ZSl7XG4gICAgICAgIGxldCBwYXRpZW50ID0gbmV3IFBhdGllbnQoZ2VuZGVyLHBuYW1lLHBpZCxkb2IpO1xuICAgICAgICB0aGlzLnBhdGllbnRzLnB1c2gocGF0aWVudCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVmlzaXQocGF0aWVudDogUGF0aWVudCl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucGF0aWVudHMuaW5kZXhPZihwYXRpZW50KTtcbiAgICAgICAgdGhpcy5wYXRpZW50cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
