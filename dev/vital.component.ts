/**
 * Created by joshua on 2016-04-01.
 */
import {Component, OnInit} from 'angular2/core';

import {Vital} from "./vital";
import {HTTPService} from "./http.service";

@Component({
    selector: 'vitals',
    templateUrl: 'templates/vital.component.html',
    providers: [HTTPService],
})

export class VitalComponent {

    vitals: Vital[];
    
    constructor(private _httpService: HTTPService) {}
    
    ngOnInit() {
        this.getVitals();
    }
    
    getVitals() {
        this.vitals = [];
        this._httpService.getVIQuery().subscribe(
            data => this.parseVitals(data),
            err => alert(err),
            () => console.log("complete")
        );
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