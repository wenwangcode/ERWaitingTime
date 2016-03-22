import {Component} from 'angular2/core';
import {Visit} from './visit';
import {HTTPService} from './http.service';

@Component({
    selector:'visit',
    template: `
        <table>
            <tr>
                <th> patient_id </th>
                <th> staff_id</th>
                <th> room number</th>
                <th> date of visit</th>
            </tr>
            <tr *ngFor="#visit of visits"> 
                <td> {{visit.patient_id}} </td>
                <td> {{visit.staff_id}} </td>
                <td> {{visit.room}} </td>
                <td> {{visit.date}} </td>
            </tr>
        </table>
        
        <br/><br/>
        <input type="number" min="5000" max="10000" #pid>
        <input type="number" min="0000" max="4999" #sid>
        <input type="number" min="0000" max="10000" #room>
        <input type="Date" #date>
        <input type="submit" (click)="
            addVisit(pid.value, sid.value, room.value, date.value)">
            
            {{msg}}
`,
providers:[HTTPService]
})
export class VisitComponent{
msg:string;
visits:Array<Visit>;

constructor(private httpService: HTTPService){
    this.visits = [];
    this.httpService.getQuery().subscribe(
        data => this.msg = JSON.stringify(data),
        err => alert(err),
        () => console.log("complete")
    );
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