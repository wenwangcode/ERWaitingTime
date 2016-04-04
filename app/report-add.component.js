System.register(['angular2/core', './http.service', "./report", "angular2/router", "./is-loggedin"], function(exports_1, context_1) {
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
    var core_1, http_service_1, report_1, router_1, is_loggedin_1;
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
            },
            function (is_loggedin_1_1) {
                is_loggedin_1 = is_loggedin_1_1;
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
                    router_1.CanActivate(function () { return is_loggedin_1.isLoggedin(); }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], ReportAddComponent);
                return ReportAddComponent;
            }());
            exports_1("ReportAddComponent", ReportAddComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQU9JLDRCQUFvQixXQUF3QjtvQkFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBTDVDLFlBQU8sR0FBYSxFQUFFLENBQUM7Z0JBTXZCLENBQUM7Z0JBRUQscUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsd0NBQVcsR0FBWCxVQUFZLElBQUk7b0JBQWhCLGlCQVFDO29CQVBHLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJO3dCQUNkLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsR0FBRyxFQUNSLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFFRCxzQ0FBUyxHQUFULFVBQVUsR0FBVyxFQUFFLFNBQWlCLEVBQUUsV0FBZ0IsRUFBQyxHQUFVLEVBQUUsR0FBVTtvQkFDN0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsR0FBRyxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCx5Q0FBWSxHQUFaLFVBQWEsTUFBYTtvQkFDdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FB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QUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztnQkFDN0QsQ0FBQztnQkFFRCx3Q0FBVyxHQUFYO29CQUFBLGlCQU9DO29CQU5HLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FDbkMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUF4QixDQUF3QixFQUNoQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsMENBQWEsR0FBYixVQUFjLElBQUk7b0JBQWxCLGlCQUVDO29CQURHLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJLElBQUssS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUE7Z0JBQ3pELENBQUM7Z0JBeEdMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLFFBQVE7d0JBQ2pCLFdBQVcsRUFBRSxpQ0FBaUM7d0JBQzlDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUMsbUJBQVUsQ0FBQzt3QkFDbkMsVUFBVSxFQUFFLENBQUMsbUJBQVUsQ0FBQztxQkFDM0IsQ0FBQztvQkFDRCxvQkFBVyxDQUFDLGNBQU0sT0FBQSx3QkFBVSxFQUFFLEVBQVosQ0FBWSxDQUFDOztzQ0FBQTtnQkFtR2hDLHlCQUFDO1lBQUQsQ0FsR0EsQUFrR0MsSUFBQTtZQWxHRCxtREFrR0MsQ0FBQSIsImZpbGUiOiJyZXBvcnQtYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKb3kgb24gMjAxNi0wNC0wMS5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BhdGllbnR9IGZyb20gJy4vUGF0aWVudCc7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5pbXBvcnQge1JlcG9ydH0gZnJvbSBcIi4vcmVwb3J0XCI7XG5pbXBvcnQge1JvdXRlckxpbmssIENhbkFjdGl2YXRlfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge2lzTG9nZ2VkaW59IGZyb20gXCIuL2lzLWxvZ2dlZGluXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidyZXBvcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3JlcG9ydC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSFRUUFNlcnZpY2UsUm91dGVyTGlua10sXG4gICAgZGlyZWN0aXZlczogW1JvdXRlckxpbmtdLFxufSlcbkBDYW5BY3RpdmF0ZSgoKSA9PiBpc0xvZ2dlZGluKCkpXG5leHBvcnQgY2xhc3MgUmVwb3J0QWRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgcmVwb3J0czogUmVwb3J0W10gPSBbXTtcbiAgICBuZXh0cl9pZDpudW1iZXI7XG4gICAgcGF0aWVudElkczogbnVtYmVyW107XG4gICAgdml0YWxJZHM6IG51bWJlcltdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSFRUUFNlcnZpY2Upe1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NQZXBvcnRJZCgpO1xuICAgICAgICB0aGlzLmdldFZpdGFsSWRzKCk7XG4gICAgICAgIHRoaXMuZ2V0UGF0aWVudElkcygpO1xuICAgIH1cblxuICAgIHBhcnNlUmVwb3J0KGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRSZXBvcnQoaXRlbS5yaWQsXG4gICAgICAgICAgICAgICAgaXRlbS5kaWFnbm9zaXMsXG4gICAgICAgICAgICAgICAgaXRlbS5yZXBvcnRfZGF0ZSxcbiAgICAgICAgICAgICAgICBpdGVtLnZpZCxcbiAgICAgICAgICAgICAgICBpdGVtLnBpZCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkUmVwb3J0KHJpZDogbnVtYmVyLCBkaWFnbm9zaXM6IHN0cmluZywgcmVwb3J0X2RhdGU6RGF0ZSx2aWQ6bnVtYmVyLCBwaWQ6bnVtYmVyKXtcbiAgICAgICAgbGV0IHJlcG9ydCA9IG5ldyBSZXBvcnQocmlkLGRpYWdub3NpcyxyZXBvcnRfZGF0ZSx2aWQscGlkKTtcbiAgICAgICAgdGhpcy5yZXBvcnRzLnB1c2gocmVwb3J0KTtcbiAgICB9XG5cbiAgICByZW1vdmVSZXBvcnQocmVwb3J0OlJlcG9ydCl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucmVwb3J0cy5pbmRleE9mKHJlcG9ydCk7XG4gICAgICAgIHRoaXMucmVwb3J0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG4gICAgcG9zdFJlcG9ydChkaWFnbm9zaXM6c3RyaW5nLCB5ZWFyOnN0cmluZyxtb250aDpzdHJpbmcsZGF5OnN0cmluZywgdmlkLCBwaWQpe1xuICAgICAgICBsZXQgcmVwb3J0X2RhdGUgPSB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UucG9zdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaWFnbm9zaXM6IGRpYWdub3NpcyxcbiAgICAgICAgICAgICAgICByZXBvcnRfZGF0ZTogcmVwb3J0X2RhdGUsXG4gICAgICAgICAgICAgICAgdmlkOiB2aWQsXG4gICAgICAgICAgICAgICAgcGlkOiBwaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncmVwb3J0J1xuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcmVwcm9jZXNzUGVwb3J0SWQoKSB7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UuZ2V0UlF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlUmVwb3J0SWQoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiR0VUIHJlcG9ydCBkYXRhIHByZXByb2Nlc3NpbmcgY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZVJlcG9ydElkKGpzb24pe1xuICAgICAgICBsZXQgcmVwb3J0X2lkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IG5leHRfaWQ6IG51bWJlciA9IDA7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICByZXBvcnRfaWRzLnB1c2goaXRlbS5waWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXBvcnRfaWRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAocmVwb3J0X2lkc1tpXSA+IG5leHRfaWQpIG5leHRfaWQgPSByZXBvcnRfaWRzW2ldXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobmV4dF9pZCArIDEpO1xuICAgICAgICB0aGlzLm5leHRyX2lkID0gbmV4dF9pZCArIDE7XG4gICAgfVxuICAgIGdldFBhdGllbnRJZHMoKSB7XG4gICAgICAgIHRoaXMucGF0aWVudElkcyA9IFtdO1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldFBRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVBhdGllbnRJZHMoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZVBhdGllbnRJZHMoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7dGhpcy5wYXRpZW50SWRzLnB1c2goaXRlbS5waWQpO30pO1xuICAgIH1cblxuICAgIGdldFZpdGFsSWRzKCkge1xuICAgICAgICB0aGlzLnZpdGFsSWRzID0gW107XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UuZ2V0VklRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVZpdGFsSWRzKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VWaXRhbElkcyhqc29uKXtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHt0aGlzLnZpdGFsSWRzLnB1c2goaXRlbS52aWQpfSlcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
