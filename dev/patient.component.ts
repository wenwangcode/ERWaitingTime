/**
 * Created by Joy on 2016-03-28.
 */
import {Component, OnInit} from 'angular2/core';
import {Patient} from './Patient';
import {HTTPService} from './http.service';
import {PatientVisit} from "./patient_visit";
import {PatientReport} from "./patient_report";

@Component({
    selector:'patient',
    templateUrl: 'templates/patients.component.html',
    providers:[HTTPService]
})
export class PatientComponent {

    patients:Patient[] = [];
    patientvisits:PatientVisit[] = [];
    patientreports:PatientReport[] = [];

    constructor(private _httpService:HTTPService) {
    }
    joinpvs(){
        console.log("I am here!!!");
        this._httpService.joinpv()
            .subscribe(
                data => this.parsepv(data),
                err => alert(err),
                () => console.log("complete")
            );
        console.log("I am there!!!");
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
                data => console.log(data),
                err => alert(err),
                () => console.log("complete")
            )
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
