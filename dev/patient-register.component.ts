/**
 * Created by joshua on 2016-03-31.
 */

import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Headers} from 'angular2/http';
import {HTTPService} from "./http.service";
import {Patient} from "./patient";

@Component({
    selector: 'patient-register',
    templateUrl: 'templates/patient-register.component.html',
    providers: [HTTPService,],

})

export class PatientRegisterComponent {

    patients:Array<Patient>;
    next_id: number;

    sex: number;
    
    constructor(
        private _httpService: HTTPService,
        private _router: Router
    ) {}

    ngOnInit() {
        this.preprocessPatientForm();
    }
    
    preprocessPatientForm() {
        this._httpService.getPQuery().subscribe(
            data => this.parsePatientPreprocess(data),
            err => alert(err),
            () => console.log("GET patient data preprocessing complete")
        );
    }

    postPatient(p_lname: string, p_fname: string, year: string, month: string, day: string){
        let dob = year + '-' + month + '-' + day;

        this._httpService.post(
            {
                p_lname: p_lname,
                p_fname: p_fname,
                pid: this.next_id,

                is_male: this.sex,

                dob: dob
            },
            'patient'
        ).subscribe(
            data => console.log(data),
            err => alert(err),
            () => console.log("complete")
        );
        let headers = new Headers();
        console.log(headers.getAll());
        this._router.navigate(['Dashboard']);
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
        if (!this.findPatient(patient)) {
            this.patients.push(patient);
            return true;
        }
        return false;
    }
    
    findPatient(patient: Patient) {
        for (let i = 0; i < this.patients.length; i += 1) {
            if (patient.pid == this.patients[0].pid) return true;
        }
        return false;
    }
}