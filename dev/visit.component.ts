import {Component, OnInit} from 'angular2/core';
import {Visit} from './visit';
import {HTTPService} from './http.service';
import {Patient} from "./patient";
import {PatientComponent} from "./patient.component";

@Component({
    selector:'visit',
    templateUrl: 'templates/visit.component.html',
    providers: [HTTPService]
})

export class VisitComponent{

    visits:Array<Visit>;
    patientIds: number[];
    staffIds: number[];

    constructor(private _httpService: HTTPService){
    }
    
    ngOnInit() {
        this.getVisits();
        this.getPatientIds();
        this.getStaffIds();
    }

    parseVisit(json){
        json.forEach( item => {
            this.addVisit(item.pid,
            item.sid,
            item.room,
            item.visit_date);
        })
    }

    addVisit(pid:number, sid:number, room:number, date:Date){
        let visit = new Visit(pid,sid,room,date);
        this.visits.push(visit);
    }

    postVisit(pid:number, sid:number, room:number, visit_date:Date) {
        this._httpService.post({pid, sid, room, visit_date}, 'visit')
            .subscribe(
                data => console.log(data),
                err => alert(err),
                () => console.log("complete")
            );

    }

    getVisits() {
        this.visits = [];
        this._httpService.getVQuery().subscribe(
            data => this.parseVisit(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    getPatientIds() {
        this.patientIds = [];
        this._httpService.getPQuery().subscribe(
            data => this.parsePatientIds(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    parsePatientIds(json){
        json.forEach( item => {this.patientIds.push(item.pid);});
    }

    getStaffIds() {
        this.staffIds = [];
        this._httpService.getSQuery().subscribe(
            data => this.parseStaffIds(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    parseStaffIds(json){
        json.forEach( item => {this.staffIds.push(item.sid)})
    }
    
    removeVisit(visit:Visit){
        var index = this.visits.indexOf(visit);
        this.visits.splice(index,1);
    }
}