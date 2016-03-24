/**
 * Created by wendywang on 2016-03-24.
 */
export class Prescription{

    private pname: string;
    private amount: number;
    private rid: number;//report ID

    constructor(pname: string, amount: number, rid: number){
        this.pname = pname;
        this.amount = amount;
        this.rid = rid;
    }
}