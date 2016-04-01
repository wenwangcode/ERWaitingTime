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
                        template: "\n        <html>\n<head>\n    <title>Dashboard</title>\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css\" rel=\"stylesheet\"/>\n</head>\n<body>\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"../home\">ERWaitingTime</a>\n        <div class=\"container\" align=\"right\">\n        <button a href=\"#\" class=\"btn btn-link\" (click)=\"onLogout()\">Logout</button>\n            </div>\n\n    </div>\n</nav>\n<br>\n<br>\n<br>\n<div align=\"center\">\n    <h2>Welcome, you are successfully logged in.</h2>\n</div>\n    <a href=\"../views/patients.component.html\" class=\"btn btn-link\" align=\"right\">Equipment Register</a>\n    <a href=\"../views/patients.component.html\" class=\"btn btn-link\" align=\"right\">View Patients</a><br>\n    <a href=\"../views/visit.html\" class=\"btn btn-link\" align=\"right\">Visit Page</a><br>\n    <a href=\"../views/visit.html\" class=\"btn btn-link\" align=\"right\">View Patients</a><br>\n\n\n</body>\n</html>\n            \n",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1EQTtnQkFDSSxjQUFtQixJQUFvQixFQUFTLE1BQWM7b0JBQTNDLFNBQUksR0FBSixJQUFJLENBQWdCO29CQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7Z0JBQUcsQ0FBQztnQkFFbEUsdUJBQVEsR0FBUjtvQkFBQSxpQkFLQztvQkFKRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTt5QkFDYixTQUFTLENBQ04sY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FDM0MsQ0FBQztnQkFDVixDQUFDO2dCQWhETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixVQUFVLEVBQUUsRUFBRTt3QkFDZCxRQUFRLEVBQUUsdWpDQStCYjtxQkFDQSxDQUFDO29CQUlELG9CQUFXLENBQUMsY0FBTSxPQUFBLHdCQUFVLEVBQUUsRUFBWixDQUFZLENBQUM7O3dCQUFBO2dCQVVoQyxXQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCx1QkFTQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKb3kgb24gMjAxNi0wMy0yOC5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsIENhbkFjdGl2YXRlLCBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlck91dGxldCwgUm91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7RXF1aXBtZW50Q29tcG9uZW50fSBmcm9tIFwiLi9lcXVpcG1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge1BhdGllbnRDb21wb25lbnR9IGZyb20gXCIuL3BhdGllbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge1Zpc2l0Q29tcG9uZW50fSBmcm9tIFwiLi92aXNpdC5jb21wb25lbnRcIjtcbmltcG9ydCB7aXNMb2dnZWRpbn0gZnJvbSBcIi4vaXMtbG9nZ2VkaW5cIjtcbmltcG9ydCB7QXV0aGVudGljYXRpb259IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgZGlyZWN0aXZlczogW10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGh0bWw+XG48aGVhZD5cbiAgICA8dGl0bGU+RGFzaGJvYXJkPC90aXRsZT5cbiAgICA8bGluayBocmVmPVwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4xLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbjwvaGVhZD5cbjxib2R5PlxuPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIuLi9ob21lXCI+RVJXYWl0aW5nVGltZTwvYT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgPGJ1dHRvbiBhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwib25Mb2dvdXQoKVwiPkxvZ291dDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbjwvbmF2PlxuPGJyPlxuPGJyPlxuPGJyPlxuPGRpdiBhbGlnbj1cImNlbnRlclwiPlxuICAgIDxoMj5XZWxjb21lLCB5b3UgYXJlIHN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4uPC9oMj5cbjwvZGl2PlxuICAgIDxhIGhyZWY9XCIuLi92aWV3cy9wYXRpZW50cy5jb21wb25lbnQuaHRtbFwiIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgYWxpZ249XCJyaWdodFwiPkVxdWlwbWVudCBSZWdpc3RlcjwvYT5cbiAgICA8YSBocmVmPVwiLi4vdmlld3MvcGF0aWVudHMuY29tcG9uZW50Lmh0bWxcIiBjbGFzcz1cImJ0biBidG4tbGlua1wiIGFsaWduPVwicmlnaHRcIj5WaWV3IFBhdGllbnRzPC9hPjxicj5cbiAgICA8YSBocmVmPVwiLi4vdmlld3MvdmlzaXQuaHRtbFwiIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgYWxpZ249XCJyaWdodFwiPlZpc2l0IFBhZ2U8L2E+PGJyPlxuICAgIDxhIGhyZWY9XCIuLi92aWV3cy92aXNpdC5odG1sXCIgY2xhc3M9XCJidG4gYnRuLWxpbmtcIiBhbGlnbj1cInJpZ2h0XCI+VmlldyBQYXRpZW50czwvYT48YnI+XG5cblxuPC9ib2R5PlxuPC9odG1sPlxuICAgICAgICAgICAgXG5gLFxufSlcblxuXG5cbkBDYW5BY3RpdmF0ZSgoKSA9PiBpc0xvZ2dlZGluKCkpXG5leHBvcnQgY2xhc3MgSG9tZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGg6IEF1dGhlbnRpY2F0aW9uLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgICBvbkxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5hdXRoLmxvZ291dCgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi4vTG9naW4nXSlcbiAgICAgICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
