System.register(['angular2/core', "./vital", "./http.service"], function(exports_1, context_1) {
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
    var core_1, vital_1, http_service_1;
    var VitalAddComponent;
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
            }],
        execute: function() {
            VitalAddComponent = (function () {
                function VitalAddComponent(_httpService) {
                    this._httpService = _httpService;
                }
                VitalAddComponent.prototype.ngOnInit = function () {
                    this.getVitals();
                    this.generateNextId();
                };
                VitalAddComponent.prototype.postVitals = function (oxygen_saturation, temperature, blood_pressure, pulse, respiration) {
                    var _this = this;
                    this._httpService.post({
                        vid: this.next_vid,
                        oxygen_saturation: oxygen_saturation,
                        temperature: temperature,
                        blood_pressure: blood_pressure,
                        pulse: pulse,
                        respiration: respiration
                    }, 'vital').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () {
                        _this.getVitals();
                        _this.next_vid++;
                    });
                };
                VitalAddComponent.prototype.getVitals = function () {
                    var _this = this;
                    this.vitals = [];
                    this._httpService.getVIQuery().subscribe(function (data) { return _this.parseVitals(data); }, function (err) { return alert(err); }, function () { return console.log("getVitals() complete"); });
                };
                VitalAddComponent.prototype.generateNextId = function () {
                    var _this = this;
                    this._httpService.getVIQuery().subscribe(function (data) { return _this.parseVitalsForId(data); }, function (err) { return alert(err); }, function () { return console.log("generateNextId() complete"); });
                };
                VitalAddComponent.prototype.parseVitalsForId = function (json) {
                    var vital_ids = [];
                    var next_id = 0;
                    json.forEach(function (item) {
                        vital_ids.push(item.vid);
                    });
                    for (var i = 0; i < vital_ids.length; i += 1) {
                        if (vital_ids[i] > next_id)
                            next_id = vital_ids[i];
                    }
                    console.log("next id vital " + next_id);
                    this.next_vid = next_id + 1;
                    console.log("next vid vital " + this.next_vid);
                };
                VitalAddComponent.prototype.parseVitals = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addVital(item.oxygen_saturation, item.temperature, item.blood_pressure, item.pulse, item.respiration, item.vid);
                    });
                };
                VitalAddComponent.prototype.addVital = function (oxygen_saturation, temperature, blood_pressure, pulse, respiration, vid) {
                    var vital = new vital_1.Vital(oxygen_saturation, temperature, blood_pressure, pulse, respiration, vid);
                    this.vitals.push(vital);
                };
                VitalAddComponent = __decorate([
                    core_1.Component({
                        selector: 'vitals',
                        templateUrl: 'templates/vital.component.html',
                        providers: [http_service_1.HTTPService],
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], VitalAddComponent);
                return VitalAddComponent;
            }());
            exports_1("VitalAddComponent", VitalAddComponent);
        }
    }
});
//# sourceMappingURL=vital-add.component.js.map