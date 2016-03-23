System.register(['angular2/core', './staff'], function(exports_1, context_1) {
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
    var core_1, staff_1;
    var StaffComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (staff_1_1) {
                staff_1 = staff_1_1;
            }],
        execute: function() {
            StaffComponent = (function () {
                function StaffComponent() {
                    this.staffs = [];
                }
                StaffComponent.prototype.addStaff = function (s_id, s_lname, s_fname, specialization, isDoctor, experience_in_years) {
                    var staff = new staff_1.Staff(s_id, s_lname, s_fname, specialization, isDoctor, experience_in_years);
                    this.staffs.push(staff);
                };
                StaffComponent = __decorate([
                    core_1.Component({
                        selector: 'staff',
                        template: "hello world"
                    }), 
                    __metadata('design:paramtypes', [])
                ], StaffComponent);
                return StaffComponent;
            }());
            exports_1("StaffComponent", StaffComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUdJO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixDQUFDO2dCQUVELGlDQUFRLEdBQVIsVUFBUyxJQUFXLEVBQUUsT0FBYyxFQUFFLE9BQWMsRUFBRSxjQUFxQixFQUFFLFFBQWlCLEVBQUUsbUJBQTJCO29CQUN2SCxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ3hGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQWpCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxPQUFPO3dCQUNoQixRQUFRLEVBQ0osYUFBYTtxQkFDcEIsQ0FBQzs7a0NBQUE7Z0JBaUJGLHFCQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCwyQ0FjQyxDQUFBIiwiZmlsZSI6InN0YWZmLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKb3kgb24gMjAxNi0wMy0xNy5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsVmlld30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1N0YWZmfSBmcm9tICcuL3N0YWZmJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3N0YWZmJyxcbiAgICB0ZW1wbGF0ZTpcbiAgICAgICAgYGhlbGxvIHdvcmxkYFxufSlcblxuXG5leHBvcnQgY2xhc3MgU3RhZmZDb21wb25lbnR7XG4gICAgc3RhZmZzOkFycmF5PFN0YWZmPjtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuc3RhZmZzID0gW107XG4gICAgfVxuXG4gICAgYWRkU3RhZmYoc19pZDpudW1iZXIsIHNfbG5hbWU6c3RyaW5nLCBzX2ZuYW1lOnN0cmluZywgc3BlY2lhbGl6YXRpb246c3RyaW5nLCBpc0RvY3RvcjogYm9vbGVhbiwgZXhwZXJpZW5jZV9pbl95ZWFyczogbnVtYmVyKXtcbiAgICAgICAgbGV0IHN0YWZmID0gbmV3IFN0YWZmKHNfaWQsc19sbmFtZSxzX2ZuYW1lLHNwZWNpYWxpemF0aW9uLGlzRG9jdG9yLGV4cGVyaWVuY2VfaW5feWVhcnMpO1xuICAgICAgICB0aGlzLnN0YWZmcy5wdXNoKHN0YWZmKTtcbiAgICB9XG5cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
