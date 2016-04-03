System.register(['angular2/core', 'angular2/router', "./http.service", "./patient_id"], function(exports_1, context_1) {
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
    var core_1, router_1, http_service_1, patient_id_1;
    var EquipmentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (patient_id_1_1) {
                patient_id_1 = patient_id_1_1;
            }],
        execute: function() {
            EquipmentComponent = (function () {
                function EquipmentComponent(_httpService) {
                    this._httpService = _httpService;
                    this.pides = [];
                }
                EquipmentComponent.prototype.ngOnInit = function () {
                    this.getEquipment();
                };
                EquipmentComponent.prototype.getEquipment = function () {
                    var _this = this;
                    this._httpService.getAllFromTable('equipme')
                        .subscribe(function (equipment) { return _this.equipments = equipment; }, function (error) { return _this.errorMessage = error; });
                };
                EquipmentComponent.prototype.getpid = function (eidlist) {
                    var _this = this;
                    console.log(eidlist);
                    this._httpService.findpid(eidlist)
                        .subscribe(function (data) { return _this.parsepid(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                EquipmentComponent.prototype.addpid = function (pd) {
                    console.log(pd);
                    var pide = new patient_id_1.PatientID(pd);
                    console.log(pide);
                    this.pides.push(pide);
                };
                EquipmentComponent.prototype.parsepid = function (json) {
                    var _this = this;
                    console.log(json);
                    json.forEach(function (item) {
                        _this.addpid(item.pid);
                    });
                };
                EquipmentComponent = __decorate([
                    core_1.Component({
                        selector: 'equipment',
                        templateUrl: 'templates/equipments.html',
                        providers: [http_service_1.HTTPService, router_1.RouterLink],
                        directives: [router_1.RouterLink],
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], EquipmentComponent);
                return EquipmentComponent;
            }());
            exports_1("EquipmentComponent", EquipmentComponent);
        }
    }
});
//# sourceMappingURL=equipment.component.js.map