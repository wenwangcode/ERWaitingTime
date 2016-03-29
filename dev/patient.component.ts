/**
 * Created by Joy on 2016-03-28.
 */
import {Component} from 'angular2/core';
import {Patient} from './Patient';
import {HTTPService} from './http.service';

@Component({
    selector:'patient',
    template: `
        <table>
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
        
        <br/><br/>
        <input type="text"   #p_lname>
        <input type="text" #p_fname>
        <input type="number" min="0" max="10000"#pid>
        <input type="text"  #is_male>
        <input type="number" min="0" max="10000" #dob>
        <input type="submit" (click)="
            addPatient(p_lname.value,p_fname.value,pid.value,is_male.value,dob.value)">
            
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
            this.addPatient(item.p_lname,
                item.p_fname,
                item.pid,
                item.is_male,
                item.dob);
        })
    }

    addPatient(p_lname: string, p_fname: string, pid:number,is_male:string, dob:Date){
        let patient = new Patient(p_lname,p_fname,pid,is_male,dob);
        this.httpService.postPQuery().subscribe(
            data => this.parsePatient(data),
            err => alert(err),
            () => console.log("post complete"));
    }


    removePatient(patient:Patient){
        var index = this.patients.indexOf(patient);
        this.patients.splice(index,1);
    }

}