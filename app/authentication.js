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
                    /*
                     var json = JSON.stringify({
                     username:username,
                     password:password
                     });
                     var key = "json=";
                     var param = key + json;
                     var headers = new Headers();
                     headers.append('Content-Type', 'application/x-www-form-urlencoded');
                     console.log("sending post request");
                     return this.http.post('http://localhost:3002/user', param, {headers: headers})
                     .map((res : any) => {
                     let data = res.json();
                     this.token = data.token;
                     localStorage.setItem('token', this.token);
                     Observable.of('token');
                     });
                     */
                    var un = localStorage.getItem('uns');
                    var pw = localStorage.getItem('pws');
                    if (username === un && password === pw) {
                        this.token = 'token';
                        localStorage.setItem('token', this.token);
                        return Observable_1.Observable.of('token');
                    }
                    return Observable_1.Observable.throw('authentication failure');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUdJLHdCQUFvQixJQUFTO29CQUFULFNBQUksR0FBSixJQUFJLENBQUs7Z0JBQzdCLENBQUM7Z0JBR0QsOEJBQUssR0FBTCxVQUFNLFFBQWdCLEVBQUUsUUFBZ0I7b0JBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFpQkc7b0JBQ0gsSUFBSSxFQUFFLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckMsSUFBSSxFQUFFLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLEVBQUUsSUFBSSxRQUFRLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7d0JBQ3JCLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDMUMsTUFBTSxDQUFDLHVCQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNsQyxDQUFDO29CQUVELE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUV0RCxDQUFDO2dCQUVELCtCQUFNLEdBQU47b0JBQ0k7Ozs7Ozs7Ozs7O3VCQVdHO29CQUVILElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO29CQUN2QixZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUVqQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBekRMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQTBEYixxQkFBQztZQUFELENBekRBLEFBeURDLElBQUE7WUF6REQsMkNBeURDLENBQUEiLCJmaWxlIjoiYXV0aGVudGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhdXRoZW50aWNhdGlvbi50c1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtIZWFkZXJzLCBIdHRwfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb24ge1xuICAgIHRva2VuOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCkge1xuICAgIH1cblxuXG4gICAgbG9naW4odXNlcm5hbWU6IFN0cmluZywgcGFzc3dvcmQ6IFN0cmluZykge1xuICAgICAgICAvKlxuICAgICAgICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICB1c2VybmFtZTp1c2VybmFtZSxcbiAgICAgICAgIHBhc3N3b3JkOnBhc3N3b3JkXG4gICAgICAgICB9KTtcbiAgICAgICAgIHZhciBrZXkgPSBcImpzb249XCI7XG4gICAgICAgICB2YXIgcGFyYW0gPSBrZXkgKyBqc29uO1xuICAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBwb3N0IHJlcXVlc3RcIik7XG4gICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi91c2VyJywgcGFyYW0sIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgIC5tYXAoKHJlcyA6IGFueSkgPT4ge1xuICAgICAgICAgbGV0IGRhdGEgPSByZXMuanNvbigpO1xuICAgICAgICAgdGhpcy50b2tlbiA9IGRhdGEudG9rZW47XG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0aGlzLnRva2VuKTtcbiAgICAgICAgIE9ic2VydmFibGUub2YoJ3Rva2VuJyk7XG4gICAgICAgICB9KTtcbiAgICAgICAgICovXG4gICAgICAgIHZhciB1biA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bnMnKTtcbiAgICAgICAgdmFyIHB3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3B3cycpO1xuICAgICAgICBpZiAodXNlcm5hbWUgPT09IHVuICYmIHBhc3N3b3JkID09PSBwdykge1xuICAgICAgICAgICAgdGhpcy50b2tlbiA9ICd0b2tlbic7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0aGlzLnRva2VuKTtcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKCd0b2tlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coJ2F1dGhlbnRpY2F0aW9uIGZhaWx1cmUnKTtcblxuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgLypcbiAgICAgICAgICogSWYgd2UgaGFkIGEgbG9naW4gYXBpLCB3ZSB3b3VsZCBoYXZlIGRvbmUgc29tZXRoaW5nIGxpa2UgdGhpc1xuICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWcuc2VydmVyVXJsICsgJy9hdXRoL2xvZ291dCcsIHtcbiAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICd4LXNlY3VyaXR5LXRva2VuJzogdGhpcy50b2tlblxuICAgICAgICAgfSlcbiAgICAgICAgIH0pXG4gICAgICAgICAubWFwKChyZXMgOiBhbnkpID0+IHtcbiAgICAgICAgIHRoaXMudG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgIH0pO1xuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLnRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcblxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0cnVlKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
