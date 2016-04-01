/**
 * Created by Joy on 2016-03-28.
 */
import {Component, OnInit} from 'angular2/core';
import {Patient} from './Patient';
import {HTTPService} from './http.service';

@Component({
    selector:'patient',
    templateUrl: 'templates/patients.component.html',
    providers:[HTTPService]
})
export class PatientComponent{

    patients: Patient[] = [];

    constructor(private httpService: HTTPService){
        this.httpService.getPQuery(
            data => this.parsePatient(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    ngOnInit() {
        let data = this.httpService.getPQuery();
        this.parsePatient(data);
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