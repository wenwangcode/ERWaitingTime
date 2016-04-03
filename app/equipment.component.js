System.register(['angular2/core', 'angular2/router', "./http.service"], function(exports_1, context_1) {
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
    var core_1, router_1, http_service_1;
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
            }],
        execute: function() {
            EquipmentComponent = (function () {
                function EquipmentComponent(_httpService) {
                    this._httpService = _httpService;
                }
                EquipmentComponent.prototype.ngOnInit = function () {
                    this.getEquipment();
                };
                EquipmentComponent.prototype.getEquipment = function () {
                    var _this = this;
                    this._httpService.getAllFromTable('equipme')
                        .subscribe(function (equipment) { return _this.equipments = equipment; }, function (error) { return _this.errorMessage = error; });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBRUksNEJBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUtqRCxxQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztnQkFFRCx5Q0FBWSxHQUFaO29CQUFBLGlCQU1DO29CQUxHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQzt5QkFDdkMsU0FBUyxDQUNOLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLEVBQTNCLENBQTJCLEVBQ3hDLFVBQUEsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQzNDLENBQUM7Z0JBQ1YsQ0FBQztnQkF4Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsV0FBVyxFQUFFLDJCQUEyQjt3QkFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBQyxtQkFBVSxDQUFDO3dCQUNuQyxVQUFVLEVBQUUsQ0FBQyxtQkFBVSxDQUFDO3FCQUMzQixDQUFDOztzQ0FBQTtnQkFrQ0YseUJBQUM7WUFBRCxDQWhDQSxBQWdDQyxJQUFBO1lBaENELG1EQWdDQyxDQUFBIiwiZmlsZSI6ImVxdWlwbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgd2VuZHl3YW5nIG9uIDIwMTYtMDQtMDEuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckxpbmt9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gXCIuL2h0dHAuc2VydmljZVwiO1xuaW1wb3J0IHtFcXVpcG1lbnR9IGZyb20gXCIuL2VxdWlwbWVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2VxdWlwbWVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvZXF1aXBtZW50cy5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtIVFRQU2VydmljZSxSb3V0ZXJMaW5rXSxcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyTGlua10sXG59KVxuXG5leHBvcnQgY2xhc3MgRXF1aXBtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSkge31cblxuICAgIGVxdWlwbWVudHM6IEVxdWlwbWVudFtdO1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0RXF1aXBtZW50KCk7XG4gICAgfVxuXG4gICAgZ2V0RXF1aXBtZW50KCkge1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRBbGxGcm9tVGFibGUoJ2VxdWlwbWUnKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBlcXVpcG1lbnQgPT4gdGhpcy5lcXVpcG1lbnRzID0gZXF1aXBtZW50LFxuICAgICAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gcGFyc2VFcXVpcG1lbnQoanNvbil7XG4gICAgLy8gICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLmFkZEVxdWlwbWVudChpdGVtLmVpZCxcbiAgICAvLyAgICAgICAgICAgICBpdGVtLnR5cGUsXG4gICAgLy8gICAgICAgICAgICAgaXRlbS5yb29tKTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBhZGRFcXVpcG1lbnQoZWlkOm51bWJlciwgdHlwZTpzdHJpbmcsIHJvb206bnVtYmVyKXtcbiAgICAvLyAgICAgbGV0IGVxdWlwbWVudCA9IG5ldyBFcXVpcG1lbnQoZWlkLHR5cGUscm9vbSk7XG4gICAgLy8gICAgIHRoaXMuZXF1aXBtZW50cy5wdXNoKGVxdWlwbWVudCk7XG4gICAgLy8gfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
