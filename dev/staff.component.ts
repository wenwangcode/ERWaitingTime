/**
<<<<<<< HEAD
 * Created by Joy on 2016-03-17.
 */
import {Component,View} from 'angular2/core';
import {Staff} from './staff';

@Component({
    selector:'staff',
    template:
        `hello world`
})


export class StaffComponent{
    staffs:Array<Staff>;

    constructor(){
        this.staffs = [];
    }

    addStaff(s_id:number, s_lname:string, s_fname:string, specialization:string, isDoctor: boolean, experience_in_years: number){
=======
 * Created by Joy on 2016-03-28.
 */
import {Component} from 'angular2/core';
import {Staff} from './Staff';
import {HTTPService} from './http.service';

@Component({
    selector:'staff',
    template: `
        <table>
            <tr>
                <th> staff_id </th>
                <th> staff_lname</th>
                <th> staff_fname</th>
                <th> specialization </th>
                <th> isDoctor</th>
                <th> experience_in_years</th>
            </tr>
            <tr *ngFor="#staff of staffs"> 
                <td> {{staff.s_id}} </td>
                <td> {{staff.s_lname}} </td>
                <td> {{staff.s_fname}} </td>
                <td> {{staff.specialization}} </td>
                <td> {{staff.isDoctor}} </td>
                <td> {{staff.experience_in_years}} </td>
            </tr>
        </table>
        
        <br/><br/>
        <input type="number" #s_id>
        <input type="text" #s_lname>
        <input type="text" #s_fname>
        <input type="text" #specialization>
        <input type="text" #isDoctor>
        <input type="number" #experience_in_years>
        <input type="submit" (click)="
            addEquipment(s_id.value ,s_lname.value,s_fname.value,specialization.value,isDoctor.value,experience_in_years.value)">
            
`,
    providers:[HTTPService]
})
export class StaffComponent{
    staffs:Array<Staff>;

    constructor(private httpService: HTTPService){
        this.staffs = [];
        this.httpService.getSQuery().subscribe(
            data => this.parseStaff(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    parseStaff(json){
        json.forEach( item => {
            this.addStaff(item.s_id,
                item.s_lname,
                item.s_fname,
                item.specialization,
                item.isDoctor,
                item.experience_in_years);
        })
    }

    addStaff(s_id: number,
             s_lname: string,
             s_fname:string,
             specialization:string,
             isDoctor:boolean,
             experience_in_years: number){
>>>>>>> ac10ee06669a4363b67d96c92be35b4890af3b4f
        let staff = new Staff(s_id,s_lname,s_fname,specialization,isDoctor,experience_in_years);
        this.staffs.push(staff);
    }


<<<<<<< HEAD
=======
    removeStaff(staff:Staff){
        var index = this.staffs.indexOf(staff);
        this.staffs.splice(index,1);
    }
>>>>>>> ac10ee06669a4363b67d96c92be35b4890af3b4f

}