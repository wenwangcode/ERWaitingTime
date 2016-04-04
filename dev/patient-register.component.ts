/**
 * Created by joshua on 2016-03-31.
 */

import {Component, OnInit} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {HTTPService} from "./http.service";
import {Patient} from "./patient";
import {RouterLink} from "angular2/router";
import {PatientVisit} from "./patient_visit";
import {isLoggedin} from "./is-loggedin";

@Component({
    selector: 'patient-register',
    templateUrl: 'templates/patient-register.component.html',
    providers: [
        HTTPService,
        RouterLink
    ],
    directives: [RouterLink],
})

@CanActivate(() => isLoggedin())

export class PatientRegisterComponent {

    patients:Array<Patient>;
    errorMessage: string;
    next_id: number;
    sex: number;
    errorMessages = {
        p_lname: '',
        p_fname: '',
        year: '',
        month: '',
        day: '',
    };
    
    constructor(
        private _httpService: HTTPService,
        private _router: Router
    ) {}

    ngOnInit() {
        // this.preprocessPatientForm();
        this.getPatients();
    }

    getPatients() {
        this._httpService.getAllFromTable('patient')
            .subscribe(
                patients => this.patients = patients,
                error =>  this.errorMessage = <any>error
            );
    }
    
    // preprocessPatientForm() {
    //     this._httpService.getPQuery().subscribe(
    //         data => this.getPatientNextId(data),
    //         err => alert(err),
    //         () => console.log("GET patient data preprocessing complete")
    //     );
    // }

    private checkNull(...params) {
        let nullDetected = false;
        params.forEach(item => {
            if (item == '') {
                nullDetected = true;
            }
        });
        if (nullDetected) {
            return true;
        } else {
            return false;
        }
    }

    postPatient(p_lname: string, p_fname: string, year: string, month: string, day: string){
        this.errorMessage = '';
        if (this.checkNull.apply(this, arguments)){
            console.log("missing arguments");
            this.errorMessage = 'missing';
            return;
        }
        let dob = year + '-' + month + '-' + day;
        this._httpService.post(
            {
                pid: this.next_id,
                p_lname: p_lname,
                p_fname: p_fname,
                is_male: this.sex,
                dob: dob
            },
            'patient'
        ).subscribe(
            data => console.log(data),
            error =>  this.errorMessage = <any>error,
            () => console.log("complete")
        );
    }
    

    // assigns a unique new patient id (called the pid in the data model)
    // getPatientNextId(json){
    //     let patient_ids: number[] = [];
    //     let next_id: number = 0;
    //     json.forEach( item => {
    //         patient_ids.push(item.pid);
    //     });
    //     for (let i = 0; i < patient_ids.length; i += 1) {
    //         if (patient_ids[i] > next_id) next_id = patient_ids[i]
    //     }
    //     console.log(next_id + 1);
    //     this.next_id = next_id + 1;
    // }

    // parsePatient(json){
    //     json.forEach( item => {
    //         this.addPatient(
    //             item.p_lname,
    //             item.p_fname,
    //             item.pid,
    //             item.is_male,
    //             item.dob
    //         );
    //     })
    // }


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