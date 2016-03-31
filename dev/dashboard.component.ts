/**
 * Created by Joy on 2016-03-28.
 */
import {Component} from 'angular2/core';
import {Router, CanActivate, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet, RouterLink} from 'angular2/router';
import {EquipmentComponent} from "./equipment.component";
import {PatientComponent} from "./patient.component";
import {VisitComponent} from "./visit.component";
import {isLoggedin} from "./is-loggedin";
import {Authentication} from "./authentication";

@Component({
    selector: 'home',
    directives: [],
    template: `
        <html>
<head>
    <title>Dashboard</title>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet"/>
</head>
<body>
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <a class="navbar-brand" href="../home">ERWaitingTime</a>
        <div class="container" align="right">
        <button a href="#" class="btn btn-link" (click)="onLogout()">Logout</button>
            </div>

    </div>
</nav>
<br>
<br>
<br>
<div align="center">
    <h2>Welcome, you are successfully logged in.</h2>
</div>
    <a href="../views/patients.component.html" class="btn btn-link" align="right">Equipment Register</a>
    <a href="../views/patients.component.html" class="btn btn-link" align="right">View Patients</a><br>
    <a href="../views/visit.html" class="btn btn-link" align="right">Visit Page</a><br>
    <a href="../views/visit.html" class="btn btn-link" align="right">View Patients</a><br>


</body>
</html>
            
`,
})



@CanActivate(() => isLoggedin())
export class DashboardComponent {
    constructor(public auth: Authentication, public router: Router) {}

    onLogout() {
        this.auth.logout()
            .subscribe(
                () => this.router.navigate(['../Login'])
            );
    }
}