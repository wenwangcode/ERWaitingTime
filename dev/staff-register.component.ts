/**
 * Created by Joy on 2016-04-01.
 */
import {Component} from 'angular2/core';
import {Staff} from './Staff';
import {HTTPService} from './http.service';
import {RouterLink} from "angular2/router";

@Component({
    selector:'staff',
    templateUrl:'/templates/staff-regisiter.component.html',
    providers: [HTTPService,RouterLink],
    directives: [RouterLink]
})
export class StaffRegisterComponent{
    staffs:Array<Staff>;
    nexts_id: number;
    isD: number;

    constructor(private httpService: HTTPService){
        this.preprocessStaffForm();
    }
    testSsPost(s_lname,s_fname,specialization,experience_in_years){
        this.httpService.post(
            {
                sid:this.nexts_id,
                s_lname:s_lname,
                s_fname:s_fname,
                specialization:specialization,
                isDoctor:this.isD,
                experience_in_years:experience_in_years
            },
            'staff'
        ).subscribe(
            data => console.log(data),
            err => alert(err),
            () => console.log("complete")
        );
    }
    preprocessStaffForm() {
        this.httpService.getSQuery().subscribe(
            data => this.parseStaffPreprocess(data),
            err => alert(err),
            () => console.log("GET patient data preprocessing complete")
        );
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

    parseStaffPreprocess(json){
        let staff_ids: number[] = [];
        let next_id: number = 0;
        json.forEach( item => {
            staff_ids.push(item.sid);
        });
        for (let i = 0; i < staff_ids.length; i += 1) {
            if (staff_ids[i] > next_id) next_id = staff_ids[i]
        }
        console.log(next_id + 1);
        this.nexts_id = next_id + 1;
    }


    removeStaff(staff:Staff){
        var index = this.staffs.indexOf(staff);
        this.staffs.splice(index,1);
    }

}