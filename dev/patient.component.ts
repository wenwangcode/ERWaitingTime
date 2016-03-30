/**
 * Created by Joy on 2016-03-28.
 */
import {Component} from 'angular2/core';
import {Patient} from './Patient';
import {HTTPService} from './http.service';

@Component({
    selector:'patient',
    template: `
    <html>
<head>
    <title>ERWaitingTime</title>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet"/>
    <style>
        #customers {
            font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }
        #customers td, #customers th {
            border: 1px solid #ddd;
            text-align: left;
            padding: 8px;
        }
        #customers tr:nth-child(even){background-color: #f2f2f2}
        #customers tr:hover {background-color: #ddd;}
        #customers th {
            padding-top: 12px;
            padding-bottom: 12px;
            background-color: #4CAF50;
            color: white;
        }
    </style>
</head>
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <a class="navbar-brand" href="../home">ERWaitingTime</a>
    </div>
</nav>

<body>
<div class="page-header" style="margin-top: 100px">
    <h1><center>Patients List</center></h1>
</div>
<p id="demo"></p>
<script>
    document.getElementById("demo").innerHTML = Date();
</script>
<table id="customers">
     <table align="center">
            <tr>
                <th> patient_lastname </th>
                <th> patient_firstname</th>
                <th> patient_id</th>
                <th> patient_gender</th>
                <th> patient_date</th>
            </tr>
            <tr *ngFor="#patient of patients">
                <td> {{patient.p_lname}} </td>
                <td> {{patient.p_fname}} </td>
                <td> {{patient.pid}} </td>
                <td> {{patient.is_male}} </td>
                <td> {{patient.dob}} </td>
            </tr>
        </table>
</table>
</body>

</html>
`,
    providers:[HTTPService]
})
export class PatientComponent{
    patients:Array<Patient>;

    constructor(private httpService: HTTPService){
        this.patients = [];
        this.httpService.getPQuery().subscribe(
            data => this.parsePatient(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    parsePatient(json){
        json.forEach( item => {
            this.addPatient(
                item.p_lname,
                item.p_fname,
                item.pid,
                item.is_male,
                item.dob);
        })
    }

    addPatient(p_lname: string, p_fname: string, pid:number,is_male:string, dob:Date){
        let patient = new Patient(p_lname,p_fname,pid,is_male,dob);
        this.patients.push(patient);
    }

}