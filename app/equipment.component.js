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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBRUksNEJBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFJN0MsVUFBSyxHQUFhLEVBQUUsQ0FBQztnQkFKMkIsQ0FBQztnQkFNakQscUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBRUQseUNBQVksR0FBWjtvQkFBQSxpQkFNQztvQkFMRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7eUJBQ3pDLFNBQVMsQ0FDTixVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxFQUEzQixDQUEyQixFQUN4QyxVQUFBLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUMzQyxDQUFDO2dCQUNWLENBQUM7Z0JBRUQsbUNBQU0sR0FBTixVQUFPLE9BQU87b0JBQWQsaUJBUUM7b0JBUEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO3lCQUM3QixTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFuQixDQUFtQixFQUMzQixVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNWLENBQUM7Z0JBRUQsbUNBQU0sR0FBTixVQUFPLEVBQVM7b0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxzQkFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxxQ0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFBYixpQkFPQztvQkFORyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTt3QkFDYixLQUFJLENBQUMsTUFBTSxDQUNQLElBQUksQ0FBQyxHQUFHLENBQ1gsQ0FBQztvQkFDTixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQXJETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUsMkJBQTJCO3dCQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFDLG1CQUFVLENBQUM7d0JBQ25DLFVBQVUsRUFBRSxDQUFDLG1CQUFVLENBQUM7cUJBQzNCLENBQUM7O3NDQUFBO2dCQW1FRix5QkFBQztZQUFELENBL0RBLEFBK0RDLElBQUE7WUEvREQsbURBK0RDLENBQUEiLCJmaWxlIjoiZXF1aXBtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB3ZW5keXdhbmcgb24gMjAxNi0wNC0wMS5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgUm91dGVyTGluaywgQ2FuQWN0aXZhdGV9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gXCIuL2h0dHAuc2VydmljZVwiO1xuaW1wb3J0IHtFcXVpcG1lbnR9IGZyb20gXCIuL2VxdWlwbWVudFwiO1xuaW1wb3J0IHtQYXRpZW50SUR9IGZyb20gXCIuL3BhdGllbnRfaWRcIjtcbmltcG9ydCB7aXNMb2dnZWRpbn0gZnJvbSBcIi4vaXMtbG9nZ2VkaW5cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlcXVpcG1lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2VxdWlwbWVudHMuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSFRUUFNlcnZpY2UsUm91dGVyTGlua10sXG4gICAgZGlyZWN0aXZlczogW1JvdXRlckxpbmtdLFxufSlcblxuLy8gQENhbkFjdGl2YXRlKCgpID0+IGlzTG9nZ2VkaW4oKSlcblxuZXhwb3J0IGNsYXNzIEVxdWlwbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwU2VydmljZTogSFRUUFNlcnZpY2UpIHt9XG5cbiAgICBlcXVpcG1lbnRzOiBFcXVpcG1lbnRbXTtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBwaWRlczpQYXRpZW50SURbXT1bXTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldEVxdWlwbWVudCgpO1xuICAgIH1cblxuICAgIGdldEVxdWlwbWVudCgpIHtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0QWxsRnJvbVRhYmxlKCdlcXVpcG1lbnQnKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBlcXVpcG1lbnQgPT4gdGhpcy5lcXVpcG1lbnRzID0gZXF1aXBtZW50LFxuICAgICAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0cGlkKGVpZGxpc3Qpe1xuICAgICAgICBjb25zb2xlLmxvZyhlaWRsaXN0KTtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZmluZHBpZChlaWRsaXN0KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VwaWQoZGF0YSksXG4gICAgICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhZGRwaWQocGQ6bnVtYmVyKXtcbiAgICAgICAgY29uc29sZS5sb2cocGQpO1xuICAgICAgICBsZXQgcGlkZSA9IG5ldyBQYXRpZW50SUQocGQpO1xuICAgICAgICBjb25zb2xlLmxvZyhwaWRlKTtcbiAgICAgICAgdGhpcy5waWRlcy5wdXNoKHBpZGUpO1xuICAgIH1cblxuICAgIHBhcnNlcGlkKGpzb24pe1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAganNvbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRwaWQoXG4gICAgICAgICAgICAgICAgaXRlbS5waWRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cblxuXG5cbiAgICAvLyBwYXJzZUVxdWlwbWVudChqc29uKXtcbiAgICAvLyAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMuYWRkRXF1aXBtZW50KGl0ZW0uZWlkLFxuICAgIC8vICAgICAgICAgICAgIGl0ZW0udHlwZSxcbiAgICAvLyAgICAgICAgICAgICBpdGVtLnJvb20pO1xuICAgIC8vICAgICB9KVxuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGFkZEVxdWlwbWVudChlaWQ6bnVtYmVyLCB0eXBlOnN0cmluZywgcm9vbTpudW1iZXIpe1xuICAgIC8vICAgICBsZXQgZXF1aXBtZW50ID0gbmV3IEVxdWlwbWVudChlaWQsdHlwZSxyb29tKTtcbiAgICAvLyAgICAgdGhpcy5lcXVpcG1lbnRzLnB1c2goZXF1aXBtZW50KTtcbiAgICAvLyB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
