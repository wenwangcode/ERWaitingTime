System.register(['angular2/http', 'angular2/core', 'rxjs/Observable'], function(exports_1, context_1) {
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
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            // import 'rxjs/add/operator/map';
            // import 'rxjs/Rx';
            HTTPService = (function () {
                function HTTPService(http) {
                    this.http = http;
                }
                HTTPService.prototype.getAllFromTable = function (table) {
                    console.log("getAllFromTable called with parameter: '" + table + "'");
                    return this.http.get("http://localhost:3002/" + table)
                        .map(function (response) { return response.json(); }).do(function (response) { return console.log(response); })
                        .catch(this.handleError);
                };
                // getFromTableById(table: string, id: number) {
                // 	console.log("calling getFromTableById");
                // 	return this.http.get("http://localhost:3002/" + table)
                // 		.map(response => response.json())
                // 		.catch(this.handleError);
                // }
                // private getObjectById(table: string, id, json) {
                // 	console.log("Calling getObjectById");
                // 	let id_prefix;
                // 	if (table == 'patient') {
                // 		id_prefix = 'pid';
                // 	}
                // 	console.log("The id prefix is: " + id_prefix);
                // 	json.forEach(item => {
                // 		console.log(item, item[id_prefix]);
                // 		if (item[id_prefix] == id) {
                // 			console.log("Correctly selected the item with id: " + id);
                // 			console.log(item);
                // 			return item;
                // 		}
                // 	});
                // }
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
                    return this.http.get('http://localhost:3002/patient/delete/' + input)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                HTTPService.prototype.getsavg = function (input) {
                    return this.http.get('http://localhost:3002/staff/avg/' + input).map(function (res) { return res.json(); });
                };
                HTTPService.prototype.getMaxVital = function () {
                    return this.http.get('http://localhost:3002/vital/max').map(function (res) { return res.json(); });
                };
                HTTPService.prototype.updatePatient_http = function (input, pid) {
                    var json = JSON.stringify(input);
                    var key = "json=";
                    var param = key + json;
                    console.log(param);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this.http.post('http://localhost:3002/patient/update/' + pid, param, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                //Object {pid: 8, p_lname: "werwer", p_fname: "werwer", is_male: 1, dob: "2011-03-04"}
                HTTPService.prototype.post = function (jstring, table) {
                    console.log(jstring);
                    var json = JSON.stringify(jstring);
                    console.log(json);
                    var key = "json=";
                    var param = key + json;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    console.log("sending post request");
                    return this.http.post('http://localhost:3002/' + table, param, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
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

//# sourceMappingURL=data:application/json;base64,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S0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkE5R0Y7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBZ0hiLGtCQUFDO1lBQUQsQ0EvR0EsQUErR0MsSUFBQTtZQS9HRCxxQ0ErR0MsQ0FBQSIsImZpbGUiOiJodHRwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIFJlc3BvbnNlLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG4vLyBpbXBvcnQgJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSFRUUFNlcnZpY2V7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKXtcblx0fVxuXG5cdGdldEFsbEZyb21UYWJsZSh0YWJsZTogc3RyaW5nKXtcblx0XHRjb25zb2xlLmxvZyhcImdldEFsbEZyb21UYWJsZSBjYWxsZWQgd2l0aCBwYXJhbWV0ZXI6ICdcIiArIHRhYmxlICsgXCInXCIpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL1wiICsgdGFibGUpXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkuZG8ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxuXHRcdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHR9XG5cblx0Ly8gZ2V0RnJvbVRhYmxlQnlJZCh0YWJsZTogc3RyaW5nLCBpZDogbnVtYmVyKSB7XG5cdC8vIFx0Y29uc29sZS5sb2coXCJjYWxsaW5nIGdldEZyb21UYWJsZUJ5SWRcIik7XG5cdC8vIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvXCIgKyB0YWJsZSlcblx0Ly8gXHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuXHQvLyBcdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXHQvLyB9XG5cblx0Ly8gcHJpdmF0ZSBnZXRPYmplY3RCeUlkKHRhYmxlOiBzdHJpbmcsIGlkLCBqc29uKSB7XG5cdC8vIFx0Y29uc29sZS5sb2coXCJDYWxsaW5nIGdldE9iamVjdEJ5SWRcIik7XG5cdC8vIFx0bGV0IGlkX3ByZWZpeDtcblx0Ly8gXHRpZiAodGFibGUgPT0gJ3BhdGllbnQnKSB7XG5cdC8vIFx0XHRpZF9wcmVmaXggPSAncGlkJztcblx0Ly8gXHR9XG5cdC8vIFx0Y29uc29sZS5sb2coXCJUaGUgaWQgcHJlZml4IGlzOiBcIiArIGlkX3ByZWZpeCk7XG5cdC8vIFx0anNvbi5mb3JFYWNoKGl0ZW0gPT4ge1xuXHQvLyBcdFx0Y29uc29sZS5sb2coaXRlbSwgaXRlbVtpZF9wcmVmaXhdKTtcblx0Ly8gXHRcdGlmIChpdGVtW2lkX3ByZWZpeF0gPT0gaWQpIHtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coXCJDb3JyZWN0bHkgc2VsZWN0ZWQgdGhlIGl0ZW0gd2l0aCBpZDogXCIgKyBpZCk7XG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKGl0ZW0pO1xuXHQvLyBcdFx0XHRyZXR1cm4gaXRlbTtcblx0Ly8gXHRcdH1cblx0Ly8gXHR9KTtcblx0Ly8gfVxuXHRcblx0cHJpdmF0ZSBoYW5kbGVFcnJvciAoZXJyb3I6IFJlc3BvbnNlKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcblx0fVxuXG5cdGdldFZRdWVyeSgpe1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL3Zpc2l0XCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0RVF1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvZXF1aXBtZW50XCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0UFF1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvcGF0aWVudFwiKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdGdldFNRdWVyeSgpe1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL3N0YWZmXCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0UlF1ZXJ5KCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvcmVwb3J0XCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0VklRdWVyeSgpe1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL3ZpdGFsXCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0UFJRdWVyeSgpe1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL3ByZXNjcmlwdGlvblwiKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdGpvaW5wdigpe1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL3BhdGllbnRfdmlzaXRcIikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRqb2lucHIoKXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9wYXRpZW50X3JlcG9ydFwiKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdHNlbGVjdHllYXIoeWVhcil7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9zdGFmZi8nK3llYXIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0ZmluZHBpZChlaWRsaXN0KXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL3V0aWxpemVfZXF1aXAvJytlaWRsaXN0KS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdGRlbGV0ZShpbnB1dCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9wYXRpZW50L2RlbGV0ZS8nK2lucHV0KVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSlcblx0XHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0fVxuXHRnZXRzYXZnKGlucHV0KXtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL3N0YWZmL2F2Zy8nK2lucHV0KS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdGdldE1heFZpdGFsKCl7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi92aXRhbC9tYXgnKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdHVwZGF0ZVBhdGllbnRfaHR0cChpbnB1dCwgcGlkKXtcblx0XHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGlucHV0KTtcblx0XHR2YXIga2V5ID0gXCJqc29uPVwiO1xuXHRcdHZhciBwYXJhbSA9IGtleSArIGpzb247XG5cdFx0Y29uc29sZS5sb2cocGFyYW0pO1xuXHRcdHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL3BhdGllbnQvdXBkYXRlLycrIHBpZCwgcGFyYW0sIHtoZWFkZXJzOiBoZWFkZXJzfSlcblx0XHRcdC5tYXAocmVzPT5yZXMuanNvbigpKTtcblx0fVxuXHQvL09iamVjdCB7cGlkOiA4LCBwX2xuYW1lOiBcIndlcndlclwiLCBwX2ZuYW1lOiBcIndlcndlclwiLCBpc19tYWxlOiAxLCBkb2I6IFwiMjAxMS0wMy0wNFwifVxuXG5cblx0cG9zdChqc3RyaW5nLHRhYmxlKXtcblx0XHRjb25zb2xlLmxvZyhqc3RyaW5nKTtcblx0XHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGpzdHJpbmcpO1xuXHRcdGNvbnNvbGUubG9nKGpzb24pO1xuXHRcdHZhciBrZXkgPSBcImpzb249XCI7XG5cdFx0dmFyIHBhcmFtID0ga2V5ICsganNvbjtcblx0XHR2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcblx0XHRjb25zb2xlLmxvZyhcInNlbmRpbmcgcG9zdCByZXF1ZXN0XCIpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAyLycrdGFibGUsIHBhcmFtLCB7aGVhZGVyczogaGVhZGVyc30pXG5cdFx0XHQubWFwKHJlcz0+cmVzLmpzb24oKSlcblx0XHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcblx0fVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
