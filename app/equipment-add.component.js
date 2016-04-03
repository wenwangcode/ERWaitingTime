System.register(['angular2/core', "angular2/router", './Equipment', './http.service'], function(exports_1, context_1) {
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
    var core_1, router_1, Equipment_1, http_service_1;
    var EquipmentAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Equipment_1_1) {
                Equipment_1 = Equipment_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwbWVudC1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQUlJLCtCQUFvQixXQUF3QjtvQkFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hDLGtDQUFrQztnQkFDdEMsQ0FBQztnQkFFRCw2Q0FBYSxHQUFiLFVBQWMsSUFBSSxFQUFDLElBQUk7b0JBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNqQjt3QkFDSSxJQUFJLEVBQUMsSUFBSTt3QkFDVCxJQUFJLEVBQUMsSUFBSTtxQkFDWixFQUNELFdBQVcsQ0FDZCxDQUFDLFNBQVMsQ0FDUCxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCw4Q0FBYyxHQUFkLFVBQWUsSUFBSTtvQkFBbkIsaUJBUUM7b0JBUEcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsS0FBSSxDQUFDLFlBQVksQ0FDYixJQUFJLENBQUMsR0FBRyxFQUNSLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLElBQUksQ0FDWixDQUFDO29CQUNOLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRUQsNENBQVksR0FBWixVQUFhLEdBQVUsRUFBRSxJQUFXLEVBQUUsSUFBVztvQkFDN0MsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUdELCtDQUFlLEdBQWYsVUFBZ0IsU0FBbUI7b0JBQy9CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBaERMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLFdBQVc7d0JBQ3BCLFdBQVcsRUFBRSxvQ0FBb0M7d0JBQ2pELFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUMsbUJBQVUsQ0FBQzt3QkFDbkMsVUFBVSxFQUFFLENBQUMsbUJBQVUsQ0FBQztxQkFDM0IsQ0FBQzs7eUNBQUE7Z0JBbUVGLDRCQUFDO1lBQUQsQ0FqRUEsQUFpRUMsSUFBQTtZQWpFRCx5REFpRUMsQ0FBQSIsImZpbGUiOiJlcXVpcG1lbnQtYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKb3kgb24gMjAxNi0wMy0yOC5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDYW5BY3RpdmF0ZX0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJMaW5rfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbmltcG9ydCB7RXF1aXBtZW50fSBmcm9tICcuL0VxdWlwbWVudCc7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidlcXVpcG1lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2VxdWlwbWVudC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSFRUUFNlcnZpY2UsUm91dGVyTGlua10sXG4gICAgZGlyZWN0aXZlczogW1JvdXRlckxpbmtdLFxufSlcblxuZXhwb3J0IGNsYXNzIEVxdWlwbWVudEFkZENvbXBvbmVudHtcblxuICAgIGVxdWlwbWVudHM6QXJyYXk8RXF1aXBtZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKXtcbiAgICAgICAgLy8gdGhpcy5wcmVwcm9jZXNzRXF1aXBtZW50Rm9ybSgpO1xuICAgIH1cblxuICAgIHBvc3RFcXVpcG1lbnQodHlwZSxyb29tKXtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5wb3N0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6dHlwZSxcbiAgICAgICAgICAgICAgICByb29tOnJvb21cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZXF1aXBtZW50J1xuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZUVxdWlwbWVudChqc29uKXtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXF1aXBtZW50KFxuICAgICAgICAgICAgICAgIGl0ZW0uZWlkLFxuICAgICAgICAgICAgICAgIGl0ZW0udHlwZSxcbiAgICAgICAgICAgICAgICBpdGVtLnJvb21cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkRXF1aXBtZW50KGVpZDpudW1iZXIsIHR5cGU6c3RyaW5nLCByb29tOm51bWJlcil7XG4gICAgICAgIGxldCBlcXVpcG1lbnQgPSBuZXcgRXF1aXBtZW50KGVpZCx0eXBlLHJvb20pO1xuICAgICAgICB0aGlzLmVxdWlwbWVudHMucHVzaChlcXVpcG1lbnQpO1xuICAgIH1cblxuXG4gICAgcmVtb3ZlRXF1aXBtZW50KGVxdWlwbWVudDpFcXVpcG1lbnQpe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmVxdWlwbWVudHMuaW5kZXhPZihlcXVpcG1lbnQpO1xuICAgICAgICB0aGlzLmVxdWlwbWVudHMuc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cblxuICAgIC8vIHByZXByb2Nlc3NFcXVpcG1lbnRGb3JtKCkge1xuICAgIC8vICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldFNRdWVyeSgpLnN1YnNjcmliZShcbiAgICAvLyAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZUVxdWlwbWVudFByZXByb2Nlc3MoZGF0YSksXG4gICAgLy8gICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAvLyAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiR0VUIHBhdGllbnQgZGF0YSBwcmVwcm9jZXNzaW5nIGNvbXBsZXRlXCIpXG4gICAgLy8gICAgICk7XG4gICAgLy8gfVxuXG4gICAgLy8gcGFyc2VFcXVpcG1lbnRQcmVwcm9jZXNzKGpzb24pe1xuICAgIC8vICAgICBsZXQgZXF1aXBtZW50X2lkczogbnVtYmVyW10gPSBbXTtcbiAgICAvLyAgICAgbGV0IG5leHRfaWQ6IG51bWJlciA9IDA7XG4gICAgLy8gICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgLy8gICAgICAgICBlcXVpcG1lbnRfaWRzLnB1c2goaXRlbS5laWQpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcXVpcG1lbnRfaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICBpZiAoZXF1aXBtZW50X2lkc1tpXSA+IG5leHRfaWQpIHtcbiAgICAvLyAgICAgICAgICAgICBuZXh0X2lkID0gZXF1aXBtZW50X2lkc1tpXVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRoaXMubmV4dGVfaWQgPSBuZXh0X2lkICsgMTtcbiAgICAvLyB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
