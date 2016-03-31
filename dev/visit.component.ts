import {Component} from 'angular2/core';
import {Visit} from './visit';
import {HTTPService} from './http.service';

@Component({
    selector:'visit',
    templateUrl: 'templates/visit.component.html',
    providers: [HTTPService]
})

export class VisitComponent{
visits:Array<Visit>;

constructor(private httpService: HTTPService){
    this.visits = [];
    this.httpService.getQuery().subscribe(
        data => this.parseVisit(data),
        err => alert(err),
        () => console.log("complete")
    );
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
    
    
    removeVisit(visit:Visit){
        var index = this.visits.indexOf(visit);
        this.visits.splice(index,1);
    }

}