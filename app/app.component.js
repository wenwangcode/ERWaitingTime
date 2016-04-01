System.register(['angular2/core', 'angular2/router', "./dashboard", "./login", "./equipment.component"], function(exports_1, context_1) {
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
    var core_1, router_1, dashboard_1, login_1, equipment_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (equipment_component_1_1) {
                equipment_component_1 = equipment_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "<router-outlet></router-outlet>"
                    }),
                    router_1.RouteConfig([
                        { path: '/', redirectTo: ['Login'] },
                        { path: '/dev/home', as: 'Home', component: dashboard_1.Home },
                        { path: '/dev/login', as: 'Login', component: login_1.Login },
                        { path: '/dev/equipment.component', as: 'Equip', component: equipment_component_1.EquipmentComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkExQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFFUCxRQUFRLEVBQUUsUUFBUTt3QkFFbEIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBRS9CLFFBQVEsRUFBRSxpQ0FBaUM7cUJBQzlDLENBQUM7b0JBSUQsb0JBQVcsQ0FBQzt3QkFFVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBRXBDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxnQkFBSSxFQUFFO3dCQUVsRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBSyxFQUFFO3dCQUVyRCxFQUFFLElBQUksRUFBRSwwQkFBMEIsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtxQkFDbkYsQ0FBQzs7Z0NBQUE7Z0JBTUYsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hvbWV9IGZyb20gXCIuL2Rhc2hib2FyZFwiO1xuaW1wb3J0IHtMb2dpbn0gZnJvbSBcIi4vbG9naW5cIjtcbmltcG9ydCB7RXF1aXBtZW50Q29tcG9uZW50fSBmcm9tIFwiLi9lcXVpcG1lbnQuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe+KAqFxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyzigKhcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLOKAqFxuICAgIHRlbXBsYXRlOiBgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PmDigKh9KeKAqOKAqFxuXG5AUm91dGVDb25maWcoW+KAqFxuICAgIHsgcGF0aDogJy8nLCByZWRpcmVjdFRvOiBbJ0xvZ2luJ10gfSzigKhcbiAgICB7IHBhdGg6ICcvZGV2L2hvbWUnLCBhczogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWUgfSzigKhcbiAgICB7IHBhdGg6ICcvZGV2L2xvZ2luJywgYXM6ICdMb2dpbicsIGNvbXBvbmVudDogTG9naW4gfSzigKhcbiAgICB7IHBhdGg6ICcvZGV2L2VxdWlwbWVudC5jb21wb25lbnQnLCBhczogJ0VxdWlwJywgY29tcG9uZW50OiBFcXVpcG1lbnRDb21wb25lbnQgfeKAqF0pXG5cblxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
