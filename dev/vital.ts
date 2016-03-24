/**
 * Created by wendywang on 2016-03-23.
 */
export class Vital{

    private oxygen_saturation: number;
    private temperature: number;
    private blood_pressure: number;
    private pulse: number;
    private respiration: number;
    private vid: number;

    constructor(oxygen_saturation: number, temperature: number, blood_pressure:number, pulse: number, respiration: number, vid: number){
        this.oxygen_saturation = oxygen_saturation;
        this.temperature = temperature;
        this.blood_pressure = blood_pressure;
        this.pulse = pulse;
        this.respiration = respiration;
        this.vid = vid;
    }
}

