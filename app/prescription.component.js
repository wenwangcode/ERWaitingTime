System.register(['angular2/core', './http.service', "./prescription", "angular2/router", "./is-loggedin"], function(exports_1, context_1) {
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
    var core_1, http_service_1, prescription_1, router_1, is_loggedin_1;
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (is_loggedin_1_1) {
                is_loggedin_1 = is_loggedin_1_1;
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
                    router_1.CanActivate(function () { return is_loggedin_1.isLoggedin(); }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], PrescriptionComponent);
                return PrescriptionComponent;
            }());
            exports_1("PrescriptionComponent", PrescriptionComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNjcmlwdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBSUksK0JBQW9CLFdBQXdCO29CQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFGNUMsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO2dCQUduQyxDQUFDO2dCQUVELHdDQUFRLEdBQVI7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQ25DLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUE1QixDQUE0QixFQUNwQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsaURBQWlCLEdBQWpCLFVBQWtCLElBQUk7b0JBQXRCLGlCQU1DO29CQUxHLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJO3dCQUNkLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDM0IsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xCLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRUQsK0NBQWUsR0FBZixVQUFnQixLQUFhLEVBQUUsTUFBYyxFQUFFLEdBQVU7b0JBQ3JELElBQUksWUFBWSxHQUFHLElBQUksMkJBQVksQ0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFFRCxrREFBa0IsR0FBbEIsVUFBbUIsWUFBeUI7b0JBQ3hDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRUQsZ0RBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRztvQkFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ2pCO3dCQUNJLEtBQUssRUFBRSxLQUFLO3dCQUNaLE1BQU0sRUFBRSxNQUFNO3dCQUNkLEdBQUcsRUFBRSxHQUFHO3FCQUNYLEVBQ0QsY0FBYyxDQUNqQixDQUFDLFNBQVMsQ0FDUCxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkF0REw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsY0FBYzt3QkFDdkIsV0FBVyxFQUFFLDZCQUE2Qjt3QkFDMUMsU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztxQkFDMUIsQ0FBQztvQkFFRCxvQkFBVyxDQUFDLGNBQU0sT0FBQSx3QkFBVSxFQUFFLEVBQVosQ0FBWSxDQUFDOzt5Q0FBQTtnQkFpRGhDLDRCQUFDO1lBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtZQS9DRCx5REErQ0MsQ0FBQSIsImZpbGUiOiJwcmVzY3JpcHRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTI4LlxuICovXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7UHJlc2NyaXB0aW9ufSBmcm9tIFwiLi9wcmVzY3JpcHRpb25cIjtcbmltcG9ydCB7Q2FuQWN0aXZhdGV9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7aXNMb2dnZWRpbn0gZnJvbSBcIi4vaXMtbG9nZ2VkaW5cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3ByZXNjcmlwdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcHJlc2NyaXB0aW9uLmh0bWwnLFxuICAgIHByb3ZpZGVyczpbSFRUUFNlcnZpY2VdXG59KVxuXG5AQ2FuQWN0aXZhdGUoKCkgPT4gaXNMb2dnZWRpbigpKVxuXG5leHBvcnQgY2xhc3MgUHJlc2NyaXB0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgcHJlc2NyaXB0aW9uczogUHJlc2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKXtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5nZXRQUlF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlUHJlc2NyaXB0aW9uKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VQcmVzY3JpcHRpb24oanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFByZXNjcmlwdGlvbihpdGVtLnBuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0uYW1vdW50LFxuICAgICAgICAgICAgICAgIGl0ZW0ucmlkKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRQcmVzY3JpcHRpb24ocG5hbWU6IHN0cmluZywgYW1vdW50OiBudW1iZXIsIHJpZDpudW1iZXIpe1xuICAgICAgICBsZXQgcHJlc2NyaXB0aW9uID0gbmV3IFByZXNjcmlwdGlvbihwbmFtZSxhbW91bnQscmlkKTtcbiAgICAgICAgdGhpcy5wcmVzY3JpcHRpb25zLnB1c2gocHJlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICByZW1vdmVQcmVzY3JpcHRpb24ocHJlc2NyaXB0aW9uOlByZXNjcmlwdGlvbil7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucHJlc2NyaXB0aW9ucy5pbmRleE9mKHByZXNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMucHJlc2NyaXB0aW9ucy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG4gICAgcG9zdFByZXNjcmlwdGlvbihwbmFtZSwgYW1vdW50LCByaWQpe1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG5hbWU6IHBuYW1lLFxuICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgICAgICAgIHJpZDogcmlkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3ByZXNjcmlwdGlvbidcbiAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
