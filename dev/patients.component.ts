/**
 * Created by wendywang on 2016-03-13.
 */
import {Component,View} from 'angular2/core';
import {Patient} from './patient';

@Component({
    selector:'patient',
    templateUrl:'views/patients.component.html'
})


export class PatientsComponent{
    patients:Array<Patient>;

    constructor(){
        this.patients = [];
    }

    addPatient(gender:string, p_fname:string, p_lname:string, pid:number, dob:Date){
        let patient = new Patient(gender,p_fname,p_lname,pid,dob);
        this.patients.push(patient);
    }

    removePatient(patient: Patient){
        var index = this.patients.indexOf(patient);
        this.patients.splice(index,1);
    }


}