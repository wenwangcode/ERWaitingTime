/**
 * Created by Joy on 2016-03-28.
 */
import {Component} from 'angular2/core';
import {Router, CanActivate, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Authentication} from './authentication';

@Component({
    selector: 'login',
    directives: [ FORM_DIRECTIVES, NgIf ],
    template: `
<head>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet"/>
    <!--<script type="text/javascript" src="countdown.js"></script>-->

    <!--<link href="/src/css/countdown.css" type="text/css" rel="stylesheet"/>-->
</head>
<body>
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <a class="navbar-brand" href="../home">ERWaitingTime</a>

    </div>
</nav>

<div align="center" style="border:1px solid #373cff">
    <div class="container">
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div id="main">
        <div class="content">
          <!-- /.Text Div -->
          <div class="counter">
            <h3>Estimated Time Remaining Before Launch:</h3>
            <div id="countdown"></div>
            <!-- /#Countdown Div -->
          </div>
          <!-- /.Counter Div -->
        </div>
        <!-- /.Content Div -->
      </div>
      <!-- /#Main Div -->
    </div>
    <!-- /.Columns Div -->
  </div>
  <!-- /.Row Div -->
</div>
<!-- /.Container Div -->
</div>

<script>
document.getElementById("countdown").innerHTML = "hihihi";
</script>

<div id="textDiv"></div>
<script type="text/javascript">
    var div = document.getElementById("textDiv");
    div.textContent = "my text";
    var text = div.textContent;
</script>

<div class="col-md-6 col-md-offset-3">
    <h2>Login</h2>
    <form [ngFormModel]="form" (submit)="login($event, username.value, password.value)">
        <div *ngIf="error">Check your password</div>
        <div class="form-group" ng-class="{ 'has-error': form.username.$dirty && form.username.$error.required }">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" class="form-control" ng-model="vm.username" ngControl="username" required />
            <span ng-show="form.username.$dirty && form.username.$error.required" class="help-block">Username is required</span>
        </div>
        <div class="form-group" ng-class="{ 'has-error': form.password.$dirty && form.password.$error.required }">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" class="form-control" ng-model="vm.password" ngControl="password" required />
            <span ng-show="form.password.$dirty && form.password.$error.required" class="help-block">Password is required</span>
        </div>

        <div class="form-actions">
            <button type="submit" ng-disabled="form.$invalid || vm.dataLoading" [disabled]="!form.valid" class="btn btn-primary">Login</button>

            <a href="/" class="btn btn-link">Register</a>
        </div>
    </form>
</div>
            
`,
})


export class Login {
    // We inject the router via DI
    constructor(router: Router) {
        this.router = router;
    }

    login(event, username, password) {
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
                username, password
            })
        })
            .then(status)
            .then(json)
            .then((response) => {
                // Once we get the JWT in the response, we save it into localStorage
                localStorage.setItem('jwt', response.id_token);
                // and then we redirect the user to the home
                this.router.parent.navigate('/home');
            })
            .catch((error) => {
                alert(error.message);
                console.log(error.message);
            });
    }
}