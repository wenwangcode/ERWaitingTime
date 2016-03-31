System.register(['angular2/core', './Equipment', './http.service'], function(exports_1, context_1) {
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
    var core_1, Equipment_1, http_service_1;
    var EquipmentComponent;
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
            }],
        execute: function() {
            EquipmentComponent = (function () {
                function EquipmentComponent(httpService) {
                    var _this = this;
                    this.httpService = httpService;
                    this.equipments = [];
                    this.httpService.getEQuery().subscribe(function (data) { return _this.parseEquipment(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                }
                EquipmentComponent.prototype.testPost = function (eid, type, room) {
                    this.httpService.post({ eid: eid,
                        type: type,
                        room: room }, 'equipment').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                EquipmentComponent.prototype.parseEquipment = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addEquipment(item.eid, item.type, item.room);
                    });
                };
                EquipmentComponent.prototype.addEquipment = function (eid, type, room) {
                    var equipment = new Equipment_1.Equipment(eid, type, room);
                    this.equipments.push(equipment);
                };
                EquipmentComponent.prototype.removeEquipment = function (equipment) {
                    var index = this.equipments.indexOf(equipment);
                    this.equipments.splice(index, 1);
                };
                EquipmentComponent = __decorate([
                    core_1.Component({
                        selector: 'equipment',
                        template: "\n<html>\n<head>\n    <title>Equipment Register Page</title>\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css\" rel=\"stylesheet\"/>\n\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n        <div class=\"container\">\n            <a class=\"navbar-brand\" href=\"../home\">ERWaitingTime</a>\n\n        </div>\n    </nav>\n</head>\n<body>\n<div align=\"left\" style=\"margin-top: 100px\" class=\"container\">\n    <h1>Please register the equipment info below.</h1>\n    <br>\n    <div class=\"form-group\">\n         <div class=\"container\" ng-app=\"my-app\">\n        Equipment ID: <input type=\"number\" class=\"form-control\" #eid>\n        Equipment Type: <input type=\"text\"  class=\"form-control\" #type>\n        Equipment Room: <input type=\"number\" class=\"form-control\" #room>\n        <br>\n        <table  class=\"table table-striped\">\n            <tr>\n                <th> equipment_id </th>\n                <th> equipment_type</th>\n                <th> room number</th>\n            </tr>\n            <tr *ngFor=\"#equipment of equipments\"> \n                <td> {{equipment.eid}} </td>\n                <td> {{equipment.type}} </td>\n                <td> {{equipment.room}} </td>\n            </tr>\n        </table>\n        \n        <br/><br/>\n        \n            <button (click)=\"testPost(eid.value, type.value, room.value)\" class=\"btn btn-primary\"> Submit </button>\n    </div>\n\n    <br/><br/>\n    </div>\n    </div>\n\n</body>\n</html>\n        \n            \n",
                        providers: [http_service_1.HTTPService]
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