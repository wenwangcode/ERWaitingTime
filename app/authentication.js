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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUdJLHdCQUFvQixJQUFTO29CQUFULFNBQUksR0FBSixJQUFJLENBQUs7Z0JBQzdCLENBQUM7Z0JBR0QsOEJBQUssR0FBTCxVQUFNLFFBQWdCLEVBQUUsUUFBZ0I7b0JBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBa0JHO29CQUNILElBQUksRUFBRSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JDLElBQUksRUFBRSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxFQUFFLElBQUksUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO3dCQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzFDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbEMsQ0FBQztvQkFFRCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztnQkFFdEQsQ0FBQztnQkFFRCwrQkFBTSxHQUFOO29CQUNJOzs7Ozs7Ozs7Ozs7dUJBWUc7b0JBRUgsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7b0JBQ3ZCLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRWpDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkEzREw7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBNERiLHFCQUFDO1lBQUQsQ0EzREEsQUEyREMsSUFBQTtZQTNERCwyQ0EyREMsQ0FBQSIsImZpbGUiOiJhdXRoZW50aWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGF1dGhlbnRpY2F0aW9uLnRzXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge0hlYWRlcnMsIEh0dHB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbiB7XG4gICAgdG9rZW46IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKSB7XG4gICAgfVxuXG5cbiAgICBsb2dpbih1c2VybmFtZTogU3RyaW5nLCBwYXNzd29yZDogU3RyaW5nKSB7XG4gICAgICAgIC8qXG4gICAgICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgdXNlcm5hbWU6dXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDpwYXNzd29yZFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGtleSA9IFwianNvbj1cIjtcbiAgICAgICAgdmFyIHBhcmFtID0ga2V5ICsganNvbjtcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgcG9zdCByZXF1ZXN0XCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi91c2VyJywgcGFyYW0sIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgIC5tYXAoKHJlcyA6IGFueSkgPT4ge1xuICAgICAgICAgbGV0IGRhdGEgPSByZXMuanNvbigpO1xuICAgICAgICAgdGhpcy50b2tlbiA9IGRhdGEudG9rZW47XG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0aGlzLnRva2VuKTtcbiAgICAgICAgICAgICAgICBPYnNlcnZhYmxlLm9mKCd0b2tlbicpO1xuICAgICAgICAgfSk7XG5cbiAgICAgICAgICovXG4gICAgICAgIHZhciB1biA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bnMnKTtcbiAgICAgICAgdmFyIHB3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3B3cycpO1xuICAgICAgICBpZiAodXNlcm5hbWUgPT09IHVuICYmIHBhc3N3b3JkID09PSBwdykge1xuICAgICAgICAgICAgdGhpcy50b2tlbiA9ICd0b2tlbic7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0aGlzLnRva2VuKTtcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKCd0b2tlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coJ2F1dGhlbnRpY2F0aW9uIGZhaWx1cmUnKTtcblxuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgLypcbiAgICAgICAgICogSWYgd2UgaGFkIGEgbG9naW4gYXBpLCB3ZSB3b3VsZCBoYXZlIGRvbmUgc29tZXRoaW5nIGxpa2UgdGhpc1xuXG4gICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmNvbmZpZy5zZXJ2ZXJVcmwgKyAnL2F1dGgvbG9nb3V0Jywge1xuICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAgJ3gtc2VjdXJpdHktdG9rZW4nOiB0aGlzLnRva2VuXG4gICAgICAgICB9KVxuICAgICAgICAgfSlcbiAgICAgICAgIC5tYXAoKHJlcyA6IGFueSkgPT4ge1xuICAgICAgICAgdGhpcy50b2tlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgICAgICAgfSk7XG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMudG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHRydWUpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
