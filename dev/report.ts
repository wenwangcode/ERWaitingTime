/**
 * Created by wendywang on 2016-03-16.
 */

export class Report{

    private r_id: number;
    private symptom: string;
    private diagnosis: string;
    private report_date: string;
    private v_id: number; //vital_ID
    private p_id: number;

    constructor(r_id: number, symptom: string, diagnosis: string, report_date: string, v_id: number, p_id: number){
        this.r_id = r_id;
        this.symptom = symptom;
        this.diagnosis = diagnosis;
        this.report_date = report_date;
        this.v_id = v_id;
        this.p_id = p_id;
    }
}