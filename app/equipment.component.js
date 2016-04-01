System.register(['angular2/core', './Equipment', './http.service'], function(exports_1, context_1) {
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
    var core_1, Equipment_1, http_service_1;
    var EquipmentComponent;
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
            }],
        execute: function() {
            EquipmentComponent = (function () {
                function EquipmentComponent(httpService) {
                    var _this = this;
                    this.httpService = httpService;
                    this.equipments = [];
                    this.httpService.getEQuery().subscribe(function (data) { return _this.parseEquipment(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                }
                EquipmentComponent.prototype.testPost = function (eid, type, room) {
                    this.httpService.post({ eid: eid,
                        type: type,
                        room: room }, 'equipment').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                EquipmentComponent.prototype.parseEquipment = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addEquipment(item.eid, item.type, item.room);
                    });
                };
                EquipmentComponent.prototype.addEquipment = function (eid, type, room) {
                    var equipment = new Equipment_1.Equipment(eid, type, room);
                    this.equipments.push(equipment);
                };
                EquipmentComponent.prototype.removeEquipment = function (equipment) {
                    var index = this.equipments.indexOf(equipment);
                    this.equipments.splice(index, 1);
                };
                EquipmentComponent = __decorate([
                    core_1.Component({
                        selector: 'equipment',
                        template: "\n<html>\n<head>\n    <title>Equipment Register Page</title>\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css\" rel=\"stylesheet\"/>\n\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n        <div class=\"container\">\n            <a class=\"navbar-brand\" href=\"../home\">ERWaitingTime</a>\n\n        </div>\n    </nav>\n</head>\n<body>\n<div align=\"left\" style=\"margin-top: 100px\" class=\"container\">\n    <h1>Please register the equipment info below.</h1>\n    <br>\n    <div class=\"form-group\">\n         <div class=\"container\" ng-app=\"my-app\">\n        Equipment ID: <input type=\"number\" class=\"form-control\" #eid>\n        Equipment Type: <input type=\"text\"  class=\"form-control\" #type>\n        Equipment Room: <input type=\"number\" class=\"form-control\" #room>\n        <br>\n        <table  class=\"table table-striped\">\n            <tr>\n                <th> equipment_id </th>\n                <th> equipment_type</th>\n                <th> room number</th>\n            </tr>\n            <tr *ngFor=\"#equipment of equipments\"> \n                <td> {{equipment.eid}} </td>\n                <td> {{equipment.type}} </td>\n                <td> {{equipment.room}} </td>\n            </tr>\n        </table>\n        \n        <br/><br/>\n        \n            <button (click)=\"testPost(eid.value, type.value, room.value)\" class=\"btn btn-primary\"> Submit </button>\n    </div>\n\n    <br/><br/>\n    </div>\n    </div>\n\n</body>\n</html>\n        \n            \n",
                        providers: [http_service_1.HTTPService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], EquipmentComponent);
                return EquipmentComponent;
            }());
            exports_1("EquipmentComponent", EquipmentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2REE7Z0JBR0ksNEJBQW9CLFdBQXdCO29CQUhoRCxpQkEyQ0M7b0JBeEN1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUNsQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLEVBQ2pDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkFDRCxxQ0FBUSxHQUFSLFVBQVMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJO29CQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDakIsRUFBQyxHQUFHLEVBQUMsR0FBRzt3QkFDUCxJQUFJLEVBQUMsSUFBSTt3QkFDVixJQUFJLEVBQUMsSUFBSSxFQUFDLEVBQ1YsV0FBVyxDQUNkLENBQUMsU0FBUyxDQUNQLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQztnQkFDTixDQUFDO2dCQUVELDJDQUFjLEdBQWQsVUFBZSxJQUFJO29CQUFuQixpQkFNQztvQkFMRyxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQUEsSUFBSTt3QkFDZCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuQixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUVELHlDQUFZLEdBQVosVUFBYSxHQUFVLEVBQUUsSUFBVyxFQUFFLElBQVc7b0JBQzdDLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFHRCw0Q0FBZSxHQUFmLFVBQWdCLFNBQW1CO29CQUMvQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQS9GTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxXQUFXO3dCQUNwQixRQUFRLEVBQUUsK2dEQWlEYjt3QkFDRyxTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO3FCQUMxQixDQUFDOztzQ0FBQTtnQkE0Q0YseUJBQUM7WUFBRCxDQTNDQSxBQTJDQyxJQUFBO1lBM0NELG1EQTJDQyxDQUFBIiwiZmlsZSI6ImVxdWlwbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDMtMjguXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7RXF1aXBtZW50fSBmcm9tICcuL0VxdWlwbWVudCc7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidlcXVpcG1lbnQnLFxuICAgIHRlbXBsYXRlOiBgXG48aHRtbD5cbjxoZWFkPlxuICAgIDx0aXRsZT5FcXVpcG1lbnQgUmVnaXN0ZXIgUGFnZTwvdGl0bGU+XG4gICAgPGxpbmsgaHJlZj1cIi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMS4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG5cbiAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiLi4vaG9tZVwiPkVSV2FpdGluZ1RpbWU8L2E+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG48L2hlYWQ+XG48Ym9keT5cbjxkaXYgYWxpZ249XCJsZWZ0XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMDBweFwiIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPlBsZWFzZSByZWdpc3RlciB0aGUgZXF1aXBtZW50IGluZm8gYmVsb3cuPC9oMT5cbiAgICA8YnI+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBuZy1hcHA9XCJteS1hcHBcIj5cbiAgICAgICAgRXF1aXBtZW50IElEOiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgI2VpZD5cbiAgICAgICAgRXF1aXBtZW50IFR5cGU6IDxpbnB1dCB0eXBlPVwidGV4dFwiICBjbGFzcz1cImZvcm0tY29udHJvbFwiICN0eXBlPlxuICAgICAgICBFcXVpcG1lbnQgUm9vbTogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiICNyb29tPlxuICAgICAgICA8YnI+XG4gICAgICAgIDx0YWJsZSAgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPiBlcXVpcG1lbnRfaWQgPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+IGVxdWlwbWVudF90eXBlPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+IHJvb20gbnVtYmVyPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwiI2VxdWlwbWVudCBvZiBlcXVpcG1lbnRzXCI+IFxuICAgICAgICAgICAgICAgIDx0ZD4ge3tlcXVpcG1lbnQuZWlkfX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+IHt7ZXF1aXBtZW50LnR5cGV9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge3tlcXVpcG1lbnQucm9vbX19IDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICBcbiAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRlc3RQb3N0KGVpZC52YWx1ZSwgdHlwZS52YWx1ZSwgcm9vbS52YWx1ZSlcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPiBTdWJtaXQgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8YnIvPjxici8+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvYm9keT5cbjwvaHRtbD5cbiAgICAgICAgXG4gICAgICAgICAgICBcbmAsXG4gICAgcHJvdmlkZXJzOltIVFRQU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgRXF1aXBtZW50Q29tcG9uZW50e1xuICAgIGVxdWlwbWVudHM6QXJyYXk8RXF1aXBtZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKXtcbiAgICAgICAgdGhpcy5lcXVpcG1lbnRzID0gW107XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UuZ2V0RVF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlRXF1aXBtZW50KGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuICAgIHRlc3RQb3N0KGVpZCx0eXBlLHJvb20pe1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoXG4gICAgICAgICAgICB7ZWlkOmVpZCxcbiAgICAgICAgICAgICB0eXBlOnR5cGUsXG4gICAgICAgICAgICByb29tOnJvb219LFxuICAgICAgICAgICAgJ2VxdWlwbWVudCdcbiAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VFcXVpcG1lbnQoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZEVxdWlwbWVudChpdGVtLmVpZCxcbiAgICAgICAgICAgICAgICBpdGVtLnR5cGUsXG4gICAgICAgICAgICAgICAgaXRlbS5yb29tKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRFcXVpcG1lbnQoZWlkOm51bWJlciwgdHlwZTpzdHJpbmcsIHJvb206bnVtYmVyKXtcbiAgICAgICAgbGV0IGVxdWlwbWVudCA9IG5ldyBFcXVpcG1lbnQoZWlkLHR5cGUscm9vbSk7XG4gICAgICAgIHRoaXMuZXF1aXBtZW50cy5wdXNoKGVxdWlwbWVudCk7XG4gICAgfVxuXG5cbiAgICByZW1vdmVFcXVpcG1lbnQoZXF1aXBtZW50OkVxdWlwbWVudCl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZXF1aXBtZW50cy5pbmRleE9mKGVxdWlwbWVudCk7XG4gICAgICAgIHRoaXMuZXF1aXBtZW50cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
