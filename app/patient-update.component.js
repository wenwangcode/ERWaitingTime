/**
 * Created by joshua on 2016-04-03.
 */
System.register(['angular2/core', 'angular2/router', './http.service'], function(exports_1, context_1) {
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
    var core_1, router_1, http_service_1;
    var PatientUpdateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            PatientUpdateComponent = (function () {
                function PatientUpdateComponent(_routeParams, _httpService) {
                    this._routeParams = _routeParams;
                    this._httpService = _httpService;
                }
                PatientUpdateComponent.prototype.ngOnInit = function () {
                    // + converts the id string into a number
                    var id = +this._routeParams.get('pid');
                    console.log("ID = " + id);
                    this.getPatients(id);
                    console.log("The patients array contains: " + this.patients);
                    // this.getPatient(id);
                };
                PatientUpdateComponent.prototype.getPatients = function (id) {
                    var _this = this;
                    this._httpService.getAllFromTable('patient')
                        .subscribe(function (patients) { return _this.parsePatients(patients, id); }, 
                    // patients => this.patients = patients,
                    function (error) { return _this.errorMessage = error; });
                };
                PatientUpdateComponent.prototype.parsePatients = function (data, id) {
                    for (var i = 0; i < data.length; i += 1) {
                        if (data[i].pid == id) {
                            this.surname = data[i].p_lname;
                            this.name = data[i].p_fname;
                            this.id = data[i].pid;
                            this.parseDob(data[i].dob);
                            this.sex = data[i].is_male.data[0];
                        }
                    }
                };
                PatientUpdateComponent.prototype.parseDob = function (dob) {
                    this.year = parseInt(dob.slice(0, 4));
                    this.month = parseInt(dob.slice(5, 7));
                    this.day = parseInt(dob.slice(8, 10));
                };
                //  dob: "1996-02-26T08:00:00.000Z"
                PatientUpdateComponent.prototype.updatePatient = function (p_lname, p_fname, year, month, day) {
                    var dob = year + '-' + month + '-' + day;
                    if (this.checkNull.apply(this, arguments)) {
                        console.log("missing arguments");
                        this.errorMessage = 'update missing';
                        return;
                    }
                    console.log(this.sex);
                    this._httpService.updatePatient_http({
                        p_lname: p_lname,
                        p_fname: p_fname,
                        pid: this.id,
                        is_male: this.sex,
                        dob: dob,
                    }, this.id).subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                PatientUpdateComponent.prototype.checkNull = function () {
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
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PatientUpdateComponent.prototype, "surname", void 0);
                PatientUpdateComponent = __decorate([
                    core_1.Component({
                        selector: 'patient-update',
                        templateUrl: 'templates/patient-update.component.html',
                        providers: [http_service_1.HTTPService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, http_service_1.HTTPService])
                ], PatientUpdateComponent);
                return PatientUpdateComponent;
            }());
            exports_1("PatientUpdateComponent", PatientUpdateComponent);
        }
    }
});
//# sourceMappingURL=patient-update.component.js.map