/**
 * Created by Joy on 2016-03-28.
 */
import {Component} from 'angular2/core';
import {Equipment} from './Equipment';
import {HTTPService} from './http.service';
import {isLoggedin} from "./is-loggedin";
import {CanActivate} from "angular2/router";
import {RouterLink} from "angular2/router";

@Component({
    selector:'equipment',
    templateUrl: 'templates/equipment.component.html',
    providers: [HTTPService,RouterLink],
    directives: [RouterLink],
})

@CanActivate(() => isLoggedin())
export class EquipmentAddComponent{
    equipments:Array<Equipment>;
    next_id: number;

    constructor(private httpService: HTTPService){
        this.preprocessEquipmentForm();
        //this.equipments = [];
        //this.httpService.getEQuery().subscribe(
        //    data => this.parseEquipment(data),
        //    err => alert(err),
        //    () => console.log("complete")
        //);
    }
    postEquipment(type,room){
        this.httpService.post(
            {eid:this.next_id,
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

    preprocessEquipmentForm() {
        this.httpService.getSQuery().subscribe(
            data => this.parseEquipmentPreprocess(data),
            err => alert(err),
            () => console.log("GET patient data preprocessing complete")
        );
    }

    parseEquipmentPreprocess(json){
        let equipment_ids: number[] = [];
        let next_id: number = 0;
        json.forEach( item => {
            equipment_ids.push(item.eid);
        });
        for (let i = 0; i < equipment_ids.length; i += 1) {
            if (equipment_ids[i] > next_id) next_id = equipment_ids[i]
        }
        console.log(next_id + 1);
        this.next_id = next_id + 1;
    }
}