/**
 * Created by wendywang on 2016-03-13.
 */
import {Component,View} from 'angular2/core';
import {Patient} from './patient';
import {HTTPService} from "./http.service";

@Component({
    selector:'patients',
    templateUrl:'views/patients.component.html'
})


export class PatientsComponent{
    patients:Array<Patient>;

    constructor(private httpService: HTTPService){
        this.patients = [];
        this.httpService.getQuery().subscribe(
            data => this.parsePatients(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    parsePatients(json) {
        json.forEach( item => {
            console.log(item)
        })
    }


}
