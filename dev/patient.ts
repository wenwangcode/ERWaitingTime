/**
 * Created by wendywang on 2016-03-10.
 */
export class Patient{

    private gender: string;
    private p_fname: string;
    private p_lname: string;
    private pid: number;
    private dob: Date;

    constructor(gender: string, p_fname: string, p_lname: string, pid:number, dob:Date){
        this.gender = gender;
        this.p_fname = p_fname;
        this.p_lname = p_lname;
        this.pid = pid;
        this.dob = dob;
    }
}
