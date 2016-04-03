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
                    this.generateNextId();
                    this.getMax();
                };
                VitalComponent.prototype.postVitals = function (oxygen_saturation, temperature, blood_pressure, pulse, respiration) {
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
                VitalComponent.prototype.getVitals = function () {
                    var _this = this;
                    this.vitals = [];
                    this._httpService.getVIQuery().subscribe(function (data) { return _this.parseVitals(data); }, function (err) { return alert(err); }, function () { return console.log("getVitals() complete"); });
                };
                VitalComponent.prototype.generateNextId = function () {
                    var _this = this;
                    this._httpService.getVIQuery().subscribe(function (data) { return _this.parseVitalsForId(data); }, function (err) { return alert(err); }, function () { return console.log("generateNextId() complete"); });
                };
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
                    console.log("next id vital " + next_id);
                    this.next_vid = next_id + 1;
                    console.log("next vid vital " + this.next_vid);
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
                    console.log("vp_max's pid " + vp_max.pid);
                    console.log("vp_max's blood_pressure " + vp_max.blood_pressure);
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

//# sourceMappingURL=data:application/json;base64,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SUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsV0FBVyxFQUFFLHNCQUFzQjt3QkFDbkMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztxQkFDM0IsQ0FBQzs7a0NBQUE7Z0JBNkhGLHFCQUFDO1lBQUQsQ0EzSEEsQUEySEMsSUFBQTtZQTNIRCwyQ0EySEMsQ0FBQSIsImZpbGUiOiJ2aXRhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgd2VuZHl3YW5nIG9uIDIwMTYtMDQtMDIuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtWaXRhbH0gZnJvbSBcIi4vdml0YWxcIjtcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gXCIuL2h0dHAuc2VydmljZVwiO1xuaW1wb3J0IHtWaXRhbF9QYXRpZW50X01heH0gZnJvbSBcIi4vdml0YWxfcGF0aWVudF9tYXhcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2aXRhbHMnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3ZpdGFsLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0hUVFBTZXJ2aWNlXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBWaXRhbENvbXBvbmVudCB7XG5cbiAgICB2aXRhbHM6IFZpdGFsW107XG4gICAgbmV4dF92aWQ6IG51bWJlcjtcbiAgICB2cF9tYXhzOiBWaXRhbF9QYXRpZW50X01heFtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSFRUUFNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRWaXRhbHMoKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZU5leHRJZCgpO1xuICAgICAgICB0aGlzLmdldE1heCgpO1xuICAgIH1cblxuICAgIHBvc3RWaXRhbHMob3h5Z2VuX3NhdHVyYXRpb24sIHRlbXBlcmF0dXJlLCBibG9vZF9wcmVzc3VyZSwgcHVsc2UsIHJlc3BpcmF0aW9uKXtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UucG9zdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2aWQ6IHRoaXMubmV4dF92aWQsXG4gICAgICAgICAgICAgICAgb3h5Z2VuX3NhdHVyYXRpb246IG94eWdlbl9zYXR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiB0ZW1wZXJhdHVyZSxcbiAgICAgICAgICAgICAgICBibG9vZF9wcmVzc3VyZTogYmxvb2RfcHJlc3N1cmUsXG4gICAgICAgICAgICAgICAgcHVsc2U6IHB1bHNlLFxuICAgICAgICAgICAgICAgIHJlc3BpcmF0aW9uOiByZXNwaXJhdGlvblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd2aXRhbCdcbiAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRWaXRhbHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRfdmlkKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0Vml0YWxzKCkge1xuICAgICAgICB0aGlzLnZpdGFscyA9IFtdO1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRWSVF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlVml0YWxzKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImdldFZpdGFscygpIGNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVOZXh0SWQoKSB7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFZJUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VWaXRhbHNGb3JJZChkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJnZW5lcmF0ZU5leHRJZCgpIGNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VWaXRhbHNGb3JJZChqc29uKSB7XG4gICAgICAgIGxldCB2aXRhbF9pZHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGxldCBuZXh0X2lkOiBudW1iZXIgPSAwO1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdml0YWxfaWRzLnB1c2goaXRlbS52aWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aXRhbF9pZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmICh2aXRhbF9pZHNbaV0gPiBuZXh0X2lkKSBuZXh0X2lkID0gdml0YWxfaWRzW2ldXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJuZXh0IGlkIHZpdGFsIFwiICsgbmV4dF9pZCk7XG4gICAgICAgIHRoaXMubmV4dF92aWQgPSBuZXh0X2lkICsgMTtcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXh0IHZpZCB2aXRhbCBcIiArIHRoaXMubmV4dF92aWQpO1xuICAgIH1cblxuXG4gICAgcGFyc2VWaXRhbHMoanNvbikge1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRWaXRhbChcbiAgICAgICAgICAgICAgICBpdGVtLm94eWdlbl9zYXR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIGl0ZW0udGVtcGVyYXR1cmUsXG4gICAgICAgICAgICAgICAgaXRlbS5ibG9vZF9wcmVzc3VyZSxcbiAgICAgICAgICAgICAgICBpdGVtLnB1bHNlLFxuICAgICAgICAgICAgICAgIGl0ZW0ucmVzcGlyYXRpb24sXG4gICAgICAgICAgICAgICAgaXRlbS52aWRcbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkVml0YWwoXG4gICAgICAgIG94eWdlbl9zYXR1cmF0aW9uOiBudW1iZXIsXG4gICAgICAgIHRlbXBlcmF0dXJlOiBudW1iZXIsXG4gICAgICAgIGJsb29kX3ByZXNzdXJlOiBudW1iZXIsXG4gICAgICAgIHB1bHNlOiBudW1iZXIsXG4gICAgICAgIHJlc3BpcmF0aW9uOiBudW1iZXIsXG4gICAgICAgIHZpZDogbnVtYmVyXG4gICAgKSB7XG4gICAgICAgIGxldCB2aXRhbCA9IG5ldyBWaXRhbChveHlnZW5fc2F0dXJhdGlvbiwgdGVtcGVyYXR1cmUsIGJsb29kX3ByZXNzdXJlLCBwdWxzZSwgcmVzcGlyYXRpb24sIHZpZCk7XG4gICAgICAgIHRoaXMudml0YWxzLnB1c2godml0YWwpO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiogaGFuZGxlIG1heCBibG9vZF9wcmVzc3VyZVxuICAgICAqL1xuXG4gICAgYWRkVlAocGlkOiBudW1iZXIsIGJsb29kX3ByZXNzdXJlOiBudW1iZXIpe1xuICAgICAgICBsZXQgdnBfbWF4ID0gbmV3IFZpdGFsX1BhdGllbnRfTWF4KHBpZCwgYmxvb2RfcHJlc3N1cmUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInZwX21heCdzIHBpZCBcIiArIHZwX21heC5waWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInZwX21heCdzIGJsb29kX3ByZXNzdXJlIFwiICsgdnBfbWF4LmJsb29kX3ByZXNzdXJlKTtcbiAgICAgICAgaWYgKHRoaXMudnBfbWF4cy5sZW5ndGg9PTApe1xuICAgICAgICAgICAgdGhpcy52cF9tYXhzLnB1c2godnBfbWF4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh2cF9tYXguYmxvb2RfcHJlc3N1cmUgPT0gdGhpcy52cF9tYXhzWzBdLmJsb29kX3ByZXNzdXJlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnZwX21heHMucHVzaCh2cF9tYXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VNYXgoanNvbikge1xuICAgICAgICBqc29uLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFZQKGl0ZW0ucGlkLCBpdGVtLmJsb29kX3ByZXNzdXJlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0TWF4KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwU2VydmljZS5nZXRNYXhWaXRhbCgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZU1heChkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZSBtYXggdml0YWxcIilcbiAgICAgICAgKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
