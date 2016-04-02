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
                    var _this = this;
                    this.httpService.getRQuery().subscribe(function (data) { return _this.parseReport(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
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
                ReportAddComponent.prototype.postReport = function (rid, diagnosis, report_date, vid, pid) {
                    this.httpService.post({
                        rid: rid,
                        diagnosis: diagnosis,
                        report_date: report_date,
                        vid: vid,
                        pid: pid
                    }, 'report').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBSUksNEJBQW9CLFdBQXdCO29CQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFGNUMsWUFBTyxHQUFhLEVBQUUsQ0FBQztnQkFHdkIsQ0FBQztnQkFFRCxxQ0FBUSxHQUFSO29CQUFBLGlCQU1DO29CQUxHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUNsQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQXRCLENBQXNCLEVBQzlCLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCx3Q0FBVyxHQUFYLFVBQVksSUFBSTtvQkFBaEIsaUJBUUM7b0JBUEcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUk7d0JBQ2QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUNuQixJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxHQUFHLEVBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUVELHNDQUFTLEdBQVQsVUFBVSxHQUFXLEVBQUUsU0FBaUIsRUFBRSxXQUFnQixFQUFDLEdBQVUsRUFBRSxHQUFVO29CQUM3RSxJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUVELHlDQUFZLEdBQVosVUFBYSxNQUFhO29CQUN0QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVELHVDQUFVLEdBQVYsVUFBVyxHQUFHLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsR0FBRztvQkFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ2pCO3dCQUNJLEdBQUcsRUFBRSxHQUFHO3dCQUNSLFNBQVMsRUFBRSxTQUFTO3dCQUNwQixXQUFXLEVBQUUsV0FBVzt3QkFDeEIsR0FBRyxFQUFFLEdBQUc7d0JBQ1IsR0FBRyxFQUFFLEdBQUc7cUJBQ1gsRUFDRCxRQUFRLENBQ1gsQ0FBQyxTQUFTLENBQ1AsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBVixDQUFVLEVBQ2pCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBdkRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLFFBQVE7d0JBQ2pCLFdBQVcsRUFBRSxpQ0FBaUM7d0JBQzlDLFNBQVMsRUFBQyxDQUFDLDBCQUFXLENBQUM7cUJBQzFCLENBQUM7O3NDQUFBO2dCQW9ERix5QkFBQztZQUFELENBbkRBLEFBbURDLElBQUE7WUFuREQsbURBbURDLENBQUEiLCJmaWxlIjoicmVwb3J0LWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDQtMDEuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQYXRpZW50fSBmcm9tICcuL1BhdGllbnQnO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHtSZXBvcnR9IGZyb20gXCIuL3JlcG9ydFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjoncmVwb3J0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9yZXBvcnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczpbSFRUUFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFJlcG9ydEFkZENvbXBvbmVudHtcblxuICAgIHJlcG9ydHM6IFJlcG9ydFtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UuZ2V0UlF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlUmVwb3J0KGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGFyc2VSZXBvcnQoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFJlcG9ydChpdGVtLnJpZCxcbiAgICAgICAgICAgICAgICBpdGVtLmRpYWdub3NpcyxcbiAgICAgICAgICAgICAgICBpdGVtLnJlcG9ydF9kYXRlLFxuICAgICAgICAgICAgICAgIGl0ZW0udmlkLFxuICAgICAgICAgICAgICAgIGl0ZW0ucGlkKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRSZXBvcnQocmlkOiBudW1iZXIsIGRpYWdub3Npczogc3RyaW5nLCByZXBvcnRfZGF0ZTpEYXRlLHZpZDpudW1iZXIsIHBpZDpudW1iZXIpe1xuICAgICAgICBsZXQgcmVwb3J0ID0gbmV3IFJlcG9ydChyaWQsZGlhZ25vc2lzLHJlcG9ydF9kYXRlLHZpZCxwaWQpO1xuICAgICAgICB0aGlzLnJlcG9ydHMucHVzaChyZXBvcnQpO1xuICAgIH1cblxuICAgIHJlbW92ZVJlcG9ydChyZXBvcnQ6UmVwb3J0KXtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5yZXBvcnRzLmluZGV4T2YocmVwb3J0KTtcbiAgICAgICAgdGhpcy5yZXBvcnRzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG5cbiAgICBwb3N0UmVwb3J0KHJpZCwgZGlhZ25vc2lzLCByZXBvcnRfZGF0ZSwgdmlkLCBwaWQpe1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmlkOiByaWQsXG4gICAgICAgICAgICAgICAgZGlhZ25vc2lzOiBkaWFnbm9zaXMsXG4gICAgICAgICAgICAgICAgcmVwb3J0X2RhdGU6IHJlcG9ydF9kYXRlLFxuICAgICAgICAgICAgICAgIHZpZDogdmlkLFxuICAgICAgICAgICAgICAgIHBpZDogcGlkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3JlcG9ydCdcbiAgICAgICAgKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
