/**
 * Created by Joy on 2016-04-02.
 */
export class PatientReport{
    public p_lname: string;
    public p_fname: string;
    public pid: number;
    public is_male: string;
    public dob: Date;
    public rid: number;
    public diagnosis: string;
    public report_date: Date;
    public vid: number;

    constructor(p_lname: string, p_fname: string, pid:number,is_male:string, dob:Date, rid:number,
                diagnosis:string,report_date:Date,vid:number){
        this.p_lname = p_lname;
        this.p_fname = p_fname;
        this.pid = pid;
        this.is_male = is_male;
        this.dob = dob;
        this.rid = rid;
        this.diagnosis = diagnosis;
        this.report_date = report_date;
        this.vid = vid;
    }
}