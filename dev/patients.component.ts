/**
 * Created by wendywang on 2016-03-13.
 */
import {Component,View} from 'angular2/core';
import {Patient} from './patient';

@Component({
    selector:'patient',
    template:
        `<h1>hello world</h1>`
})


export class PatientsComponent{
    patients:Array<Patient>;

    constructor(){
        this.patients = [];
    }

    addPatient(gender:string, pname:string, pid:number, dob:Date){
        let patient = new Patient(gender,pname,pid,dob);
        this.patients.push(patient);
    }

    removeVisit(patient: Patient){
        var index = this.patients.indexOf(patient);
        this.patients.splice(index,1);
    }

}