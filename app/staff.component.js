System.register(['angular2/core', './Staff', './http.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Staff_1, http_service_1;
    var StaffComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Staff_1_1) {
                Staff_1 = Staff_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            StaffComponent = (function () {
                function StaffComponent(httpService) {
                    var _this = this;
                    this.httpService = httpService;
                    this.staffs = [];
                    this.httpService.getSQuery().subscribe(function (data) { return _this.parseStaff(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                }
                StaffComponent.prototype.parseStaff = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addStaff(item.s_id, item.s_lname, item.s_fname, item.specialization, item.isDoctor, item.experience_in_years);
                    });
                };
                StaffComponent.prototype.addStaff = function (s_id, s_lname, s_fname, specialization, isDoctor, experience_in_years) {
                    var staff = new Staff_1.Staff(s_id, s_lname, s_fname, specialization, isDoctor, experience_in_years);
                    this.staffs.push(staff);
                };
                StaffComponent.prototype.removeStaff = function (staff) {
                    var index = this.staffs.indexOf(staff);
                    this.staffs.splice(index, 1);
                };
                StaffComponent = __decorate([
                    core_1.Component({
                        selector: 'staff',
                        template: "\n        <table>\n            <tr>\n                <th> staff_id </th>\n                <th> staff_lname</th>\n                <th> staff_fname</th>\n                <th> specialization </th>\n                <th> isDoctor</th>\n                <th> experience_in_years</th>\n            </tr>\n            <tr *ngFor=\"#staff of staffs\"> \n                <td> {{staff.s_id}} </td>\n                <td> {{staff.s_lname}} </td>\n                <td> {{staff.s_fname}} </td>\n                <td> {{staff.specialization}} </td>\n                <td> {{staff.isDoctor}} </td>\n                <td> {{staff.experience_in_years}} </td>\n            </tr>\n        </table>\n        \n        <br/><br/>\n        <input type=\"number\" #s_id>\n        <input type=\"text\" #s_lname>\n        <input type=\"text\" #s_fname>\n        <input type=\"text\" #specialization>\n        <input type=\"text\" #isDoctor>\n        <input type=\"number\" #experience_in_years>\n        <input type=\"submit\" (click)=\"\n            addEquipment(s_id.value ,s_lname.value,s_fname.value,specialization.value,isDoctor.value,experience_in_years.value)\">\n            \n",
                        providers: [http_service_1.HTTPService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], StaffComponent);
                return StaffComponent;
            }());
            exports_1("StaffComponent", StaffComponent);
        }
    }
});
//# sourceMappingURL=staff.component.js.map