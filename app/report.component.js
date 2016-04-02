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
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], ReportComponent);
                return ReportComponent;
            }());
            exports_1("ReportComponent", ReportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFJSSx5QkFBb0IsV0FBd0I7b0JBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUY1QyxZQUFPLEdBQWEsRUFBRSxDQUFDO2dCQUd2QixDQUFDO2dCQUVELGtDQUFRLEdBQVI7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQ2xDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBdEIsQ0FBc0IsRUFDOUIsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQztnQkFDTixDQUFDO2dCQUVELHFDQUFXLEdBQVgsVUFBWSxJQUFJO29CQUFoQixpQkFRQztvQkFQRyxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQUEsSUFBSTt3QkFDZCxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQ25CLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLEdBQUcsRUFDUixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xCLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRUQsbUNBQVMsR0FBVCxVQUFVLEdBQVcsRUFBRSxTQUFpQixFQUFFLFdBQWdCLEVBQUMsR0FBVSxFQUFFLEdBQVU7b0JBQzdFLElBQUksTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsc0NBQVksR0FBWixVQUFhLE1BQWE7b0JBQ3RCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBdENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLFFBQVE7d0JBQ2pCLFdBQVcsRUFBRSx1QkFBdUI7d0JBQ3BDLFNBQVMsRUFBQyxDQUFDLDBCQUFXLENBQUM7cUJBQzFCLENBQUM7O21DQUFBO2dCQW9DRixzQkFBQztZQUFELENBbkNBLEFBbUNDLElBQUE7WUFuQ0QsNkNBbUNDLENBQUEiLCJmaWxlIjoicmVwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKb3kgb24gMjAxNi0wNC0wMS5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BhdGllbnR9IGZyb20gJy4vUGF0aWVudCc7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5pbXBvcnQge1JlcG9ydH0gZnJvbSBcIi4vcmVwb3J0XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidyZXBvcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3JlcG9ydC5odG1sJyxcbiAgICBwcm92aWRlcnM6W0hUVFBTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRDb21wb25lbnR7XG5cbiAgICByZXBvcnRzOiBSZXBvcnRbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSFRUUFNlcnZpY2Upe1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldFJRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVJlcG9ydChkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBhcnNlUmVwb3J0KGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRSZXBvcnQoaXRlbS5yaWQsXG4gICAgICAgICAgICAgICAgaXRlbS5kaWFnbm9zaXMsXG4gICAgICAgICAgICAgICAgaXRlbS5yZXBvcnRfZGF0ZSxcbiAgICAgICAgICAgICAgICBpdGVtLnZpZCxcbiAgICAgICAgICAgICAgICBpdGVtLnBpZCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkUmVwb3J0KHJpZDogbnVtYmVyLCBkaWFnbm9zaXM6IHN0cmluZywgcmVwb3J0X2RhdGU6RGF0ZSx2aWQ6bnVtYmVyLCBwaWQ6bnVtYmVyKXtcbiAgICAgICAgbGV0IHJlcG9ydCA9IG5ldyBSZXBvcnQocmlkLGRpYWdub3NpcyxyZXBvcnRfZGF0ZSx2aWQscGlkKTtcbiAgICAgICAgdGhpcy5yZXBvcnRzLnB1c2gocmVwb3J0KTtcbiAgICB9XG5cbiAgICByZW1vdmVSZXBvcnQocmVwb3J0OlJlcG9ydCl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucmVwb3J0cy5pbmRleE9mKHJlcG9ydCk7XG4gICAgICAgIHRoaXMucmVwb3J0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuICAgIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
