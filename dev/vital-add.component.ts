/**
 * Created by joshua on 2016-04-01.
 */
import {Component, OnInit} from 'angular2/core';

import {Vital} from "./vital";
import {HTTPService} from "./http.service";
import {isLoggedin} from "./is-loggedin";
import {CanActivate} from "angular2/router";

@Component({
    selector: 'vitals',
    templateUrl: 'templates/vital.component.html',
    providers: [HTTPService],
})

@CanActivate(() => isLoggedin())
export class VitalAddComponent implements OnInit{

    vitals: Vital[];
    next_vid: number;
    
    constructor(private _httpService: HTTPService) {}
    
    ngOnInit() {
        this.getVitals();
        this.generateNextId();
    }

    postVitals(oxygen_saturation, temperature, blood_pressure, pulse, respiration){
        this._httpService.post(
            {
                vid: this.next_vid,
                oxygen_saturation: oxygen_saturation,
                temperature: temperature,
                blood_pressure: blood_pressure,
                pulse: pulse,
                respiration: respiration
            },
            'vital'
        ).subscribe(
            data => console.log(data),
            err => alert(err),
            () => {
                this.getVitals();
                this.next_vid++;
            }
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

    generateNextId() {
        this._httpService.getVIQuery().subscribe(
            data => this.parseVitalsForId(data),
            err => alert(err),
            () => console.log("generateNextId() complete")
        );
    }

    parseVitalsForId(json) {
        let vital_ids: number[] = [];
        let next_id: number = 0;
        json.forEach( item => {
            vital_ids.push(item.vid);
        });
        for (let i = 0; i < vital_ids.length; i += 1) {
            if (vital_ids[i] > next_id) next_id = vital_ids[i]
        }
        console.log("next id vital " + next_id);
        this.next_vid = next_id + 1;
        console.log("next vid vital " + this.next_vid);
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
}