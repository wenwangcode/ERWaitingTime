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
    var http_1, core_1, http_2;
    var HTTPService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
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
                HTTPService.prototype.postPQuery = function (info) {
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post("http://www.localhost:3002/patient", info, {
                        headers: headers
                    });
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
//this.http.post('http://localhost:3001/sessions/create', creds, {
//            headers: headers
//        })
//        .subscribe(
//            data => {
//                this.saveJwt(data.json().id_token);
//                username.value = null;
//                password.value = null;
//            },
//            err => this.logError(err.json().message),
//            () => console.log('Authentication Complete')
//        ); 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUNDLHFCQUFvQixJQUFTO29CQUFULFNBQUksR0FBSixJQUFJLENBQUs7Z0JBRTdCLENBQUM7Z0JBRUQsOEJBQVEsR0FBUjtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ2hGLENBQUM7Z0JBRUQsK0JBQVMsR0FBVDtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ3BGLENBQUM7Z0JBRUQsK0JBQVMsR0FBVDtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ2xGLENBQUM7Z0JBRUQsK0JBQVMsR0FBVDtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ2hGLENBQUM7Z0JBRUQsZ0NBQVUsR0FBVixVQUFXLElBQVk7b0JBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLEVBQUU7d0JBQ2hFLE9BQU8sRUFBRSxPQUFPO3FCQUNoQixDQUFDLENBQUM7Z0JBQ0osQ0FBQztnQkE1QkY7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBNkJiLGtCQUFDO1lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtZQTVCRCxxQ0E0QkMsQ0FBQTs7OztBQUVELGtFQUFrRTtBQUNsRSw4QkFBOEI7QUFDOUIsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQix1QkFBdUI7QUFDdkIscURBQXFEO0FBQ3JELHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsZ0JBQWdCO0FBQ2hCLHVEQUF1RDtBQUN2RCwwREFBMEQ7QUFDMUQsWUFBWSIsImZpbGUiOiJodHRwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge0hlYWRlcnN9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQge1BhdGllbnRSZWdpc3RlckNvbXBvbmVudH0gZnJvbSAncGF0aWVudHJlZ2lzdGVyLmNvbXBvbmVudCc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSFRUUFNlcnZpY2Uge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCkge1xuXG5cdH1cblxuXHRnZXRRdWVyeSgpIHtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly93d3cubG9jYWxob3N0OjMwMDIvdmlzaXRcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXG5cdGdldEVRdWVyeSgpIHtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly93d3cubG9jYWxob3N0OjMwMDIvZXF1aXBtZW50XCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblxuXHRnZXRQUXVlcnkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vd3d3LmxvY2FsaG9zdDozMDAyL3BhdGllbnRcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXG5cdGdldFNRdWVyeSgpIHtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly93d3cubG9jYWxob3N0OjMwMDIvc3RhZmZcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXG5cdHBvc3RQUXVlcnkoaW5mbzogc3RyaW5nKSB7XG5cdFx0bGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly93d3cubG9jYWxob3N0OjMwMDIvcGF0aWVudFwiLCBpbmZvLCB7XG5cdFx0XHRoZWFkZXJzOiBoZWFkZXJzXG5cdFx0fSk7XG5cdH1cbn1cblxuLy90aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3Nlc3Npb25zL2NyZWF0ZScsIGNyZWRzLCB7XG4vLyAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbi8vICAgICAgICB9KVxuLy8gICAgICAgIC5zdWJzY3JpYmUoXG4vLyAgICAgICAgICAgIGRhdGEgPT4ge1xuLy8gICAgICAgICAgICAgICAgdGhpcy5zYXZlSnd0KGRhdGEuanNvbigpLmlkX3Rva2VuKTtcbi8vICAgICAgICAgICAgICAgIHVzZXJuYW1lLnZhbHVlID0gbnVsbDtcbi8vICAgICAgICAgICAgICAgIHBhc3N3b3JkLnZhbHVlID0gbnVsbDtcbi8vICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgZXJyID0+IHRoaXMubG9nRXJyb3IoZXJyLmpzb24oKS5tZXNzYWdlKSxcbi8vICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ0F1dGhlbnRpY2F0aW9uIENvbXBsZXRlJylcbi8vICAgICAgICApOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
