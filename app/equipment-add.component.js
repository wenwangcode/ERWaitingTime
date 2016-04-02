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
                    this.httpService.post({ eid: this.nexte_id,
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
                        if (equipment_ids[i] <= next_id) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwbWVudC1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQUlJLCtCQUFvQixXQUF3QjtvQkFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELDZDQUFhLEdBQWIsVUFBYyxJQUFJLEVBQUMsSUFBSTtvQkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ2pCLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxRQUFRO3dCQUNqQixJQUFJLEVBQUMsSUFBSTt3QkFDVixJQUFJLEVBQUMsSUFBSSxFQUFDLEVBQ1YsV0FBVyxDQUNkLENBQUMsU0FBUyxDQUNQLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQztnQkFDTixDQUFDO2dCQUVELDhDQUFjLEdBQWQsVUFBZSxJQUFJO29CQUFuQixpQkFNQztvQkFMRyxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQUEsSUFBSTt3QkFDZCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuQixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUVELDRDQUFZLEdBQVosVUFBYSxHQUFVLEVBQUUsSUFBVyxFQUFFLElBQVc7b0JBQzdDLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFHRCwrQ0FBZSxHQUFmLFVBQWdCLFNBQW1CO29CQUMvQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELHVEQUF1QixHQUF2QjtvQkFBQSxpQkFNQztvQkFMRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FDbEMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEVBQW5DLENBQW1DLEVBQzNDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsRUFBdEQsQ0FBc0QsQ0FDL0QsQ0FBQztnQkFDTixDQUFDO2dCQUVELHdEQUF3QixHQUF4QixVQUF5QixJQUFJO29CQUN6QixJQUFJLGFBQWEsR0FBYSxFQUFFLENBQUM7b0JBQ2pDLElBQUksT0FBTyxHQUFXLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pDLENBQUMsQ0FBQyxDQUFDO29CQUNILEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUM1QyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDOUIsT0FBTyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDOUIsQ0FBQztvQkFDTCxDQUFDO29CQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFuRUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsV0FBVzt3QkFDcEIsV0FBVyxFQUFFLG9DQUFvQzt3QkFDakQsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBQyxtQkFBVSxDQUFDO3dCQUNuQyxVQUFVLEVBQUUsQ0FBQyxtQkFBVSxDQUFDO3FCQUMzQixDQUFDOzt5Q0FBQTtnQkFnRUYsNEJBQUM7WUFBRCxDQTlEQSxBQThEQyxJQUFBO1lBOURELHlEQThEQyxDQUFBIiwiZmlsZSI6ImVxdWlwbWVudC1hZGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTI4LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0VxdWlwbWVudH0gZnJvbSAnLi9FcXVpcG1lbnQnO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHtpc0xvZ2dlZGlufSBmcm9tIFwiLi9pcy1sb2dnZWRpblwiO1xuaW1wb3J0IHtDYW5BY3RpdmF0ZX0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJMaW5rfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidlcXVpcG1lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2VxdWlwbWVudC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSFRUUFNlcnZpY2UsUm91dGVyTGlua10sXG4gICAgZGlyZWN0aXZlczogW1JvdXRlckxpbmtdLFxufSlcblxuZXhwb3J0IGNsYXNzIEVxdWlwbWVudEFkZENvbXBvbmVudHtcbiAgICBlcXVpcG1lbnRzOkFycmF5PEVxdWlwbWVudD47XG4gICAgbmV4dGVfaWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKXtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzRXF1aXBtZW50Rm9ybSgpO1xuICAgIH1cblxuICAgIHBvc3RFcXVpcG1lbnQodHlwZSxyb29tKXtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5wb3N0KFxuICAgICAgICAgICAge2VpZDp0aGlzLm5leHRlX2lkLFxuICAgICAgICAgICAgIHR5cGU6dHlwZSxcbiAgICAgICAgICAgIHJvb206cm9vbX0sXG4gICAgICAgICAgICAnZXF1aXBtZW50J1xuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZUVxdWlwbWVudChqc29uKXtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXF1aXBtZW50KGl0ZW0uZWlkLFxuICAgICAgICAgICAgICAgIGl0ZW0udHlwZSxcbiAgICAgICAgICAgICAgICBpdGVtLnJvb20pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZEVxdWlwbWVudChlaWQ6bnVtYmVyLCB0eXBlOnN0cmluZywgcm9vbTpudW1iZXIpe1xuICAgICAgICBsZXQgZXF1aXBtZW50ID0gbmV3IEVxdWlwbWVudChlaWQsdHlwZSxyb29tKTtcbiAgICAgICAgdGhpcy5lcXVpcG1lbnRzLnB1c2goZXF1aXBtZW50KTtcbiAgICB9XG5cblxuICAgIHJlbW92ZUVxdWlwbWVudChlcXVpcG1lbnQ6RXF1aXBtZW50KXtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5lcXVpcG1lbnRzLmluZGV4T2YoZXF1aXBtZW50KTtcbiAgICAgICAgdGhpcy5lcXVpcG1lbnRzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG5cbiAgICBwcmVwcm9jZXNzRXF1aXBtZW50Rm9ybSgpIHtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5nZXRTUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VFcXVpcG1lbnRQcmVwcm9jZXNzKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkdFVCBwYXRpZW50IGRhdGEgcHJlcHJvY2Vzc2luZyBjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBhcnNlRXF1aXBtZW50UHJlcHJvY2Vzcyhqc29uKXtcbiAgICAgICAgbGV0IGVxdWlwbWVudF9pZHM6IG51bWJlcltdID0gW107XG4gICAgICAgIGxldCBuZXh0X2lkOiBudW1iZXIgPSAwO1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgZXF1aXBtZW50X2lkcy5wdXNoKGl0ZW0uZWlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXF1aXBtZW50X2lkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVxdWlwbWVudF9pZHNbaV0gPD0gbmV4dF9pZCkge1xuICAgICAgICAgICAgICAgIG5leHRfaWQgPSBlcXVpcG1lbnRfaWRzW2ldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZXh0ZV9pZCA9IG5leHRfaWQgKyAxO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
