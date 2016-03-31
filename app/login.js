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
                        .subscribe(function (token) { _this.router.navigate(['../Home']); }, function () { _this.error = true; });
                };
                Login = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgIf],
                        template: "\n<head>\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css\" rel=\"stylesheet\"/>\n    <!--<script type=\"text/javascript\" src=\"countdown.js\"></script>-->\n\n    <!--<link href=\"/src/css/countdown.css\" type=\"text/css\" rel=\"stylesheet\"/>-->\n</head>\n<body>\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"../home\">ERWaitingTime</a>\n\n    </div>\n</nav>\n\n<div align=\"center\" style=\"border:1px solid #373cff\">\n    <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n      <div id=\"main\">\n        <div class=\"content\">\n          <!-- /.Text Div -->\n          <div class=\"counter\">\n            <h3>Estimated Time Remaining Before Launch:</h3>\n            <div id=\"countdown\"></div>\n            <!-- /#Countdown Div -->\n          </div>\n          <!-- /.Counter Div -->\n        </div>\n        <!-- /.Content Div -->\n      </div>\n      <!-- /#Main Div -->\n    </div>\n    <!-- /.Columns Div -->\n  </div>\n  <!-- /.Row Div -->\n</div>\n<!-- /.Container Div -->\n</div>\n\n<script>\ndocument.getElementById(\"countdown\").innerHTML = \"hihihi\";\n</script>\n\n<div id=\"textDiv\"></div>\n<script type=\"text/javascript\">\n    var div = document.getElementById(\"textDiv\");\n    div.textContent = \"my text\";\n    var text = div.textContent;\n</script>\n\n<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Login</h2>\n    <form [ngFormModel]=\"form\" (submit)=\"$event.preventDefault(); onSubmit(form.value)\">\n        <div *ngIf=\"error\">Check your password</div>\n        <div class=\"form-group\" ng-class=\"{ 'has-error': form.username.$dirty && form.username.$error.required }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"vm.username\" ngControl=\"username\" required />\n            <span ng-show=\"form.username.$dirty && form.username.$error.required\" class=\"help-block\">Username is required</span>\n        </div>\n        <div class=\"form-group\" ng-class=\"{ 'has-error': form.password.$dirty && form.password.$error.required }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"vm.password\" ngControl=\"password\" required />\n            <span ng-show=\"form.password.$dirty && form.password.$error.required\" class=\"help-block\">Password is required</span>\n        </div>\n\n        <div class=\"form-actions\">\n            <button type=\"submit\" ng-disabled=\"form.$invalid || vm.dataLoading\" [disabled]=\"!form.valid\" class=\"btn btn-primary\">Login</button>\n\n            <a href=\"register.component.html\" class=\"btn btn-link\">Register</a>\n        </div>\n    </form>\n</div>\n            \n",
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
//# sourceMappingURL=login.js.map