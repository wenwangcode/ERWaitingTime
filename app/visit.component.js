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
                function VisitComponent(_httpService) {
                    this._httpService = _httpService;
                }
                VisitComponent.prototype.ngOnInit = function () {
                    this.getVisits();
                    this.getPatientIds();
                    this.getStaffIds();
                };
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
                VisitComponent.prototype.postVisit = function (pid, sid, room, visit_date) {
                    var _this = this;
                    this._httpService.post({ pid: pid, sid: sid, room: room, visit_date: visit_date }, 'visit')
                        .subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return _this.getVisits(); });
                };
                VisitComponent.prototype.getVisits = function () {
                    var _this = this;
                    this.visits = [];
                    this._httpService.getVQuery().subscribe(function (data) { return _this.parseVisit(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                VisitComponent.prototype.getPatientIds = function () {
                    var _this = this;
                    this.patientIds = [];
                    this._httpService.getPQuery().subscribe(function (data) { return _this.parsePatientIds(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                VisitComponent.prototype.parsePatientIds = function (json) {
                    var _this = this;
                    json.forEach(function (item) { _this.patientIds.push(item.pid); });
                };
                VisitComponent.prototype.getStaffIds = function () {
                    var _this = this;
                    this.staffIds = [];
                    this._httpService.getSQuery().subscribe(function (data) { return _this.parseStaffIds(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                VisitComponent.prototype.parseStaffIds = function (json) {
                    var _this = this;
                    json.forEach(function (item) { _this.staffIds.push(item.sid); });
                };
                VisitComponent.prototype.removeVisit = function (visit) {
                    var index = this.visits.indexOf(visit);
                    this.visits.splice(index, 1);
                };
                VisitComponent = __decorate([
                    core_1.Component({
                        selector: 'visit',
                        templateUrl: 'templates/visit.component.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc2l0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQU1JLHdCQUFvQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQzdDLENBQUM7Z0JBRUQsaUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELG1DQUFVLEdBQVYsVUFBVyxJQUFJO29CQUFmLGlCQU9DO29CQU5HLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJO3dCQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFDdEIsSUFBSSxDQUFDLEdBQUcsRUFDUixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDckIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFFRCxpQ0FBUSxHQUFSLFVBQVMsR0FBVSxFQUFFLEdBQVUsRUFBRSxJQUFXLEVBQUUsSUFBUztvQkFDbkQsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUVELGtDQUFTLEdBQVQsVUFBVSxHQUFVLEVBQUUsR0FBVSxFQUFFLElBQVcsRUFBRSxVQUFlO29CQUE5RCxpQkFRQztvQkFQRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUEsR0FBRyxFQUFFLEtBQUEsR0FBRyxFQUFFLE1BQUEsSUFBSSxFQUFFLFlBQUEsVUFBVSxFQUFDLEVBQUUsT0FBTyxDQUFDO3lCQUN4RCxTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLENBQ3pCLENBQUM7Z0JBRVYsQ0FBQztnQkFFRCxrQ0FBUyxHQUFUO29CQUFBLGlCQU9DO29CQU5HLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FDbkMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQixFQUM3QixVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsc0NBQWEsR0FBYjtvQkFBQSxpQkFPQztvQkFORyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQ25DLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBMUIsQ0FBMEIsRUFDbEMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQztnQkFDTixDQUFDO2dCQUVELHdDQUFlLEdBQWYsVUFBZ0IsSUFBSTtvQkFBcEIsaUJBRUM7b0JBREcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUksSUFBSyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFFRCxvQ0FBVyxHQUFYO29CQUFBLGlCQU9DO29CQU5HLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FDbkMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUF4QixDQUF3QixFQUNoQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsc0NBQWEsR0FBYixVQUFjLElBQUk7b0JBQWxCLGlCQUVDO29CQURHLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJLElBQUssS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUE7Z0JBQ3pELENBQUM7Z0JBRUQsb0NBQVcsR0FBWCxVQUFZLEtBQVc7b0JBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBbkZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLE9BQU87d0JBQ2hCLFdBQVcsRUFBRSxnQ0FBZ0M7d0JBQzdDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7cUJBQzNCLENBQUM7O2tDQUFBO2dCQWdGRixxQkFBQztZQUFELENBOUVBLEFBOEVDLElBQUE7WUE5RUQsMkNBOEVDLENBQUEiLCJmaWxlIjoidmlzaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Zpc2l0fSBmcm9tICcuL3Zpc2l0JztcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7UGF0aWVudH0gZnJvbSBcIi4vcGF0aWVudFwiO1xuaW1wb3J0IHtQYXRpZW50Q29tcG9uZW50fSBmcm9tIFwiLi9wYXRpZW50LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjondmlzaXQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3Zpc2l0LmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtIVFRQU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBWaXNpdENvbXBvbmVudHtcblxuICAgIHZpc2l0czpBcnJheTxWaXNpdD47XG4gICAgcGF0aWVudElkczogbnVtYmVyW107XG4gICAgc3RhZmZJZHM6IG51bWJlcltdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKXtcbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0VmlzaXRzKCk7XG4gICAgICAgIHRoaXMuZ2V0UGF0aWVudElkcygpO1xuICAgICAgICB0aGlzLmdldFN0YWZmSWRzKCk7XG4gICAgfVxuXG4gICAgcGFyc2VWaXNpdChqc29uKXtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkVmlzaXQoaXRlbS5waWQsXG4gICAgICAgICAgICBpdGVtLnNpZCxcbiAgICAgICAgICAgIGl0ZW0ucm9vbSxcbiAgICAgICAgICAgIGl0ZW0udmlzaXRfZGF0ZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkVmlzaXQocGlkOm51bWJlciwgc2lkOm51bWJlciwgcm9vbTpudW1iZXIsIGRhdGU6RGF0ZSl7XG4gICAgICAgIGxldCB2aXNpdCA9IG5ldyBWaXNpdChwaWQsc2lkLHJvb20sZGF0ZSk7XG4gICAgICAgIHRoaXMudmlzaXRzLnB1c2godmlzaXQpO1xuICAgIH1cblxuICAgIHBvc3RWaXNpdChwaWQ6bnVtYmVyLCBzaWQ6bnVtYmVyLCByb29tOm51bWJlciwgdmlzaXRfZGF0ZTpEYXRlKSB7XG4gICAgICAgIHRoaXMuX2h0dHBTZXJ2aWNlLnBvc3Qoe3BpZCwgc2lkLCByb29tLCB2aXNpdF9kYXRlfSwgJ3Zpc2l0JylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmdldFZpc2l0cygpXG4gICAgICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgZ2V0VmlzaXRzKCkge1xuICAgICAgICB0aGlzLnZpc2l0cyA9IFtdO1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRWUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VWaXNpdChkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFBhdGllbnRJZHMoKSB7XG4gICAgICAgIHRoaXMucGF0aWVudElkcyA9IFtdO1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRQUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VQYXRpZW50SWRzKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VQYXRpZW50SWRzKGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge3RoaXMucGF0aWVudElkcy5wdXNoKGl0ZW0ucGlkKTt9KTtcbiAgICB9XG5cbiAgICBnZXRTdGFmZklkcygpIHtcbiAgICAgICAgdGhpcy5zdGFmZklkcyA9IFtdO1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5nZXRTUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VTdGFmZklkcyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBhcnNlU3RhZmZJZHMoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7dGhpcy5zdGFmZklkcy5wdXNoKGl0ZW0uc2lkKX0pXG4gICAgfVxuICAgIFxuICAgIHJlbW92ZVZpc2l0KHZpc2l0OlZpc2l0KXtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy52aXNpdHMuaW5kZXhPZih2aXNpdCk7XG4gICAgICAgIHRoaXMudmlzaXRzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
