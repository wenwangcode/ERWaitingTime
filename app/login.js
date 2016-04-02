System.register(['angular2/core', 'angular2/router', 'angular2/common', './authentication', "./http.service"], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, authentication_1, http_service_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (authentication_1_1) {
                authentication_1 = authentication_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            Login = (function () {
                function Login(fb, auth, router) {
                    this.auth = auth;
                    this.router = router;
                    this.error = false;
                    this.form = fb.group({
                        username: ['', common_1.Validators.required],
                        password: ['', common_1.Validators.required]
                    });
                }
                Login.prototype.onSubmit = function (value) {
                    var _this = this;
                    this.auth.login(value.username, value.password)
                        .subscribe(function (token) { _this.router.navigate(['../Dashboard']); }, function () { _this.error = true; });
                };
                Login.prototype.store = function (unser, pass) {
                    localStorage.setItem('uns', unser);
                    localStorage.setItem('pws', pass);
                    alert("Account successfully registered! Please login.");
                };
                Login = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgIf],
                        templateUrl: '/templates/login.html',
                        providers: [http_service_1.HTTPService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, authentication_1.Authentication, router_1.Router])
                ], Login);
                return Login;
            }());
            exports_1("Login", Login);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQUdJLGVBQVksRUFBZSxFQUFTLElBQW9CLEVBQVMsTUFBYztvQkFBM0MsU0FBSSxHQUFKLElBQUksQ0FBZ0I7b0JBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFEL0UsVUFBSyxHQUFZLEtBQUssQ0FBQztvQkFFbkIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUNqQixRQUFRLEVBQUcsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3BDLFFBQVEsRUFBRyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztxQkFDdkMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsd0JBQVEsR0FBUixVQUFTLEtBQVU7b0JBQW5CLGlCQU1DO29CQUxHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQzt5QkFDMUMsU0FBUyxDQUNOLFVBQUMsS0FBVSxJQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDM0QsY0FBUSxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDL0IsQ0FBQztnQkFDVixDQUFDO2dCQUNELHFCQUFLLEdBQUwsVUFBTSxLQUFLLEVBQUMsSUFBSTtvQkFDWixZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDbkMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ2xDLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQTdCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixVQUFVLEVBQUUsQ0FBRSx3QkFBZSxFQUFFLGFBQUksQ0FBRTt3QkFDckMsV0FBVyxFQUFDLHVCQUF1Qjt3QkFDbkMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztxQkFDM0IsQ0FBQzs7eUJBQUE7Z0JBMEJGLFlBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELHlCQXVCQyxDQUFBIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTI4LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgQ2FuQWN0aXZhdGUsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwLCBOZ0lmfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbn0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbic7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXG4gICAgZGlyZWN0aXZlczogWyBGT1JNX0RJUkVDVElWRVMsIE5nSWYgXSxcbiAgICB0ZW1wbGF0ZVVybDonL3RlbXBsYXRlcy9sb2dpbi5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtIVFRQU2VydmljZV1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIExvZ2luIHtcbiAgICBmb3JtOiBDb250cm9sR3JvdXA7XG4gICAgZXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBhdXRoOiBBdXRoZW50aWNhdGlvbiwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiAgWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAgWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblN1Ym1pdCh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuYXV0aC5sb2dpbih2YWx1ZS51c2VybmFtZSwgdmFsdWUucGFzc3dvcmQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICh0b2tlbjogYW55KSA9PiB7IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vRGFzaGJvYXJkJ10pOyB9LFxuICAgICAgICAgICAgICAgICgpID0+IHsgdGhpcy5lcnJvciA9IHRydWU7IH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIHN0b3JlKHVuc2VyLHBhc3MpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VucycsIHVuc2VyKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3B3cycsIHBhc3MpO1xuICAgICAgICBhbGVydChcIkFjY291bnQgc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQhIFBsZWFzZSBsb2dpbi5cIik7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
