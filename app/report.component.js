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
    var ReportComponent;
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
            ReportComponent = (function () {
                function ReportComponent(httpService) {
                    this.httpService = httpService;
                    this.reports = [];
                }
                ReportComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.httpService.getRQuery().subscribe(function (data) { return _this.parseReport(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                ReportComponent.prototype.parseReport = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addReport(item.rid, item.diagnosis, item.report_date, item.vid, item.pid);
                    });
                };
                ReportComponent.prototype.addReport = function (rid, diagnosis, report_date, vid, pid) {
                    var report = new report_1.Report(rid, diagnosis, report_date, vid, pid);
                    this.reports.push(report);
                };
                ReportComponent.prototype.removeReport = function (report) {
                    var index = this.reports.indexOf(report);
                    this.reports.splice(index, 1);
                };
                ReportComponent = __decorate([
                    core_1.Component({
                        selector: 'report',
                        templateUrl: 'templates/report.html',
                        providers: [http_service_1.HTTPService]
                    }),
                    router_1.CanActivate(function () { return is_loggedin_1.isLoggedin(); }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], ReportComponent);
                return ReportComponent;
            }());
            exports_1("ReportComponent", ReportComponent);
        }
    }
});
//# sourceMappingURL=report.component.js.map