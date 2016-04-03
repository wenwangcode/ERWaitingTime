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
                    this._httpService.getAllFromTable('equipment')
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBRUksNEJBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFJN0MsVUFBSyxHQUFhLEVBQUUsQ0FBQztnQkFKMkIsQ0FBQztnQkFNakQscUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQseUNBQVksR0FBWjtvQkFBQSxpQkFNQztvQkFMRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7eUJBQ3pDLFNBQVMsQ0FDTixVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxFQUEzQixDQUEyQixFQUN4QyxVQUFBLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUMzQyxDQUFDO2dCQUNWLENBQUM7Z0JBRUQsbUNBQU0sR0FBTixVQUFPLE9BQU87b0JBQWQsaUJBUUM7b0JBUEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO3lCQUM3QixTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFuQixDQUFtQixFQUMzQixVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNWLENBQUM7Z0JBRUQsbUNBQU0sR0FBTixVQUFPLEVBQVM7b0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxzQkFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxxQ0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFBYixpQkFPQztvQkFORyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTt3QkFDYixLQUFJLENBQUMsTUFBTSxDQUNQLElBQUksQ0FBQyxHQUFHLENBQ1gsQ0FBQztvQkFDTixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQW5ETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUsMkJBQTJCO3dCQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFDLG1CQUFVLENBQUM7d0JBQ25DLFVBQVUsRUFBRSxDQUFDLG1CQUFVLENBQUM7cUJBQzNCLENBQUM7O3NDQUFBO2dCQWlFRix5QkFBQztZQUFELENBL0RBLEFBK0RDLElBQUE7WUEvREQsbURBK0RDLENBQUEiLCJmaWxlIjoiZXF1aXBtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB3ZW5keXdhbmcgb24gMjAxNi0wNC0wMS5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgUm91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSBcIi4vaHR0cC5zZXJ2aWNlXCI7XG5pbXBvcnQge0VxdWlwbWVudH0gZnJvbSBcIi4vZXF1aXBtZW50XCI7XG5pbXBvcnQge1BhdGllbnRJRH0gZnJvbSBcIi4vcGF0aWVudF9pZFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2VxdWlwbWVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvZXF1aXBtZW50cy5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtIVFRQU2VydmljZSxSb3V0ZXJMaW5rXSxcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyTGlua10sXG59KVxuXG5leHBvcnQgY2xhc3MgRXF1aXBtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSkge31cblxuICAgIGVxdWlwbWVudHM6IEVxdWlwbWVudFtdO1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIHBpZGVzOlBhdGllbnRJRFtdPVtdO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0RXF1aXBtZW50KCk7XG4gICAgfVxuXG4gICAgZ2V0RXF1aXBtZW50KCkge1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRBbGxGcm9tVGFibGUoJ2VxdWlwbWVudCcpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGVxdWlwbWVudCA9PiB0aGlzLmVxdWlwbWVudHMgPSBlcXVpcG1lbnQsXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gIHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRwaWQoZWlkbGlzdCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGVpZGxpc3QpO1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5maW5kcGlkKGVpZGxpc3QpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZXBpZChkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGFkZHBpZChwZDpudW1iZXIpe1xuICAgICAgICBjb25zb2xlLmxvZyhwZCk7XG4gICAgICAgIGxldCBwaWRlID0gbmV3IFBhdGllbnRJRChwZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBpZGUpO1xuICAgICAgICB0aGlzLnBpZGVzLnB1c2gocGlkZSk7XG4gICAgfVxuXG4gICAgcGFyc2VwaWQoanNvbil7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICBqc29uLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZHBpZChcbiAgICAgICAgICAgICAgICBpdGVtLnBpZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG5cblxuICAgIC8vIHBhcnNlRXF1aXBtZW50KGpzb24pe1xuICAgIC8vICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5hZGRFcXVpcG1lbnQoaXRlbS5laWQsXG4gICAgLy8gICAgICAgICAgICAgaXRlbS50eXBlLFxuICAgIC8vICAgICAgICAgICAgIGl0ZW0ucm9vbSk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gYWRkRXF1aXBtZW50KGVpZDpudW1iZXIsIHR5cGU6c3RyaW5nLCByb29tOm51bWJlcil7XG4gICAgLy8gICAgIGxldCBlcXVpcG1lbnQgPSBuZXcgRXF1aXBtZW50KGVpZCx0eXBlLHJvb20pO1xuICAgIC8vICAgICB0aGlzLmVxdWlwbWVudHMucHVzaChlcXVpcG1lbnQpO1xuICAgIC8vIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
