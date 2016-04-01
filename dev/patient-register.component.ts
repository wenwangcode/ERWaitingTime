/**
 * Created by joshua on 2016-03-31.
 */

import {Component, OnInit} from 'angular2/core';
import {HTTPService} from "./http.service";
import {Patient} from "./patient";

@Component({
    selector: 'patient-register',
    templateUrl: 'templates/patient-register.component.html',
    providers: [HTTPService,],
    
})

export class PatientRegisterComponent {
    
    patients: Patient[] = [];
    next_id: number;
    
    constructor(private _httpService: HTTPService) {
    }

    preprocessPatientForm() {
        this._httpService.getPQuery().subscribe(
            data => this.parsePatientPreprocess(data),
            err => alert(err),
            () => console.log("GET patient data preprocessing complete")
        );
    }

    postPatient(p_lname, p_fname, pid, is_male, dob){
        this.addPatient(p_lname, p_fname, pid, is_male, dob);
        this._httpService.post(
            {
                p_lname: p_lname,
                p_fname: p_fname,
                pid: pid,
                is_male: is_male,
                dob: dob
            },
            'patient'
        ).subscribe(
            data => console.log(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    postPatientTest(p_lname: string, p_fname: string, year: string, month: string, day: string, is_male: string) {
        let dateString = year + '-' + month + '-' + day;
        // I am aware that this toJSON() method makes converting the datestring an ugly solution, but it works
        let dob = new Date(dateString).toJSON();
        if (this.next_id) {
            this.addPatient(p_lname, p_fname, this.next_id, is_male, dob);
        }
    }

    ngOnInit() {
        this.preprocessPatientForm();
    }

    // assigns a unique new patient id (called the pid in the data model)
    parsePatientPreprocess(json){
        let patient_ids: number[] = [];
        let next_id: number = 0;
        json.forEach( item => {
            patient_ids.push(item.pid);
        });
        for (let i = 0; i < patient_ids.length; i += 1) {
            if (patient_ids[i] > next_id) next_id = patient_ids[i]
        }
        console.log(next_id + 1);
        this.next_id = next_id + 1;
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