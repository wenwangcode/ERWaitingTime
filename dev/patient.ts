/**
 * Created by wendywang on 2016-03-10.
 */
export class Patient{
    p_lname: string;
    p_fname: string;
    pid: number;
    is_male: string;
    dob: Date;

    constructor(p_lname: string, p_fname: string, pid:number,is_male:string, dob:Date){
        this.p_lname = p_lname;
        this.p_fname = p_fname;
        this.pid = pid;
        this.is_male = is_male;
        this.dob = dob;
    }
}
