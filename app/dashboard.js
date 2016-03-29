System.register(['angular2/core', 'angular2/router', "./is-loggedin", "./authentication"], function(exports_1, context_1) {
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
    var core_1, router_1, is_loggedin_1, authentication_1;
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (is_loggedin_1_1) {
                is_loggedin_1 = is_loggedin_1_1;
            },
            function (authentication_1_1) {
                authentication_1 = authentication_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home(auth, router) {
                    this.auth = auth;
                    this.router = router;
                }
                Home.prototype.onLogout = function () {
                    var _this = this;
                    this.auth.logout()
                        .subscribe(function () { return _this.router.navigate(['../Login']); });
                };
                Home = __decorate([
                    core_1.Component({
                        selector: 'home',
                        directives: [],
                        template: "\n        <h1>this is home page.</h1>\n            \n",
                    }),
                    router_1.CanActivate(function () { return is_loggedin_1.isLoggedin(); }), 
                    __metadata('design:paramtypes', [authentication_1.Authentication, router_1.Router])
                ], Home);
                return Home;
            }());
            exports_1("Home", Home);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFDSSxjQUFtQixJQUFvQixFQUFTLE1BQWM7b0JBQTNDLFNBQUksR0FBSixJQUFJLENBQWdCO29CQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7Z0JBQUcsQ0FBQztnQkFFbEUsdUJBQVEsR0FBUjtvQkFBQSxpQkFLQztvQkFKRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTt5QkFDYixTQUFTLENBQ04sY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FDM0MsQ0FBQztnQkFDVixDQUFDO2dCQXBCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixVQUFVLEVBQUUsRUFBRTt3QkFDZCxRQUFRLEVBQUUsdURBR2I7cUJBQ0EsQ0FBQztvQkFJRCxvQkFBVyxDQUFDLGNBQU0sT0FBQSx3QkFBVSxFQUFFLEVBQVosQ0FBWSxDQUFDOzt3QkFBQTtnQkFVaEMsV0FBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsdUJBU0MsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDMtMjguXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBDYW5BY3RpdmF0ZSwgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtFcXVpcG1lbnRDb21wb25lbnR9IGZyb20gXCIuL2VxdWlwbWVudC5jb21wb25lbnQudHNcIjtcbmltcG9ydCB7UGF0aWVudENvbXBvbmVudH0gZnJvbSBcIi4vcGF0aWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7VmlzaXRDb21wb25lbnR9IGZyb20gXCIuL3Zpc2l0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtpc0xvZ2dlZGlufSBmcm9tIFwiLi9pcy1sb2dnZWRpblwiO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbn0gZnJvbSBcIi4vYXV0aGVudGljYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdob21lJyxcbiAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDE+dGhpcyBpcyBob21lIHBhZ2UuPC9oMT5cbiAgICAgICAgICAgIFxuYCxcbn0pXG5cblxuXG5AQ2FuQWN0aXZhdGUoKCkgPT4gaXNMb2dnZWRpbigpKVxuZXhwb3J0IGNsYXNzIEhvbWUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoOiBBdXRoZW50aWNhdGlvbiwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gICAgb25Mb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuYXV0aC5sb2dvdXQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL0xvZ2luJ10pLFxuICAgICAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
