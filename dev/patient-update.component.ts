/**
 * Created by joshua on 2016-04-03.
 */

import {Component, OnInit, Input} from 'angular2/core';
import {CanActivate, Router, RouteParams} from 'angular2/router';

import {Patient} from './Patient';
import {HTTPService} from './http.service';
import {PatientVisit} from "./patient_visit";
import {PatientReport} from "./patient_report";
import {isLoggedin} from "./is-loggedin";

@Component({
    selector:'patient-update',
    templateUrl: 'templates/patient-update.component.html',
    providers:[HTTPService]
})

@CanActivate(() => isLoggedin())

export class PatientUpdateComponent implements OnInit {

    @Input()
    surname: string;
    name: string;
    id: number;
    year: number;
    month: number;
    day: number;
    sex: number;

    patients: Patient[];
    testArray: any;

    errorMessage: string;

    constructor(
        private _routeParams: RouteParams,
        private _httpService: HTTPService){}

    ngOnInit() {
        // + converts the id string into a number
        let id = +this._routeParams.get('pid');
        console.log("ID = " + id);
        this.getPatients(id);
        console.log("The patients array contains: " + this.patients);
        // this.getPatient(id);
    }

    getPatients(id) {
        this._httpService.getAllFromTable('patient')
            .subscribe(
                patients => this.parsePatients(patients, id),
                // patients => this.patients = patients,
                error => this.errorMessage = <any> error
            );
    }

    parsePatients(data, id) {
        for (let i=0; i<data.length; i+=1) {
            if (data[i].pid == id) {
                this.surname = data[i].p_lname;
                this.name = data[i].p_fname;
                this.id = data[i].pid;
                this.parseDob(data[i].dob);
                this.sex = data[i].is_male.data[0];
            }
        }
    }

    parseDob(dob: string) {
        this.year = parseInt(dob.slice(0,4));
        this.month = parseInt(dob.slice(5,7));
        this.day = parseInt(dob.slice(8,10));
    }

    //  dob: "1996-02-26T08:00:00.000Z"
    updatePatient(p_lname: string, p_fname: string, year: string, month: string, day: string){
        let dob = year + '-' + month + '-' + day;
        if (this.checkNull.apply(this, arguments)){
            console.log("missing arguments");
            this.errorMessage = 'update missing';
            return;
        }
        console.log(this.sex);
        this._httpService.updatePatient_http (
            {
                p_lname: p_lname,
                p_fname: p_fname,
                pid: this.id,
                is_male: this.sex,
                dob: dob,
            },
            this.id
        ).subscribe(
            data => console.log(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

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

    // getPatient(id: number) {
    //     console.log("Iterating over patients.");
    //     this.patients.forEach(patient => {
    //         console.log("Patient: " + patient);
    //         console.log("Patient ID: " + patient.pid);
    //         if (patient.pid == id)
    //             this.patient = patient;
    //     })
    // }
}
