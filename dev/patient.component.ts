/**
 * Created by Joy on 2016-03-28.
 */
import {Component, OnInit} from 'angular2/core';
import {CanActivate} from 'angular2/router';

import {Patient} from './Patient';
import {HTTPService} from './http.service';
import {PatientVisit} from "./patient_visit";
import {PatientReport} from "./patient_report";
import {isLoggedin} from "./is-loggedin";

@Component({
    selector:'patient',
    templateUrl: 'templates/patients.component.html',
    providers:[HTTPService]
})

// @CanActivate(() => isLoggedin())

export class PatientComponent implements OnInit {

    errorMessage: string;
    patients:Patient[] = [];
    patientvisits:PatientVisit[] = [];
    patientreports:PatientReport[] = [];
    sex: number;
    constructor(private _httpService:HTTPService) {}

    joinpvs(){
        this._httpService.joinpv()
            .subscribe(
                data => this.parsepv(data),
                err => alert(err),
                () => console.log("complete")
            );
    }
    joinprs(){
        this._httpService.joinpr()
            .subscribe(
                data => this.parsepr(data),
                err => alert(err),
                () => console.log("complete")
            );
    }
    parsepv(json){
        json.forEach(item => {
            this.addPv(
                item.p_lname,
                item.p_fname,
                item.pid,
                item.is_male,
                item.dob,
                item.visitId,
                item.sid,
                item.room,
                item.visit_date
            );
        })

    }
    addPv(p_lname:string, p_fname:string, pid:number, is_male:string, dob:Date,
          visitId:number,sid:number,room:number,visit_date:Date){
        let patientvisit = new PatientVisit(p_lname,p_fname,pid,is_male,dob,visitId,sid,room,visit_date);
        this.patientvisits.push(patientvisit);
    }
    parsepr(json){
        json.forEach(item => {
            this.addPr(
                item.p_lname,
                item.p_fname,
                item.pid,
                item.is_male,
                item.dob,
                item.rid,
                item.diagnosis,
                item.report_date,
                item.vid
            );
        })
    }
    addPr(p_lname:string, p_fname:string, pid:number, is_male:string, dob:Date,
          rid:number,diagnosis:string,report_date:Date,vid:number){
        let patientreport = new PatientReport(p_lname,p_fname,pid,is_male,dob,rid,diagnosis,report_date,vid);
        this.patientreports.push(patientreport);
    }

    ngOnInit() {
        this._httpService.getPQuery().subscribe(
            data => this.parsePatient(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    printtest(){
        this._httpService.getPQuery().subscribe(
            data => console.log(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    parsePatient(json) {
        json.forEach(item => {
            this.addPatient(item.p_lname,
                item.p_fname,
                item.pid,
                item.is_male,
                item.dob);
        })
    }

    deletePatient(patientId:number) {
        return this._httpService.delete(patientId)
            .subscribe(
                data => this.dbErrorHandler(data),
                error => this.errorMessage = <any>error,
                () => console.log("patient delete request complete")
            )
    }

    dbErrorHandler(error) {
        /* The server is not handling the delete error. I can see the server message,
        but as far as Angular is concerned, the GET request is a success. I will hack
        this on the front end for now since the delete operation cannot happen because
        of the database configuration on this table, but for production this would absolutely
        have to be changed.
        */
        console.log("The database returned: " + JSON.stringify(error));
        this.errorMessage = "delete failed";
    }

  //  dob: "1996-02-26T08:00:00.000Z"
    updatePatient_ts(p_lname: string, p_fname: string, dob:string, gender: string, pid: number){
        //let dob = year + '-' + month + '-' + day;
        console.log(gender);
        console.log(gender.data[0]);
        this._httpService.updatePatient_http (
            {
                p_lname: p_lname,
                p_fname: p_fname,
                pid: pid,
                is_male: gender.data,
                dob: dob.slice(0,10)
            },
            pid
        ).subscribe(
            data => console.log(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    addPatient(p_lname:string, p_fname:string, pid:number, is_male:string, dob:Date) {
        let patient = new Patient(p_lname, p_fname, pid, is_male, dob);
        this.patients.push(patient);
    }

    removePatient(patient:Patient) {
        var index = this.patients.indexOf(patient);
        this.patients.splice(index, 1);
    }

    postPatient(p_lname, p_fname, pid, is_male, dob) {
        this._httpService.post(
            {
                p_lname: p_lname,
                p_fname: p_fname,
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
}
