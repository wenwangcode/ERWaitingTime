/**
 * Created by Joy on 2016-03-28.
 */
import {Component} from 'angular2/core';
import {Staff} from './Staff';
import {HTTPService} from './http.service';
import {SelectYears} from "./select-by-years";
import {MaxMin} from "./maxmin";

@Component({
    selector:'staff',
    templateUrl:'/templates/staff.html',
    providers:[HTTPService]
})
export class StaffComponent{
    staffs:Array<Staff>;
    selectyears:SelectYears[]=[];
    maxmins:MaxMin[]=[];

    constructor(private httpService: HTTPService){
        this.staffs = [];
        this.httpService.getSQuery().subscribe(
            data => this.parseStaff(data),
            err => alert(err),
            () => console.log("complete")
        );
    }

    condition(year:number){
        this.httpService.selectyear(year).subscribe(
            data => this.parseSr(data),
            err => alert('Year must be between 30 and 50 inclusively'),
            () => console.log("complete")
        );
    }
    getmaxmin(value:string){
        this.httpService.getsavg(value).subscribe(
            data => this.parsemm(data),
            err => alert(err),
            () => console.log("complete")
        );
    }
    parsemm(json){
        console.log(json);
        json.forEach( item => {
            this.addmm(item.specialization,
                item.avg_year);
        })
    }

    addmm(specialization: string,
          avg_year:number){
        console.log('hey'+avg_year);
        this.maxmins = [];
        let maxmin = new MaxMin(specialization,avg_year);
        console.log(maxmin);
        this.maxmins.push(maxmin);
    }
    testSsPost(s_id,s_lname,s_fname,specialization,isDoctor,experience_in_years){
        this.httpService.post(
                {sid:s_id,
                s_lname:s_lname,
                s_fname:s_fname,
                specialization:specialization,
                isDoctor:isDoctor,
                experience_in_years:experience_in_years
                },
            'staff'
        ).subscribe(
            data => console.log(data),
            err => alert(err),
            () => console.log("complete")
        );
    }
    parseSr(json){
        console.log(json);
        json.forEach( item => {
            this.addSr(item.s_lname,
                item.s_fname);
        })
    }

    addSr(s_lname: string,
          s_fname:string){
        let selectyear = new SelectYears(s_lname,s_fname);
        this.selectyears.push(selectyear);
    }


    parseStaff(json){
        json.forEach( item => {
            this.addStaff(item.sid,
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
        let staff = new Staff(s_id,s_lname,s_fname,specialization,isDoctor,experience_in_years);
        this.staffs.push(staff);
    }


    removeStaff(staff:Staff){
        var index = this.staffs.indexOf(staff);
        this.staffs.splice(index,1);
    }

}