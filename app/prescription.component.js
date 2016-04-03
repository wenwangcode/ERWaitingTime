System.register(['angular2/core', './http.service', "./prescription"], function(exports_1, context_1) {
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
    var core_1, http_service_1, prescription_1;
    var PrescriptionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (prescription_1_1) {
                prescription_1 = prescription_1_1;
            }],
        execute: function() {
            PrescriptionComponent = (function () {
                function PrescriptionComponent(httpService) {
                    this.httpService = httpService;
                    this.prescriptions = [];
                }
                PrescriptionComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.httpService.getPRQuery().subscribe(function (data) { return _this.parsePrescription(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                PrescriptionComponent.prototype.parsePrescription = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addPrescription(item.pname, item.amount, item.rid);
                    });
                };
                PrescriptionComponent.prototype.addPrescription = function (pname, amount, rid) {
                    var prescription = new prescription_1.Prescription(pname, amount, rid);
                    this.prescriptions.push(prescription);
                };
                PrescriptionComponent.prototype.removePrescription = function (prescription) {
                    var index = this.prescriptions.indexOf(prescription);
                    this.prescriptions.splice(index, 1);
                };
                PrescriptionComponent.prototype.postPrescription = function (pname, amount, rid) {
                    this.httpService.post({
                        pname: pname,
                        amount: amount,
                        rid: rid
                    }, 'prescription').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                PrescriptionComponent = __decorate([
                    core_1.Component({
                        selector: 'prescription',
                        templateUrl: 'templates/prescription.html',
                        providers: [http_service_1.HTTPService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], PrescriptionComponent);
                return PrescriptionComponent;
            }());
            exports_1("PrescriptionComponent", PrescriptionComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNjcmlwdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFJSSwrQkFBb0IsV0FBd0I7b0JBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUY1QyxrQkFBYSxHQUFtQixFQUFFLENBQUM7Z0JBR25DLENBQUM7Z0JBRUQsd0NBQVEsR0FBUjtvQkFBQSxpQkFNQztvQkFMRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FDbkMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLEVBQ3BDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxpREFBaUIsR0FBakIsVUFBa0IsSUFBSTtvQkFBdEIsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUMzQixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFFRCwrQ0FBZSxHQUFmLFVBQWdCLEtBQWEsRUFBRSxNQUFjLEVBQUUsR0FBVTtvQkFDckQsSUFBSSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxDQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUVELGtEQUFrQixHQUFsQixVQUFtQixZQUF5QjtvQkFDeEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFFRCxnREFBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHO29CQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDakI7d0JBQ0ksS0FBSyxFQUFFLEtBQUs7d0JBQ1osTUFBTSxFQUFFLE1BQU07d0JBQ2QsR0FBRyxFQUFFLEdBQUc7cUJBQ1gsRUFDRCxjQUFjLENBQ2pCLENBQUMsU0FBUyxDQUNQLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQztnQkFDTixDQUFDO2dCQW5ETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxjQUFjO3dCQUN2QixXQUFXLEVBQUUsNkJBQTZCO3dCQUMxQyxTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO3FCQUMxQixDQUFDOzt5Q0FBQTtnQkFnREYsNEJBQUM7WUFBRCxDQS9DQSxBQStDQyxJQUFBO1lBL0NELHlEQStDQyxDQUFBIiwiZmlsZSI6InByZXNjcmlwdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDMtMjguXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHtQcmVzY3JpcHRpb259IGZyb20gXCIuL3ByZXNjcmlwdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjoncHJlc2NyaXB0aW9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wcmVzY3JpcHRpb24uaHRtbCcsXG4gICAgcHJvdmlkZXJzOltIVFRQU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUHJlc2NyaXB0aW9uQ29tcG9uZW50e1xuXG4gICAgcHJlc2NyaXB0aW9uczogUHJlc2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKXtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5nZXRQUlF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlUHJlc2NyaXB0aW9uKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VQcmVzY3JpcHRpb24oanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFByZXNjcmlwdGlvbihpdGVtLnBuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0uYW1vdW50LFxuICAgICAgICAgICAgICAgIGl0ZW0ucmlkKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRQcmVzY3JpcHRpb24ocG5hbWU6IHN0cmluZywgYW1vdW50OiBudW1iZXIsIHJpZDpudW1iZXIpe1xuICAgICAgICBsZXQgcHJlc2NyaXB0aW9uID0gbmV3IFByZXNjcmlwdGlvbihwbmFtZSxhbW91bnQscmlkKTtcbiAgICAgICAgdGhpcy5wcmVzY3JpcHRpb25zLnB1c2gocHJlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICByZW1vdmVQcmVzY3JpcHRpb24ocHJlc2NyaXB0aW9uOlByZXNjcmlwdGlvbil7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucHJlc2NyaXB0aW9ucy5pbmRleE9mKHByZXNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMucHJlc2NyaXB0aW9ucy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG4gICAgcG9zdFByZXNjcmlwdGlvbihwbmFtZSwgYW1vdW50LCByaWQpe1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG5hbWU6IHBuYW1lLFxuICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgICAgICAgIHJpZDogcmlkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3ByZXNjcmlwdGlvbidcbiAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
