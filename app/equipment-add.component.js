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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwbWVudC1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUdJLCtCQUFvQixXQUF3QjtvQkFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hDLGtDQUFrQztnQkFDdEMsQ0FBQztnQkFFRCw2Q0FBYSxHQUFiLFVBQWMsSUFBSSxFQUFDLElBQUk7b0JBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNqQjt3QkFDQyxJQUFJLEVBQUMsSUFBSTt3QkFDVixJQUFJLEVBQUMsSUFBSTtxQkFDUixFQUNELFdBQVcsQ0FDZCxDQUFDLFNBQVMsQ0FDUCxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCw4Q0FBYyxHQUFkLFVBQWUsSUFBSTtvQkFBbkIsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUN0QixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFFRCw0Q0FBWSxHQUFaLFVBQWEsR0FBVSxFQUFFLElBQVcsRUFBRSxJQUFXO29CQUM3QyxJQUFJLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBR0QsK0NBQWUsR0FBZixVQUFnQixTQUFtQjtvQkFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkE3Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsV0FBVzt3QkFDcEIsV0FBVyxFQUFFLG9DQUFvQzt3QkFDakQsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBQyxtQkFBVSxDQUFDO3dCQUNuQyxVQUFVLEVBQUUsQ0FBQyxtQkFBVSxDQUFDO3FCQUMzQixDQUFDOzt5Q0FBQTtnQkFnRUYsNEJBQUM7WUFBRCxDQTlEQSxBQThEQyxJQUFBO1lBOURELHlEQThEQyxDQUFBIiwiZmlsZSI6ImVxdWlwbWVudC1hZGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTI4LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0VxdWlwbWVudH0gZnJvbSAnLi9FcXVpcG1lbnQnO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHtDYW5BY3RpdmF0ZX0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJMaW5rfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidlcXVpcG1lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2VxdWlwbWVudC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSFRUUFNlcnZpY2UsUm91dGVyTGlua10sXG4gICAgZGlyZWN0aXZlczogW1JvdXRlckxpbmtdLFxufSlcblxuZXhwb3J0IGNsYXNzIEVxdWlwbWVudEFkZENvbXBvbmVudHtcbiAgICBlcXVpcG1lbnRzOkFycmF5PEVxdWlwbWVudD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7XG4gICAgICAgIC8vIHRoaXMucHJlcHJvY2Vzc0VxdWlwbWVudEZvcm0oKTtcbiAgICB9XG5cbiAgICBwb3N0RXF1aXBtZW50KHR5cGUscm9vbSl7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UucG9zdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICB0eXBlOnR5cGUsXG4gICAgICAgICAgICByb29tOnJvb21cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZXF1aXBtZW50J1xuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZUVxdWlwbWVudChqc29uKXtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXF1aXBtZW50KGl0ZW0uZWlkLFxuICAgICAgICAgICAgICAgIGl0ZW0udHlwZSxcbiAgICAgICAgICAgICAgICBpdGVtLnJvb20pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZEVxdWlwbWVudChlaWQ6bnVtYmVyLCB0eXBlOnN0cmluZywgcm9vbTpudW1iZXIpe1xuICAgICAgICBsZXQgZXF1aXBtZW50ID0gbmV3IEVxdWlwbWVudChlaWQsdHlwZSxyb29tKTtcbiAgICAgICAgdGhpcy5lcXVpcG1lbnRzLnB1c2goZXF1aXBtZW50KTtcbiAgICB9XG5cblxuICAgIHJlbW92ZUVxdWlwbWVudChlcXVpcG1lbnQ6RXF1aXBtZW50KXtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5lcXVpcG1lbnRzLmluZGV4T2YoZXF1aXBtZW50KTtcbiAgICAgICAgdGhpcy5lcXVpcG1lbnRzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG5cbiAgICAvLyBwcmVwcm9jZXNzRXF1aXBtZW50Rm9ybSgpIHtcbiAgICAvLyAgICAgdGhpcy5odHRwU2VydmljZS5nZXRTUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgLy8gICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VFcXVpcG1lbnRQcmVwcm9jZXNzKGRhdGEpLFxuICAgIC8vICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgLy8gICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkdFVCBwYXRpZW50IGRhdGEgcHJlcHJvY2Vzc2luZyBjb21wbGV0ZVwiKVxuICAgIC8vICAgICApO1xuICAgIC8vIH1cblxuICAgIC8vIHBhcnNlRXF1aXBtZW50UHJlcHJvY2Vzcyhqc29uKXtcbiAgICAvLyAgICAgbGV0IGVxdWlwbWVudF9pZHM6IG51bWJlcltdID0gW107XG4gICAgLy8gICAgIGxldCBuZXh0X2lkOiBudW1iZXIgPSAwO1xuICAgIC8vICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgIC8vICAgICAgICAgZXF1aXBtZW50X2lkcy5wdXNoKGl0ZW0uZWlkKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXF1aXBtZW50X2lkcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICAgICAgaWYgKGVxdWlwbWVudF9pZHNbaV0gPiBuZXh0X2lkKSB7XG4gICAgLy8gICAgICAgICAgICAgbmV4dF9pZCA9IGVxdWlwbWVudF9pZHNbaV1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB0aGlzLm5leHRlX2lkID0gbmV4dF9pZCArIDE7XG4gICAgLy8gfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
