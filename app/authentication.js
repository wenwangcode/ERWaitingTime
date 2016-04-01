System.register(['angular2/core', "rxjs/Observable", "angular2/http", 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, Observable_1, http_1;
    var Authentication;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            Authentication = (function () {
                function Authentication(http) {
                    this.http = http;
                }
                Authentication.prototype.login = function (username, password) {
                    var _this = this;
                    return this.http.post('http://www.localhost:3002/user', JSON.stringify({
                        "username": username,
                        "password": password
                    }), {
                        headers: new http_1.Headers({
                            'Content-Type': 'application/json'
                        })
                    }).map(function (res) {
                        var data = res.json();
                        _this.token = data.token;
                        localStorage.setItem('token', _this.token);
                    });
                    /*
                   if (username === 'test' && password === 'test') {
                       this.token = 'token';
                       localStorage.setItem('token', this.token);
                       return Observable.of('token');
                   }
           
                   return Observable.throw('authentication failure');
                   */
                };
                Authentication.prototype.logout = function () {
                    /*
                     * If we had a login api, we would have done something like this
            
                     return this.http.get(this.config.serverUrl + '/auth/logout', {
                     headers: new Headers({
                     'x-security-token': this.token
                     })
                     })
                     .map((res : any) => {
                     this.token = undefined;
                     localStorage.removeItem('token');
                     });
                     */
                    this.token = undefined;
                    localStorage.removeItem('token');
                    return Observable_1.Observable.of(true);
                };
                Authentication = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Authentication);
                return Authentication;
            }());
            exports_1("Authentication", Authentication);
        }
    }
});
//# sourceMappingURL=authentication.js.map