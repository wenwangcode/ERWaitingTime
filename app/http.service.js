System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map', 'rxjs/Rx', "rxjs/Observable"], function(exports_1, context_1) {
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
    var http_1, core_1, Observable_1;
    var HTTPService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            HTTPService = (function () {
                function HTTPService(http) {
                    this.http = http;
                }
                HTTPService.prototype.getAllFromTable = function (table) {
                    return this.http.get("http://localhost:3002/" + table)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                HTTPService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                HTTPService.prototype.getVQuery = function () {
                    return this.http.get("http://localhost:3002/visit").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getEQuery = function () {
                    return this.http.get("http://localhost:3002/equipment").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getPQuery = function () {
                    return this.http.get("http://localhost:3002/patient").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getSQuery = function () {
                    return this.http.get("http://localhost:3002/staff").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getRQuery = function () {
                    return this.http.get("http://localhost:3002/report").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getVIQuery = function () {
                    return this.http.get("http://localhost:3002/vital").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getPRQuery = function () {
                    return this.http.get("http://localhost:3002/prescription").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.joinpv = function () {
                    return this.http.get("http://localhost:3002/patient_visit").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.joinpr = function () {
                    return this.http.get("http://localhost:3002/patient_report").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.selectyear = function (year) {
                    return this.http.get('http://localhost:3002/staff/' + year).map(function (res) { return res.json(); });
                };
                HTTPService.prototype.findpid = function (eidlist) {
                    return this.http.get('http://localhost:3002/utilize_equip/' + eidlist).map(function (res) { return res.json(); });
                };
                HTTPService.prototype.delete = function (input) {
                    return this.http.get('http://localhost:3002/patient/delete/' + input).map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getMaxVital = function () {
                    return this.http.get('http://localhost:3002/vital/max').map(function (res) { return res.json(); });
                };
                HTTPService.prototype.post = function (jstring, table) {
                    var json = JSON.stringify(jstring);
                    var key = "json=";
                    var param = key + json;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    console.log("sending post request");
                    return this.http.post('http://localhost:3002/' + table, param, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                HTTPService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPService);
                return HTTPService;
            }());
            exports_1("HTTPService", HTTPService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QUM7Z0JBQ2hGLENBQUM7Z0JBR0QsMEJBQUksR0FBSixVQUFLLE9BQU8sRUFBQyxLQUFLO29CQUNqQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNuQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUM7b0JBQ2xCLElBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7b0JBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztvQkFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixHQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7eUJBQzlFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkFsRUY7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBb0ViLGtCQUFDO1lBQUQsQ0FuRUEsQUFtRUMsSUFBQTtZQW5FRCxxQ0FtRUMsQ0FBQSIsImZpbGUiOiJodHRwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIVFRQU2VydmljZXtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApe1xuXHR9XG5cblx0Z2V0QWxsRnJvbVRhYmxlKHRhYmxlOiBzdHJpbmcpe1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL1wiICsgdGFibGUpXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0fVxuXHRcblx0cHJpdmF0ZSBoYW5kbGVFcnJvciAoZXJyb3I6IFJlc3BvbnNlKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcblx0fVxuXG5cdGdldFZRdWVyeSgpe1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL3Zpc2l0XCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0RVF1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvZXF1aXBtZW50XCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0UFF1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvcGF0aWVudFwiKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdGdldFNRdWVyeSgpe1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL3N0YWZmXCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0UlF1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvcmVwb3J0XCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0VklRdWVyeSgpe1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL3ZpdGFsXCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0UFJRdWVyeSgpe1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL3ByZXNjcmlwdGlvblwiKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdGpvaW5wdigpe1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL3BhdGllbnRfdmlzaXRcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRqb2lucHIoKXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9wYXRpZW50X3JlcG9ydFwiKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdHNlbGVjdHllYXIoeWVhcil7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9zdGFmZi8nK3llYXIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0ZmluZHBpZChlaWRsaXN0KXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL3V0aWxpemVfZXF1aXAvJytlaWRsaXN0KS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdGRlbGV0ZShpbnB1dCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9wYXRpZW50L2RlbGV0ZS8nK2lucHV0KS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdGdldE1heFZpdGFsKCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi92aXRhbC9tYXgnKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cblxuXHRwb3N0KGpzdHJpbmcsdGFibGUpe1xuXHRcdHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoanN0cmluZyk7XG5cdFx0dmFyIGtleSA9IFwianNvbj1cIjtcblx0XHR2YXIgcGFyYW0gPSBrZXkgKyBqc29uO1xuXHRcdHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXHRcdGNvbnNvbGUubG9nKFwic2VuZGluZyBwb3N0IHJlcXVlc3RcIik7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDIvJyt0YWJsZSwgcGFyYW0sIHtoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdC5tYXAocmVzPT5yZXMuanNvbigpKTtcblx0fVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
