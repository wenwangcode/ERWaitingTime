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
//# sourceMappingURL=dashboard.js.map