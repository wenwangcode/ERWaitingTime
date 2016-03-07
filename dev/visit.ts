export class Visit{

patient_id: number;
staff_id: number;
room: number;
date: Date;

constructor(pid: number, sid: number, r:number, d:Date){
    this.patient_id = pid;
    this.staff_id = sid;
    this.room = r;
    this.date = d;
}
}

