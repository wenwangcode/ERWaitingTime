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
                        template: "\n         <html>\n<head>\n    <title>ERWaitingTime</title>\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css\" rel=\"stylesheet\"/>\n</head>\n<body>\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"../home\">ERWaitingTime</a>\n\n    </div>\n</nav>\n<br>\n<br>\n<br>\n<div align=\"center\" style=\"border:1px solid red\">\n    <h1>ERWaiting Time:</h1>\n    <h3>clock</h3>\n</div>\n<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Login</h2>\n    <form [ngFormModel]=\"form\" (submit)=\"$event.preventDefault(); onSubmit(form.value)\">\n        <div *ngIf=\"error\">Check your password</div>\n        <div class=\"form-group\" ng-class=\"{ 'has-error': form.username.$dirty && form.username.$error.required }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"vm.username\" ngControl=\"username\" required />\n            <span ng-show=\"form.username.$dirty && form.username.$error.required\" class=\"help-block\">Username is required</span>\n        </div>\n        <div class=\"form-group\" ng-class=\"{ 'has-error': form.password.$dirty && form.password.$error.required }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"vm.password\" ngControl=\"password\" required />\n            <span ng-show=\"form.password.$dirty && form.password.$error.required\" class=\"help-block\">Password is required</span>\n        </div>\n\n        <div class=\"form-actions\">\n            <button type=\"submit\" ng-disabled=\"form.$invalid || vm.dataLoading\" [disabled]=\"!form.valid\" class=\"btn btn-primary\">Login</button>\n\n            <a href=\"register.component.html\" class=\"btn btn-link\">Register</a>\n        </div>\n    </form>\n</div>\n            \n",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOERBO2dCQUdJLGVBQVksRUFBZSxFQUFTLElBQW9CLEVBQVMsTUFBYztvQkFBM0MsU0FBSSxHQUFKLElBQUksQ0FBZ0I7b0JBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFEL0UsVUFBSyxHQUFZLEtBQUssQ0FBQztvQkFFbkIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUNqQixRQUFRLEVBQUcsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3BDLFFBQVEsRUFBRyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztxQkFDdkMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsd0JBQVEsR0FBUixVQUFTLEtBQVU7b0JBQW5CLGlCQU1DO29CQUxHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQzt5QkFDMUMsU0FBUyxDQUNOLFVBQUMsS0FBVSxJQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDdEQsY0FBUSxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDL0IsQ0FBQztnQkFDVixDQUFDO2dCQW5FTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixVQUFVLEVBQUUsQ0FBRSx3QkFBZSxFQUFFLGFBQUksQ0FBRTt3QkFDckMsUUFBUSxFQUFFLHc4REEyQ2I7d0JBQ0csU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztxQkFDM0IsQ0FBQzs7eUJBQUE7Z0JBb0JGLFlBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELHlCQWlCQyxDQUFBIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTI4LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgQ2FuQWN0aXZhdGUsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwLCBOZ0lmfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbn0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbic7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xvZ2luJyxcbiAgICBkaXJlY3RpdmVzOiBbIEZPUk1fRElSRUNUSVZFUywgTmdJZiBdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICA8aHRtbD5cbjxoZWFkPlxuICAgIDx0aXRsZT5FUldhaXRpbmdUaW1lPC90aXRsZT5cbiAgICA8bGluayBocmVmPVwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4xLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbjwvaGVhZD5cbjxib2R5PlxuPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIuLi9ob21lXCI+RVJXYWl0aW5nVGltZTwvYT5cblxuICAgIDwvZGl2PlxuPC9uYXY+XG48YnI+XG48YnI+XG48YnI+XG48ZGl2IGFsaWduPVwiY2VudGVyXCIgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkIHJlZFwiPlxuICAgIDxoMT5FUldhaXRpbmcgVGltZTo8L2gxPlxuICAgIDxoMz5jbG9jazwvaDM+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcIj5cbiAgICA8aDI+TG9naW48L2gyPlxuICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJmb3JtXCIgKHN1Ym1pdCk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTsgb25TdWJtaXQoZm9ybS52YWx1ZSlcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImVycm9yXCI+Q2hlY2sgeW91ciBwYXNzd29yZDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIG5nLWNsYXNzPVwieyAnaGFzLWVycm9yJzogZm9ybS51c2VybmFtZS4kZGlydHkgJiYgZm9ybS51c2VybmFtZS4kZXJyb3IucmVxdWlyZWQgfVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgaWQ9XCJ1c2VybmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmctbW9kZWw9XCJ2bS51c2VybmFtZVwiIG5nQ29udHJvbD1cInVzZXJuYW1lXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XCJmb3JtLnVzZXJuYW1lLiRkaXJ0eSAmJiBmb3JtLnVzZXJuYW1lLiRlcnJvci5yZXF1aXJlZFwiIGNsYXNzPVwiaGVscC1ibG9ja1wiPlVzZXJuYW1lIGlzIHJlcXVpcmVkPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBuZy1jbGFzcz1cInsgJ2hhcy1lcnJvcic6IGZvcm0ucGFzc3dvcmQuJGRpcnR5ICYmIGZvcm0ucGFzc3dvcmQuJGVycm9yLnJlcXVpcmVkIH1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuZy1tb2RlbD1cInZtLnBhc3N3b3JkXCIgbmdDb250cm9sPVwicGFzc3dvcmRcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cImZvcm0ucGFzc3dvcmQuJGRpcnR5ICYmIGZvcm0ucGFzc3dvcmQuJGVycm9yLnJlcXVpcmVkXCIgY2xhc3M9XCJoZWxwLWJsb2NrXCI+UGFzc3dvcmQgaXMgcmVxdWlyZWQ8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG5nLWRpc2FibGVkPVwiZm9ybS4kaW52YWxpZCB8fCB2bS5kYXRhTG9hZGluZ1wiIFtkaXNhYmxlZF09XCIhZm9ybS52YWxpZFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+TG9naW48L2J1dHRvbj5cblxuICAgICAgICAgICAgPGEgaHJlZj1cInJlZ2lzdGVyLmNvbXBvbmVudC5odG1sXCIgY2xhc3M9XCJidG4gYnRuLWxpbmtcIj5SZWdpc3RlcjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuPC9kaXY+XG4gICAgICAgICAgICBcbmAsXG4gICAgcHJvdmlkZXJzOiBbSFRUUFNlcnZpY2VdXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBMb2dpbiB7XG4gICAgZm9ybTogQ29udHJvbEdyb3VwO1xuICAgIGVycm9yOiBib29sZWFuID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgYXV0aDogQXV0aGVudGljYXRpb24sIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLmZvcm0gPSBmYi5ncm91cCh7XG4gICAgICAgICAgICB1c2VybmFtZTogIFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBwYXNzd29yZDogIFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25TdWJtaXQodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLmF1dGgubG9naW4odmFsdWUudXNlcm5hbWUsIHZhbHVlLnBhc3N3b3JkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAodG9rZW46IGFueSkgPT4geyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL0hvbWUnXSk7IH0sXG4gICAgICAgICAgICAgICAgKCkgPT4geyB0aGlzLmVycm9yID0gdHJ1ZTsgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
