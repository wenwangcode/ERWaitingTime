/**
 * Created by Joy on 2016-03-28.
 */
import {Component} from 'angular2/core';
import {Equipment} from './Equipment';
import {HTTPService} from './http.service';
import {CanActivate} from "angular2/router";
import {RouterLink} from "angular2/router";

@Component({
    selector:'equipment',
    templateUrl: 'templates/equipment.component.html',
    providers: [HTTPService,RouterLink],
    directives: [RouterLink],
})

export class EquipmentAddComponent{
    equipments:Array<Equipment>;
    nexte_id: number;

    constructor(private httpService: HTTPService){
        this.preprocessEquipmentForm();
    }

    postEquipment(type,room){
       var random = Math.floor((Math.random() * 10000) + 1);
        this.httpService.post(
            {eid:random,
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
        for (let i = 0; i < equipment_ids.length; i++) {
            if (equipment_ids[i] > next_id) {
                next_id = equipment_ids[i]
            }
        }
        this.nexte_id = next_id + 1;
    }

}