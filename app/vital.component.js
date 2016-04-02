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
                        oxygen_saturation: oxygen_saturation,
                        temperature: temperature,
                        blood_pressure: blood_pressure,
                        pulse: pulse,
                        respiration: respiration,
                        vid: this.next_id
                    }, 'vital').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () {
                        _this.getVitals();
                        _this.next_id += 1;
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
                VitalComponent = __decorate([
                    core_1.Component({
                        selector: 'vitals',
                        templateUrl: 'templates/vital.component.html',
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

//# sourceMappingURL=data:application/json;base64,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T0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFFRCxvQ0FBVyxHQUFYLFVBQVksSUFBSTtvQkFBaEIsaUJBV0M7b0JBVkcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FDVCxJQUFJLENBQUMsaUJBQWlCLEVBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FDWCxDQUFBO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsaUNBQVEsR0FBUixVQUNJLGlCQUF5QixFQUN6QixXQUFtQixFQUNuQixjQUFzQixFQUN0QixLQUFhLEVBQ2IsV0FBbUIsRUFDbkIsR0FBVztvQkFFWCxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQy9GLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQTVGTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsZ0NBQWdDO3dCQUM3QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUMzQixDQUFDOztrQ0FBQTtnQkF5RkYscUJBQUM7WUFBRCxDQXZGQSxBQXVGQyxJQUFBO1lBdkZELDJDQXVGQyxDQUFBIiwiZmlsZSI6InZpdGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBqb3NodWEgb24gMjAxNi0wNC0wMS5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7Vml0YWx9IGZyb20gXCIuL3ZpdGFsXCI7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2aXRhbHMnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3ZpdGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtIVFRQU2VydmljZV0sXG59KVxuXG5leHBvcnQgY2xhc3MgVml0YWxDb21wb25lbnQge1xuXG4gICAgdml0YWxzOiBWaXRhbFtdO1xuICAgIG5leHRfaWQ6IG51bWJlcjtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSFRUUFNlcnZpY2UpIHt9XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0Vml0YWxzKCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVOZXh0SWQoKTtcbiAgICB9XG5cbiAgICBwb3N0Vml0YWxzKG94eWdlbl9zYXR1cmF0aW9uLCB0ZW1wZXJhdHVyZSwgYmxvb2RfcHJlc3N1cmUsIHB1bHNlLCByZXNwaXJhdGlvbil7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3QoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3h5Z2VuX3NhdHVyYXRpb246IG94eWdlbl9zYXR1cmF0aW9uLFxuICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlOiB0ZW1wZXJhdHVyZSxcbiAgICAgICAgICAgICAgICBibG9vZF9wcmVzc3VyZTogYmxvb2RfcHJlc3N1cmUsXG4gICAgICAgICAgICAgICAgcHVsc2U6IHB1bHNlLFxuICAgICAgICAgICAgICAgIHJlc3BpcmF0aW9uOiByZXNwaXJhdGlvbixcbiAgICAgICAgICAgICAgICB2aWQ6IHRoaXMubmV4dF9pZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICd2aXRhbCdcbiAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRWaXRhbHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRfaWQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0Vml0YWxzKCkge1xuICAgICAgICB0aGlzLnZpdGFscyA9IFtdO1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRWSVF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlVml0YWxzKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImdldFZpdGFscygpIGNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVOZXh0SWQoKSB7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFZJUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VWaXRhbHNGb3JJZChkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJnZW5lcmF0ZU5leHRJZCgpIGNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VWaXRhbHNGb3JJZChqc29uKSB7XG4gICAgICAgIGxldCB2aXRhbF9pZHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGxldCBuZXh0X2lkOiBudW1iZXIgPSAwO1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdml0YWxfaWRzLnB1c2goaXRlbS52aWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aXRhbF9pZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmICh2aXRhbF9pZHNbaV0gPiBuZXh0X2lkKSBuZXh0X2lkID0gdml0YWxfaWRzW2ldXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobmV4dF9pZCArIDEpO1xuICAgICAgICB0aGlzLm5leHRfaWQgPSBuZXh0X2lkICsgMTtcbiAgICB9XG5cbiAgICBwYXJzZVZpdGFscyhqc29uKSB7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFZpdGFsKFxuICAgICAgICAgICAgICAgIGl0ZW0ub3h5Z2VuX3NhdHVyYXRpb24sXG4gICAgICAgICAgICAgICAgaXRlbS50ZW1wZXJhdHVyZSxcbiAgICAgICAgICAgICAgICBpdGVtLmJsb29kX3ByZXNzdXJlLFxuICAgICAgICAgICAgICAgIGl0ZW0ucHVsc2UsXG4gICAgICAgICAgICAgICAgaXRlbS5yZXNwaXJhdGlvbixcbiAgICAgICAgICAgICAgICBpdGVtLnZpZFxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgYWRkVml0YWwoXG4gICAgICAgIG94eWdlbl9zYXR1cmF0aW9uOiBudW1iZXIsXG4gICAgICAgIHRlbXBlcmF0dXJlOiBudW1iZXIsXG4gICAgICAgIGJsb29kX3ByZXNzdXJlOiBudW1iZXIsXG4gICAgICAgIHB1bHNlOiBudW1iZXIsXG4gICAgICAgIHJlc3BpcmF0aW9uOiBudW1iZXIsXG4gICAgICAgIHZpZDogbnVtYmVyIFxuICAgICkge1xuICAgICAgICBsZXQgdml0YWwgPSBuZXcgVml0YWwob3h5Z2VuX3NhdHVyYXRpb24sIHRlbXBlcmF0dXJlLCBibG9vZF9wcmVzc3VyZSwgcHVsc2UsIHJlc3BpcmF0aW9uLCB2aWQpO1xuICAgICAgICB0aGlzLnZpdGFscy5wdXNoKHZpdGFsKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
