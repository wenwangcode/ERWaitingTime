/**
 * Created by joshua on 2016-03-31.
 */

import {Component, OnInit} from 'angular2/core';
import {HTTPService} from "./http.service";
import {Patient} from "./patient";

@Component({
    selector: '',
    templateUrl: '',
    providers: [HTTPService,],
    
})

export class PatientRegisterComponent {
    
    patients: Patient[] = [];
    
    constructor(private _httpService: HTTPService) {
    }
    
    ngOnInit() {
        this._httpService.getPQuery().subscribe(
            data => this.parsePatient(data),
            err => alert(err),
            () => console.log("complete")
        )
    }

    parsePatient(json){
        json.forEach( item => {
            this.addPatient(
                item.p_lname,
                item.p_fname,
                item.pid,
                item.is_male,
                item.dob
            );
        })
    }

    addPatient(p_lname:string, p_fname:string, pid:number, is_male:string, dob:Date){
        let patient = new Patient(p_lname, p_fname, pid, is_male, dob);
        this.patients.push(patient);
    }
}