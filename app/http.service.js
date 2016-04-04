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
//# sourceMappingURL=http.service.js.map