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

//# sourceMappingURL=data:application/json;base64,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ZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBqb3NodWEgb24gMjAxNi0wNC0wMS5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7Vml0YWx9IGZyb20gXCIuL3ZpdGFsXCI7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2aXRhbHMnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3ZpdGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtIVFRQU2VydmljZV0sXG59KVxuXG5leHBvcnQgY2xhc3MgVml0YWxBZGRDb21wb25lbnQge1xuXG4gICAgdml0YWxzOiBWaXRhbFtdO1xuICAgIG5leHRfdmlkOiBudW1iZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKSB7fVxuICAgIFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldFZpdGFscygpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlTmV4dElkKCk7XG4gICAgfVxuXG4gICAgcG9zdFZpdGFscyhveHlnZW5fc2F0dXJhdGlvbiwgdGVtcGVyYXR1cmUsIGJsb29kX3ByZXNzdXJlLCBwdWxzZSwgcmVzcGlyYXRpb24pe1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZpZDogdGhpcy5uZXh0X3ZpZCxcbiAgICAgICAgICAgICAgICBveHlnZW5fc2F0dXJhdGlvbjogb3h5Z2VuX3NhdHVyYXRpb24sXG4gICAgICAgICAgICAgICAgdGVtcGVyYXR1cmU6IHRlbXBlcmF0dXJlLFxuICAgICAgICAgICAgICAgIGJsb29kX3ByZXNzdXJlOiBibG9vZF9wcmVzc3VyZSxcbiAgICAgICAgICAgICAgICBwdWxzZTogcHVsc2UsXG4gICAgICAgICAgICAgICAgcmVzcGlyYXRpb246IHJlc3BpcmF0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3ZpdGFsJ1xuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFZpdGFscygpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dF92aWQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0Vml0YWxzKCkge1xuICAgICAgICB0aGlzLnZpdGFscyA9IFtdO1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRWSVF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlVml0YWxzKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImdldFZpdGFscygpIGNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVOZXh0SWQoKSB7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFZJUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VWaXRhbHNGb3JJZChkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJnZW5lcmF0ZU5leHRJZCgpIGNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VWaXRhbHNGb3JJZChqc29uKSB7XG4gICAgICAgIGxldCB2aXRhbF9pZHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGxldCBuZXh0X2lkOiBudW1iZXIgPSAwO1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdml0YWxfaWRzLnB1c2goaXRlbS52aWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aXRhbF9pZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmICh2aXRhbF9pZHNbaV0gPiBuZXh0X2lkKSBuZXh0X2lkID0gdml0YWxfaWRzW2ldXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJuZXh0IGlkIHZpdGFsIFwiICsgbmV4dF9pZCk7XG4gICAgICAgIHRoaXMubmV4dF92aWQgPSBuZXh0X2lkICsgMTtcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXh0IHZpZCB2aXRhbCBcIiArIHRoaXMubmV4dF92aWQpO1xuICAgIH1cblxuXG4gICAgcGFyc2VWaXRhbHMoanNvbikge1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRWaXRhbChcbiAgICAgICAgICAgICAgICBpdGVtLm94eWdlbl9zYXR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIGl0ZW0udGVtcGVyYXR1cmUsXG4gICAgICAgICAgICAgICAgaXRlbS5ibG9vZF9wcmVzc3VyZSxcbiAgICAgICAgICAgICAgICBpdGVtLnB1bHNlLFxuICAgICAgICAgICAgICAgIGl0ZW0ucmVzcGlyYXRpb24sXG4gICAgICAgICAgICAgICAgaXRlbS52aWRcbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGFkZFZpdGFsKFxuICAgICAgICBveHlnZW5fc2F0dXJhdGlvbjogbnVtYmVyLFxuICAgICAgICB0ZW1wZXJhdHVyZTogbnVtYmVyLFxuICAgICAgICBibG9vZF9wcmVzc3VyZTogbnVtYmVyLFxuICAgICAgICBwdWxzZTogbnVtYmVyLFxuICAgICAgICByZXNwaXJhdGlvbjogbnVtYmVyLFxuICAgICAgICB2aWQ6IG51bWJlciBcbiAgICApIHtcbiAgICAgICAgbGV0IHZpdGFsID0gbmV3IFZpdGFsKG94eWdlbl9zYXR1cmF0aW9uLCB0ZW1wZXJhdHVyZSwgYmxvb2RfcHJlc3N1cmUsIHB1bHNlLCByZXNwaXJhdGlvbiwgdmlkKTtcbiAgICAgICAgdGhpcy52aXRhbHMucHVzaCh2aXRhbCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
