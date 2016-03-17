/**
 * Created by wendywang on 2016-03-16.
 */

export class Staff{

    private s_id: number;
    private s_lname: string;
    private s_fname: string;
    private specialization: string;
    private isDoctor: boolean;
    private experience_in_years: number;

    constructor(s_id: number,
                s_lname: string,
                s_fname:string,
                specialization:string,
                isDoctor:boolean,
                experience_in_years: number){
        this.s_id = s_id;
        this.s_lname = s_lname;
        this.s_fname = s_fname;
        this.specialization = specialization;
        this.isDoctor = isDoctor;
        this.experience_in_years = experience_in_years;
    }

    //if we know the staff ID(s_id), then we will know how he/she is in the db
    constructor(s_id: number){
        this.s_id = s_id;
    }
}