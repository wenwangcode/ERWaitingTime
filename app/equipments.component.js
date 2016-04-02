System.register(['angular2/core', "./http.service", "./equipment", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, http_service_1, equipment_1, router_1;
    var EquipmentAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (equipment_1_1) {
                equipment_1 = equipment_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            EquipmentAddComponent = (function () {
                function EquipmentAddComponent(httpService) {
                    this.httpService = httpService;
                    this.equipments = [];
                }
                EquipmentAddComponent.prototype.ngOnInit = function () {
                    this.getEquipmentIds();
                };
                EquipmentAddComponent.prototype.parseEquipment = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addEquipment(item.eid, item.type, item.room);
                    });
                };
                EquipmentAddComponent.prototype.addEquipment = function (eid, type, room) {
                    var equipment = new equipment_1.Equipment(eid, type, room);
                    this.equipments.push(equipment);
                };
                EquipmentAddComponent.prototype.removeEquipment = function (equipment) {
                    var index = this.equipments.indexOf(equipment);
                    this.equipments.splice(index, 1);
                };
                EquipmentAddComponent.prototype.postPrescription = function (pname, amount, rid) {
                    this.httpService.post({
                        pname: pname,
                        amount: amount,
                        rid: rid
                    }, 'prescription').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                EquipmentAddComponent.prototype.getEquipmentIds = function () {
                    var _this = this;
                    this.equipmentIds = [];
                    this.httpService.getRQuery().subscribe(function (data) { return _this.parseReportIds(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                EquipmentAddComponent.prototype.parseReportIds = function (json) {
                    var _this = this;
                    json.forEach(function (item) { _this.equipmentIds.push(item.rid); });
                };
                EquipmentAddComponent = __decorate([
                    core_1.Component({
                        selector: 'equipment',
                        templateUrl: 'templates/equipments.html',
                        providers: [http_service_1.HTTPService, router_1.RouterLink],
                        directives: [router_1.RouterLink],
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], EquipmentAddComponent);
                return EquipmentAddComponent;
            }());
            exports_1("EquipmentAddComponent", EquipmentAddComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QyxVQUFVLEVBQUUsQ0FBQyxtQkFBVSxDQUFDO3FCQUMzQixDQUFDOzt5Q0FBQTtnQkFzREYsNEJBQUM7WUFBRCxDQXBEQSxBQW9EQyxJQUFBO1lBcERELHlEQW9EQyxDQUFBIiwiZmlsZSI6ImVxdWlwbWVudHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHdlbmR5d2FuZyBvbiAyMDE2LTA0LTAxLlxuICovXG5pbXBvcnQge0NvbXBvbmVudCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcbmltcG9ydCB7RXF1aXBtZW50fSBmcm9tIFwiLi9lcXVpcG1lbnRcIjtcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2VxdWlwbWVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvZXF1aXBtZW50cy5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtIVFRQU2VydmljZSxSb3V0ZXJMaW5rXSxcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyTGlua10sXG59KVxuXG5leHBvcnQgY2xhc3MgRXF1aXBtZW50QWRkQ29tcG9uZW50IHtcbiAgICBlcXVpcG1lbnRzOiBFcXVpcG1lbnRbXSA9IFtdO1xuICAgIGVxdWlwbWVudElkczogbnVtYmVyW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7fVxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuZ2V0RXF1aXBtZW50SWRzKCk7XG4gICAgfVxuICAgIHBhcnNlRXF1aXBtZW50KGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRFcXVpcG1lbnQoaXRlbS5laWQsXG4gICAgICAgICAgICAgICAgaXRlbS50eXBlLFxuICAgICAgICAgICAgICAgIGl0ZW0ucm9vbSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkRXF1aXBtZW50KGVpZDogbnVtYmVyLCB0eXBlOiBzdHJpbmcsIHJvb206bnVtYmVyKXtcbiAgICAgICAgbGV0IGVxdWlwbWVudCA9IG5ldyBFcXVpcG1lbnQoZWlkLHR5cGUscm9vbSk7XG4gICAgICAgIHRoaXMuZXF1aXBtZW50cy5wdXNoKGVxdWlwbWVudCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXF1aXBtZW50KGVxdWlwbWVudDpFcXVpcG1lbnQpe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmVxdWlwbWVudHMuaW5kZXhPZihlcXVpcG1lbnQpO1xuICAgICAgICB0aGlzLmVxdWlwbWVudHMuc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cblxuICAgIHBvc3RQcmVzY3JpcHRpb24ocG5hbWUsIGFtb3VudCwgcmlkKXtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5wb3N0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBuYW1lOiBwbmFtZSxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgICAgICByaWQ6IHJpZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwcmVzY3JpcHRpb24nXG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cbiAgICBnZXRFcXVpcG1lbnRJZHMoKSB7XG4gICAgICAgIHRoaXMuZXF1aXBtZW50SWRzID0gW107XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UuZ2V0UlF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlUmVwb3J0SWRzKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VSZXBvcnRJZHMoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7dGhpcy5lcXVpcG1lbnRJZHMucHVzaChpdGVtLnJpZCl9KVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
