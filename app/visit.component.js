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
                        templateUrl: 'views/visit.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], VisitComponent);
                return VisitComponent;
            }());
            exports_1("VisitComponent", VisitComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc2l0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUVBO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixDQUFDO2dCQUlELGlDQUFRLEdBQVIsVUFBUyxHQUFVLEVBQUUsR0FBVSxFQUFFLElBQVcsRUFBRSxJQUFTO29CQUMvQyxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBR0Qsb0NBQVcsR0FBWCxVQUFZLEtBQVc7b0JBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBckJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLE9BQU87d0JBQ2hCLFdBQVcsRUFBRSw0QkFBNEI7cUJBQzVDLENBQUM7O2tDQUFBO2dCQW9CRixxQkFBQztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFuQkQsMkNBbUJDLENBQUEiLCJmaWxlIjoidmlzaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsVmlld30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Zpc2l0fSBmcm9tICcuL3Zpc2l0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3Zpc2l0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3Zpc2l0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBWaXNpdENvbXBvbmVudHtcbnZpc2l0czpBcnJheTxWaXNpdD47XG5jb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMudmlzaXRzID0gW107XG59XG5cblxuXG5hZGRWaXNpdChwaWQ6bnVtYmVyLCBzaWQ6bnVtYmVyLCByb29tOm51bWJlciwgZGF0ZTpEYXRlKXtcbiAgICAgICAgbGV0IHZpc2l0ID0gbmV3IFZpc2l0KHBpZCxzaWQscm9vbSxkYXRlKTtcbiAgICAgICAgdGhpcy52aXNpdHMucHVzaCh2aXNpdCk7XG4gICAgfVxuXG5cbiAgICByZW1vdmVWaXNpdCh2aXNpdDpWaXNpdCl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMudmlzaXRzLmluZGV4T2YodmlzaXQpO1xuICAgICAgICB0aGlzLnZpc2l0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
