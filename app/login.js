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
                        template: "\n<head>\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css\" rel=\"stylesheet\"/>\n    <!--<script type=\"text/javascript\" src=\"countdown.js\"></script>-->\n\n    <!--<link href=\"/src/css/countdown.css\" type=\"text/css\" rel=\"stylesheet\"/>-->\n</head>\n<body>\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"../home\">ERWaitingTime</a>\n\n    </div>\n</nav>\n\n<div align=\"center\" style=\"border:1px solid #373cff\">\n    <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n      <div id=\"main\">\n        <div class=\"content\">\n          <!-- /.Text Div -->\n          <div class=\"counter\">\n            <h3>Estimated Time Remaining Before Launch:</h3>\n            <div id=\"countdown\"></div>\n            <!-- /#Countdown Div -->\n          </div>\n          <!-- /.Counter Div -->\n        </div>\n        <!-- /.Content Div -->\n      </div>\n      <!-- /#Main Div -->\n    </div>\n    <!-- /.Columns Div -->\n  </div>\n  <!-- /.Row Div -->\n</div>\n<!-- /.Container Div -->\n</div>\n\n<script>\ndocument.getElementById(\"countdown\").innerHTML = \"hihihi\";\n</script>\n\n<div id=\"textDiv\"></div>\n<script type=\"text/javascript\">\n    var div = document.getElementById(\"textDiv\");\n    div.textContent = \"my text\";\n    var text = div.textContent;\n</script>\n\n<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Login</h2>\n    <form [ngFormModel]=\"form\" (submit)=\"login($event, username.value, password.value)\">\n        <div *ngIf=\"error\">Check your password</div>\n        <div class=\"form-group\" ng-class=\"{ 'has-error': form.username.$dirty && form.username.$error.required }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"vm.username\" ngControl=\"username\" required />\n            <span ng-show=\"form.username.$dirty && form.username.$error.required\" class=\"help-block\">Username is required</span>\n        </div>\n        <div class=\"form-group\" ng-class=\"{ 'has-error': form.password.$dirty && form.password.$error.required }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"vm.password\" ngControl=\"password\" required />\n            <span ng-show=\"form.password.$dirty && form.password.$error.required\" class=\"help-block\">Password is required</span>\n        </div>\n\n        <div class=\"form-actions\">\n            <button type=\"submit\" ng-disabled=\"form.$invalid || vm.dataLoading\" [disabled]=\"!form.valid\" class=\"btn btn-primary\">Login</button>\n\n            <a href=\"/\" class=\"btn btn-link\">Register</a>\n        </div>\n    </form>\n</div>\n            \n",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Login);
                return Login;
            }());
            exports_1("Login", Login);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUZBO2dCQUNJLDhCQUE4QjtnQkFDOUIsZUFBWSxNQUFjO29CQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxxQkFBSyxHQUFMLFVBQU0sS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRO29CQUEvQixpQkEyQkM7b0JBMUJHLCtEQUErRDtvQkFDL0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUV2Qix3RkFBd0Y7b0JBQ3hGLEtBQUssQ0FBQyx1Q0FBdUMsRUFBRTt3QkFDM0MsTUFBTSxFQUFFLE1BQU07d0JBQ2QsT0FBTyxFQUFFOzRCQUNMLFFBQVEsRUFBRSxrQkFBa0I7NEJBQzVCLGNBQWMsRUFBRSxrQkFBa0I7eUJBQ3JDO3dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDOzRCQUNqQixVQUFBLFFBQVEsRUFBRSxVQUFBLFFBQVE7eUJBQ3JCLENBQUM7cUJBQ0wsQ0FBQzt5QkFDRyxJQUFJLENBQUMsTUFBTSxDQUFDO3lCQUNaLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ1YsSUFBSSxDQUFDLFVBQUMsUUFBUTt3QkFDWCxvRUFBb0U7d0JBQ3BFLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDL0MsNENBQTRDO3dCQUM1QyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3pDLENBQUMsQ0FBQzt5QkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO3dCQUNULEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMvQixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQWxITDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixVQUFVLEVBQUUsQ0FBRSx3QkFBZSxFQUFFLGFBQUksQ0FBRTt3QkFDckMsUUFBUSxFQUFFLDIzRkEwRWI7cUJBQ0EsQ0FBQzs7eUJBQUE7Z0JBcUNGLFlBQUM7WUFBRCxDQWxDQSxBQWtDQyxJQUFBO1lBbENELHlCQWtDQyxDQUFBIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTI4LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgQ2FuQWN0aXZhdGUsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwLCBOZ0lmfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbn0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbG9naW4nLFxuICAgIGRpcmVjdGl2ZXM6IFsgRk9STV9ESVJFQ1RJVkVTLCBOZ0lmIF0sXG4gICAgdGVtcGxhdGU6IGBcbjxoZWFkPlxuICAgIDxsaW5rIGhyZWY9XCIvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjEuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgIDwhLS08c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJjb3VudGRvd24uanNcIj48L3NjcmlwdD4tLT5cblxuICAgIDwhLS08bGluayBocmVmPVwiL3NyYy9jc3MvY291bnRkb3duLmNzc1wiIHR5cGU9XCJ0ZXh0L2Nzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+LS0+XG48L2hlYWQ+XG48Ym9keT5cbjxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiLi4vaG9tZVwiPkVSV2FpdGluZ1RpbWU8L2E+XG5cbiAgICA8L2Rpdj5cbjwvbmF2PlxuXG48ZGl2IGFsaWduPVwiY2VudGVyXCIgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkICMzNzNjZmZcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICA8ZGl2IGlkPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDwhLS0gLy5UZXh0IERpdiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRlclwiPlxuICAgICAgICAgICAgPGgzPkVzdGltYXRlZCBUaW1lIFJlbWFpbmluZyBCZWZvcmUgTGF1bmNoOjwvaDM+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY291bnRkb3duXCI+PC9kaXY+XG4gICAgICAgICAgICA8IS0tIC8jQ291bnRkb3duIERpdiAtLT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tIC8uQ291bnRlciBEaXYgLS0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIC8uQ29udGVudCBEaXYgLS0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwhLS0gLyNNYWluIERpdiAtLT5cbiAgICA8L2Rpdj5cbiAgICA8IS0tIC8uQ29sdW1ucyBEaXYgLS0+XG4gIDwvZGl2PlxuICA8IS0tIC8uUm93IERpdiAtLT5cbjwvZGl2PlxuPCEtLSAvLkNvbnRhaW5lciBEaXYgLS0+XG48L2Rpdj5cblxuPHNjcmlwdD5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRkb3duXCIpLmlubmVySFRNTCA9IFwiaGloaWhpXCI7XG48L3NjcmlwdD5cblxuPGRpdiBpZD1cInRleHREaXZcIj48L2Rpdj5cbjxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHREaXZcIik7XG4gICAgZGl2LnRleHRDb250ZW50ID0gXCJteSB0ZXh0XCI7XG4gICAgdmFyIHRleHQgPSBkaXYudGV4dENvbnRlbnQ7XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1wiPlxuICAgIDxoMj5Mb2dpbjwvaDI+XG4gICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cImZvcm1cIiAoc3VibWl0KT1cImxvZ2luKCRldmVudCwgdXNlcm5hbWUudmFsdWUsIHBhc3N3b3JkLnZhbHVlKVwiPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZXJyb3JcIj5DaGVjayB5b3VyIHBhc3N3b3JkPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgbmctY2xhc3M9XCJ7ICdoYXMtZXJyb3InOiBmb3JtLnVzZXJuYW1lLiRkaXJ0eSAmJiBmb3JtLnVzZXJuYW1lLiRlcnJvci5yZXF1aXJlZCB9XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBpZD1cInVzZXJuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuZy1tb2RlbD1cInZtLnVzZXJuYW1lXCIgbmdDb250cm9sPVwidXNlcm5hbWVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgPHNwYW4gbmctc2hvdz1cImZvcm0udXNlcm5hbWUuJGRpcnR5ICYmIGZvcm0udXNlcm5hbWUuJGVycm9yLnJlcXVpcmVkXCIgY2xhc3M9XCJoZWxwLWJsb2NrXCI+VXNlcm5hbWUgaXMgcmVxdWlyZWQ8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIG5nLWNsYXNzPVwieyAnaGFzLWVycm9yJzogZm9ybS5wYXNzd29yZC4kZGlydHkgJiYgZm9ybS5wYXNzd29yZC4kZXJyb3IucmVxdWlyZWQgfVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5nLW1vZGVsPVwidm0ucGFzc3dvcmRcIiBuZ0NvbnRyb2w9XCJwYXNzd29yZFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICA8c3BhbiBuZy1zaG93PVwiZm9ybS5wYXNzd29yZC4kZGlydHkgJiYgZm9ybS5wYXNzd29yZC4kZXJyb3IucmVxdWlyZWRcIiBjbGFzcz1cImhlbHAtYmxvY2tcIj5QYXNzd29yZCBpcyByZXF1aXJlZDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbmctZGlzYWJsZWQ9XCJmb3JtLiRpbnZhbGlkIHx8IHZtLmRhdGFMb2FkaW5nXCIgW2Rpc2FibGVkXT1cIiFmb3JtLnZhbGlkXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5Mb2dpbjwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCI+UmVnaXN0ZXI8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbjwvZGl2PlxuICAgICAgICAgICAgXG5gLFxufSlcblxuXG5leHBvcnQgY2xhc3MgTG9naW4ge1xuICAgIC8vIFdlIGluamVjdCB0aGUgcm91dGVyIHZpYSBESVxuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIH1cblxuICAgIGxvZ2luKGV2ZW50LCB1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgTG9naW4gYnV0dG9uXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gV2UgY2FsbCBvdXIgQVBJIHRvIGxvZyB0aGUgdXNlciBpbi4gVGhlIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBhcmUgZW50ZXJlZCBieSB0aGUgdXNlclxuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3Nlc3Npb25zL2NyZWF0ZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSwgcGFzc3dvcmRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihzdGF0dXMpXG4gICAgICAgICAgICAudGhlbihqc29uKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gT25jZSB3ZSBnZXQgdGhlIEpXVCBpbiB0aGUgcmVzcG9uc2UsIHdlIHNhdmUgaXQgaW50byBsb2NhbFN0b3JhZ2VcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnand0JywgcmVzcG9uc2UuaWRfdG9rZW4pO1xuICAgICAgICAgICAgICAgIC8vIGFuZCB0aGVuIHdlIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBob21lXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIucGFyZW50Lm5hdmlnYXRlKCcvaG9tZScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
