System.register(['angular2/core', "angular2/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var Authentication;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Authentication = (function () {
                function Authentication() {
                    this.token = localStorage.getItem('token');
                }
                Authentication.prototype.login = function (username, password) {
                    var _this = this;
                    fetch('http://localhost:3001/sessions/create', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: username, password: password
                        })
                    })
                        .then(status)
                        .then(json)
                        .then(function (response) {
                        // Once we get the JWT in the response, we save it into localStorage
                        localStorage.setItem('jwt', response.id_token);
                        // and then we redirect the user to the home
                        _this.router.parent.navigate('/home');
                    })
                        .catch(function (error) {
                        alert(error.message);
                        console.log(error.message);
                    });
                };
                Authentication.prototype.logout = function () {
                    var _this = this;
                    return this.http.get(this.config.serverUrl + '/auth/logout', {
                        headers: new http_1.Headers({
                            'x-security-token': this.token
                        })
                    })
                        .map(function (res) {
                        _this.token = undefined;
                        localStorage.removeItem('token');
                    });
                };
                Authentication = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Authentication);
                return Authentication;
            }());
            exports_1("Authentication", Authentication);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBSUk7b0JBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUVELDhCQUFLLEdBQUwsVUFBTSxRQUFnQixFQUFFLFFBQWdCO29CQUF4QyxpQkF1QkM7b0JBdEJHLEtBQUssQ0FBQyx1Q0FBdUMsRUFBRTt3QkFDM0MsTUFBTSxFQUFFLE1BQU07d0JBQ2QsT0FBTyxFQUFFOzRCQUNMLFFBQVEsRUFBRSxrQkFBa0I7NEJBQzVCLGNBQWMsRUFBRSxrQkFBa0I7eUJBQ3JDO3dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDOzRCQUNqQixVQUFBLFFBQVEsRUFBRSxVQUFBLFFBQVE7eUJBQ3JCLENBQUM7cUJBQ0wsQ0FBQzt5QkFDRyxJQUFJLENBQUMsTUFBTSxDQUFDO3lCQUNaLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ1YsSUFBSSxDQUFDLFVBQUMsUUFBUTt3QkFDWCxvRUFBb0U7d0JBQ3BFLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDL0MsNENBQTRDO3dCQUM1QyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3pDLENBQUMsQ0FBQzt5QkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO3dCQUNULEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMvQixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVELCtCQUFNLEdBQU47b0JBQUEsaUJBYUM7b0JBWEksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLGNBQWMsRUFBRTt3QkFDN0QsT0FBTyxFQUFFLElBQUksY0FBTyxDQUFDOzRCQUNyQixrQkFBa0IsRUFBRSxJQUFJLENBQUMsS0FBSzt5QkFDN0IsQ0FBQztxQkFDRCxDQUFDO3lCQUNELEdBQUcsQ0FBQyxVQUFDLEdBQVM7d0JBQ2YsS0FBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7d0JBQ3ZCLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2pDLENBQUMsQ0FBQyxDQUFDO2dCQUdSLENBQUM7Z0JBL0NMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQWdEYixxQkFBQztZQUFELENBL0NBLEFBK0NDLElBQUE7WUEvQ0QsMkNBK0NDLENBQUEiLCJmaWxlIjoiYXV0aGVudGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDMtMjguXG4gKi9cbi8vIGF1dGhlbnRpY2F0aW9uLnRzXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIZWFkZXJzfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uIHtcbiAgICB0b2tlbjogc3RyaW5nO1xuICAgIGh0dHA6SHR0cDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgfVxuXG4gICAgbG9naW4odXNlcm5hbWU6IFN0cmluZywgcGFzc3dvcmQ6IFN0cmluZykge1xuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3Nlc3Npb25zL2NyZWF0ZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSwgcGFzc3dvcmRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihzdGF0dXMpXG4gICAgICAgICAgICAudGhlbihqc29uKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gT25jZSB3ZSBnZXQgdGhlIEpXVCBpbiB0aGUgcmVzcG9uc2UsIHdlIHNhdmUgaXQgaW50byBsb2NhbFN0b3JhZ2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0JywgcmVzcG9uc2UuaWRfdG9rZW4pO1xuICAgICAgICAgICAgICAgIC8vIGFuZCB0aGVuIHdlIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBob21lXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIucGFyZW50Lm5hdmlnYXRlKCcvaG9tZScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcblxuICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWcuc2VydmVyVXJsICsgJy9hdXRoL2xvZ291dCcsIHtcbiAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICd4LXNlY3VyaXR5LXRva2VuJzogdGhpcy50b2tlblxuICAgICAgICAgfSlcbiAgICAgICAgIH0pXG4gICAgICAgICAubWFwKChyZXMgOiBhbnkpID0+IHtcbiAgICAgICAgIHRoaXMudG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgICAgIH0pO1xuXG5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
