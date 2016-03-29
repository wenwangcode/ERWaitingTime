/**
 * Created by Joy on 2016-03-28.
 */
export class Equipment{

    private eid: number;
    private type: string;
    private room: number;

    constructor(eid: number, type: string, room:number){
        this.eid = eid;
        this.type = type;
        this.room = room;
    }
}
