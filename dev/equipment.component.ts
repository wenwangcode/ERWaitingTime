/**
 * Created by Joy on 2016-03-17.
 */
import {Component,View} from 'angular2/core';
import {Patient} from './patient';
import {Equipment} from "./equipment";

@Component({
    selector:'equipment',
    templateUrl:'../view/equipment.html',
})


export class EquipmentComponent{
    equipments:Array<Equipment>;

    constructor(){
        this.equipments = [];
    }

    addEquipments(eid:number, type:string, room:number){
        let equipment = new Equipment(eid,type,room);
        this.equipments.push(equipment);
    }

}