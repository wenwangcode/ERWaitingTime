/**
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
        let staff = new Staff(s_id,s_lname,s_fname,specialization,isDoctor,experience_in_years);
        this.staffs.push(staff);
    }



}