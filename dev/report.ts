/**
 * Created by Joy on 2016-04-01.
 */
export class Report{
    private rid: number;
    private diagnosis: string;
    private report_date: Date;
    private vid: number;
    private pid: number;

    constructor(rid: number, diagnosis: string, report_date:Date,vid:number, pid:number){
        this.rid = rid;
        this.diagnosis = diagnosis;
        this.report_date = report_date;
        this.vid = vid;
        this.pid = pid;
    }
}