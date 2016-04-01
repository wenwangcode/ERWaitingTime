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
    var DashboardComponent;
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
            DashboardComponent = (function () {
                function DashboardComponent(auth, router) {
                    this.auth = auth;
                    this.router = router;
                }
                DashboardComponent.prototype.onLogout = function () {
                    var _this = this;
                    this.auth.logout()
                        .subscribe(function () { return _this.router.navigate(['../Login']); });
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        templateUrl: 'templates/dashboard.html',
                        directives: [router_1.RouterLink],
                    }),
                    router_1.CanActivate(function () { return is_loggedin_1.isLoggedin(); }), 
                    __metadata('design:paramtypes', [authentication_1.Authentication, router_1.Router])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFDSSw0QkFBbUIsSUFBb0IsRUFBUyxNQUFjO29CQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFnQjtvQkFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO2dCQUFHLENBQUM7Z0JBRWxFLHFDQUFRLEdBQVI7b0JBQUEsaUJBS0M7b0JBSkcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7eUJBQ2IsU0FBUyxDQUNOLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQWxDLENBQWtDLENBQzNDLENBQUM7Z0JBQ1YsQ0FBQztnQkFkTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUsMEJBQTBCO3dCQUN2QyxVQUFVLEVBQUUsQ0FBQyxtQkFBVSxDQUFDO3FCQUMzQixDQUFDO29CQUNELG9CQUFXLENBQUMsY0FBTSxPQUFBLHdCQUFVLEVBQUUsRUFBWixDQUFZLENBQUM7O3NDQUFBO2dCQVVoQyx5QkFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsbURBU0MsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTI4LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgQ2FuQWN0aXZhdGUsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtpc0xvZ2dlZGlufSBmcm9tIFwiLi9pcy1sb2dnZWRpblwiO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbn0gZnJvbSBcIi4vYXV0aGVudGljYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkYXNoYm9hcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2Rhc2hib2FyZC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyTGlua10sXG59KVxuQENhbkFjdGl2YXRlKCgpID0+IGlzTG9nZ2VkaW4oKSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoOiBBdXRoZW50aWNhdGlvbiwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gICAgb25Mb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuYXV0aC5sb2dvdXQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL0xvZ2luJ10pXG4gICAgICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
