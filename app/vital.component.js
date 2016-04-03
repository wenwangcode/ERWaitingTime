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
                    // not needed at the moment
                    // this.generateNextId();
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

//# sourceMappingURL=data:application/json;base64,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QVEsQ0FDVCxJQUFJLENBQUMsaUJBQWlCLEVBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FDWCxDQUFBO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsaUNBQVEsR0FBUixVQUNJLGlCQUF5QixFQUN6QixXQUFtQixFQUNuQixjQUFzQixFQUN0QixLQUFhLEVBQ2IsV0FBbUIsRUFDbkIsR0FBVztvQkFFWCxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQy9GLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQTdGTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsZ0NBQWdDO3dCQUM3QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUMzQixDQUFDOztrQ0FBQTtnQkEwRkYscUJBQUM7WUFBRCxDQXhGQSxBQXdGQyxJQUFBO1lBeEZELDJDQXdGQyxDQUFBIiwiZmlsZSI6InZpdGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBqb3NodWEgb24gMjAxNi0wNC0wMS5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7Vml0YWx9IGZyb20gXCIuL3ZpdGFsXCI7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2aXRhbHMnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3ZpdGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtIVFRQU2VydmljZV0sXG59KVxuXG5leHBvcnQgY2xhc3MgVml0YWxDb21wb25lbnQge1xuXG4gICAgdml0YWxzOiBWaXRhbFtdO1xuICAgIG5leHRfaWQ6IG51bWJlcjtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSFRUUFNlcnZpY2UpIHt9XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0Vml0YWxzKCk7XG4gICAgICAgIC8vIG5vdCBuZWVkZWQgYXQgdGhlIG1vbWVudFxuICAgICAgICAvLyB0aGlzLmdlbmVyYXRlTmV4dElkKCk7XG4gICAgfVxuXG4gICAgcG9zdFZpdGFscyhveHlnZW5fc2F0dXJhdGlvbiwgdGVtcGVyYXR1cmUsIGJsb29kX3ByZXNzdXJlLCBwdWxzZSwgcmVzcGlyYXRpb24pe1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG94eWdlbl9zYXR1cmF0aW9uOiBveHlnZW5fc2F0dXJhdGlvbixcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZTogdGVtcGVyYXR1cmUsXG4gICAgICAgICAgICAgICAgYmxvb2RfcHJlc3N1cmU6IGJsb29kX3ByZXNzdXJlLFxuICAgICAgICAgICAgICAgIHB1bHNlOiBwdWxzZSxcbiAgICAgICAgICAgICAgICByZXNwaXJhdGlvbjogcmVzcGlyYXRpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndml0YWwnXG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BPU1Qgc3VjY2VzcycpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSxcbiAgICAgICAgICAgICgpID0+IHt0aGlzLmdldFZpdGFscygpfVxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICBnZXRWaXRhbHMoKSB7XG4gICAgICAgIHRoaXMudml0YWxzID0gW107XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLmdldFZJUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VWaXRhbHMoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiZ2V0Vml0YWxzKCkgY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBub3QgbmVlZGVkIGF0IHRoZSBtb21lbnRcbiAgICAvLyBnZW5lcmF0ZU5leHRJZCgpIHtcbiAgICAvLyAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0VklRdWVyeSgpLnN1YnNjcmliZShcbiAgICAvLyAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVZpdGFsc0ZvcklkKGRhdGEpLFxuICAgIC8vICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgLy8gICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImdlbmVyYXRlTmV4dElkKCkgY29tcGxldGVcIilcbiAgICAvLyAgICAgKTtcbiAgICAvLyB9XG5cbiAgICBwYXJzZVZpdGFsc0ZvcklkKGpzb24pIHtcbiAgICAgICAgbGV0IHZpdGFsX2lkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IG5leHRfaWQ6IG51bWJlciA9IDA7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB2aXRhbF9pZHMucHVzaChpdGVtLnZpZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZpdGFsX2lkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHZpdGFsX2lkc1tpXSA+IG5leHRfaWQpIG5leHRfaWQgPSB2aXRhbF9pZHNbaV1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhuZXh0X2lkICsgMSk7XG4gICAgICAgIHRoaXMubmV4dF9pZCA9IG5leHRfaWQgKyAxO1xuICAgIH1cblxuICAgIHBhcnNlVml0YWxzKGpzb24pIHtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkVml0YWwoXG4gICAgICAgICAgICAgICAgaXRlbS5veHlnZW5fc2F0dXJhdGlvbixcbiAgICAgICAgICAgICAgICBpdGVtLnRlbXBlcmF0dXJlLFxuICAgICAgICAgICAgICAgIGl0ZW0uYmxvb2RfcHJlc3N1cmUsXG4gICAgICAgICAgICAgICAgaXRlbS5wdWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtLnJlc3BpcmF0aW9uLFxuICAgICAgICAgICAgICAgIGl0ZW0udmlkXG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBhZGRWaXRhbChcbiAgICAgICAgb3h5Z2VuX3NhdHVyYXRpb246IG51bWJlcixcbiAgICAgICAgdGVtcGVyYXR1cmU6IG51bWJlcixcbiAgICAgICAgYmxvb2RfcHJlc3N1cmU6IG51bWJlcixcbiAgICAgICAgcHVsc2U6IG51bWJlcixcbiAgICAgICAgcmVzcGlyYXRpb246IG51bWJlcixcbiAgICAgICAgdmlkOiBudW1iZXJcbiAgICApIHtcbiAgICAgICAgbGV0IHZpdGFsID0gbmV3IFZpdGFsKG94eWdlbl9zYXR1cmF0aW9uLCB0ZW1wZXJhdHVyZSwgYmxvb2RfcHJlc3N1cmUsIHB1bHNlLCByZXNwaXJhdGlvbiwgdmlkKTtcbiAgICAgICAgdGhpcy52aXRhbHMucHVzaCh2aXRhbCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
