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
    var PrescriptionAddComponent;
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
            PrescriptionAddComponent = (function () {
                function PrescriptionAddComponent(httpService) {
                    this.httpService = httpService;
                    this.prescriptions = [];
                }
                PrescriptionAddComponent.prototype.ngOnInit = function () {
                    this.getReportIds();
                };
                PrescriptionAddComponent.prototype.parsePrescription = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addPrescription(item.pname, item.amount, item.rid);
                    });
                };
                PrescriptionAddComponent.prototype.addPrescription = function (pname, amount, rid) {
                    var prescription = new prescription_1.Prescription(pname, amount, rid);
                    this.prescriptions.push(prescription);
                };
                PrescriptionAddComponent.prototype.removePrescription = function (prescription) {
                    var index = this.prescriptions.indexOf(prescription);
                    this.prescriptions.splice(index, 1);
                };
                PrescriptionAddComponent.prototype.postPrescription = function (pname, amount, rid) {
                    this.httpService.post({
                        pname: pname,
                        amount: amount,
                        rid: rid
                    }, 'prescription').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                PrescriptionAddComponent.prototype.getReportIds = function () {
                    var _this = this;
                    this.reportIds = [];
                    this.httpService.getRQuery().subscribe(function (data) { return _this.parseReportIds(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                PrescriptionAddComponent.prototype.parseReportIds = function (json) {
                    var _this = this;
                    json.forEach(function (item) { _this.reportIds.push(item.rid); });
                };
                PrescriptionAddComponent = __decorate([
                    core_1.Component({
                        selector: 'prescription',
                        templateUrl: 'templates/prescription.component.html',
                        providers: [http_service_1.HTTPService]
                    }),
                    router_1.CanActivate(function () { return is_loggedin_1.isLoggedin(); }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], PrescriptionAddComponent);
                return PrescriptionAddComponent;
            }());
            exports_1("PrescriptionAddComponent", PrescriptionAddComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNjcmlwdGlvbi1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUtJLGtDQUFvQixXQUF3QjtvQkFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBSDVDLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztnQkFJbkMsQ0FBQztnQkFFRCwyQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCxvREFBaUIsR0FBakIsVUFBa0IsSUFBSTtvQkFBdEIsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUMzQixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFFRCxrREFBZSxHQUFmLFVBQWdCLEtBQWEsRUFBRSxNQUFjLEVBQUUsR0FBVTtvQkFDckQsSUFBSSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxDQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUVELHFEQUFrQixHQUFsQixVQUFtQixZQUF5QjtvQkFDeEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFFRCxtREFBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHO29CQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDakI7d0JBQ0ksS0FBSyxFQUFFLEtBQUs7d0JBQ1osTUFBTSxFQUFFLE1BQU07d0JBQ2QsR0FBRyxFQUFFLEdBQUc7cUJBQ1gsRUFDRCxjQUFjLENBQ2pCLENBQUMsU0FBUyxDQUNQLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQztnQkFDTixDQUFDO2dCQUNELCtDQUFZLEdBQVo7b0JBQUEsaUJBT0M7b0JBTkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUNsQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLEVBQ2pDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxpREFBYyxHQUFkLFVBQWUsSUFBSTtvQkFBbkIsaUJBRUM7b0JBREcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUksSUFBSyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQTtnQkFDMUQsQ0FBQztnQkE5REw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsY0FBYzt3QkFDdkIsV0FBVyxFQUFFLHVDQUF1Qzt3QkFDcEQsU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztxQkFDMUIsQ0FBQztvQkFFRCxvQkFBVyxDQUFDLGNBQU0sT0FBQSx3QkFBVSxFQUFFLEVBQVosQ0FBWSxDQUFDOzs0Q0FBQTtnQkF5RGhDLCtCQUFDO1lBQUQsQ0F4REEsQUF3REMsSUFBQTtZQXhERCwrREF3REMsQ0FBQSIsImZpbGUiOiJwcmVzY3JpcHRpb24tYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKb3kgb24gMjAxNi0wNC0wMS5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5pbXBvcnQge1ByZXNjcmlwdGlvbn0gZnJvbSBcIi4vcHJlc2NyaXB0aW9uXCI7XG5pbXBvcnQge0NhbkFjdGl2YXRlfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge2lzTG9nZ2VkaW59IGZyb20gXCIuL2lzLWxvZ2dlZGluXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidwcmVzY3JpcHRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3ByZXNjcmlwdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOltIVFRQU2VydmljZV1cbn0pXG5cbkBDYW5BY3RpdmF0ZSgoKSA9PiBpc0xvZ2dlZGluKCkpXG5leHBvcnQgY2xhc3MgUHJlc2NyaXB0aW9uQWRkQ29tcG9uZW50e1xuXG4gICAgcHJlc2NyaXB0aW9uczogUHJlc2NyaXB0aW9uW10gPSBbXTtcbiAgICByZXBvcnRJZHM6IG51bWJlcltdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSFRUUFNlcnZpY2Upe1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldFJlcG9ydElkcygpO1xuICAgIH1cblxuICAgIHBhcnNlUHJlc2NyaXB0aW9uKGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRQcmVzY3JpcHRpb24oaXRlbS5wbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLmFtb3VudCxcbiAgICAgICAgICAgICAgICBpdGVtLnJpZCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkUHJlc2NyaXB0aW9uKHBuYW1lOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyLCByaWQ6bnVtYmVyKXtcbiAgICAgICAgbGV0IHByZXNjcmlwdGlvbiA9IG5ldyBQcmVzY3JpcHRpb24ocG5hbWUsYW1vdW50LHJpZCk7XG4gICAgICAgIHRoaXMucHJlc2NyaXB0aW9ucy5wdXNoKHByZXNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJlc2NyaXB0aW9uKHByZXNjcmlwdGlvbjpQcmVzY3JpcHRpb24pe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnByZXNjcmlwdGlvbnMuaW5kZXhPZihwcmVzY3JpcHRpb24pO1xuICAgICAgICB0aGlzLnByZXNjcmlwdGlvbnMuc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cblxuICAgIHBvc3RQcmVzY3JpcHRpb24ocG5hbWUsIGFtb3VudCwgcmlkKXtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5wb3N0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBuYW1lOiBwbmFtZSxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgICAgICByaWQ6IHJpZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwcmVzY3JpcHRpb24nXG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cbiAgICBnZXRSZXBvcnRJZHMoKSB7XG4gICAgICAgIHRoaXMucmVwb3J0SWRzID0gW107XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UuZ2V0UlF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlUmVwb3J0SWRzKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VSZXBvcnRJZHMoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7dGhpcy5yZXBvcnRJZHMucHVzaChpdGVtLnJpZCl9KVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
