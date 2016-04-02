/**
 * Created by Joy on 2016-04-01.
 */
export class Prescription{
    private pname: string;
    private amount: number;
    private rid: number;

    constructor(pname: string, amount: number, rid:number){
        this.pname = pname;
        this.amount = amount;
        this.rid = rid;
    }
}