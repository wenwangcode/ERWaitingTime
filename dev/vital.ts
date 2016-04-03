/**
 * Created by joshua on 2016-04-01.
 */

export class Vital {

    oxygen_saturation: number;
    temperature: number;
    blood_pressure: number;
    pulse: number;
    respiration: number;
    vid: number;

    constructor(
                oxygen_saturatioin: number,
                temperature: number,
                blood_pressure:number,
                pulse:number,
                respiration:number,
                vid: number){
        this.oxygen_saturation = oxygen_saturatioin;
        this.temperature = temperature;
        this.blood_pressure = blood_pressure;
        this.pulse = pulse;
        this.respiration = respiration;
        this.vid = vid;
    }
}