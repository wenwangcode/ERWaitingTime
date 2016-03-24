import {Component,View} from 'angular2/core';
import {Visit} from './visit';

@Component({
    selector:'visit',
    templateUrl: 'views/visit.component.html'
})
export class VisitComponent{
visits:Array<Visit>;
constructor(){
    this.visits = [];
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