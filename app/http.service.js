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
                HTTPService.prototype.getQuery = function () {
                    return this.http.get("http://www.localhost:3002/visit").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getEQuery = function () {
                    return this.http.get("http://www.localhost:3002/equipment").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getPQuery = function () {
                    return this.http.get("http://www.localhost:3002/patient").map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getSQuery = function () {
                    return this.http.get("http://www.localhost:3002/staff").map(function (res) { return res.json(); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQ0MscUJBQW9CLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztnQkFFN0IsQ0FBQztnQkFDRCw4QkFBUSxHQUFSO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDaEYsQ0FBQztnQkFDRCwrQkFBUyxHQUFUO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDcEYsQ0FBQztnQkFDRCwrQkFBUyxHQUFUO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDbEYsQ0FBQztnQkFDRCwrQkFBUyxHQUFUO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDaEYsQ0FBQztnQkFFRCwwQkFBSSxHQUFKLFVBQUssT0FBTyxFQUFDLEtBQUs7b0JBQ2pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25DLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQztvQkFDbEIsSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztvQkFDdkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztvQkFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29CQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEdBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzt5QkFDOUUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQTNCRjtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkE2QmIsa0JBQUM7WUFBRCxDQTVCQSxBQTRCQyxJQUFBO1lBNUJELHFDQTRCQyxDQUFBIiwiZmlsZSI6Imh0dHAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL1J4JztcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIVFRQU2VydmljZXtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApe1xuXG5cdH1cblx0Z2V0UXVlcnkoKXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly93d3cubG9jYWxob3N0OjMwMDIvdmlzaXRcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRFUXVlcnkoKXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly93d3cubG9jYWxob3N0OjMwMDIvZXF1aXBtZW50XCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0UFF1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vd3d3LmxvY2FsaG9zdDozMDAyL3BhdGllbnRcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRTUXVlcnkoKXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly93d3cubG9jYWxob3N0OjMwMDIvc3RhZmZcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXG5cdHBvc3QoanN0cmluZyx0YWJsZSl7XG5cdFx0dmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShqc3RyaW5nKTtcblx0XHR2YXIga2V5ID0gXCJqc29uPVwiO1xuXHRcdHZhciBwYXJhbSA9IGtleSArIGpzb247XG5cdFx0dmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG5cdFx0Y29uc29sZS5sb2coXCJzZW5kaW5nIHBvc3QgcmVxdWVzdFwiKTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi8nK3RhYmxlLCBwYXJhbSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuXHRcdFx0Lm1hcChyZXM9PnJlcy5qc29uKCkpO1xuXHR9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
