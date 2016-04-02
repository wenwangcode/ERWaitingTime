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
    postEquipment(eid,type,room){
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