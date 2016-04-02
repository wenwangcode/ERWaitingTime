/**
 * Created by Joy on 2016-03-28.
 */
import {Component} from 'angular2/core';
import {Equipment} from './Equipment';
import {HTTPService} from './http.service';
import {isLoggedin} from "./is-loggedin";
import {CanActivate} from "angular2/router";

@Component({
    selector:'equipment',
    templateUrl: 'templates/equipment.component.html',
//     template: `
// <html>
// <body>
// <div align="left" style="margin-top: 100px" class="container">
//     <h1>Please register the equipment info below.</h1>
//
//     <div class="form-group">
//          <div class="container" ng-app="my-app">
//         Equipment ID: <input type="number" class="form-control" #eid>
//         Equipment Type: <input type="text"  class="form-control" #type>
//         Equipment Room: <input type="number" class="form-control" #room>
//
//         <table  class="table table-striped">
//             <tr>
//                 <th> equipment_id </th>
//                 <th> equipment_type</th>
//                 <th> room number</th>
//             </tr>
//             <tr *ngFor="#equipment of equipments">
//                 <td> {{equipment.eid}} </td>
//                 <td> {{equipment.type}} </td>
//                 <td> {{equipment.room}} </td>
//             </tr>
//         </table>
//
//         <br/><br/>
//
//             <button (click)="testPost(eid.value, type.value, room.value)" class="btn btn-primary"> Submit </button>
//     </div>
//     </div>
//     </div>
//
// `,
    providers:[HTTPService]
})

@CanActivate(() => isLoggedin())
export class EquipmentComponent{
    equipments:Array<Equipment>;

    constructor(private httpService: HTTPService){
        this.equipments = [];
        this.httpService.getEQuery().subscribe(
            data => this.parseEquipment(data),
            err => alert(err),
            () => console.log("complete")
        );
    }
    testPost(eid,type,room){
        this.httpService.post(
            {eid:eid,
             type:type,
            room:room},
            'equipment'
        ).subscribe(
            data => console.log(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    parseEquipment(json){
        json.forEach( item => {
            this.addEquipment(item.eid,
                item.type,
                item.room);
        })
    }

    addEquipment(eid:number, type:string, room:number){
        let equipment = new Equipment(eid,type,room);
        this.equipments.push(equipment);
    }


    removeEquipment(equipment:Equipment){
        var index = this.equipments.indexOf(equipment);
        this.equipments.splice(index,1);
    }

}