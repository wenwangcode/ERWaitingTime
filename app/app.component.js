<<<<<<< HEAD
System.register(['angular2/core', './patientRegister.component'], function(exports_1, context_1) {
=======
System.register(['angular2/core', "angular2/router", "./login", "./home"], function(exports_1, context_1) {
>>>>>>> Joy
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
<<<<<<< HEAD
    var core_1, patientRegister_component_1;
=======
    var core_1, router_1, login_1, home_1, router_2, core_2;
>>>>>>> Joy
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
<<<<<<< HEAD
            },
            function (patientRegister_component_1_1) {
                patientRegister_component_1 = patientRegister_component_1_1;
=======
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
>>>>>>> Joy
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
<<<<<<< HEAD
                        template: '<patient></patient>',
                        directives: [patientRegister_component_1.PatientRegisterComponent]
                    }), 
=======
                    }),
                    core_2.View({
                        directives: [router_2.RouterOutlet],
                        template: "\n    <h1>Login</h1>\n\n    <router-outlet></router-outlet>\n  "
                    }),
                    router_1.RouteConfig([
                        { path: '/login', as: 'Login', component: login_1.LoginPage },
                        { path: '/home', as: 'Home', component: home_1.Home },
                        { path: '/', redirectTo: ['Login'] }
                    ]), 
>>>>>>> Joy
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLFVBQVUsRUFBRSxDQUFDLG9EQUF3QixDQUFDO3FCQUN6QyxDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtWaXNpdENvbXBvbmVudH0gZnJvbSAnLi92aXNpdC5jb21wb25lbnQnO1xuaW1wb3J0IHtQYXRpZW50c0NvbXBvbmVudH0gZnJvbSAnLi9wYXRpZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHtSZWdpc3RlckNvbXBvbmVudH0gZnJvbSAnLi9yZWdpc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHtSZXBvcnRDb21wb25lbnR9IGZyb20gJy4vcmVwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQge1BhdGllbnRSZWdpc3RlckNvbXBvbmVudH0gZnJvbSAnLi9wYXRpZW50UmVnaXN0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7Vml0YWxDb21wb25lbnR9IGZyb20gJy4vdml0YWwuY29tcG9uZW50JztcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiAnPHBhdGllbnQ+PC9wYXRpZW50PicsXG4gICAgZGlyZWN0aXZlczogW1BhdGllbnRSZWdpc3RlckNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTJCQTtnQkFDSTtnQkFBZSxDQUFDO2dCQW5CcEI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTtxQkFDckIsQ0FBQztvQkFDRCxXQUFJLENBQUM7d0JBQ0YsVUFBVSxFQUFFLENBQUMscUJBQVksQ0FBQzt3QkFDMUIsUUFBUSxFQUFFLGlFQUlYO3FCQUNGLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQVMsRUFBRTt3QkFDckQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQUksRUFBRTt3QkFDOUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFDO3FCQUN0QyxDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZ30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtMb2dpblBhZ2V9IGZyb20gXCIuL2xvZ2luXCI7XG5pbXBvcnQge0hvbWV9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyT3V0bGV0fSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtWaWV3fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbn0pXG5AVmlldyh7XG4gICAgZGlyZWN0aXZlczogW1JvdXRlck91dGxldF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aDE+TG9naW48L2gxPlxuXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICBgXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy9sb2dpbicsIGFzOiAnTG9naW4nLCBjb21wb25lbnQ6IExvZ2luUGFnZSB9LFxuICAgIHsgcGF0aDogJy9ob21lJywgYXM6ICdIb21lJywgY29tcG9uZW50OiBIb21lIH0sXG4gICAgeyBwYXRoOiAnLycsIHJlZGlyZWN0VG86IFsnTG9naW4nXX1cbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
>>>>>>> Joy
