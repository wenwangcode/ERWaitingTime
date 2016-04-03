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
            }],
        execute: function() {
            VitalComponent = (function () {
                function VitalComponent(_httpService) {
                    this._httpService = _httpService;
                }
                VitalComponent.prototype.ngOnInit = function () {
                    this.getVitals();
                    this.generateNextId();
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

//# sourceMappingURL=data:application/json;base64,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dCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgd2VuZHl3YW5nIG9uIDIwMTYtMDQtMDIuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtWaXRhbH0gZnJvbSBcIi4vdml0YWxcIjtcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gXCIuL2h0dHAuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZpdGFscycsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdml0YWwuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSFRUUFNlcnZpY2VdLFxufSlcblxuZXhwb3J0IGNsYXNzIFZpdGFsQ29tcG9uZW50IHtcblxuICAgIHZpdGFsczogVml0YWxbXTtcbiAgICBuZXh0X3ZpZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0Vml0YWxzKCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVOZXh0SWQoKTtcbiAgICB9XG5cbiAgICBwb3N0Vml0YWxzKG94eWdlbl9zYXR1cmF0aW9uLCB0ZW1wZXJhdHVyZSwgYmxvb2RfcHJlc3N1cmUsIHB1bHNlLCByZXNwaXJhdGlvbil7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3QoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmlkOiB0aGlzLm5leHRfdmlkLFxuICAgICAgICAgICAgICAgIG94eWdlbl9zYXR1cmF0aW9uOiBveHlnZW5fc2F0dXJhdGlvbixcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZTogdGVtcGVyYXR1cmUsXG4gICAgICAgICAgICAgICAgYmxvb2RfcHJlc3N1cmU6IGJsb29kX3ByZXNzdXJlLFxuICAgICAgICAgICAgICAgIHB1bHNlOiBwdWxzZSxcbiAgICAgICAgICAgICAgICByZXNwaXJhdGlvbjogcmVzcGlyYXRpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndml0YWwnXG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Vml0YWxzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0X3ZpZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFZpdGFscygpIHtcbiAgICAgICAgdGhpcy52aXRhbHMgPSBbXTtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0VklRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVZpdGFscyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJnZXRWaXRhbHMoKSBjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTmV4dElkKCkge1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRWSVF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlVml0YWxzRm9ySWQoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiZ2VuZXJhdGVOZXh0SWQoKSBjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBhcnNlVml0YWxzRm9ySWQoanNvbikge1xuICAgICAgICBsZXQgdml0YWxfaWRzOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBsZXQgbmV4dF9pZDogbnVtYmVyID0gMDtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIHZpdGFsX2lkcy5wdXNoKGl0ZW0udmlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdml0YWxfaWRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAodml0YWxfaWRzW2ldID4gbmV4dF9pZCkgbmV4dF9pZCA9IHZpdGFsX2lkc1tpXVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV4dCBpZCB2aXRhbCBcIiArIG5leHRfaWQpO1xuICAgICAgICB0aGlzLm5leHRfdmlkID0gbmV4dF9pZCArIDE7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV4dCB2aWQgdml0YWwgXCIgKyB0aGlzLm5leHRfdmlkKTtcbiAgICB9XG5cblxuICAgIHBhcnNlVml0YWxzKGpzb24pIHtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkVml0YWwoXG4gICAgICAgICAgICAgICAgaXRlbS5veHlnZW5fc2F0dXJhdGlvbixcbiAgICAgICAgICAgICAgICBpdGVtLnRlbXBlcmF0dXJlLFxuICAgICAgICAgICAgICAgIGl0ZW0uYmxvb2RfcHJlc3N1cmUsXG4gICAgICAgICAgICAgICAgaXRlbS5wdWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtLnJlc3BpcmF0aW9uLFxuICAgICAgICAgICAgICAgIGl0ZW0udmlkXG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZFZpdGFsKFxuICAgICAgICBveHlnZW5fc2F0dXJhdGlvbjogbnVtYmVyLFxuICAgICAgICB0ZW1wZXJhdHVyZTogbnVtYmVyLFxuICAgICAgICBibG9vZF9wcmVzc3VyZTogbnVtYmVyLFxuICAgICAgICBwdWxzZTogbnVtYmVyLFxuICAgICAgICByZXNwaXJhdGlvbjogbnVtYmVyLFxuICAgICAgICB2aWQ6IG51bWJlclxuICAgICkge1xuICAgICAgICBsZXQgdml0YWwgPSBuZXcgVml0YWwob3h5Z2VuX3NhdHVyYXRpb24sIHRlbXBlcmF0dXJlLCBibG9vZF9wcmVzc3VyZSwgcHVsc2UsIHJlc3BpcmF0aW9uLCB2aWQpO1xuICAgICAgICB0aGlzLnZpdGFscy5wdXNoKHZpdGFsKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
