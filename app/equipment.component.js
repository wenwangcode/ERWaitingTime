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
                        template: "\n<html>\n<head>\n    <title>Equipment Register Page</title>\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css\" rel=\"stylesheet\"/>\n\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n        <div class=\"container\">\n            <a class=\"navbar-brand\" href=\"../home\">ERWaitingTime</a>\n\n        </div>\n    </nav>\n</head>\n<body>\n<div align=\"left\" style=\"margin-top: 100px\" class=\"container\">\n    <h1>Please register the equipment info below.</h1>\n    <br>\n    <div class=\"form-group\">\n         <div class=\"container\" ng-app=\"my-app\">\n        Equipment ID: <input type=\"number\" class=\"form-control\" #eid>\n        Equipment Type: <input type=\"text\"  class=\"form-control\" #type>\n        Equipment Room: <input type=\"number\" class=\"form-control\" #room>\n        <br>\n        <table  class=\"table table-striped\">\n            <tr>\n                <th> equipment_id </th>\n                <th> equipment_type</th>\n                <th> room number</th>\n            </tr>\n            <tr *ngFor=\"#equipment of equipments\"> \n                <td> {{equipment.eid}} </td>\n                <td> {{equipment.type}} </td>\n                <td> {{equipment.room}} </td>\n            </tr>\n        </table>\n        \n        <br/><br/>\n        \n        <input type=\"submit\" (click)=\"\n            addEquipment(eid.value, type.value, room.value)\" class=\"btn btn-primary\">\n    </div>\n\n    <br/><br/>\n    </div>\n    </div>\n\n</body>\n</html>\n        \n            \n",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4REE7Z0JBR0ksNEJBQW9CLFdBQXdCO29CQUhoRCxpQkErQkM7b0JBNUJ1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUNsQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLEVBQ2pDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCwyQ0FBYyxHQUFkLFVBQWUsSUFBSTtvQkFBbkIsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUN0QixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFFRCx5Q0FBWSxHQUFaLFVBQWEsR0FBVSxFQUFFLElBQVcsRUFBRSxJQUFXO29CQUM3QyxJQUFJLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBR0QsNENBQWUsR0FBZixVQUFnQixTQUFtQjtvQkFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFwRkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsV0FBVzt3QkFDcEIsUUFBUSxFQUFFLDJoREFrRGI7d0JBQ0csU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztxQkFDMUIsQ0FBQzs7c0NBQUE7Z0JBZ0NGLHlCQUFDO1lBQUQsQ0EvQkEsQUErQkMsSUFBQTtZQS9CRCxtREErQkMsQ0FBQSIsImZpbGUiOiJlcXVpcG1lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTI4LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0VxdWlwbWVudH0gZnJvbSAnLi9FcXVpcG1lbnQnO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonZXF1aXBtZW50JyxcbiAgICB0ZW1wbGF0ZTogYFxuPGh0bWw+XG48aGVhZD5cbiAgICA8dGl0bGU+RXF1aXBtZW50IFJlZ2lzdGVyIFBhZ2U8L3RpdGxlPlxuICAgIDxsaW5rIGhyZWY9XCIvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjEuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuXG4gICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi4uL2hvbWVcIj5FUldhaXRpbmdUaW1lPC9hPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuPC9oZWFkPlxuPGJvZHk+XG48ZGl2IGFsaWduPVwibGVmdFwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTAwcHhcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5QbGVhc2UgcmVnaXN0ZXIgdGhlIGVxdWlwbWVudCBpbmZvIGJlbG93LjwvaDE+XG4gICAgPGJyPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgbmctYXBwPVwibXktYXBwXCI+XG4gICAgICAgIEVxdWlwbWVudCBJRDogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiICNlaWQ+XG4gICAgICAgIEVxdWlwbWVudCBUeXBlOiA8aW5wdXQgdHlwZT1cInRleHRcIiAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAjdHlwZT5cbiAgICAgICAgRXF1aXBtZW50IFJvb206IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAjcm9vbT5cbiAgICAgICAgPGJyPlxuICAgICAgICA8dGFibGUgIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD4gZXF1aXBtZW50X2lkIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiBlcXVpcG1lbnRfdHlwZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiByb29tIG51bWJlcjwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiNlcXVpcG1lbnQgb2YgZXF1aXBtZW50c1wiPiBcbiAgICAgICAgICAgICAgICA8dGQ+IHt7ZXF1aXBtZW50LmVpZH19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7e2VxdWlwbWVudC50eXBlfX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+IHt7ZXF1aXBtZW50LnJvb219fSA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgXG4gICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cIlxuICAgICAgICAgICAgYWRkRXF1aXBtZW50KGVpZC52YWx1ZSwgdHlwZS52YWx1ZSwgcm9vbS52YWx1ZSlcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgIDwvZGl2PlxuXG4gICAgPGJyLz48YnIvPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L2JvZHk+XG48L2h0bWw+XG4gICAgICAgIFxuICAgICAgICAgICAgXG5gLFxuICAgIHByb3ZpZGVyczpbSFRUUFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEVxdWlwbWVudENvbXBvbmVudHtcbiAgICBlcXVpcG1lbnRzOkFycmF5PEVxdWlwbWVudD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7XG4gICAgICAgIHRoaXMuZXF1aXBtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldEVRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZUVxdWlwbWVudChkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBhcnNlRXF1aXBtZW50KGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRFcXVpcG1lbnQoaXRlbS5laWQsXG4gICAgICAgICAgICAgICAgaXRlbS50eXBlLFxuICAgICAgICAgICAgICAgIGl0ZW0ucm9vbSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkRXF1aXBtZW50KGVpZDpudW1iZXIsIHR5cGU6c3RyaW5nLCByb29tOm51bWJlcil7XG4gICAgICAgIGxldCBlcXVpcG1lbnQgPSBuZXcgRXF1aXBtZW50KGVpZCx0eXBlLHJvb20pO1xuICAgICAgICB0aGlzLmVxdWlwbWVudHMucHVzaChlcXVpcG1lbnQpO1xuICAgIH1cblxuXG4gICAgcmVtb3ZlRXF1aXBtZW50KGVxdWlwbWVudDpFcXVpcG1lbnQpe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmVxdWlwbWVudHMuaW5kZXhPZihlcXVpcG1lbnQpO1xuICAgICAgICB0aGlzLmVxdWlwbWVudHMuc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
