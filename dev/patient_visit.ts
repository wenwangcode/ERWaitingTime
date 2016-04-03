/**
 * Created by Joy on 2016-04-02.
 */
export class PatientVisit{
    public p_lname: string;
    public p_fname: string;
    public pid: number;
    public is_male: string;
    public dob: Date;
    public visit_id:number;
    public staff_id: number;
    public room: number;
    public date: Date;

    constructor(p_lname: string, p_fname: string, pid:number,is_male:string, dob:Date, visit_id:number,
    staff_id:number,room:number,date:Date){
        this.p_lname = p_lname;
        this.p_fname = p_fname;
        this.pid = pid;
        this.is_male = is_male;
        this.dob = dob;
        this.visit_id = visit_id;
        this.staff_id = staff_id;
        this.room = room;
        this.date = date;
    }
}