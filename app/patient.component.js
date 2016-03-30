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
                    var patient = new Patient_1.Patient(p_lname, p_fname, pid, is_male, dob);
                    this.patients.push(patient);
                };
                PatientComponent = __decorate([
                    core_1.Component({
                        selector: 'patient',
                        template: "\n    <html>\n<head>\n    <title>ERWaitingTime</title>\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css\" rel=\"stylesheet\"/>\n    <style>\n        #customers {\n            font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n            border-collapse: collapse;\n            width: 100%;\n        }\n        #customers td, #customers th {\n            border: 1px solid #ddd;\n            text-align: left;\n            padding: 8px;\n        }\n        #customers tr:nth-child(even){background-color: #f2f2f2}\n        #customers tr:hover {background-color: #ddd;}\n        #customers th {\n            padding-top: 12px;\n            padding-bottom: 12px;\n            background-color: #4CAF50;\n            color: white;\n        }\n    </style>\n</head>\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"../home\">ERWaitingTime</a>\n    </div>\n</nav>\n\n<body>\n<div class=\"page-header\" style=\"margin-top: 100px\">\n    <h1><center>Patients List</center></h1>\n</div>\n<p id=\"demo\"></p>\n<script>\n    document.getElementById(\"demo\").innerHTML = Date();\n</script>\n<table id=\"customers\">\n     <table>\n            <tr>\n                <th> patient_lastname </th>\n                <th> patient_firstname</th>\n                <th> patient_id</th>\n                <th> patient_gender</th>\n                <th> patient_date</th>\n            </tr>\n            <tr *ngFor=\"#patient of patients\">\n                <td> {{patient.p_lname}} </td>\n                <td> {{patient.p_fname}} </td>\n                <td> {{patient.pid}} </td>\n                <td> {{patient.is_male}} </td>\n                <td> {{patient.dob}} </td>\n            </tr>\n        </table>\n</table>\n</body>\n\n</html>\n",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUVBO2dCQUdJLDBCQUFvQixXQUF3QjtvQkFIaEQsaUJBNEJDO29CQXpCdUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FDbEMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUF2QixDQUF1QixFQUMvQixVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsdUNBQVksR0FBWixVQUFhLElBQUk7b0JBQWpCLGlCQVNDO29CQVJHLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJO3dCQUNkLEtBQUksQ0FBQyxVQUFVLENBQ1gsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxHQUFHLEVBQ1IsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xCLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRUQscUNBQVUsR0FBVixVQUFXLE9BQWUsRUFBRSxPQUFlLEVBQUUsR0FBVSxFQUFDLE9BQWMsRUFBRSxHQUFRO29CQUM1RSxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkE1Rkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsU0FBUzt3QkFDbEIsUUFBUSxFQUFFLG16REE2RGI7d0JBQ0csU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztxQkFDMUIsQ0FBQzs7b0NBQUE7Z0JBNkJGLHVCQUFDO1lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtZQTVCRCwrQ0E0QkMsQ0FBQSIsImZpbGUiOiJwYXRpZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKb3kgb24gMjAxNi0wMy0yOC5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQYXRpZW50fSBmcm9tICcuL1BhdGllbnQnO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjoncGF0aWVudCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aHRtbD5cbjxoZWFkPlxuICAgIDx0aXRsZT5FUldhaXRpbmdUaW1lPC90aXRsZT5cbiAgICA8bGluayBocmVmPVwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4xLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICA8c3R5bGU+XG4gICAgICAgICNjdXN0b21lcnMge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAjY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyfVxuICAgICAgICAjY3VzdG9tZXJzIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cbiAgICAgICAgI2N1c3RvbWVycyB0aCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIDwvc3R5bGU+XG48L2hlYWQ+XG48bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi4uL2hvbWVcIj5FUldhaXRpbmdUaW1lPC9hPlxuICAgIDwvZGl2PlxuPC9uYXY+XG5cbjxib2R5PlxuPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMDBweFwiPlxuICAgIDxoMT48Y2VudGVyPlBhdGllbnRzIExpc3Q8L2NlbnRlcj48L2gxPlxuPC9kaXY+XG48cCBpZD1cImRlbW9cIj48L3A+XG48c2NyaXB0PlxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVtb1wiKS5pbm5lckhUTUwgPSBEYXRlKCk7XG48L3NjcmlwdD5cbjx0YWJsZSBpZD1cImN1c3RvbWVyc1wiPlxuICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPiBwYXRpZW50X2xhc3RuYW1lIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiBwYXRpZW50X2ZpcnN0bmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiBwYXRpZW50X2lkPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+IHBhdGllbnRfZ2VuZGVyPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+IHBhdGllbnRfZGF0ZTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiNwYXRpZW50IG9mIHBhdGllbnRzXCI+XG4gICAgICAgICAgICAgICAgPHRkPiB7e3BhdGllbnQucF9sbmFtZX19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7e3BhdGllbnQucF9mbmFtZX19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7e3BhdGllbnQucGlkfX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+IHt7cGF0aWVudC5pc19tYWxlfX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+IHt7cGF0aWVudC5kb2J9fSA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90YWJsZT5cbjwvdGFibGU+XG48L2JvZHk+XG5cbjwvaHRtbD5cbmAsXG4gICAgcHJvdmlkZXJzOltIVFRQU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUGF0aWVudENvbXBvbmVudHtcbiAgICBwYXRpZW50czpBcnJheTxQYXRpZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKXtcbiAgICAgICAgdGhpcy5wYXRpZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldFBRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVBhdGllbnQoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZVBhdGllbnQoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFBhdGllbnQoXG4gICAgICAgICAgICAgICAgaXRlbS5wX2xuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0ucF9mbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnBpZCxcbiAgICAgICAgICAgICAgICBpdGVtLmlzX21hbGUsXG4gICAgICAgICAgICAgICAgaXRlbS5kb2IpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFBhdGllbnQocF9sbmFtZTogc3RyaW5nLCBwX2ZuYW1lOiBzdHJpbmcsIHBpZDpudW1iZXIsaXNfbWFsZTpzdHJpbmcsIGRvYjpEYXRlKXtcbiAgICAgICAgbGV0IHBhdGllbnQgPSBuZXcgUGF0aWVudChwX2xuYW1lLHBfZm5hbWUscGlkLGlzX21hbGUsZG9iKTtcbiAgICAgICAgdGhpcy5wYXRpZW50cy5wdXNoKHBhdGllbnQpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
