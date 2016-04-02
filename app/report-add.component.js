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
                        rid: this.nextr_id,
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBT0ksNEJBQW9CLFdBQXdCO29CQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFMNUMsWUFBTyxHQUFhLEVBQUUsQ0FBQztnQkFNdkIsQ0FBQztnQkFFRCxxQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCx3Q0FBVyxHQUFYLFVBQVksSUFBSTtvQkFBaEIsaUJBUUM7b0JBUEcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUNuQixJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxHQUFHLEVBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUVELHNDQUFTLEdBQVQsVUFBVSxHQUFXLEVBQUUsU0FBaUIsRUFBRSxXQUFnQixFQUFDLEdBQVUsRUFBRSxHQUFVO29CQUM3RSxJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUVELHlDQUFZLEdBQVosVUFBYSxNQUFhO29CQUN0QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLE9B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SSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELENBQUM7Z0JBRUQsd0NBQVcsR0FBWDtvQkFBQSxpQkFPQztvQkFORyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQ25DLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBeEIsQ0FBd0IsRUFDaEMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQztnQkFDTixDQUFDO2dCQUVELDBDQUFhLEdBQWIsVUFBYyxJQUFJO29CQUFsQixpQkFFQztvQkFERyxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQUEsSUFBSSxJQUFLLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFBO2dCQUN6RCxDQUFDO2dCQXhHTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxRQUFRO3dCQUNqQixXQUFXLEVBQUUsaUNBQWlDO3dCQUM5QyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFDLG1CQUFVLENBQUM7d0JBQ25DLFVBQVUsRUFBRSxDQUFDLG1CQUFVLENBQUM7cUJBQzNCLENBQUM7O3NDQUFBO2dCQW9HRix5QkFBQztZQUFELENBbkdBLEFBbUdDLElBQUE7WUFuR0QsbURBbUdDLENBQUEiLCJmaWxlIjoicmVwb3J0LWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDQtMDEuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQYXRpZW50fSBmcm9tICcuL1BhdGllbnQnO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHtSZXBvcnR9IGZyb20gXCIuL3JlcG9ydFwiO1xuaW1wb3J0IHtSb3V0ZXJMaW5rfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidyZXBvcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3JlcG9ydC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSFRUUFNlcnZpY2UsUm91dGVyTGlua10sXG4gICAgZGlyZWN0aXZlczogW1JvdXRlckxpbmtdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRBZGRDb21wb25lbnR7XG5cbiAgICByZXBvcnRzOiBSZXBvcnRbXSA9IFtdO1xuICAgIG5leHRyX2lkOm51bWJlcjtcbiAgICBwYXRpZW50SWRzOiBudW1iZXJbXTtcbiAgICB2aXRhbElkczogbnVtYmVyW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc1BlcG9ydElkKCk7XG4gICAgICAgIHRoaXMuZ2V0Vml0YWxJZHMoKTtcbiAgICAgICAgdGhpcy5nZXRQYXRpZW50SWRzKCk7XG4gICAgfVxuXG4gICAgcGFyc2VSZXBvcnQoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFJlcG9ydChpdGVtLnJpZCxcbiAgICAgICAgICAgICAgICBpdGVtLmRpYWdub3NpcyxcbiAgICAgICAgICAgICAgICBpdGVtLnJlcG9ydF9kYXRlLFxuICAgICAgICAgICAgICAgIGl0ZW0udmlkLFxuICAgICAgICAgICAgICAgIGl0ZW0ucGlkKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRSZXBvcnQocmlkOiBudW1iZXIsIGRpYWdub3Npczogc3RyaW5nLCByZXBvcnRfZGF0ZTpEYXRlLHZpZDpudW1iZXIsIHBpZDpudW1iZXIpe1xuICAgICAgICBsZXQgcmVwb3J0ID0gbmV3IFJlcG9ydChyaWQsZGlhZ25vc2lzLHJlcG9ydF9kYXRlLHZpZCxwaWQpO1xuICAgICAgICB0aGlzLnJlcG9ydHMucHVzaChyZXBvcnQpO1xuICAgIH1cblxuICAgIHJlbW92ZVJlcG9ydChyZXBvcnQ6UmVwb3J0KXtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5yZXBvcnRzLmluZGV4T2YocmVwb3J0KTtcbiAgICAgICAgdGhpcy5yZXBvcnRzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG5cbiAgICBwb3N0UmVwb3J0KGRpYWdub3NpczpzdHJpbmcsIHllYXI6c3RyaW5nLG1vbnRoOnN0cmluZyxkYXk6c3RyaW5nLCB2aWQsIHBpZCl7XG4gICAgICAgIGxldCByZXBvcnRfZGF0ZSA9IHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheTtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5wb3N0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJpZDogdGhpcy5uZXh0cl9pZCxcbiAgICAgICAgICAgICAgICBkaWFnbm9zaXM6IGRpYWdub3NpcyxcbiAgICAgICAgICAgICAgICByZXBvcnRfZGF0ZTogcmVwb3J0X2RhdGUsXG4gICAgICAgICAgICAgICAgdmlkOiB2aWQsXG4gICAgICAgICAgICAgICAgcGlkOiBwaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncmVwb3J0J1xuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcmVwcm9jZXNzUGVwb3J0SWQoKSB7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UuZ2V0UlF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlUmVwb3J0SWQoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiR0VUIHJlcG9ydCBkYXRhIHByZXByb2Nlc3NpbmcgY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZVJlcG9ydElkKGpzb24pe1xuICAgICAgICBsZXQgcmVwb3J0X2lkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IG5leHRfaWQ6IG51bWJlciA9IDA7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICByZXBvcnRfaWRzLnB1c2goaXRlbS5waWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXBvcnRfaWRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAocmVwb3J0X2lkc1tpXSA+IG5leHRfaWQpIG5leHRfaWQgPSByZXBvcnRfaWRzW2ldXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobmV4dF9pZCArIDEpO1xuICAgICAgICB0aGlzLm5leHRyX2lkID0gbmV4dF9pZCArIDE7XG4gICAgfVxuICAgIGdldFBhdGllbnRJZHMoKSB7XG4gICAgICAgIHRoaXMucGF0aWVudElkcyA9IFtdO1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldFBRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVBhdGllbnRJZHMoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZVBhdGllbnRJZHMoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7dGhpcy5wYXRpZW50SWRzLnB1c2goaXRlbS5waWQpO30pO1xuICAgIH1cblxuICAgIGdldFZpdGFsSWRzKCkge1xuICAgICAgICB0aGlzLnZpdGFsSWRzID0gW107XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UuZ2V0VklRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVZpdGFsSWRzKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VWaXRhbElkcyhqc29uKXtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHt0aGlzLnZpdGFsSWRzLnB1c2goaXRlbS52aWQpfSlcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

