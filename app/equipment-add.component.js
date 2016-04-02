System.register(['angular2/core', './Equipment', './http.service', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, Equipment_1, http_service_1, router_1;
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
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            EquipmentAddComponent = (function () {
                function EquipmentAddComponent(httpService) {
                    this.httpService = httpService;
                    this.preprocessEquipmentForm();
                }
                EquipmentAddComponent.prototype.postEquipment = function (type, room) {
                    var random = Math.floor((Math.random() * 10000) + 1);
                    this.httpService.post({ eid: random,
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
                    for (var i = 0; i < equipment_ids.length; i++) {
                        if (equipment_ids[i] > next_id) {
                            next_id = equipment_ids[i];
                        }
                    }
                    this.nexte_id = next_id + 1;
                };
                EquipmentAddComponent = __decorate([
                    core_1.Component({
                        selector: 'equipment',
                        templateUrl: 'templates/equipment.component.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwbWVudC1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUlJLCtCQUFvQixXQUF3QjtvQkFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELDZDQUFhLEdBQWIsVUFBYyxJQUFJLEVBQUMsSUFBSTtvQkFDcEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ2pCLEVBQUMsR0FBRyxFQUFDLE1BQU07d0JBQ1YsSUFBSSxFQUFDLElBQUk7d0JBQ1YsSUFBSSxFQUFDLElBQUksRUFBQyxFQUNWLFdBQVcsQ0FDZCxDQUFDLFNBQVMsQ0FDUCxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCw4Q0FBYyxHQUFkLFVBQWUsSUFBSTtvQkFBbkIsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUN0QixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFFRCw0Q0FBWSxHQUFaLFVBQWEsR0FBVSxFQUFFLElBQVcsRUFBRSxJQUFXO29CQUM3QyxJQUFJLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBR0QsK0NBQWUsR0FBZixVQUFnQixTQUFtQjtvQkFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCx1REFBdUIsR0FBdkI7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQ2xDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUFuQyxDQUFtQyxFQUMzQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLEVBQXRELENBQXNELENBQy9ELENBQUM7Z0JBQ04sQ0FBQztnQkFFRCx3REFBd0IsR0FBeEIsVUFBeUIsSUFBSTtvQkFDekIsSUFBSSxhQUFhLEdBQWEsRUFBRSxDQUFDO29CQUNqQyxJQUFJLE9BQU8sR0FBVyxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJO3dCQUNkLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQyxDQUFDLENBQUMsQ0FBQztvQkFDSCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDNUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQzdCLE9BQU8sR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQzlCLENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBcEVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLFdBQVc7d0JBQ3BCLFdBQVcsRUFBRSxvQ0FBb0M7d0JBQ2pELFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUMsbUJBQVUsQ0FBQzt3QkFDbkMsVUFBVSxFQUFFLENBQUMsbUJBQVUsQ0FBQztxQkFDM0IsQ0FBQzs7eUNBQUE7Z0JBaUVGLDRCQUFDO1lBQUQsQ0EvREEsQUErREMsSUFBQTtZQS9ERCx5REErREMsQ0FBQSIsImZpbGUiOiJlcXVpcG1lbnQtYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKb3kgb24gMjAxNi0wMy0yOC5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtFcXVpcG1lbnR9IGZyb20gJy4vRXF1aXBtZW50JztcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7Q2FuQWN0aXZhdGV9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonZXF1aXBtZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9lcXVpcG1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0hUVFBTZXJ2aWNlLFJvdXRlckxpbmtdLFxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJMaW5rXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBFcXVpcG1lbnRBZGRDb21wb25lbnR7XG4gICAgZXF1aXBtZW50czpBcnJheTxFcXVpcG1lbnQ+O1xuICAgIG5leHRlX2lkOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc0VxdWlwbWVudEZvcm0oKTtcbiAgICB9XG5cbiAgICBwb3N0RXF1aXBtZW50KHR5cGUscm9vbSl7XG4gICAgICAgdmFyIHJhbmRvbSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDAwMCkgKyAxKTtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5wb3N0KFxuICAgICAgICAgICAge2VpZDpyYW5kb20sXG4gICAgICAgICAgICAgdHlwZTp0eXBlLFxuICAgICAgICAgICAgcm9vbTpyb29tfSxcbiAgICAgICAgICAgICdlcXVpcG1lbnQnXG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBhcnNlRXF1aXBtZW50KGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRFcXVpcG1lbnQoaXRlbS5laWQsXG4gICAgICAgICAgICAgICAgaXRlbS50eXBlLFxuICAgICAgICAgICAgICAgIGl0ZW0ucm9vbSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkRXF1aXBtZW50KGVpZDpudW1iZXIsIHR5cGU6c3RyaW5nLCByb29tOm51bWJlcil7XG4gICAgICAgIGxldCBlcXVpcG1lbnQgPSBuZXcgRXF1aXBtZW50KGVpZCx0eXBlLHJvb20pO1xuICAgICAgICB0aGlzLmVxdWlwbWVudHMucHVzaChlcXVpcG1lbnQpO1xuICAgIH1cblxuXG4gICAgcmVtb3ZlRXF1aXBtZW50KGVxdWlwbWVudDpFcXVpcG1lbnQpe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmVxdWlwbWVudHMuaW5kZXhPZihlcXVpcG1lbnQpO1xuICAgICAgICB0aGlzLmVxdWlwbWVudHMuc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cblxuICAgIHByZXByb2Nlc3NFcXVpcG1lbnRGb3JtKCkge1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldFNRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZUVxdWlwbWVudFByZXByb2Nlc3MoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiR0VUIHBhdGllbnQgZGF0YSBwcmVwcm9jZXNzaW5nIGNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VFcXVpcG1lbnRQcmVwcm9jZXNzKGpzb24pe1xuICAgICAgICBsZXQgZXF1aXBtZW50X2lkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IG5leHRfaWQ6IG51bWJlciA9IDA7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICBlcXVpcG1lbnRfaWRzLnB1c2goaXRlbS5laWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcXVpcG1lbnRfaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZXF1aXBtZW50X2lkc1tpXSA+IG5leHRfaWQpIHtcbiAgICAgICAgICAgICAgICBuZXh0X2lkID0gZXF1aXBtZW50X2lkc1tpXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubmV4dGVfaWQgPSBuZXh0X2lkICsgMTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
