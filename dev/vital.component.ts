/**
 * Created by joshua on 2016-04-01.
 */
import {Component, OnInit} from 'angular2/core';

import {Vital} from "./vital";
import {HTTPService} from "./http.service";
import {Vital_Patient_Max} from "./vital_patient_max";
import {CanActivate} from "angular2/router";
import {isLoggedin} from "./is-loggedin";

@Component({
    selector: 'vitals',
    templateUrl: 'templates/vital.html',
    providers: [HTTPService],
})

@CanActivate(() => isLoggedin())
export class VitalComponent implements OnInit{

    vitals: Vital[];
    next_vid: number;
    vp_maxs: Vital_Patient_Max[] = [];
    next_id: number;

    constructor(private _httpService: HTTPService) {

    }
    
    ngOnInit() {
        this.getVitals();
    }

    postVitals(oxygen_saturation, temperature, blood_pressure, pulse, respiration){
        this._httpService.post(
            {
                oxygen_saturation: oxygen_saturation,
                temperature: temperature,
                blood_pressure: blood_pressure,
                pulse: pulse,
                respiration: respiration
            },
            'vital'
        ).subscribe(
            data => {
                console.log(data);
                console.log('POST success')
            },
            err => console.error(err),
            () => {this.getVitals()}
        );
    }
    
    getVitals() {
        this.vitals = [];
        this._httpService.getVIQuery().subscribe(
            data => this.parseVitals(data),
            err => alert(err),
            () => console.log("getVitals() complete")
        );
    }

    // not needed at the moment
    // generateNextId() {
    //     this._httpService.getVIQuery().subscribe(
    //         data => this.parseVitalsForId(data),
    //         err => alert(err),
    //         () => console.log("generateNextId() complete")
    //     );
    // }

    parseVitalsForId(json) {
        let vital_ids: number[] = [];
        let next_id: number = 0;
        json.forEach( item => {
            vital_ids.push(item.vid);
        });
        for (let i = 0; i < vital_ids.length; i += 1) {
            if (vital_ids[i] > next_id) next_id = vital_ids[i]
        }
        console.log(next_id + 1);
        this.next_id = next_id + 1;
    }

    parseVitals(json) {
        json.forEach( item => {
            this.addVital(
                item.oxygen_saturation,
                item.temperature,
                item.blood_pressure,
                item.pulse,
                item.respiration,
                item.vid
            )
        });
    }
    
    addVital(
        oxygen_saturation: number,
        temperature: number,
        blood_pressure: number,
        pulse: number,
        respiration: number,
        vid: number
    ) {
        let vital = new Vital(oxygen_saturation, temperature, blood_pressure, pulse, respiration, vid);
        this.vitals.push(vital);
    }

    /*
    ** handle max blood_pressure
     */

    addVP(pid: number, blood_pressure: number){
        let vp_max = new Vital_Patient_Max(pid, blood_pressure);
        if (this.vp_maxs.length==0){
            this.vp_maxs.push(vp_max);
        }
        else {
            if (vp_max.blood_pressure == this.vp_maxs[0].blood_pressure){
                this.vp_maxs.push(vp_max);
            }
        }
    }

    parseMax(json) {
        json.forEach(item => {
            this.addVP(item.pid, item.blood_pressure);
        });
    }

    getMax(){
        return this._httpService.getMaxVital().subscribe(
            data => this.parseMax(data),
            err => alert(err),
            () => console.log("complete max vital")
        )
    }
}