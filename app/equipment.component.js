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
                        templateUrl: 'templates/equipment.component.html',
                        //     template: `
                        // <html>
                        // <body>
                        // <div align="left" style="margin-top: 100px" class="container">
                        //     <h1>Please register the equipment info below.</h1>
                        //
                        //     <div class="form-group">
                        //          <div class="container" ng-app="my-app">
                        //         Equipment ID: <input type="number" class="form-control" #eid>
                        //         Equipment Type: <input type="text"  class="form-control" #type>
                        //         Equipment Room: <input type="number" class="form-control" #room>
                        //
                        //         <table  class="table table-striped">
                        //             <tr>
                        //                 <th> equipment_id </th>
                        //                 <th> equipment_type</th>
                        //                 <th> room number</th>
                        //             </tr>
                        //             <tr *ngFor="#equipment of equipments">
                        //                 <td> {{equipment.eid}} </td>
                        //                 <td> {{equipment.type}} </td>
                        //                 <td> {{equipment.room}} </td>
                        //             </tr>
                        //         </table>
                        //
                        //         <br/><br/>
                        //
                        //             <button (click)="testPost(eid.value, type.value, room.value)" class="btn btn-primary"> Submit </button>
                        //     </div>
                        //     </div>
                        //     </div>
                        //
                        // `,
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

//# sourceMappingURL=data:application/json;base64,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LHFCQUFxQjt3QkFDckIsRUFBRTt3QkFDRixzSEFBc0g7d0JBQ3RILGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixhQUFhO3dCQUNiLEVBQUU7d0JBQ0YsS0FBSzt3QkFDRCxTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO3FCQUMxQixDQUFDOztzQ0FBQTtnQkE0Q0YseUJBQUM7WUFBRCxDQTNDQSxBQTJDQyxJQUFBO1lBM0NELG1EQTJDQyxDQUFBIiwiZmlsZSI6ImVxdWlwbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDMtMjguXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7RXF1aXBtZW50fSBmcm9tICcuL0VxdWlwbWVudCc7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidlcXVpcG1lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2VxdWlwbWVudC5jb21wb25lbnQuaHRtbCcsXG4vLyAgICAgdGVtcGxhdGU6IGBcbi8vIDxodG1sPlxuLy8gPGJvZHk+XG4vLyA8ZGl2IGFsaWduPVwibGVmdFwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTAwcHhcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuLy8gICAgIDxoMT5QbGVhc2UgcmVnaXN0ZXIgdGhlIGVxdWlwbWVudCBpbmZvIGJlbG93LjwvaDE+XG4vL1xuLy8gICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4vLyAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgbmctYXBwPVwibXktYXBwXCI+XG4vLyAgICAgICAgIEVxdWlwbWVudCBJRDogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiICNlaWQ+XG4vLyAgICAgICAgIEVxdWlwbWVudCBUeXBlOiA8aW5wdXQgdHlwZT1cInRleHRcIiAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAjdHlwZT5cbi8vICAgICAgICAgRXF1aXBtZW50IFJvb206IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAjcm9vbT5cbi8vXG4vLyAgICAgICAgIDx0YWJsZSAgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRoPiBlcXVpcG1lbnRfaWQgPC90aD5cbi8vICAgICAgICAgICAgICAgICA8dGg+IGVxdWlwbWVudF90eXBlPC90aD5cbi8vICAgICAgICAgICAgICAgICA8dGg+IHJvb20gbnVtYmVyPC90aD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHIgKm5nRm9yPVwiI2VxdWlwbWVudCBvZiBlcXVpcG1lbnRzXCI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPiB7e2VxdWlwbWVudC5laWR9fSA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD4ge3tlcXVpcG1lbnQudHlwZX19IDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPiB7e2VxdWlwbWVudC5yb29tfX0gPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgIDwvdGFibGU+XG4vL1xuLy8gICAgICAgICA8YnIvPjxici8+XG4vL1xuLy8gICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidGVzdFBvc3QoZWlkLnZhbHVlLCB0eXBlLnZhbHVlLCByb29tLnZhbHVlKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+IFN1Ym1pdCA8L2J1dHRvbj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vXG4vLyBgLFxuICAgIHByb3ZpZGVyczpbSFRUUFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEVxdWlwbWVudENvbXBvbmVudHtcbiAgICBlcXVpcG1lbnRzOkFycmF5PEVxdWlwbWVudD47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7XG4gICAgICAgIHRoaXMuZXF1aXBtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldEVRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZUVxdWlwbWVudChkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cbiAgICB0ZXN0UG9zdChlaWQsdHlwZSxyb29tKXtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5wb3N0KFxuICAgICAgICAgICAge2VpZDplaWQsXG4gICAgICAgICAgICAgdHlwZTp0eXBlLFxuICAgICAgICAgICAgcm9vbTpyb29tfSxcbiAgICAgICAgICAgICdlcXVpcG1lbnQnXG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBhcnNlRXF1aXBtZW50KGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRFcXVpcG1lbnQoaXRlbS5laWQsXG4gICAgICAgICAgICAgICAgaXRlbS50eXBlLFxuICAgICAgICAgICAgICAgIGl0ZW0ucm9vbSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkRXF1aXBtZW50KGVpZDpudW1iZXIsIHR5cGU6c3RyaW5nLCByb29tOm51bWJlcil7XG4gICAgICAgIGxldCBlcXVpcG1lbnQgPSBuZXcgRXF1aXBtZW50KGVpZCx0eXBlLHJvb20pO1xuICAgICAgICB0aGlzLmVxdWlwbWVudHMucHVzaChlcXVpcG1lbnQpO1xuICAgIH1cblxuXG4gICAgcmVtb3ZlRXF1aXBtZW50KGVxdWlwbWVudDpFcXVpcG1lbnQpe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmVxdWlwbWVudHMuaW5kZXhPZihlcXVpcG1lbnQpO1xuICAgICAgICB0aGlzLmVxdWlwbWVudHMuc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
