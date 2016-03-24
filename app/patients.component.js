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
                PatientsComponent.prototype.addPatient = function (gender, p_fname, p_lname, pid, dob) {
                    var patient = new patient_1.Patient(gender, p_fname, p_lname, pid, dob);
                    this.patients.push(patient);
                };
                PatientsComponent.prototype.removePatient = function (patient) {
                    var index = this.patients.indexOf(patient);
                    this.patients.splice(index, 1);
                };
                PatientsComponent = __decorate([
                    core_1.Component({
                        selector: 'patient',
                        templateUrl: 'views/patients.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PatientsComponent);
                return PatientsComponent;
            }());
            exports_1("PatientsComponent", PatientsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUdJO29CQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELHNDQUFVLEdBQVYsVUFBVyxNQUFhLEVBQUUsT0FBYyxFQUFFLE9BQWMsRUFBRSxHQUFVLEVBQUUsR0FBUTtvQkFDMUUsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQseUNBQWEsR0FBYixVQUFjLE9BQWdCO29CQUMxQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQXJCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxTQUFTO3dCQUNsQixXQUFXLEVBQUMsK0JBQStCO3FCQUM5QyxDQUFDOztxQ0FBQTtnQkFxQkYsd0JBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELGlEQWtCQyxDQUFBIiwiZmlsZSI6InBhdGllbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB3ZW5keXdhbmcgb24gMjAxNi0wMy0xMy5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsVmlld30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BhdGllbnR9IGZyb20gJy4vcGF0aWVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidwYXRpZW50JyxcbiAgICB0ZW1wbGF0ZVVybDondmlld3MvcGF0aWVudHMuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBQYXRpZW50c0NvbXBvbmVudHtcbiAgICBwYXRpZW50czpBcnJheTxQYXRpZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucGF0aWVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRQYXRpZW50KGdlbmRlcjpzdHJpbmcsIHBfZm5hbWU6c3RyaW5nLCBwX2xuYW1lOnN0cmluZywgcGlkOm51bWJlciwgZG9iOkRhdGUpe1xuICAgICAgICBsZXQgcGF0aWVudCA9IG5ldyBQYXRpZW50KGdlbmRlcixwX2ZuYW1lLHBfbG5hbWUscGlkLGRvYik7XG4gICAgICAgIHRoaXMucGF0aWVudHMucHVzaChwYXRpZW50KTtcbiAgICB9XG5cbiAgICByZW1vdmVQYXRpZW50KHBhdGllbnQ6IFBhdGllbnQpe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnBhdGllbnRzLmluZGV4T2YocGF0aWVudCk7XG4gICAgICAgIHRoaXMucGF0aWVudHMuc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
