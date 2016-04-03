/**
 * Created by wendywang on 2016-04-01.
 */
import {Component, OnInit} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';

import {HTTPService} from "./http.service";
import {Equipment} from "./equipment";

@Component({
    selector: 'equipment',
    templateUrl: 'templates/equipments.html',
    providers: [HTTPService,RouterLink],
    directives: [RouterLink],
})

export class EquipmentComponent implements OnInit {

    constructor(private _httpService: HTTPService) {}

    equipments: Equipment[];
    errorMessage: string;

    ngOnInit() {
        this.getEquipment();
    }

    getEquipment() {
        this._httpService.getAllFromTable('equipment')
            .subscribe(
                equipment => this.equipments = equipment,
                error =>  this.errorMessage = <any>error
            );
    }

    // parseEquipment(json){
    //     json.forEach( item => {
    //         this.addEquipment(item.eid,
    //             item.type,
    //             item.room);
    //     })
    // }
    //
    // addEquipment(eid:number, type:string, room:number){
    //     let equipment = new Equipment(eid,type,room);
    //     this.equipments.push(equipment);
    // }

}