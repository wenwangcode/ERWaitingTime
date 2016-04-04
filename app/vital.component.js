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

//# sourceMappingURL=data:application/json;base64,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QVMsSUFBSTtvQkFBYixpQkFJQztvQkFIRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTt3QkFDYixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUM5QyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELCtCQUFNLEdBQU47b0JBQUEsaUJBTUM7b0JBTEcsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUM1QyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQW5CLENBQW1CLEVBQzNCLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBakMsQ0FBaUMsQ0FDMUMsQ0FBQTtnQkFDTCxDQUFDO2dCQTdITDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsc0JBQXNCO3dCQUNuQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUMzQixDQUFDOztrQ0FBQTtnQkEwSEYscUJBQUM7WUFBRCxDQXhIQSxBQXdIQyxJQUFBO1lBeEhELDJDQXdIQyxDQUFBIiwiZmlsZSI6InZpdGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBqb3NodWEgb24gMjAxNi0wNC0wMS5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7Vml0YWx9IGZyb20gXCIuL3ZpdGFsXCI7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcbmltcG9ydCB7Vml0YWxfUGF0aWVudF9NYXh9IGZyb20gXCIuL3ZpdGFsX3BhdGllbnRfbWF4XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndml0YWxzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy92aXRhbC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtIVFRQU2VydmljZV0sXG59KVxuXG5leHBvcnQgY2xhc3MgVml0YWxDb21wb25lbnQge1xuXG4gICAgdml0YWxzOiBWaXRhbFtdO1xuICAgIG5leHRfdmlkOiBudW1iZXI7XG4gICAgdnBfbWF4czogVml0YWxfUGF0aWVudF9NYXhbXSA9IFtdO1xuICAgIG5leHRfaWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSkge1xuXG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldFZpdGFscygpO1xuICAgIH1cblxuICAgIHBvc3RWaXRhbHMob3h5Z2VuX3NhdHVyYXRpb24sIHRlbXBlcmF0dXJlLCBibG9vZF9wcmVzc3VyZSwgcHVsc2UsIHJlc3BpcmF0aW9uKXtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBveHlnZW5fc2F0dXJhdGlvbjogb3h5Z2VuX3NhdHVyYXRpb24sXG4gICAgICAgICAgICAgICAgdGVtcGVyYXR1cmU6IHRlbXBlcmF0dXJlLFxuICAgICAgICAgICAgICAgIGJsb29kX3ByZXNzdXJlOiBibG9vZF9wcmVzc3VyZSxcbiAgICAgICAgICAgICAgICBwdWxzZTogcHVsc2UsXG4gICAgICAgICAgICAgICAgcmVzcGlyYXRpb246IHJlc3BpcmF0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3ZpdGFsJ1xuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQT1NUIHN1Y2Nlc3MnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVyciksXG4gICAgICAgICAgICAoKSA9PiB7dGhpcy5nZXRWaXRhbHMoKX1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0Vml0YWxzKCkge1xuICAgICAgICB0aGlzLnZpdGFscyA9IFtdO1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRWSVF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlVml0YWxzKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImdldFZpdGFscygpIGNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gbm90IG5lZWRlZCBhdCB0aGUgbW9tZW50XG4gICAgLy8gZ2VuZXJhdGVOZXh0SWQoKSB7XG4gICAgLy8gICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFZJUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgLy8gICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VWaXRhbHNGb3JJZChkYXRhKSxcbiAgICAvLyAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgIC8vICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJnZW5lcmF0ZU5leHRJZCgpIGNvbXBsZXRlXCIpXG4gICAgLy8gICAgICk7XG4gICAgLy8gfVxuXG4gICAgcGFyc2VWaXRhbHNGb3JJZChqc29uKSB7XG4gICAgICAgIGxldCB2aXRhbF9pZHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGxldCBuZXh0X2lkOiBudW1iZXIgPSAwO1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdml0YWxfaWRzLnB1c2goaXRlbS52aWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aXRhbF9pZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmICh2aXRhbF9pZHNbaV0gPiBuZXh0X2lkKSBuZXh0X2lkID0gdml0YWxfaWRzW2ldXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobmV4dF9pZCArIDEpO1xuICAgICAgICB0aGlzLm5leHRfaWQgPSBuZXh0X2lkICsgMTtcbiAgICB9XG5cbiAgICBwYXJzZVZpdGFscyhqc29uKSB7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFZpdGFsKFxuICAgICAgICAgICAgICAgIGl0ZW0ub3h5Z2VuX3NhdHVyYXRpb24sXG4gICAgICAgICAgICAgICAgaXRlbS50ZW1wZXJhdHVyZSxcbiAgICAgICAgICAgICAgICBpdGVtLmJsb29kX3ByZXNzdXJlLFxuICAgICAgICAgICAgICAgIGl0ZW0ucHVsc2UsXG4gICAgICAgICAgICAgICAgaXRlbS5yZXNwaXJhdGlvbixcbiAgICAgICAgICAgICAgICBpdGVtLnZpZFxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgYWRkVml0YWwoXG4gICAgICAgIG94eWdlbl9zYXR1cmF0aW9uOiBudW1iZXIsXG4gICAgICAgIHRlbXBlcmF0dXJlOiBudW1iZXIsXG4gICAgICAgIGJsb29kX3ByZXNzdXJlOiBudW1iZXIsXG4gICAgICAgIHB1bHNlOiBudW1iZXIsXG4gICAgICAgIHJlc3BpcmF0aW9uOiBudW1iZXIsXG4gICAgICAgIHZpZDogbnVtYmVyXG4gICAgKSB7XG4gICAgICAgIGxldCB2aXRhbCA9IG5ldyBWaXRhbChveHlnZW5fc2F0dXJhdGlvbiwgdGVtcGVyYXR1cmUsIGJsb29kX3ByZXNzdXJlLCBwdWxzZSwgcmVzcGlyYXRpb24sIHZpZCk7XG4gICAgICAgIHRoaXMudml0YWxzLnB1c2godml0YWwpO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiogaGFuZGxlIG1heCBibG9vZF9wcmVzc3VyZVxuICAgICAqL1xuXG4gICAgYWRkVlAocGlkOiBudW1iZXIsIGJsb29kX3ByZXNzdXJlOiBudW1iZXIpe1xuICAgICAgICBsZXQgdnBfbWF4ID0gbmV3IFZpdGFsX1BhdGllbnRfTWF4KHBpZCwgYmxvb2RfcHJlc3N1cmUpO1xuICAgICAgICBpZiAodGhpcy52cF9tYXhzLmxlbmd0aD09MCl7XG4gICAgICAgICAgICB0aGlzLnZwX21heHMucHVzaCh2cF9tYXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZwX21heC5ibG9vZF9wcmVzc3VyZSA9PSB0aGlzLnZwX21heHNbMF0uYmxvb2RfcHJlc3N1cmUpe1xuICAgICAgICAgICAgICAgIHRoaXMudnBfbWF4cy5wdXNoKHZwX21heCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZU1heChqc29uKSB7XG4gICAgICAgIGpzb24uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkVlAoaXRlbS5waWQsIGl0ZW0uYmxvb2RfcHJlc3N1cmUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRNYXgoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBTZXJ2aWNlLmdldE1heFZpdGFsKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlTWF4KGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlIG1heCB2aXRhbFwiKVxuICAgICAgICApXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
