System.register(['angular2/core', './http.service', "./report", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, http_service_1, report_1, router_1;
    var ReportAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (report_1_1) {
                report_1 = report_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ReportAddComponent = (function () {
                function ReportAddComponent(httpService) {
                    this.httpService = httpService;
                    this.reports = [];
                }
                ReportAddComponent.prototype.ngOnInit = function () {
                    this.preprocessPeportId();
                    this.getVitalIds();
                    this.getPatientIds();
                };
                ReportAddComponent.prototype.parseReport = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addReport(item.rid, item.diagnosis, item.report_date, item.vid, item.pid);
                    });
                };
                ReportAddComponent.prototype.addReport = function (rid, diagnosis, report_date, vid, pid) {
                    var report = new report_1.Report(rid, diagnosis, report_date, vid, pid);
                    this.reports.push(report);
                };
                ReportAddComponent.prototype.removeReport = function (report) {
                    var index = this.reports.indexOf(report);
                    this.reports.splice(index, 1);
                };
                ReportAddComponent.prototype.postReport = function (diagnosis, year, month, day, vid, pid) {
                    var report_date = year + '-' + month + '-' + day;
                    this.httpService.post({
                        diagnosis: diagnosis,
                        report_date: report_date,
                        vid: vid,
                        pid: pid
                    }, 'report').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                ReportAddComponent.prototype.preprocessPeportId = function () {
                    var _this = this;
                    this.httpService.getRQuery().subscribe(function (data) { return _this.parseReportId(data); }, function (err) { return alert(err); }, function () { return console.log("GET report data preprocessing complete"); });
                };
                ReportAddComponent.prototype.parseReportId = function (json) {
                    var report_ids = [];
                    var next_id = 0;
                    json.forEach(function (item) {
                        report_ids.push(item.pid);
                    });
                    for (var i = 0; i < report_ids.length; i += 1) {
                        if (report_ids[i] > next_id)
                            next_id = report_ids[i];
                    }
                    console.log(next_id + 1);
                    this.nextr_id = next_id + 1;
                };
                ReportAddComponent.prototype.getPatientIds = function () {
                    var _this = this;
                    this.patientIds = [];
                    this.httpService.getPQuery().subscribe(function (data) { return _this.parsePatientIds(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                ReportAddComponent.prototype.parsePatientIds = function (json) {
                    var _this = this;
                    json.forEach(function (item) { _this.patientIds.push(item.pid); });
                };
                ReportAddComponent.prototype.getVitalIds = function () {
                    var _this = this;
                    this.vitalIds = [];
                    this.httpService.getVIQuery().subscribe(function (data) { return _this.parseVitalIds(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                ReportAddComponent.prototype.parseVitalIds = function (json) {
                    var _this = this;
                    json.forEach(function (item) { _this.vitalIds.push(item.vid); });
                };
                ReportAddComponent = __decorate([
                    core_1.Component({
                        selector: 'report',
                        templateUrl: 'templates/report.component.html',
                        providers: [http_service_1.HTTPService, router_1.RouterLink],
                        directives: [router_1.RouterLink],
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], ReportAddComponent);
                return ReportAddComponent;
            }());
            exports_1("ReportAddComponent", ReportAddComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBT0ksNEJBQW9CLFdBQXdCO29CQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFMNUMsWUFBTyxHQUFhLEVBQUUsQ0FBQztnQkFNdkIsQ0FBQztnQkFFRCxxQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCx3Q0FBVyxHQUFYLFVBQVksSUFBSTtvQkFBaEIsaUJBUUM7b0JBUEcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUNuQixJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxHQUFHLEVBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUVELHNDQUFTLEdBQVQsVUFBVSxHQUFXLEVBQUUsU0FBaUIsRUFBRSxXQUFnQixFQUFDLEdBQVUsRUFBRSxHQUFVO29CQUM3RSxJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUVELHlDQUFZLEdBQVosVUFBYSxNQUFhO29CQUN0QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLE9B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Q0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQUVELHdDQUFXLEdBQVg7b0JBQUEsaUJBT0M7b0JBTkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUNuQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQXhCLENBQXdCLEVBQ2hDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCwwQ0FBYSxHQUFiLFVBQWMsSUFBSTtvQkFBbEIsaUJBRUM7b0JBREcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUksSUFBSyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQTtnQkFDekQsQ0FBQztnQkF2R0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsUUFBUTt3QkFDakIsV0FBVyxFQUFFLGlDQUFpQzt3QkFDOUMsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBQyxtQkFBVSxDQUFDO3dCQUNuQyxVQUFVLEVBQUUsQ0FBQyxtQkFBVSxDQUFDO3FCQUMzQixDQUFDOztzQ0FBQTtnQkFtR0YseUJBQUM7WUFBRCxDQWxHQSxBQWtHQyxJQUFBO1lBbEdELG1EQWtHQyxDQUFBIiwiZmlsZSI6InJlcG9ydC1hZGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTA0LTAxLlxuICovXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UGF0aWVudH0gZnJvbSAnLi9QYXRpZW50JztcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7UmVwb3J0fSBmcm9tIFwiLi9yZXBvcnRcIjtcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjoncmVwb3J0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9yZXBvcnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0hUVFBTZXJ2aWNlLFJvdXRlckxpbmtdLFxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJMaW5rXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVwb3J0QWRkQ29tcG9uZW50e1xuXG4gICAgcmVwb3J0czogUmVwb3J0W10gPSBbXTtcbiAgICBuZXh0cl9pZDpudW1iZXI7XG4gICAgcGF0aWVudElkczogbnVtYmVyW107XG4gICAgdml0YWxJZHM6IG51bWJlcltdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSFRUUFNlcnZpY2Upe1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NQZXBvcnRJZCgpO1xuICAgICAgICB0aGlzLmdldFZpdGFsSWRzKCk7XG4gICAgICAgIHRoaXMuZ2V0UGF0aWVudElkcygpO1xuICAgIH1cblxuICAgIHBhcnNlUmVwb3J0KGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRSZXBvcnQoaXRlbS5yaWQsXG4gICAgICAgICAgICAgICAgaXRlbS5kaWFnbm9zaXMsXG4gICAgICAgICAgICAgICAgaXRlbS5yZXBvcnRfZGF0ZSxcbiAgICAgICAgICAgICAgICBpdGVtLnZpZCxcbiAgICAgICAgICAgICAgICBpdGVtLnBpZCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkUmVwb3J0KHJpZDogbnVtYmVyLCBkaWFnbm9zaXM6IHN0cmluZywgcmVwb3J0X2RhdGU6RGF0ZSx2aWQ6bnVtYmVyLCBwaWQ6bnVtYmVyKXtcbiAgICAgICAgbGV0IHJlcG9ydCA9IG5ldyBSZXBvcnQocmlkLGRpYWdub3NpcyxyZXBvcnRfZGF0ZSx2aWQscGlkKTtcbiAgICAgICAgdGhpcy5yZXBvcnRzLnB1c2gocmVwb3J0KTtcbiAgICB9XG5cbiAgICByZW1vdmVSZXBvcnQocmVwb3J0OlJlcG9ydCl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucmVwb3J0cy5pbmRleE9mKHJlcG9ydCk7XG4gICAgICAgIHRoaXMucmVwb3J0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG4gICAgcG9zdFJlcG9ydChkaWFnbm9zaXM6c3RyaW5nLCB5ZWFyOnN0cmluZyxtb250aDpzdHJpbmcsZGF5OnN0cmluZywgdmlkLCBwaWQpe1xuICAgICAgICBsZXQgcmVwb3J0X2RhdGUgPSB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UucG9zdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaWFnbm9zaXM6IGRpYWdub3NpcyxcbiAgICAgICAgICAgICAgICByZXBvcnRfZGF0ZTogcmVwb3J0X2RhdGUsXG4gICAgICAgICAgICAgICAgdmlkOiB2aWQsXG4gICAgICAgICAgICAgICAgcGlkOiBwaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncmVwb3J0J1xuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcmVwcm9jZXNzUGVwb3J0SWQoKSB7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UuZ2V0UlF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlUmVwb3J0SWQoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiR0VUIHJlcG9ydCBkYXRhIHByZXByb2Nlc3NpbmcgY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZVJlcG9ydElkKGpzb24pe1xuICAgICAgICBsZXQgcmVwb3J0X2lkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IG5leHRfaWQ6IG51bWJlciA9IDA7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICByZXBvcnRfaWRzLnB1c2goaXRlbS5waWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXBvcnRfaWRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAocmVwb3J0X2lkc1tpXSA+IG5leHRfaWQpIG5leHRfaWQgPSByZXBvcnRfaWRzW2ldXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobmV4dF9pZCArIDEpO1xuICAgICAgICB0aGlzLm5leHRyX2lkID0gbmV4dF9pZCArIDE7XG4gICAgfVxuICAgIGdldFBhdGllbnRJZHMoKSB7XG4gICAgICAgIHRoaXMucGF0aWVudElkcyA9IFtdO1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldFBRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVBhdGllbnRJZHMoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZVBhdGllbnRJZHMoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7dGhpcy5wYXRpZW50SWRzLnB1c2goaXRlbS5waWQpO30pO1xuICAgIH1cblxuICAgIGdldFZpdGFsSWRzKCkge1xuICAgICAgICB0aGlzLnZpdGFsSWRzID0gW107XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UuZ2V0VklRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVZpdGFsSWRzKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VWaXRhbElkcyhqc29uKXtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHt0aGlzLnZpdGFsSWRzLnB1c2goaXRlbS52aWQpfSlcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
