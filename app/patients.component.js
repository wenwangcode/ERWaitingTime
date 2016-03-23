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
    var PatientsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (patient_1_1) {
                patient_1 = patient_1_1;
            }],
        execute: function() {
            PatientsComponent = (function () {
                function PatientsComponent() {
                    this.patients = [];
                }
                PatientsComponent.prototype.addPatient = function (gender, pname, pid, dob) {
                    var patient = new patient_1.Patient(gender, pname, pid, dob);
                    this.patients.push(patient);
                };
                PatientsComponent.prototype.removeVisit = function (patient) {
                    var index = this.patients.indexOf(patient);
                    this.patients.splice(index, 1);
                };
                PatientsComponent = __decorate([
                    core_1.Component({
                        selector: 'patient',
                        templateURL: 'views/patients.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PatientsComponent);
                return PatientsComponent;
            }());
            exports_1("PatientsComponent", PatientsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUdJO29CQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELHNDQUFVLEdBQVYsVUFBVyxNQUFhLEVBQUUsS0FBWSxFQUFFLEdBQVUsRUFBRSxHQUFRO29CQUN4RCxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELHVDQUFXLEdBQVgsVUFBWSxPQUFnQjtvQkFDeEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFyQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsU0FBUzt3QkFDbEIsV0FBVyxFQUFDLCtCQUErQjtxQkFDOUMsQ0FBQzs7cUNBQUE7Z0JBcUJGLHdCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCxpREFrQkMsQ0FBQSIsImZpbGUiOiJwYXRpZW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgd2VuZHl3YW5nIG9uIDIwMTYtMDMtMTMuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQYXRpZW50fSBmcm9tICcuL3BhdGllbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjoncGF0aWVudCcsXG4gICAgdGVtcGxhdGVVUkw6J3ZpZXdzL3BhdGllbnRzLmNvbXBvbmVudC5odG1sJ1xufSlcblxuXG5leHBvcnQgY2xhc3MgUGF0aWVudHNDb21wb25lbnR7XG4gICAgcGF0aWVudHM6QXJyYXk8UGF0aWVudD47XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBhdGllbnRzID0gW107XG4gICAgfVxuXG4gICAgYWRkUGF0aWVudChnZW5kZXI6c3RyaW5nLCBwbmFtZTpzdHJpbmcsIHBpZDpudW1iZXIsIGRvYjpEYXRlKXtcbiAgICAgICAgbGV0IHBhdGllbnQgPSBuZXcgUGF0aWVudChnZW5kZXIscG5hbWUscGlkLGRvYik7XG4gICAgICAgIHRoaXMucGF0aWVudHMucHVzaChwYXRpZW50KTtcbiAgICB9XG5cbiAgICByZW1vdmVWaXNpdChwYXRpZW50OiBQYXRpZW50KXtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5wYXRpZW50cy5pbmRleE9mKHBhdGllbnQpO1xuICAgICAgICB0aGlzLnBhdGllbnRzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
