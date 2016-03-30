System.register(['angular2/core', './visit', './http.service'], function(exports_1, context_1) {
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
    var core_1, visit_1, http_service_1;
    var VisitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (visit_1_1) {
                visit_1 = visit_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            VisitComponent = (function () {
                function VisitComponent(httpService) {
                    var _this = this;
                    this.httpService = httpService;
                    this.visits = [];
                    this.httpService.getQuery().subscribe(
                    //data => this.parseVisit(data),
                    function (data) { return _this.msg = JSON.stringify(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                }
                VisitComponent.prototype.parseVisit = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addVisit(item.pid, item.sid, item.room, item.visit_date);
                    });
                };
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
                        template: "\n        <table>\n            <tr>\n                <th> patient_id </th>\n                <th> staff_id</th>\n                <th> room number</th>\n                <th> date of visit</th>\n            </tr>\n            <tr *ngFor=\"#visit of visits\"> \n                <td> {{visit.patient_id}} </td>\n                <td> {{visit.staff_id}} </td>\n                <td> {{visit.room}} </td>\n                <td> {{visit.date}} </td>\n            </tr>\n        </table>\n        \n        <br/><br/>\n        <input type=\"number\" min=\"5000\" max=\"10000\" #pid>\n        <input type=\"number\" min=\"0000\" max=\"4999\" #sid>\n        <input type=\"number\" min=\"0000\" max=\"10000\" #room>\n        <input type=\"Date\" #date>\n        <input type=\"submit\" (click)=\"\n            addVisit(pid.value, sid.value, room.value, date.value)\">\n            \n<<<<<<< HEAD\n=======\n            {{msg}}\n>>>>>>> 3f488314d31b679180ad822e64aaccf8a6942a0d\n",
                        providers: [http_service_1.HTTPService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], VisitComponent);
                return VisitComponent;
            }());
            exports_1("VisitComponent", VisitComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc2l0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFDQTtnQkFJQSx3QkFBb0IsV0FBd0I7b0JBSjVDLGlCQWtDQztvQkE5Qm1CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTO29CQUNqQyxnQ0FBZ0M7b0JBQ2hDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUEvQixDQUErQixFQUN2QyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsbUNBQVUsR0FBVixVQUFXLElBQUk7b0JBQWYsaUJBT0M7b0JBTkcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUN0QixJQUFJLENBQUMsR0FBRyxFQUNSLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNyQixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUVELGlDQUFRLEdBQVIsVUFBUyxHQUFVLEVBQUUsR0FBVSxFQUFFLElBQVcsRUFBRSxJQUFTO29CQUMvQyxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBR0Qsb0NBQVcsR0FBWCxVQUFZLEtBQVc7b0JBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBakVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLE9BQU87d0JBQ2hCLFFBQVEsRUFBRSxtOEJBNEJiO3dCQUNELFNBQVMsRUFBQyxDQUFDLDBCQUFXLENBQUM7cUJBQ3RCLENBQUM7O2tDQUFBO2dCQW1DRixxQkFBQztZQUFELENBbENBLEFBa0NDLElBQUE7WUFsQ0QsMkNBa0NDLENBQUEiLCJmaWxlIjoidmlzaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtWaXNpdH0gZnJvbSAnLi92aXNpdCc7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOid2aXNpdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD4gcGF0aWVudF9pZCA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD4gc3RhZmZfaWQ8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD4gcm9vbSBudW1iZXI8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD4gZGF0ZSBvZiB2aXNpdDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiN2aXNpdCBvZiB2aXNpdHNcIj4gXG4gICAgICAgICAgICAgICAgPHRkPiB7e3Zpc2l0LnBhdGllbnRfaWR9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge3t2aXNpdC5zdGFmZl9pZH19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7e3Zpc2l0LnJvb219fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge3t2aXNpdC5kYXRlfX0gPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIFxuICAgICAgICA8YnIvPjxici8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiNTAwMFwiIG1heD1cIjEwMDAwXCIgI3BpZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwMDAwXCIgbWF4PVwiNDk5OVwiICNzaWQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMDAwMFwiIG1heD1cIjEwMDAwXCIgI3Jvb20+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiRGF0ZVwiICNkYXRlPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIChjbGljayk9XCJcbiAgICAgICAgICAgIGFkZFZpc2l0KHBpZC52YWx1ZSwgc2lkLnZhbHVlLCByb29tLnZhbHVlLCBkYXRlLnZhbHVlKVwiPlxuICAgICAgICAgICAgXG48PDw8PDw8IEhFQURcbj09PT09PT1cbiAgICAgICAgICAgIHt7bXNnfX1cbj4+Pj4+Pj4gM2Y0ODgzMTRkMzFiNjc5MTgwYWQ4MjJlNjRhYWNjZjhhNjk0MmEwZFxuYCxcbnByb3ZpZGVyczpbSFRUUFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFZpc2l0Q29tcG9uZW50e1xubXNnOnN0cmluZztcbnZpc2l0czpBcnJheTxWaXNpdD47XG5cbmNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKXtcbiAgICB0aGlzLnZpc2l0cyA9IFtdO1xuICAgIHRoaXMuaHR0cFNlcnZpY2UuZ2V0UXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgIC8vZGF0YSA9PiB0aGlzLnBhcnNlVmlzaXQoZGF0YSksXG4gICAgICAgIGRhdGEgPT4gdGhpcy5tc2cgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICApO1xufVxuXG5wYXJzZVZpc2l0KGpzb24pe1xuICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgIHRoaXMuYWRkVmlzaXQoaXRlbS5waWQsXG4gICAgICAgIGl0ZW0uc2lkLFxuICAgICAgICBpdGVtLnJvb20sXG4gICAgICAgIGl0ZW0udmlzaXRfZGF0ZSk7XG4gICAgfSlcbn1cblxuYWRkVmlzaXQocGlkOm51bWJlciwgc2lkOm51bWJlciwgcm9vbTpudW1iZXIsIGRhdGU6RGF0ZSl7XG4gICAgICAgIGxldCB2aXNpdCA9IG5ldyBWaXNpdChwaWQsc2lkLHJvb20sZGF0ZSk7XG4gICAgICAgIHRoaXMudmlzaXRzLnB1c2godmlzaXQpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICByZW1vdmVWaXNpdCh2aXNpdDpWaXNpdCl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMudmlzaXRzLmluZGV4T2YodmlzaXQpO1xuICAgICAgICB0aGlzLnZpc2l0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
