System.register(['angular2/core', 'angular2/router', "./authentication"], function(exports_1, context_1) {
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
    var core_1, router_1, authentication_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                        directives: [router_1.RouterLink, router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [authentication_1.Authentication, router_1.Router])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQ0ksNEJBQW1CLElBQW9CLEVBQVMsTUFBYztvQkFBM0MsU0FBSSxHQUFKLElBQUksQ0FBZ0I7b0JBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtnQkFBRyxDQUFDO2dCQUVsRSxxQ0FBUSxHQUFSO29CQUFBLGlCQUtDO29CQUpHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO3lCQUNiLFNBQVMsQ0FDTixjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFsQyxDQUFrQyxDQUMzQyxDQUFDO2dCQUNWLENBQUM7Z0JBakJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFdBQVcsRUFBRSwwQkFBMEI7d0JBQ3ZDLFVBQVUsRUFBRSxDQUFDLG1CQUFVLEVBQUUsMEJBQWlCLENBQUM7cUJBQzlDLENBQUM7O3NDQUFBO2dCQWNGLHlCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCxtREFTQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDMtMjguXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBDYW5BY3RpdmF0ZSwgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmt9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge2lzTG9nZ2VkaW59IGZyb20gXCIuL2lzLWxvZ2dlZGluXCI7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9ufSBmcm9tIFwiLi9hdXRoZW50aWNhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Rhc2hib2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvZGFzaGJvYXJkLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJMaW5rLCBST1VURVJfRElSRUNUSVZFU10sXG59KVxuXG5cbi8vIEBDYW5BY3RpdmF0ZSgoKSA9PiBpc0xvZ2dlZGluKCkpXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoOiBBdXRoZW50aWNhdGlvbiwgcHVibGljIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gICAgb25Mb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuYXV0aC5sb2dvdXQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL0xvZ2luJ10pXG4gICAgICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
