System.register(['angular2/core', './http.service', "./report"], function(exports_1, context_1) {
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
    var core_1, http_service_1, report_1;
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
                        providers: [http_service_1.HTTPService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], ReportAddComponent);
                return ReportAddComponent;
            }());
            exports_1("ReportAddComponent", ReportAddComponent);
        }
    }
});
//# sourceMappingURL=report-add.component.js.map