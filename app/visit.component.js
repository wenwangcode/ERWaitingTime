System.register(['angular2/core', './visit'], function(exports_1, context_1) {
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
    var core_1, visit_1;
    var VisitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (visit_1_1) {
                visit_1 = visit_1_1;
            }],
        execute: function() {
            VisitComponent = (function () {
                function VisitComponent() {
                    this.visits = [];
                }
                VisitComponent.prototype.addVisit = function (pid, sid, room, date) {
                    var visit = new visit_1.Visit(pid, sid, room, date);
                    this.visits.push(visit);
                };
                VisitComponent.prototype.removeVisit = function (visit) {
                    var index = this.visits.indexOf(visit);
                    this.visits.splice(index, 1);
                };
                VisitComponent = __decorate([
                    core_1.Component({
                        selector: 'visit',
                        template: "\n        <table>\n            <tr>\n                <th> patient_id </th>\n                <th> staff_id</th>\n                <th> room number</th>\n                <th> date of visit</th>\n            </tr>\n            <tr *ngFor=\"#visit of visits\"> \n                <td> {{visit.patient_id}} </td>\n                <td> {{visit.staff_id}} </td>\n                <td> {{visit.room}} </td>\n                <td> {{visit.date}} </td>\n            </tr>\n        </table>\n        \n        <br/><br/>\n        <input type=\"number\" min=\"5000\" max=\"10000\" #pid>\n        <input type=\"number\" min=\"0000\" max=\"4999\" #sid>\n        <input type=\"number\" min=\"0000\" max=\"10000\" #room>\n        <input type=\"Date\" #date>\n        <input type=\"submit\" (click)=\"\n            addVisit(pid.value, sid.value, room.value, date.value)\">\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], VisitComponent);
                return VisitComponent;
            }());
            exports_1("VisitComponent", VisitComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc2l0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQThCQTtnQkFJQTtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztnQkFJRCxpQ0FBUSxHQUFSLFVBQVMsR0FBVSxFQUFFLEdBQVUsRUFBRSxJQUFXLEVBQUUsSUFBUztvQkFDL0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUdELG9DQUFXLEdBQVgsVUFBWSxLQUFXO29CQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQTlDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxPQUFPO3dCQUNoQixRQUFRLEVBQUUsdTFCQXVCYjtxQkFDQSxDQUFDOztrQ0FBQTtnQkFzQkYscUJBQUM7WUFBRCxDQXJCQSxBQXFCQyxJQUFBO1lBckJELDJDQXFCQyxDQUFBIiwiZmlsZSI6InZpc2l0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtWaXNpdH0gZnJvbSAnLi92aXNpdCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOid2aXNpdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD4gcGF0aWVudF9pZCA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD4gc3RhZmZfaWQ8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD4gcm9vbSBudW1iZXI8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD4gZGF0ZSBvZiB2aXNpdDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiN2aXNpdCBvZiB2aXNpdHNcIj4gXG4gICAgICAgICAgICAgICAgPHRkPiB7e3Zpc2l0LnBhdGllbnRfaWR9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge3t2aXNpdC5zdGFmZl9pZH19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7e3Zpc2l0LnJvb219fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge3t2aXNpdC5kYXRlfX0gPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIFxuICAgICAgICA8YnIvPjxici8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiNTAwMFwiIG1heD1cIjEwMDAwXCIgI3BpZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwMDAwXCIgbWF4PVwiNDk5OVwiICNzaWQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMDAwMFwiIG1heD1cIjEwMDAwXCIgI3Jvb20+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiRGF0ZVwiICNkYXRlPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIChjbGljayk9XCJcbiAgICAgICAgICAgIGFkZFZpc2l0KHBpZC52YWx1ZSwgc2lkLnZhbHVlLCByb29tLnZhbHVlLCBkYXRlLnZhbHVlKVwiPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBWaXNpdENvbXBvbmVudHtcblxudmlzaXRzOkFycmF5PFZpc2l0PjtcblxuY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnZpc2l0cyA9IFtdO1xufVxuXG5cblxuYWRkVmlzaXQocGlkOm51bWJlciwgc2lkOm51bWJlciwgcm9vbTpudW1iZXIsIGRhdGU6RGF0ZSl7XG4gICAgICAgIGxldCB2aXNpdCA9IG5ldyBWaXNpdChwaWQsc2lkLHJvb20sZGF0ZSk7XG4gICAgICAgIHRoaXMudmlzaXRzLnB1c2godmlzaXQpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICByZW1vdmVWaXNpdCh2aXNpdDpWaXNpdCl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMudmlzaXRzLmluZGV4T2YodmlzaXQpO1xuICAgICAgICB0aGlzLnZpc2l0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
