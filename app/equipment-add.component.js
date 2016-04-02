System.register(['angular2/core', './Equipment', './http.service', "./is-loggedin", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, Equipment_1, http_service_1, is_loggedin_1, router_1, router_2;
    var EquipmentAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Equipment_1_1) {
                Equipment_1 = Equipment_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (is_loggedin_1_1) {
                is_loggedin_1 = is_loggedin_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            EquipmentAddComponent = (function () {
                function EquipmentAddComponent(httpService) {
                    this.httpService = httpService;
                    this.preprocessEquipmentForm();
                    //this.equipments = [];
                    //this.httpService.getEQuery().subscribe(
                    //    data => this.parseEquipment(data),
                    //    err => alert(err),
                    //    () => console.log("complete")
                    //);
                }
                EquipmentAddComponent.prototype.postEquipment = function (type, room) {
                    this.httpService.post({
                        type: type,
                        room: room }, 'equipment').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                EquipmentAddComponent.prototype.parseEquipment = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addEquipment(item.eid, item.type, item.room);
                    });
                };
                EquipmentAddComponent.prototype.addEquipment = function (eid, type, room) {
                    var equipment = new Equipment_1.Equipment(eid, type, room);
                    this.equipments.push(equipment);
                };
                EquipmentAddComponent.prototype.removeEquipment = function (equipment) {
                    var index = this.equipments.indexOf(equipment);
                    this.equipments.splice(index, 1);
                };
                EquipmentAddComponent.prototype.preprocessEquipmentForm = function () {
                    var _this = this;
                    this.httpService.getSQuery().subscribe(function (data) { return _this.parseEquipmentPreprocess(data); }, function (err) { return alert(err); }, function () { return console.log("GET patient data preprocessing complete"); });
                };
                EquipmentAddComponent.prototype.parseEquipmentPreprocess = function (json) {
                    var equipment_ids = [];
                    var next_id = 0;
                    json.forEach(function (item) {
                        equipment_ids.push(item.eid);
                    });
                    for (var i = 0; i < equipment_ids.length; i += 1) {
                        if (equipment_ids[i] > next_id)
                            next_id = equipment_ids[i];
                    }
                    console.log(next_id + 1);
                    this.next_id = next_id + 1;
                };
                EquipmentAddComponent = __decorate([
                    core_1.Component({
                        selector: 'equipment',
                        templateUrl: 'templates/equipment.component.html',
                        providers: [http_service_1.HTTPService, router_2.RouterLink],
                        directives: [router_2.RouterLink],
                    }),
                    router_1.CanActivate(function () { return is_loggedin_1.isLoggedin(); }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], EquipmentAddComponent);
                return EquipmentAddComponent;
            }());
            exports_1("EquipmentAddComponent", EquipmentAddComponent);
        }
    }
});
//# sourceMappingURL=equipment-add.component.js.map