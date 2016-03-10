/**
 * Created by wendywang on 2016-03-10.
 */
export class Patient{

    private gender: string;
    private pname: string;
    private pid: number;
    private dob: Date;

    constructor(gender: string, pname: string, pid:number, dob:Date){
        this.gender = gender;
        this.pname = pname;
        this.pid = pid;
        this.dob = dob;
    }
}
