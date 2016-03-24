System.register(['angular2/core', './visit', './http.service.ts'], function(exports_1, context_1) {
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
    var core_1, visit_1, http_service_ts_1;
    var VisitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (visit_1_1) {
                visit_1 = visit_1_1;
            },
            function (http_service_ts_1_1) {
                http_service_ts_1 = http_service_ts_1_1;
            }],
        execute: function() {
            VisitComponent = (function () {
                function VisitComponent(httpService) {
                    var _this = this;
                    this.httpService = httpService;
                    this.visits = [];
                    this.httpService.getQuery().subscribe(function (data) { return _this.parseVisit(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
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
                        templateUrl: 'views/visit.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_service_ts_1.HTTPService])
                ], VisitComponent);
                return VisitComponent;
            }());
            exports_1("VisitComponent", VisitComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc2l0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUdJLHdCQUFvQixXQUF3QjtvQkFIaEQsaUJBZ0NDO29CQTdCdUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FDakMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQixFQUM3QixVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsbUNBQVUsR0FBVixVQUFXLElBQUk7b0JBQWYsaUJBT0M7b0JBTkcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUNsQixJQUFJLENBQUMsR0FBRyxFQUNSLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN6QixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUVELGlDQUFRLEdBQVIsVUFBUyxHQUFVLEVBQUUsR0FBVSxFQUFFLElBQVcsRUFBRSxJQUFTO29CQUNuRCxJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBR0Qsb0NBQVcsR0FBWCxVQUFZLEtBQVc7b0JBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBbENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLE9BQU87d0JBQ2hCLFdBQVcsRUFBRSw0QkFBNEI7cUJBQzVDLENBQUM7O2tDQUFBO2dCQWlDRixxQkFBQztZQUFELENBaENBLEFBZ0NDLElBQUE7WUFoQ0QsMkNBZ0NDLENBQUEiLCJmaWxlIjoidmlzaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtWaXNpdH0gZnJvbSAnLi92aXNpdCc7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZS50cyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOid2aXNpdCcsXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy92aXNpdC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVmlzaXRDb21wb25lbnR7XG4gICAgdmlzaXRzOkFycmF5PFZpc2l0PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKXtcbiAgICAgICAgdGhpcy52aXNpdHMgPSBbXTtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5nZXRRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVZpc2l0KGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VWaXNpdChqc29uKXtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkVmlzaXQoaXRlbS5waWQsXG4gICAgICAgICAgICAgICAgaXRlbS5zaWQsXG4gICAgICAgICAgICAgICAgaXRlbS5yb29tLFxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaXRfZGF0ZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkVmlzaXQocGlkOm51bWJlciwgc2lkOm51bWJlciwgcm9vbTpudW1iZXIsIGRhdGU6RGF0ZSl7XG4gICAgICAgIGxldCB2aXNpdCA9IG5ldyBWaXNpdChwaWQsc2lkLHJvb20sZGF0ZSk7XG4gICAgICAgIHRoaXMudmlzaXRzLnB1c2godmlzaXQpO1xuICAgIH1cblxuXG4gICAgcmVtb3ZlVmlzaXQodmlzaXQ6VmlzaXQpe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnZpc2l0cy5pbmRleE9mKHZpc2l0KTtcbiAgICAgICAgdGhpcy52aXNpdHMuc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
