export class Visit{

private patient_id: number;
private staff_id: number;
private room: number;
private date: Date;

constructor(pid: number, sid: number, r:number, d:Date){
    this.patient_id = pid;
    this.staff_id = sid;
    this.room = r;
    this.date = d;
}
}

