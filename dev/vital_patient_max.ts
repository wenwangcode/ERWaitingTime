/**
 * Created by wendywang on 2016-04-02.
 */
export class Vital_Patient_Max {
    public pid: number;
    public blood_pressure: number;

    constructor(pid:number, blood_pressure: number){
        this.pid = pid;
        this.blood_pressure = blood_pressure;
    }
    //get pid(){
    //    return this.pid;
    //}
    //get blood_pressure(){
    //    return this.blood_pressure;
    //}
}