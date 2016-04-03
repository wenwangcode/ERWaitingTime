export class Visit{
private visit_id:number;
private patient_id: number;
private staff_id: number;
private room: number;
private date: Date;

constructor(visitid:number, pid: number, sid: number, r:number, d:Date){
    this.visit_id =visitid;
    this.patient_id = pid;
    this.staff_id = sid;
    this.room = r;
    this.date = d;
}
}

