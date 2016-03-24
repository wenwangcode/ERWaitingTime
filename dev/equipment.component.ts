/**
 * Created by Joy on 2016-03-17.
 */
import {Component,View} from 'angular2/core';
import {Patient} from './patient';
import {Equipment} from "./equipment";
import {HTTPService} from "./http.service";

@Component({
    selector:'equipment',
    templateUrl:'../view/equipment.html',
})


export class EquipmentComponent{
    msg:string;

    equipments:Array<Equipment>;

    constructor(private httpService: HTTPService){
        this.equipments = [];
        this.httpService.getQuery().subscribe(
            data => this.msg = JSON.stringify(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    addEquipments(eid:number, type:string, room:number){
        let equipment = new Equipment(eid,type,room);
        this.equipments.push(equipment);
    }

}