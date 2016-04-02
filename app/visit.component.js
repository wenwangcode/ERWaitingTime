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
                    this._httpService.post({ pid: pid, sid: sid, room: room, visit_date: visit_date }, 'visit')
                        .subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
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

//# sourceMappingURL=data:application/json;base64,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QUFBO1lBOUVELDJDQThFQyxDQUFBIiwiZmlsZSI6InZpc2l0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtWaXNpdH0gZnJvbSAnLi92aXNpdCc7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5pbXBvcnQge1BhdGllbnR9IGZyb20gXCIuL3BhdGllbnRcIjtcbmltcG9ydCB7UGF0aWVudENvbXBvbmVudH0gZnJvbSBcIi4vcGF0aWVudC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3Zpc2l0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy92aXNpdC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSFRUUFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgVmlzaXRDb21wb25lbnR7XG5cbiAgICB2aXNpdHM6QXJyYXk8VmlzaXQ+O1xuICAgIHBhdGllbnRJZHM6IG51bWJlcltdO1xuICAgIHN0YWZmSWRzOiBudW1iZXJbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7XG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldFZpc2l0cygpO1xuICAgICAgICB0aGlzLmdldFBhdGllbnRJZHMoKTtcbiAgICAgICAgdGhpcy5nZXRTdGFmZklkcygpO1xuICAgIH1cblxuICAgIHBhcnNlVmlzaXQoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFZpc2l0KGl0ZW0ucGlkLFxuICAgICAgICAgICAgaXRlbS5zaWQsXG4gICAgICAgICAgICBpdGVtLnJvb20sXG4gICAgICAgICAgICBpdGVtLnZpc2l0X2RhdGUpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFZpc2l0KHBpZDpudW1iZXIsIHNpZDpudW1iZXIsIHJvb206bnVtYmVyLCBkYXRlOkRhdGUpe1xuICAgICAgICBsZXQgdmlzaXQgPSBuZXcgVmlzaXQocGlkLHNpZCxyb29tLGRhdGUpO1xuICAgICAgICB0aGlzLnZpc2l0cy5wdXNoKHZpc2l0KTtcbiAgICB9XG5cbiAgICBwb3N0VmlzaXQocGlkOm51bWJlciwgc2lkOm51bWJlciwgcm9vbTpudW1iZXIsIHZpc2l0X2RhdGU6RGF0ZSkge1xuICAgICAgICB0aGlzLl9odHRwU2VydmljZS5wb3N0KHtwaWQsIHNpZCwgcm9vbSwgdmlzaXRfZGF0ZX0sICd2aXNpdCcpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICAgICAgKTtcblxuICAgIH1cblxuICAgIGdldFZpc2l0cygpIHtcbiAgICAgICAgdGhpcy52aXNpdHMgPSBbXTtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0VlF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlVmlzaXQoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRQYXRpZW50SWRzKCkge1xuICAgICAgICB0aGlzLnBhdGllbnRJZHMgPSBbXTtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0UFF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlUGF0aWVudElkcyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBhcnNlUGF0aWVudElkcyhqc29uKXtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHt0aGlzLnBhdGllbnRJZHMucHVzaChpdGVtLnBpZCk7fSk7XG4gICAgfVxuXG4gICAgZ2V0U3RhZmZJZHMoKSB7XG4gICAgICAgIHRoaXMuc3RhZmZJZHMgPSBbXTtcbiAgICAgICAgdGhpcy5faHR0cFNlcnZpY2UuZ2V0U1F1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlU3RhZmZJZHMoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZVN0YWZmSWRzKGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge3RoaXMuc3RhZmZJZHMucHVzaChpdGVtLnNpZCl9KVxuICAgIH1cbiAgICBcbiAgICByZW1vdmVWaXNpdCh2aXNpdDpWaXNpdCl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMudmlzaXRzLmluZGV4T2YodmlzaXQpO1xuICAgICAgICB0aGlzLnZpc2l0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
