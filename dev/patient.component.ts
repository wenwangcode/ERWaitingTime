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
export class PatientComponent {

    patients:Patient[] = [];

    constructor(private _httpService:HTTPService) {
    }

    ngOnInit() {
        this._httpService.getPQuery().subscribe(
            data => this.parsePatient(data),
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
