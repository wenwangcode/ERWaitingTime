System.register(['angular2/core', "./http.service"], function(exports_1, context_1) {
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
    var core_1, http_service_1;
    var PatientsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            PatientsComponent = (function () {
                function PatientsComponent(httpService) {
                    var _this = this;
                    this.httpService = httpService;
                    this.patients = [];
                    this.httpService.getQuery().subscribe(function (data) { return _this.parsePatients(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                }
                PatientsComponent.prototype.parsePatients = function (json) {
                    json.forEach(function (item) {
                        console.log(item);
                    });
                };
                PatientsComponent = __decorate([
                    core_1.Component({
                        selector: 'patients',
                        templateUrl: 'views/patients.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], PatientsComponent);
                return PatientsComponent;
            }());
            exports_1("PatientsComponent", PatientsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUdJLDJCQUFvQixXQUF3QjtvQkFIaEQsaUJBbUJDO29CQWhCdUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FDakMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUF4QixDQUF3QixFQUNoQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQseUNBQWEsR0FBYixVQUFjLElBQUk7b0JBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDckIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkF0Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsVUFBVTt3QkFDbkIsV0FBVyxFQUFDLCtCQUErQjtxQkFDOUMsQ0FBQzs7cUNBQUE7Z0JBc0JGLHdCQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCxpREFtQkMsQ0FBQSIsImZpbGUiOiJwYXRpZW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgd2VuZHl3YW5nIG9uIDIwMTYtMDMtMTMuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQYXRpZW50fSBmcm9tICcuL3BhdGllbnQnO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSBcIi4vaHR0cC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidwYXRpZW50cycsXG4gICAgdGVtcGxhdGVVcmw6J3ZpZXdzL3BhdGllbnRzLmNvbXBvbmVudC5odG1sJ1xufSlcblxuXG5leHBvcnQgY2xhc3MgUGF0aWVudHNDb21wb25lbnR7XG4gICAgcGF0aWVudHM6QXJyYXk8UGF0aWVudD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7XG4gICAgICAgIHRoaXMucGF0aWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5nZXRRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVBhdGllbnRzKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VQYXRpZW50cyhqc29uKSB7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgICB9KVxuICAgIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
