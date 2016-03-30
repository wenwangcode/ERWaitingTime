System.register(['angular2/core', 'angular2/router', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1;
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
            }],
        execute: function() {
            Login = (function () {
                // We inject the router via DI
                function Login(router) {
                    this.router = router;
                }
                Login.prototype.login = function (event, username, password) {
                    var _this = this;
                    // This will be called when the user clicks on the Login button
                    event.preventDefault();
                    // We call our API to log the user in. The username and password are entered by the user
                    fetch('http://localhost:3001/sessions/create', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: username, password: password
                        })
                    })
                        .then(status)
                        .then(json)
                        .then(function (response) {
                        // Once we get the JWT in the response, we save it into localStorage
                        localStorage.setItem('jwt', response.id_token);
                        // and then we redirect the user to the home
                        _this.router.parent.navigate('/home');
                    })
                        .catch(function (error) {
                        alert(error.message);
                        console.log(error.message);
                    });
                };
                Login = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgIf],
                        template: "\n<head>\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css\" rel=\"stylesheet\"/>\n    <script type=\"text/javascript\" src=\"countdown.js\"></script>\n    <link href=\"/src/css/countdown.css\" type=\"text/css\" rel=\"stylesheet\"/>\n</head>\n<body>\n\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"../home\">ERWaitingTime</a>\n    </div>\n</nav>\n\n<div ng-app=\"\" align=\"center\" style=\"border:1px solid #373cff\">\n    <div ng-app=\"\" class=\"container\">\n  <div ng-app=\"\" class=\"row\">\n    <div ng-app=\"\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n      <div ng-app=\"\" id=\"main\">\n        <div ng-app=\"\" class=\"content\">\n          <!-- /.Text Div -->\n          <div ng-app=\"\" class=\"counter\">\n            <h3>Estimated Time:</h3>\n            <div ng-app=\"\" id=\"countdown\"></div>\n            <!-- /#Countdown Div -->\n          </div>\n          <!-- /.Counter Div -->\n        </div>\n        <!-- /.Content Div -->\n      </div>\n      <!-- /#Main Div -->\n    </div>\n    <!-- /.Columns Div -->\n  </div>\n  <!-- /.Row Div -->\n</div>\n<!-- /.Container Div -->\n</div>\n\n<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Login</h2>\n    <form [ngFormModel]=\"form\" (submit)=\"login($event, username.value, password.value)\">\n        <div *ngIf=\"error\">Check your password</div>\n        <div class=\"form-group\" ng-class=\"{ 'has-error': form.username.$dirty && form.username.$error.required }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"vm.username\" ngControl=\"username\" required />\n            <span ng-show=\"form.username.$dirty && form.username.$error.required\" class=\"help-block\">Username is required</span>\n        </div>\n        <div class=\"form-group\" ng-class=\"{ 'has-error': form.password.$dirty && form.password.$error.required }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"vm.password\" ngControl=\"password\" required />\n            <span ng-show=\"form.password.$dirty && form.password.$error.required\" class=\"help-block\">Password is required</span>\n        </div>\n\n        <div class=\"form-actions\">\n            <button type=\"submit\" ng-disabled=\"form.$invalid || vm.dataLoading\" [disabled]=\"!form.valid\" class=\"btn btn-primary\">Login</button>\n\n            <a href=\"/\" class=\"btn btn-link\">Register</a>\n        </div>\n    </form>\n</div>\n</body>\n",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Login);
                return Login;
            }());
            exports_1("Login", Login);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkVBO2dCQUNJLDhCQUE4QjtnQkFDOUIsZUFBWSxNQUFjO29CQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxxQkFBSyxHQUFMLFVBQU0sS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRO29CQUEvQixpQkEyQkM7b0JBMUJHLCtEQUErRDtvQkFDL0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUV2Qix3RkFBd0Y7b0JBQ3hGLEtBQUssQ0FBQyx1Q0FBdUMsRUFBRTt3QkFDM0MsTUFBTSxFQUFFLE1BQU07d0JBQ2QsT0FBTyxFQUFFOzRCQUNMLFFBQVEsRUFBRSxrQkFBa0I7NEJBQzVCLGNBQWMsRUFBRSxrQkFBa0I7eUJBQ3JDO3dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDOzRCQUNqQixVQUFBLFFBQVEsRUFBRSxVQUFBLFFBQVE7eUJBQ3JCLENBQUM7cUJBQ0wsQ0FBQzt5QkFDRyxJQUFJLENBQUMsTUFBTSxDQUFDO3lCQUNaLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ1YsSUFBSSxDQUFDLFVBQUMsUUFBUTt3QkFDWCxvRUFBb0U7d0JBQ3BFLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDL0MsNENBQTRDO3dCQUM1QyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3pDLENBQUMsQ0FBQzt5QkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO3dCQUNULEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMvQixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQXRHTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixVQUFVLEVBQUUsQ0FBRSx3QkFBZSxFQUFFLGFBQUksQ0FBRTt3QkFDckMsUUFBUSxFQUFFLGlwRkE4RGI7cUJBQ0EsQ0FBQzs7eUJBQUE7Z0JBc0NGLFlBQUM7WUFBRCxDQW5DQSxBQW1DQyxJQUFBO1lBbkNELHlCQW1DQyxDQUFBIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTI4LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgQ2FuQWN0aXZhdGUsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwLCBOZ0lmfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbn0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbG9naW4nLFxuICAgIGRpcmVjdGl2ZXM6IFsgRk9STV9ESVJFQ1RJVkVTLCBOZ0lmIF0sXG4gICAgdGVtcGxhdGU6IGBcbjxoZWFkPlxuICAgIDxsaW5rIGhyZWY9XCIvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjEuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImNvdW50ZG93bi5qc1wiPjwvc2NyaXB0PlxuICAgIDxsaW5rIGhyZWY9XCIvc3JjL2Nzcy9jb3VudGRvd24uY3NzXCIgdHlwZT1cInRleHQvY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbjwvaGVhZD5cbjxib2R5PlxuXG48bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi4uL2hvbWVcIj5FUldhaXRpbmdUaW1lPC9hPlxuICAgIDwvZGl2PlxuPC9uYXY+XG5cbjxkaXYgbmctYXBwPVwiXCIgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT1cImJvcmRlcjoxcHggc29saWQgIzM3M2NmZlwiPlxuICAgIDxkaXYgbmctYXBwPVwiXCIgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGRpdiBuZy1hcHA9XCJcIiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgbmctYXBwPVwiXCIgY2xhc3M9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cbiAgICAgIDxkaXYgbmctYXBwPVwiXCIgaWQ9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgbmctYXBwPVwiXCIgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPCEtLSAvLlRleHQgRGl2IC0tPlxuICAgICAgICAgIDxkaXYgbmctYXBwPVwiXCIgY2xhc3M9XCJjb3VudGVyXCI+XG4gICAgICAgICAgICA8aDM+RXN0aW1hdGVkIFRpbWU6PC9oMz5cbiAgICAgICAgICAgIDxkaXYgbmctYXBwPVwiXCIgaWQ9XCJjb3VudGRvd25cIj48L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gLyNDb3VudGRvd24gRGl2IC0tPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gLy5Db3VudGVyIERpdiAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gLy5Db250ZW50IERpdiAtLT5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSAvI01haW4gRGl2IC0tPlxuICAgIDwvZGl2PlxuICAgIDwhLS0gLy5Db2x1bW5zIERpdiAtLT5cbiAgPC9kaXY+XG4gIDwhLS0gLy5Sb3cgRGl2IC0tPlxuPC9kaXY+XG48IS0tIC8uQ29udGFpbmVyIERpdiAtLT5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXCI+XG4gICAgPGgyPkxvZ2luPC9oMj5cbiAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwiZm9ybVwiIChzdWJtaXQpPVwibG9naW4oJGV2ZW50LCB1c2VybmFtZS52YWx1ZSwgcGFzc3dvcmQudmFsdWUpXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJlcnJvclwiPkNoZWNrIHlvdXIgcGFzc3dvcmQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBuZy1jbGFzcz1cInsgJ2hhcy1lcnJvcic6IGZvcm0udXNlcm5hbWUuJGRpcnR5ICYmIGZvcm0udXNlcm5hbWUuJGVycm9yLnJlcXVpcmVkIH1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIGlkPVwidXNlcm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5nLW1vZGVsPVwidm0udXNlcm5hbWVcIiBuZ0NvbnRyb2w9XCJ1c2VybmFtZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICA8c3BhbiBuZy1zaG93PVwiZm9ybS51c2VybmFtZS4kZGlydHkgJiYgZm9ybS51c2VybmFtZS4kZXJyb3IucmVxdWlyZWRcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5Vc2VybmFtZSBpcyByZXF1aXJlZDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgbmctY2xhc3M9XCJ7ICdoYXMtZXJyb3InOiBmb3JtLnBhc3N3b3JkLiRkaXJ0eSAmJiBmb3JtLnBhc3N3b3JkLiRlcnJvci5yZXF1aXJlZCB9XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmctbW9kZWw9XCJ2bS5wYXNzd29yZFwiIG5nQ29udHJvbD1cInBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XCJmb3JtLnBhc3N3b3JkLiRkaXJ0eSAmJiBmb3JtLnBhc3N3b3JkLiRlcnJvci5yZXF1aXJlZFwiIGNsYXNzPVwiaGVscC1ibG9ja1wiPlBhc3N3b3JkIGlzIHJlcXVpcmVkPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBuZy1kaXNhYmxlZD1cImZvcm0uJGludmFsaWQgfHwgdm0uZGF0YUxvYWRpbmdcIiBbZGlzYWJsZWRdPVwiIWZvcm0udmFsaWRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPkxvZ2luPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3M9XCJidG4gYnRuLWxpbmtcIj5SZWdpc3RlcjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuPC9kaXY+XG48L2JvZHk+XG5gLFxufSlcblxuXG5leHBvcnQgY2xhc3MgTG9naW4ge1xuICAgIC8vIFdlIGluamVjdCB0aGUgcm91dGVyIHZpYSBESVxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIH1cblxuICAgIGxvZ2luKGV2ZW50LCB1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgTG9naW4gYnV0dG9uXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gV2UgY2FsbCBvdXIgQVBJIHRvIGxvZyB0aGUgdXNlciBpbi4gVGhlIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBhcmUgZW50ZXJlZCBieSB0aGUgdXNlclxuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3Nlc3Npb25zL2NyZWF0ZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSwgcGFzc3dvcmRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihzdGF0dXMpXG4gICAgICAgICAgICAudGhlbihqc29uKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gT25jZSB3ZSBnZXQgdGhlIEpXVCBpbiB0aGUgcmVzcG9uc2UsIHdlIHNhdmUgaXQgaW50byBsb2NhbFN0b3JhZ2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0JywgcmVzcG9uc2UuaWRfdG9rZW4pO1xuICAgICAgICAgICAgICAgIC8vIGFuZCB0aGVuIHdlIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBob21lXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIucGFyZW50Lm5hdmlnYXRlKCcvaG9tZScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
