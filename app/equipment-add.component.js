System.register(['angular2/core', "angular2/router", './Equipment', './http.service', "./is-loggedin"], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, Equipment_1, http_service_1, is_loggedin_1;
    var EquipmentAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (Equipment_1_1) {
                Equipment_1 = Equipment_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (is_loggedin_1_1) {
                is_loggedin_1 = is_loggedin_1_1;
            }],
        execute: function() {
            EquipmentAddComponent = (function () {
                function EquipmentAddComponent(httpService) {
                    this.httpService = httpService;
                    // this.preprocessEquipmentForm();
                }
                EquipmentAddComponent.prototype.postEquipment = function (type, room) {
                    this.httpService.post({
                        type: type,
                        room: room
                    }, 'equipment').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwbWVudC1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CQTtnQkFJSSwrQkFBb0IsV0FBd0I7b0JBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN4QyxrQ0FBa0M7Z0JBQ3RDLENBQUM7Z0JBRUQsNkNBQWEsR0FBYixVQUFjLElBQUksRUFBQyxJQUFJO29CQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDakI7d0JBQ0ksSUFBSSxFQUFDLElBQUk7d0JBQ1QsSUFBSSxFQUFDLElBQUk7cUJBQ1osRUFDRCxXQUFXLENBQ2QsQ0FBQyxTQUFTLENBQ1AsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsOENBQWMsR0FBZCxVQUFlLElBQUk7b0JBQW5CLGlCQVFDO29CQVBHLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJO3dCQUNkLEtBQUksQ0FBQyxZQUFZLENBQ2IsSUFBSSxDQUFDLEdBQUcsRUFDUixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxJQUFJLENBQ1osQ0FBQztvQkFDTixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUVELDRDQUFZLEdBQVosVUFBYSxHQUFVLEVBQUUsSUFBVyxFQUFFLElBQVc7b0JBQzdDLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFHRCwrQ0FBZSxHQUFmLFVBQWdCLFNBQW1CO29CQUMvQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQWxETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxXQUFXO3dCQUNwQixXQUFXLEVBQUUsb0NBQW9DO3dCQUNqRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFDLG1CQUFVLENBQUM7d0JBQ25DLFVBQVUsRUFBRSxDQUFDLG1CQUFVLENBQUM7cUJBQzNCLENBQUM7b0JBRUQsb0JBQVcsQ0FBQyxjQUFNLE9BQUEsd0JBQVUsRUFBRSxFQUFaLENBQVksQ0FBQzs7eUNBQUE7Z0JBbUVoQyw0QkFBQztZQUFELENBakVBLEFBaUVDLElBQUE7WUFqRUQseURBaUVDLENBQUEiLCJmaWxlIjoiZXF1aXBtZW50LWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDMtMjguXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q2FuQWN0aXZhdGV9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5pbXBvcnQge0VxdWlwbWVudH0gZnJvbSAnLi9FcXVpcG1lbnQnO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHtpc0xvZ2dlZGlufSBmcm9tIFwiLi9pcy1sb2dnZWRpblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonZXF1aXBtZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9lcXVpcG1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0hUVFBTZXJ2aWNlLFJvdXRlckxpbmtdLFxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJMaW5rXSxcbn0pXG5cbkBDYW5BY3RpdmF0ZSgoKSA9PiBpc0xvZ2dlZGluKCkpXG5cbmV4cG9ydCBjbGFzcyBFcXVpcG1lbnRBZGRDb21wb25lbnR7XG5cbiAgICBlcXVpcG1lbnRzOkFycmF5PEVxdWlwbWVudD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7XG4gICAgICAgIC8vIHRoaXMucHJlcHJvY2Vzc0VxdWlwbWVudEZvcm0oKTtcbiAgICB9XG5cbiAgICBwb3N0RXF1aXBtZW50KHR5cGUscm9vbSl7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UucG9zdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOnR5cGUsXG4gICAgICAgICAgICAgICAgcm9vbTpyb29tXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2VxdWlwbWVudCdcbiAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VFcXVpcG1lbnQoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZEVxdWlwbWVudChcbiAgICAgICAgICAgICAgICBpdGVtLmVpZCxcbiAgICAgICAgICAgICAgICBpdGVtLnR5cGUsXG4gICAgICAgICAgICAgICAgaXRlbS5yb29tXG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZEVxdWlwbWVudChlaWQ6bnVtYmVyLCB0eXBlOnN0cmluZywgcm9vbTpudW1iZXIpe1xuICAgICAgICBsZXQgZXF1aXBtZW50ID0gbmV3IEVxdWlwbWVudChlaWQsdHlwZSxyb29tKTtcbiAgICAgICAgdGhpcy5lcXVpcG1lbnRzLnB1c2goZXF1aXBtZW50KTtcbiAgICB9XG5cblxuICAgIHJlbW92ZUVxdWlwbWVudChlcXVpcG1lbnQ6RXF1aXBtZW50KXtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5lcXVpcG1lbnRzLmluZGV4T2YoZXF1aXBtZW50KTtcbiAgICAgICAgdGhpcy5lcXVpcG1lbnRzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG5cbiAgICAvLyBwcmVwcm9jZXNzRXF1aXBtZW50Rm9ybSgpIHtcbiAgICAvLyAgICAgdGhpcy5odHRwU2VydmljZS5nZXRTUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgLy8gICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VFcXVpcG1lbnRQcmVwcm9jZXNzKGRhdGEpLFxuICAgIC8vICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgLy8gICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkdFVCBwYXRpZW50IGRhdGEgcHJlcHJvY2Vzc2luZyBjb21wbGV0ZVwiKVxuICAgIC8vICAgICApO1xuICAgIC8vIH1cblxuICAgIC8vIHBhcnNlRXF1aXBtZW50UHJlcHJvY2Vzcyhqc29uKXtcbiAgICAvLyAgICAgbGV0IGVxdWlwbWVudF9pZHM6IG51bWJlcltdID0gW107XG4gICAgLy8gICAgIGxldCBuZXh0X2lkOiBudW1iZXIgPSAwO1xuICAgIC8vICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgIC8vICAgICAgICAgZXF1aXBtZW50X2lkcy5wdXNoKGl0ZW0uZWlkKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXF1aXBtZW50X2lkcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICAgICAgaWYgKGVxdWlwbWVudF9pZHNbaV0gPiBuZXh0X2lkKSB7XG4gICAgLy8gICAgICAgICAgICAgbmV4dF9pZCA9IGVxdWlwbWVudF9pZHNbaV1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB0aGlzLm5leHRlX2lkID0gbmV4dF9pZCArIDE7XG4gICAgLy8gfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
