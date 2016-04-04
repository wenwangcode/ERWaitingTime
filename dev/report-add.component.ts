/**
 * Created by Joy on 2016-04-01.
 */
import {Component, OnInit} from 'angular2/core';
import {Patient} from './Patient';
import {HTTPService} from './http.service';
import {Report} from "./report";
import {RouterLink, CanActivate} from "angular2/router";
import {isLoggedin} from "./is-loggedin";

@Component({
    selector:'report',
    templateUrl: 'templates/report.component.html',
    providers: [HTTPService,RouterLink],
    directives: [RouterLink],
})
@CanActivate(() => isLoggedin())
export class ReportAddComponent implements OnInit{

    reports: Report[] = [];
    nextr_id:number;
    patientIds: number[];
    vitalIds: number[];

    constructor(private httpService: HTTPService){
    }

    ngOnInit() {
        this.preprocessPeportId();
        this.getVitalIds();
        this.getPatientIds();
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

    postReport(diagnosis:string, year:string,month:string,day:string, vid, pid){
        let report_date = year + '-' + month + '-' + day;
        this.httpService.post(
            {
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

    preprocessPeportId() {
        this.httpService.getRQuery().subscribe(
            data => this.parseReportId(data),
            err => alert(err),
            () => console.log("GET report data preprocessing complete")
        );
    }

    parseReportId(json){
        let report_ids: number[] = [];
        let next_id: number = 0;
        json.forEach( item => {
            report_ids.push(item.pid);
        });
        for (let i = 0; i < report_ids.length; i += 1) {
            if (report_ids[i] > next_id) next_id = report_ids[i]
        }
        console.log(next_id + 1);
        this.nextr_id = next_id + 1;
    }
    getPatientIds() {
        this.patientIds = [];
        this.httpService.getPQuery().subscribe(
            data => this.parsePatientIds(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    parsePatientIds(json){
        json.forEach( item => {this.patientIds.push(item.pid);});
    }

    getVitalIds() {
        this.vitalIds = [];
        this.httpService.getVIQuery().subscribe(
            data => this.parseVitalIds(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    parseVitalIds(json){
        json.forEach( item => {this.vitalIds.push(item.vid)})
    }
}