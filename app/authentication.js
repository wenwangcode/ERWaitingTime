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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUdJLHdCQUFvQixJQUFTO29CQUFULFNBQUksR0FBSixJQUFJLENBQUs7Z0JBQzdCLENBQUM7Z0JBRUQsOEJBQUssR0FBTCxVQUFNLFFBQWdCLEVBQUUsUUFBZ0I7b0JBQXhDLGlCQXdCQztvQkF0QkksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQ2xFLFVBQVUsRUFBRSxRQUFRO3dCQUNwQixVQUFVLEVBQUUsUUFBUTtxQkFDbkIsQ0FBQyxFQUFFO3dCQUNSLE9BQU8sRUFBRSxJQUFJLGNBQU8sQ0FBQzs0QkFDckIsY0FBYyxFQUFFLGtCQUFrQjt5QkFDakMsQ0FBQztxQkFDRCxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBUzt3QkFDakIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUN0QixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQ3hCLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUMsQ0FBQyxDQUFDLENBQUM7b0JBRUg7Ozs7Ozs7O3FCQVFDO2dCQUNOLENBQUM7Z0JBRUQsK0JBQU0sR0FBTjtvQkFDSTs7Ozs7Ozs7Ozs7O3VCQVlHO29CQUVILElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO29CQUN2QixZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUVqQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBcERMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQXFEYixxQkFBQztZQUFELENBcERBLEFBb0RDLElBQUE7WUFwREQsMkNBb0RDLENBQUEiLCJmaWxlIjoiYXV0aGVudGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhdXRoZW50aWNhdGlvbi50c1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtIZWFkZXJzLCBIdHRwfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb24ge1xuICAgIHRva2VuOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCkge1xuICAgIH1cblxuICAgIGxvZ2luKHVzZXJuYW1lOiBTdHJpbmcsIHBhc3N3b3JkOiBTdHJpbmcpIHtcblxuICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vd3d3LmxvY2FsaG9zdDozMDAyL3VzZXInLEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICBcInVzZXJuYW1lXCI6IHVzZXJuYW1lLFxuICAgICAgICAgICAgIFwicGFzc3dvcmRcIjogcGFzc3dvcmRcbiAgICAgICAgICAgICB9KSwge1xuICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoe1xuICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgfSlcbiAgICAgICAgIH0pLm1hcCgocmVzIDogYW55KSA9PiB7XG4gICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgICB0aGlzLnRva2VuID0gZGF0YS50b2tlbjtcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRoaXMudG9rZW4pO1xuICAgICAgICAgfSk7XG5cbiAgICAgICAgIC8qXG4gICAgICAgIGlmICh1c2VybmFtZSA9PT0gJ3Rlc3QnICYmIHBhc3N3b3JkID09PSAndGVzdCcpIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSAndG9rZW4nO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdGhpcy50b2tlbik7XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZigndG9rZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KCdhdXRoZW50aWNhdGlvbiBmYWlsdXJlJyk7XG4gICAgICAgICovXG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICAvKlxuICAgICAgICAgKiBJZiB3ZSBoYWQgYSBsb2dpbiBhcGksIHdlIHdvdWxkIGhhdmUgZG9uZSBzb21ldGhpbmcgbGlrZSB0aGlzXG5cbiAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlnLnNlcnZlclVybCArICcvYXV0aC9sb2dvdXQnLCB7XG4gICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7XG4gICAgICAgICAneC1zZWN1cml0eS10b2tlbic6IHRoaXMudG9rZW5cbiAgICAgICAgIH0pXG4gICAgICAgICB9KVxuICAgICAgICAgLm1hcCgocmVzIDogYW55KSA9PiB7XG4gICAgICAgICB0aGlzLnRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgICB9KTtcbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy50b2tlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG5cbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YodHJ1ZSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
