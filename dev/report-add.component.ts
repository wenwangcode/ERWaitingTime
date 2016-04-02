/**
 * Created by Joy on 2016-04-01.
 */
import {Component, OnInit} from 'angular2/core';
import {Patient} from './Patient';
import {HTTPService} from './http.service';
import {Report} from "./report";

@Component({
    selector:'report',
    templateUrl: 'templates/report.component.html',
    providers:[HTTPService]
})
export class ReportAddComponent{

    reports: Report[] = [];

    constructor(private httpService: HTTPService){
    }

    ngOnInit() {
        this.httpService.getRQuery().subscribe(
            data => this.parseReport(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    parseReport(json){
        json.forEach( item => {
            this.addReport(item.rid,
                item.diagnosis,
                item.report_date,
                item.vid,
                item.pid);
        })
    }

    addReport(rid: number, diagnosis: string, report_date:Date,vid:number, pid:number){
        let report = new Report(rid,diagnosis,report_date,vid,pid);
        this.reports.push(report);
    }

    removeReport(report:Report){
        var index = this.reports.indexOf(report);
        this.reports.splice(index,1);
    }

    postReport(rid, diagnosis, report_date, vid, pid){
        this.httpService.post(
            {
                rid: rid,
                diagnosis: diagnosis,
                report_date: report_date,
                vid: vid,
                pid: pid
            },
            'report'
        ).subscribe(
            data => console.log(data),
            err => alert(err),
            () => console.log("complete")
        );
    }
}