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
                        template: "\n    <html>\n<head>\n    <title>ERWaitingTime</title>\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css\" rel=\"stylesheet\"/>\n    <style>\n        #customers {\n            font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n            border-collapse: collapse;\n            width: 100%;\n        }\n        #customers td, #customers th {\n            border: 1px solid #ddd;\n            text-align: left;\n            padding: 8px;\n        }\n        #customers tr:nth-child(even){background-color: #f2f2f2}\n        #customers tr:hover {background-color: #ddd;}\n        #customers th {\n            padding-top: 12px;\n            padding-bottom: 12px;\n            background-color: #4CAF50;\n            color: white;\n        }\n    </style>\n</head>\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"../home\">ERWaitingTime</a>\n    </div>\n</nav>\n\n<body>\n<div class=\"page-header\" style=\"margin-top: 100px\">\n    <h1><center>Patients List</center></h1>\n</div>\n<p id=\"demo\"></p>\n<script>\n    document.getElementById(\"demo\").innerHTML = Date();\n</script>\n<table id=\"customers\">\n     <table>\n            <tr>\n                <th> patient_lastname </th>\n                <th> patient_firstname</th>\n                <th> patient_id</th>\n                <th> patient_gender</th>\n                <th> patient_date</th>\n            </tr>\n            <tr *ngFor=\"#patient of patients\">\n                <td> \"hihihi\" </td>\n                <td> {{patient.p_fname}} </td>\n                <td> {{patient.pid}} </td>\n                <td> {{patient.is_male}} </td>\n                <td> {{patient.dob}} </td>\n            </tr>\n        </table>\n</table>\n</body>\n\n</html>\n",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUVBO2dCQUdJLDBCQUFvQixXQUF3QjtvQkFIaEQsaUJBMkJDO29CQXhCdUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FDbEMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUF2QixDQUF1QixFQUMvQixVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsdUNBQVksR0FBWixVQUFhLElBQUk7b0JBQWpCLGlCQVFDO29CQVBHLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJO3dCQUNkLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFDeEIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsR0FBRyxFQUNSLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUVELHFDQUFVLEdBQVYsVUFBVyxPQUFlLEVBQUUsT0FBZSxFQUFFLEdBQVUsRUFBQyxPQUFjLEVBQUUsR0FBUTtvQkFDNUUsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBM0ZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLFNBQVM7d0JBQ2xCLFFBQVEsRUFBRSwweURBNkRiO3dCQUNHLFNBQVMsRUFBQyxDQUFDLDBCQUFXLENBQUM7cUJBQzFCLENBQUM7O29DQUFBO2dCQTRCRix1QkFBQztZQUFELENBM0JBLEFBMkJDLElBQUE7WUEzQkQsK0NBMkJDLENBQUEiLCJmaWxlIjoicGF0aWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDMtMjguXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UGF0aWVudH0gZnJvbSAnLi9QYXRpZW50JztcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3BhdGllbnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGh0bWw+XG48aGVhZD5cbiAgICA8dGl0bGU+RVJXYWl0aW5nVGltZTwvdGl0bGU+XG4gICAgPGxpbmsgaHJlZj1cIi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMS4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgPHN0eWxlPlxuICAgICAgICAjY3VzdG9tZXJzIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgICNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMn1cbiAgICAgICAgI2N1c3RvbWVycyB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XG4gICAgICAgICNjdXN0b21lcnMgdGgge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICA8L3N0eWxlPlxuPC9oZWFkPlxuPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIuLi9ob21lXCI+RVJXYWl0aW5nVGltZTwvYT5cbiAgICA8L2Rpdj5cbjwvbmF2PlxuXG48Ym9keT5cbjxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTAwcHhcIj5cbiAgICA8aDE+PGNlbnRlcj5QYXRpZW50cyBMaXN0PC9jZW50ZXI+PC9oMT5cbjwvZGl2PlxuPHAgaWQ9XCJkZW1vXCI+PC9wPlxuPHNjcmlwdD5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbW9cIikuaW5uZXJIVE1MID0gRGF0ZSgpO1xuPC9zY3JpcHQ+XG48dGFibGUgaWQ9XCJjdXN0b21lcnNcIj5cbiAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD4gcGF0aWVudF9sYXN0bmFtZSA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD4gcGF0aWVudF9maXJzdG5hbWU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD4gcGF0aWVudF9pZDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiBwYXRpZW50X2dlbmRlcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiBwYXRpZW50X2RhdGU8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciAqbmdGb3I9XCIjcGF0aWVudCBvZiBwYXRpZW50c1wiPlxuICAgICAgICAgICAgICAgIDx0ZD4gXCJoaWhpaGlcIiA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge3twYXRpZW50LnBfZm5hbWV9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge3twYXRpZW50LnBpZH19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7e3BhdGllbnQuaXNfbWFsZX19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7e3BhdGllbnQuZG9ifX0gPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG48L3RhYmxlPlxuPC9ib2R5PlxuXG48L2h0bWw+XG5gLFxuICAgIHByb3ZpZGVyczpbSFRUUFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFBhdGllbnRDb21wb25lbnR7XG4gICAgcGF0aWVudHM6QXJyYXk8UGF0aWVudD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7XG4gICAgICAgIHRoaXMucGF0aWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5nZXRQUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VQYXRpZW50KGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VQYXRpZW50KGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRQYXRpZW50KGl0ZW0ucF9sbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnBfZm5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbS5waWQsXG4gICAgICAgICAgICAgICAgaXRlbS5pc19tYWxlLFxuICAgICAgICAgICAgICAgIGl0ZW0uZG9iKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRQYXRpZW50KHBfbG5hbWU6IHN0cmluZywgcF9mbmFtZTogc3RyaW5nLCBwaWQ6bnVtYmVyLGlzX21hbGU6c3RyaW5nLCBkb2I6RGF0ZSl7XG4gICAgICAgIGxldCBwYXRpZW50ID0gbmV3IFBhdGllbnQocF9sbmFtZSxwX2ZuYW1lLHBpZCxpc19tYWxlLGRvYik7XG4gICAgICAgIHRoaXMucGF0aWVudHMucHVzaChwYXRpZW50KTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
