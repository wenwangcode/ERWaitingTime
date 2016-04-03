/**
 * Created by wendywang on 2016-04-01.
 */
import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {HTTPService} from "./http.service";
import {Equipment} from "./equipment";
import {RouterLink} from "angular2/router";

@Component({
    selector: 'equipment',
    templateUrl: 'templates/equipments.html',
    providers: [HTTPService,RouterLink],
    directives: [RouterLink],
})

export class EquipmentComponent {
    equipments:Array<Equipment>;

    constructor(private httpService: HTTPService) {
        this.equipments = [];
        this.httpService.getEQuery().subscribe(
            data => this.parseEquipment(data),
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

}