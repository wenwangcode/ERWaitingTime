System.register(['angular2/core', "./vital", "./http.service", "./vital_patient_max"], function(exports_1, context_1) {
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
    var core_1, vital_1, http_service_1, vital_patient_max_1;
    var VitalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vital_1_1) {
                vital_1 = vital_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (vital_patient_max_1_1) {
                vital_patient_max_1 = vital_patient_max_1_1;
            }],
        execute: function() {
            VitalComponent = (function () {
                function VitalComponent(_httpService) {
                    this._httpService = _httpService;
                    this.vp_maxs = [];
                }
                VitalComponent.prototype.ngOnInit = function () {
                    this.getVitals();
                };
                VitalComponent.prototype.postVitals = function (oxygen_saturation, temperature, blood_pressure, pulse, respiration) {
                    var _this = this;
                    this._httpService.post({
                        oxygen_saturation: oxygen_saturation,
                        temperature: temperature,
                        blood_pressure: blood_pressure,
                        pulse: pulse,
                        respiration: respiration
                    }, 'vital').subscribe(function (data) {
                        console.log(data);
                        console.log('POST success');
                    }, function (err) { return console.error(err); }, function () { _this.getVitals(); });
                };
                VitalComponent.prototype.getVitals = function () {
                    var _this = this;
                    this.vitals = [];
                    this._httpService.getVIQuery().subscribe(function (data) { return _this.parseVitals(data); }, function (err) { return alert(err); }, function () { return console.log("getVitals() complete"); });
                };
                // not needed at the moment
                // generateNextId() {
                //     this._httpService.getVIQuery().subscribe(
                //         data => this.parseVitalsForId(data),
                //         err => alert(err),
                //         () => console.log("generateNextId() complete")
                //     );
                // }
                VitalComponent.prototype.parseVitalsForId = function (json) {
                    var vital_ids = [];
                    var next_id = 0;
                    json.forEach(function (item) {
                        vital_ids.push(item.vid);
                    });
                    for (var i = 0; i < vital_ids.length; i += 1) {
                        if (vital_ids[i] > next_id)
                            next_id = vital_ids[i];
                    }
                    console.log(next_id + 1);
                    this.next_id = next_id + 1;
                };
                VitalComponent.prototype.parseVitals = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addVital(item.oxygen_saturation, item.temperature, item.blood_pressure, item.pulse, item.respiration, item.vid);
                    });
                };
                VitalComponent.prototype.addVital = function (oxygen_saturation, temperature, blood_pressure, pulse, respiration, vid) {
                    var vital = new vital_1.Vital(oxygen_saturation, temperature, blood_pressure, pulse, respiration, vid);
                    this.vitals.push(vital);
                };
                /*
                ** handle max blood_pressure
                 */
                VitalComponent.prototype.addVP = function (pid, blood_pressure) {
                    var vp_max = new vital_patient_max_1.Vital_Patient_Max(pid, blood_pressure);
                    if (this.vp_maxs.length == 0) {
                        this.vp_maxs.push(vp_max);
                    }
                    else {
                        if (vp_max.blood_pressure == this.vp_maxs[0].blood_pressure) {
                            this.vp_maxs.push(vp_max);
                        }
                    }
                };
                VitalComponent.prototype.parseMax = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addVP(item.pid, item.blood_pressure);
                    });
                };
                VitalComponent.prototype.getMax = function () {
                    var _this = this;
                    return this._httpService.getMaxVital().subscribe(function (data) { return _this.parseMax(data); }, function (err) { return alert(err); }, function () { return console.log("complete max vital"); });
                };
                VitalComponent = __decorate([
                    core_1.Component({
                        selector: 'vitals',
                        templateUrl: 'templates/vital.html',
                        providers: [http_service_1.HTTPService],
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], VitalComponent);
                return VitalComponent;
            }());
            exports_1("VitalComponent", VitalComponent);
        }
    }
});
//# sourceMappingURL=vital.component.js.map