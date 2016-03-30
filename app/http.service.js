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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQ0MscUJBQW9CLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztnQkFFN0IsQ0FBQztnQkFDRCw4QkFBUSxHQUFSO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDaEYsQ0FBQztnQkFDRCwrQkFBUyxHQUFUO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDcEYsQ0FBQztnQkFDRCwrQkFBUyxHQUFUO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDbEYsQ0FBQztnQkFDRCwrQkFBUyxHQUFUO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDaEYsQ0FBQztnQkFoQkY7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBb0JiLGtCQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCxxQ0FtQkMsQ0FBQSIsImZpbGUiOiJodHRwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9SeCc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSFRUUFNlcnZpY2V7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKXtcblxuXHR9XG5cdGdldFF1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vd3d3LmxvY2FsaG9zdDozMDAyL3Zpc2l0XCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0RVF1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vd3d3LmxvY2FsaG9zdDozMDAyL2VxdWlwbWVudFwiKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdGdldFBRdWVyeSgpe1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL3d3dy5sb2NhbGhvc3Q6MzAwMi9wYXRpZW50XCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0U1F1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vd3d3LmxvY2FsaG9zdDozMDAyL3N0YWZmXCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Ly9wb3N0UFF1ZXJ5KCl7XG5cdC8vXHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vd3d3LmxvY2FsaG9zdDozMDAyL3BhdGllbnRcIiwgSlNPTi5zdHJpbmdpZnkoe1wiaWRcIjogMSwgXCJuYW1lXCI6IFwi0J3QvtCy0YvQtVwifSkse2hlYWRlcnM6aGVhZGVyc30pLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdC8vfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
