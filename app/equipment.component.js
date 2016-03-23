System.register(['angular2/core', "./equipment"], function(exports_1, context_1) {
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
    var core_1, equipment_1;
    var EquipmentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (equipment_1_1) {
                equipment_1 = equipment_1_1;
            }],
        execute: function() {
            EquipmentComponent = (function () {
                function EquipmentComponent() {
                    this.equipments = [];
                }
                EquipmentComponent.prototype.addEquipments = function (eid, type, room) {
                    var equipment = new equipment_1.Equipment(eid, type, room);
                    this.equipments.push(equipment);
                };
                EquipmentComponent = __decorate([
                    core_1.Component({
                        selector: 'equipment',
                        template: "<h1>hello world</h1>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], EquipmentComponent);
                return EquipmentComponent;
            }());
            exports_1("EquipmentComponent", EquipmentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFHSTtvQkFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCwwQ0FBYSxHQUFiLFVBQWMsR0FBVSxFQUFFLElBQVcsRUFBRSxJQUFXO29CQUM5QyxJQUFJLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBakJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLFdBQVc7d0JBQ3BCLFFBQVEsRUFDSixzQkFBc0I7cUJBQzdCLENBQUM7O3NDQUFBO2dCQWVGLHlCQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCxtREFZQyxDQUFBIiwiZmlsZSI6ImVxdWlwbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDMtMTcuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQYXRpZW50fSBmcm9tICcuL3BhdGllbnQnO1xuaW1wb3J0IHtFcXVpcG1lbnR9IGZyb20gXCIuL2VxdWlwbWVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonZXF1aXBtZW50JyxcbiAgICB0ZW1wbGF0ZTpcbiAgICAgICAgYDxoMT5oZWxsbyB3b3JsZDwvaDE+YFxufSlcblxuXG5leHBvcnQgY2xhc3MgRXF1aXBtZW50Q29tcG9uZW50e1xuICAgIGVxdWlwbWVudHM6QXJyYXk8RXF1aXBtZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZXF1aXBtZW50cyA9IFtdO1xuICAgIH1cblxuICAgIGFkZEVxdWlwbWVudHMoZWlkOm51bWJlciwgdHlwZTpzdHJpbmcsIHJvb206bnVtYmVyKXtcbiAgICAgICAgbGV0IGVxdWlwbWVudCA9IG5ldyBFcXVpcG1lbnQoZWlkLHR5cGUscm9vbSk7XG4gICAgICAgIHRoaXMuZXF1aXBtZW50cy5wdXNoKGVxdWlwbWVudCk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
