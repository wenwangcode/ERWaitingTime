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
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], PrescriptionAddComponent);
                return PrescriptionAddComponent;
            }());
            exports_1("PrescriptionAddComponent", PrescriptionAddComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNjcmlwdGlvbi1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBS0ksa0NBQW9CLFdBQXdCO29CQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFINUMsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO2dCQUluQyxDQUFDO2dCQUVELDJDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN4QixDQUFDO2dCQUVELG9EQUFpQixHQUFqQixVQUFrQixJQUFJO29CQUF0QixpQkFNQztvQkFMRyxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQUEsSUFBSTt3QkFDZCxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQzNCLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUVELGtEQUFlLEdBQWYsVUFBZ0IsS0FBYSxFQUFFLE1BQWMsRUFBRSxHQUFVO29CQUNyRCxJQUFJLFlBQVksR0FBRyxJQUFJLDJCQUFZLENBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQscURBQWtCLEdBQWxCLFVBQW1CLFlBQXlCO29CQUN4QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQUVELG1EQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUc7b0JBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNqQjt3QkFDSSxLQUFLLEVBQUUsS0FBSzt3QkFDWixNQUFNLEVBQUUsTUFBTTt3QkFDZCxHQUFHLEVBQUUsR0FBRztxQkFDWCxFQUNELGNBQWMsQ0FDakIsQ0FBQyxTQUFTLENBQ1AsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBQ0QsK0NBQVksR0FBWjtvQkFBQSxpQkFPQztvQkFORyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQ2xDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBekIsQ0FBeUIsRUFDakMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQztnQkFDTixDQUFDO2dCQUVELGlEQUFjLEdBQWQsVUFBZSxJQUFJO29CQUFuQixpQkFFQztvQkFERyxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQUEsSUFBSSxJQUFLLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFBO2dCQUMxRCxDQUFDO2dCQTVETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxjQUFjO3dCQUN2QixXQUFXLEVBQUUsdUNBQXVDO3dCQUNwRCxTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO3FCQUMxQixDQUFDOzs0Q0FBQTtnQkF5REYsK0JBQUM7WUFBRCxDQXhEQSxBQXdEQyxJQUFBO1lBeERELCtEQXdEQyxDQUFBIiwiZmlsZSI6InByZXNjcmlwdGlvbi1hZGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTA0LTAxLlxuICovXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7UHJlc2NyaXB0aW9ufSBmcm9tIFwiLi9wcmVzY3JpcHRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3ByZXNjcmlwdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvcHJlc2NyaXB0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6W0hUVFBTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBQcmVzY3JpcHRpb25BZGRDb21wb25lbnR7XG5cbiAgICBwcmVzY3JpcHRpb25zOiBQcmVzY3JpcHRpb25bXSA9IFtdO1xuICAgIHJlcG9ydElkczogbnVtYmVyW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVwb3J0SWRzKCk7XG4gICAgfVxuXG4gICAgcGFyc2VQcmVzY3JpcHRpb24oanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFByZXNjcmlwdGlvbihpdGVtLnBuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0uYW1vdW50LFxuICAgICAgICAgICAgICAgIGl0ZW0ucmlkKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRQcmVzY3JpcHRpb24ocG5hbWU6IHN0cmluZywgYW1vdW50OiBudW1iZXIsIHJpZDpudW1iZXIpe1xuICAgICAgICBsZXQgcHJlc2NyaXB0aW9uID0gbmV3IFByZXNjcmlwdGlvbihwbmFtZSxhbW91bnQscmlkKTtcbiAgICAgICAgdGhpcy5wcmVzY3JpcHRpb25zLnB1c2gocHJlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICByZW1vdmVQcmVzY3JpcHRpb24ocHJlc2NyaXB0aW9uOlByZXNjcmlwdGlvbil7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucHJlc2NyaXB0aW9ucy5pbmRleE9mKHByZXNjcmlwdGlvbik7XG4gICAgICAgIHRoaXMucHJlc2NyaXB0aW9ucy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG4gICAgcG9zdFByZXNjcmlwdGlvbihwbmFtZSwgYW1vdW50LCByaWQpe1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcG5hbWU6IHBuYW1lLFxuICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgICAgICAgIHJpZDogcmlkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3ByZXNjcmlwdGlvbidcbiAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuICAgIGdldFJlcG9ydElkcygpIHtcbiAgICAgICAgdGhpcy5yZXBvcnRJZHMgPSBbXTtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5nZXRSUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VSZXBvcnRJZHMoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZVJlcG9ydElkcyhqc29uKXtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHt0aGlzLnJlcG9ydElkcy5wdXNoKGl0ZW0ucmlkKX0pXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
