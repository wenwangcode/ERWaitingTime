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
                    this.httpService.post({ eid: this.next_id,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwbWVudC1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFJSSwrQkFBb0IsV0FBd0I7b0JBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN4QyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztvQkFDL0IsdUJBQXVCO29CQUN2Qix5Q0FBeUM7b0JBQ3pDLHdDQUF3QztvQkFDeEMsd0JBQXdCO29CQUN4QixtQ0FBbUM7b0JBQ25DLElBQUk7Z0JBQ1IsQ0FBQztnQkFDRCw2Q0FBYSxHQUFiLFVBQWMsSUFBSSxFQUFDLElBQUk7b0JBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNqQixFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsT0FBTzt3QkFDaEIsSUFBSSxFQUFDLElBQUk7d0JBQ1YsSUFBSSxFQUFDLElBQUksRUFBQyxFQUNWLFdBQVcsQ0FDZCxDQUFDLFNBQVMsQ0FDUCxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCw4Q0FBYyxHQUFkLFVBQWUsSUFBSTtvQkFBbkIsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUN0QixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFFRCw0Q0FBWSxHQUFaLFVBQWEsR0FBVSxFQUFFLElBQVcsRUFBRSxJQUFXO29CQUM3QyxJQUFJLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBR0QsK0NBQWUsR0FBZixVQUFnQixTQUFtQjtvQkFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCx1REFBdUIsR0FBdkI7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQ2xDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUFuQyxDQUFtQyxFQUMzQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLEVBQXRELENBQXNELENBQy9ELENBQUM7Z0JBQ04sQ0FBQztnQkFFRCx3REFBd0IsR0FBeEIsVUFBeUIsSUFBSTtvQkFDekIsSUFBSSxhQUFhLEdBQWEsRUFBRSxDQUFDO29CQUNqQyxJQUFJLE9BQU8sR0FBVyxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJO3dCQUNkLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQyxDQUFDLENBQUMsQ0FBQztvQkFDSCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO3dCQUMvQyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDOzRCQUFDLE9BQU8sR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQzlELENBQUM7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkF4RUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsV0FBVzt3QkFDcEIsV0FBVyxFQUFFLG9DQUFvQzt3QkFDakQsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBQyxtQkFBVSxDQUFDO3dCQUNuQyxVQUFVLEVBQUUsQ0FBQyxtQkFBVSxDQUFDO3FCQUMzQixDQUFDO29CQUVELG9CQUFXLENBQUMsY0FBTSxPQUFBLHdCQUFVLEVBQUUsRUFBWixDQUFZLENBQUM7O3lDQUFBO2dCQWtFaEMsNEJBQUM7WUFBRCxDQWpFQSxBQWlFQyxJQUFBO1lBakVELHlEQWlFQyxDQUFBIiwiZmlsZSI6ImVxdWlwbWVudC1hZGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTI4LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0VxdWlwbWVudH0gZnJvbSAnLi9FcXVpcG1lbnQnO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHtpc0xvZ2dlZGlufSBmcm9tIFwiLi9pcy1sb2dnZWRpblwiO1xuaW1wb3J0IHtDYW5BY3RpdmF0ZX0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJMaW5rfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidlcXVpcG1lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2VxdWlwbWVudC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSFRUUFNlcnZpY2UsUm91dGVyTGlua10sXG4gICAgZGlyZWN0aXZlczogW1JvdXRlckxpbmtdLFxufSlcblxuQENhbkFjdGl2YXRlKCgpID0+IGlzTG9nZ2VkaW4oKSlcbmV4cG9ydCBjbGFzcyBFcXVpcG1lbnRBZGRDb21wb25lbnR7XG4gICAgZXF1aXBtZW50czpBcnJheTxFcXVpcG1lbnQ+O1xuICAgIG5leHRfaWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKXtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzRXF1aXBtZW50Rm9ybSgpO1xuICAgICAgICAvL3RoaXMuZXF1aXBtZW50cyA9IFtdO1xuICAgICAgICAvL3RoaXMuaHR0cFNlcnZpY2UuZ2V0RVF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAvLyAgICBkYXRhID0+IHRoaXMucGFyc2VFcXVpcG1lbnQoZGF0YSksXG4gICAgICAgIC8vICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAvLyAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgIC8vKTtcbiAgICB9XG4gICAgcG9zdEVxdWlwbWVudCh0eXBlLHJvb20pe1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoXG4gICAgICAgICAgICB7ZWlkOnRoaXMubmV4dF9pZCxcbiAgICAgICAgICAgICB0eXBlOnR5cGUsXG4gICAgICAgICAgICByb29tOnJvb219LFxuICAgICAgICAgICAgJ2VxdWlwbWVudCdcbiAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VFcXVpcG1lbnQoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZEVxdWlwbWVudChpdGVtLmVpZCxcbiAgICAgICAgICAgICAgICBpdGVtLnR5cGUsXG4gICAgICAgICAgICAgICAgaXRlbS5yb29tKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRFcXVpcG1lbnQoZWlkOm51bWJlciwgdHlwZTpzdHJpbmcsIHJvb206bnVtYmVyKXtcbiAgICAgICAgbGV0IGVxdWlwbWVudCA9IG5ldyBFcXVpcG1lbnQoZWlkLHR5cGUscm9vbSk7XG4gICAgICAgIHRoaXMuZXF1aXBtZW50cy5wdXNoKGVxdWlwbWVudCk7XG4gICAgfVxuXG5cbiAgICByZW1vdmVFcXVpcG1lbnQoZXF1aXBtZW50OkVxdWlwbWVudCl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZXF1aXBtZW50cy5pbmRleE9mKGVxdWlwbWVudCk7XG4gICAgICAgIHRoaXMuZXF1aXBtZW50cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG4gICAgcHJlcHJvY2Vzc0VxdWlwbWVudEZvcm0oKSB7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UuZ2V0U1F1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlRXF1aXBtZW50UHJlcHJvY2VzcyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJHRVQgcGF0aWVudCBkYXRhIHByZXByb2Nlc3NpbmcgY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZUVxdWlwbWVudFByZXByb2Nlc3MoanNvbil7XG4gICAgICAgIGxldCBlcXVpcG1lbnRfaWRzOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBsZXQgbmV4dF9pZDogbnVtYmVyID0gMDtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIGVxdWlwbWVudF9pZHMucHVzaChpdGVtLmVpZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVxdWlwbWVudF9pZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChlcXVpcG1lbnRfaWRzW2ldID4gbmV4dF9pZCkgbmV4dF9pZCA9IGVxdWlwbWVudF9pZHNbaV1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhuZXh0X2lkICsgMSk7XG4gICAgICAgIHRoaXMubmV4dF9pZCA9IG5leHRfaWQgKyAxO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
