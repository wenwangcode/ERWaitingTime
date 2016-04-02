System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var http_1, core_1;
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
            function (_2) {}],
        execute: function() {
            HTTPService = (function () {
                function HTTPService(http) {
                    this.http = http;
                }
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
                HTTPService.prototype.getUQuery = function () {
                    return this.http.get("http://localhost:3002/user").map(function (res) { return res.json(); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQ0MscUJBQW9CLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztnQkFFN0IsQ0FBQztnQkFDRCwrQkFBUyxHQUFUO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDNUUsQ0FBQztnQkFDRCwrQkFBUyxHQUFUO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDaEYsQ0FBQztnQkFDRCwrQkFBUyxHQUFUO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDOUUsQ0FBQztnQkFDRCwrQkFBUyxHQUFUO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDNUUsQ0FBQztnQkFDRCwrQkFBUyxHQUFUO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDM0UsQ0FBQztnQkFFRCwwQkFBSSxHQUFKLFVBQUssT0FBTyxFQUFDLEtBQUs7b0JBQ2pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25DLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQztvQkFDbEIsSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztvQkFDdkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztvQkFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29CQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEdBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzt5QkFDOUUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQTlCRjtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkFnQ2Isa0JBQUM7WUFBRCxDQS9CQSxBQStCQyxJQUFBO1lBL0JELHFDQStCQyxDQUFBIiwiZmlsZSI6Imh0dHAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL1J4JztcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIVFRQU2VydmljZXtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApe1xuXG5cdH1cblx0Z2V0VlF1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvdmlzaXRcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRFUXVlcnkoKXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9lcXVpcG1lbnRcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRQUXVlcnkoKXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9wYXRpZW50XCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0U1F1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvc3RhZmZcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRVUXVlcnkoKXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi91c2VyXCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblxuXHRwb3N0KGpzdHJpbmcsdGFibGUpe1xuXHRcdHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoanN0cmluZyk7XG5cdFx0dmFyIGtleSA9IFwianNvbj1cIjtcblx0XHR2YXIgcGFyYW0gPSBrZXkgKyBqc29uO1xuXHRcdHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXHRcdGNvbnNvbGUubG9nKFwic2VuZGluZyBwb3N0IHJlcXVlc3RcIik7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDIvJyt0YWJsZSwgcGFyYW0sIHtoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdC5tYXAocmVzPT5yZXMuanNvbigpKTtcblx0fVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
