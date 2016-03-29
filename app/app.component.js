<<<<<<< HEAD
System.register(['angular2/core', "angular2/router", "./login", "./home"], function(exports_1, context_1) {
=======
System.register(['angular2/core', "./equipment.component"], function(exports_1, context_1) {
>>>>>>> ac10ee06669a4363b67d96c92be35b4890af3b4f
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
    var core_1, router_1, login_1, home_1, router_2, core_2;
=======
    var core_1, equipment_component_1;
>>>>>>> ac10ee06669a4363b67d96c92be35b4890af3b4f
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
<<<<<<< HEAD
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
=======
            },
            function (equipment_component_1_1) {
                equipment_component_1 = equipment_component_1_1;
>>>>>>> ac10ee06669a4363b67d96c92be35b4890af3b4f
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
<<<<<<< HEAD
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
=======
                        directives: [equipment_component_1.EquipmentComponent],
                        template: '<equipment></equipment>'
                    }), 
>>>>>>> ac10ee06669a4363b67d96c92be35b4890af3b4f
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
<<<<<<< HEAD

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTJCQTtnQkFDSTtnQkFBZSxDQUFDO2dCQW5CcEI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTtxQkFDckIsQ0FBQztvQkFDRCxXQUFJLENBQUM7d0JBQ0YsVUFBVSxFQUFFLENBQUMscUJBQVksQ0FBQzt3QkFDMUIsUUFBUSxFQUFFLGlFQUlYO3FCQUNGLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQVMsRUFBRTt3QkFDckQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQUksRUFBRTt3QkFDOUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFDO3FCQUN0QyxDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZ30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtMb2dpblBhZ2V9IGZyb20gXCIuL2xvZ2luXCI7XG5pbXBvcnQge0hvbWV9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVyT3V0bGV0fSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtWaWV3fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbn0pXG5AVmlldyh7XG4gICAgZGlyZWN0aXZlczogW1JvdXRlck91dGxldF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aDE+TG9naW48L2gxPlxuXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICBgXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy9sb2dpbicsIGFzOiAnTG9naW4nLCBjb21wb25lbnQ6IExvZ2luUGFnZSB9LFxuICAgIHsgcGF0aDogJy9ob21lJywgYXM6ICdIb21lJywgY29tcG9uZW50OiBIb21lIH0sXG4gICAgeyBwYXRoOiAnLycsIHJlZGlyZWN0VG86IFsnTG9naW4nXX1cbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
=======
//# sourceMappingURL=app.component.js.map
>>>>>>> ac10ee06669a4363b67d96c92be35b4890af3b4f
