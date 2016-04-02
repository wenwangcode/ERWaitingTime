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
//# sourceMappingURL=prescription.component.js.map