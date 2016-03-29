/**
<<<<<<< HEAD
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

=======
 * Created by Joy on 2016-03-28.
 */
import {Component} from 'angular2/core';
import {Equipment} from './Equipment';
import {HTTPService} from './http.service';

@Component({
    selector:'equipment',
    template: `
<html>
<head>
    <title>Equipment Register Page</title>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet"/>

    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <a class="navbar-brand" href="../home">ERWaitingTime</a>

        </div>
    </nav>
</head>
<body>
<div align="left" style="margin-top: 100px" class="container">
    <h1>Please register the equipment info below.</h1>
    <br>
    <div class="form-group">
         <div class="container" ng-app="my-app">
        Equipment ID: <input type="number" class="form-control" #eid>
        Equipment Type: <input type="text"  class="form-control" #type>
        Equipment Room: <input type="number" class="form-control" #room>
        <br>
        <table  class="table table-striped">
            <tr>
                <th> equipment_id </th>
                <th> equipment_type</th>
                <th> room number</th>
            </tr>
            <tr *ngFor="#equipment of equipments"> 
                <td> {{equipment.eid}} </td>
                <td> {{equipment.type}} </td>
                <td> {{equipment.room}} </td>
            </tr>
        </table>
        
        <br/><br/>
        
        <input type="submit" (click)="
            addEquipment(eid.value, type.value, room.value)" class="btn btn-primary">
    </div>

    <br/><br/>
    </div>
    </div>

</body>
</html>
        
            
`,
    providers:[HTTPService]
})
export class EquipmentComponent{
>>>>>>> ac10ee06669a4363b67d96c92be35b4890af3b4f
    equipments:Array<Equipment>;

    constructor(private httpService: HTTPService){
        this.equipments = [];
<<<<<<< HEAD
        this.httpService.getQuery().subscribe(
            data => this.msg = JSON.stringify(data),
=======
        this.httpService.getEQuery().subscribe(
            data => this.parseEquipment(data),
>>>>>>> ac10ee06669a4363b67d96c92be35b4890af3b4f
            err => alert(err),
            () => console.log("complete")
        );
    }

<<<<<<< HEAD
    addEquipments(eid:number, type:string, room:number){
=======
    parseEquipment(json){
        json.forEach( item => {
            this.addEquipment(item.eid,
                item.type,
                item.room);
        })
    }

    addEquipment(eid:number, type:string, room:number){
>>>>>>> ac10ee06669a4363b67d96c92be35b4890af3b4f
        let equipment = new Equipment(eid,type,room);
        this.equipments.push(equipment);
    }

<<<<<<< HEAD
=======

    removeEquipment(equipment:Equipment){
        var index = this.equipments.indexOf(equipment);
        this.equipments.splice(index,1);
    }

>>>>>>> ac10ee06669a4363b67d96c92be35b4890af3b4f
}