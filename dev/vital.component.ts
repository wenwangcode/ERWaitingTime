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
    next_id: number;
    
    constructor(private _httpService: HTTPService) {}
    
    ngOnInit() {
        this.getVitals();
        // not needed at the moment
        // this.generateNextId();
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
}