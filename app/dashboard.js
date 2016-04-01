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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFDSSxjQUFtQixJQUFvQixFQUFTLE1BQWM7b0JBQTNDLFNBQUksR0FBSixJQUFJLENBQWdCO29CQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7Z0JBQUcsQ0FBQztnQkFidEU7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsTUFBTTt3QkFDaEIsVUFBVSxFQUFFLEVBQUU7d0JBQ2QsUUFBUSxFQUFFLHVEQUdiO3FCQUNBLENBQUM7b0JBSUQsb0JBQVcsQ0FBQyxjQUFNLE9BQUEsd0JBQVUsRUFBRSxFQUFaLENBQVksQ0FBQzs7d0JBQUE7Z0JBSWhDLFdBQUM7WUFBRCxDQUhBLEFBR0MsSUFBQTtZQUhELHVCQUdDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTI4LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgQ2FuQWN0aXZhdGUsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7RXF1aXBtZW50Q29tcG9uZW50fSBmcm9tIFwiLi9lcXVpcG1lbnQuY29tcG9uZW50LnRzXCI7XG5pbXBvcnQge1BhdGllbnRDb21wb25lbnR9IGZyb20gXCIuL3BhdGllbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge1Zpc2l0Q29tcG9uZW50fSBmcm9tIFwiLi92aXNpdC5jb21wb25lbnRcIjtcbmltcG9ydCB7aXNMb2dnZWRpbn0gZnJvbSBcIi4vaXMtbG9nZ2VkaW5cIjtcbmltcG9ydCB7QXV0aGVudGljYXRpb259IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgZGlyZWN0aXZlczogW10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgxPnRoaXMgaXMgaG9tZSBwYWdlLjwvaDE+XG4gICAgICAgICAgICBcbmAsXG59KVxuXG5cblxuQENhbkFjdGl2YXRlKCgpID0+IGlzTG9nZ2VkaW4oKSlcbmV4cG9ydCBjbGFzcyBIb21lIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aDogQXV0aGVudGljYXRpb24sIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge31cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
