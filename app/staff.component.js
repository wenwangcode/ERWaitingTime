System.register(['angular2/core', './Staff', './http.service', "./select-by-years", "./maxmin"], function(exports_1, context_1) {
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
    var core_1, Staff_1, http_service_1, select_by_years_1, maxmin_1;
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
            },
            function (select_by_years_1_1) {
                select_by_years_1 = select_by_years_1_1;
            },
            function (maxmin_1_1) {
                maxmin_1 = maxmin_1_1;
            }],
        execute: function() {
            StaffComponent = (function () {
                function StaffComponent(httpService) {
                    var _this = this;
                    this.httpService = httpService;
                    this.selectyears = [];
                    this.maxmins = [];
                    this.staffs = [];
                    this.httpService.getSQuery().subscribe(function (data) { return _this.parseStaff(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                }
                StaffComponent.prototype.condition = function (year) {
                    var _this = this;
                    this.httpService.selectyear(year).subscribe(function (data) { return _this.parseSr(data); }, function (err) { return alert('Year must be between 30 and 50 inclusively'); }, function () { return console.log("complete"); });
                };
                StaffComponent.prototype.getmaxmin = function (value) {
                    var _this = this;
                    this.httpService.getsavg(value).subscribe(function (data) { return _this.parsemm(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                StaffComponent.prototype.parsemm = function (json) {
                    var _this = this;
                    console.log(json);
                    json.forEach(function (item) {
                        _this.addmm(item.specialization, item.avg_year);
                    });
                };
                StaffComponent.prototype.addmm = function (specialization, avg_year) {
                    console.log('hey' + avg_year);
                    this.maxmins = [];
                    var maxmin = new maxmin_1.MaxMin(specialization, avg_year);
                    console.log(maxmin);
                    this.maxmins.push(maxmin);
                };
                StaffComponent.prototype.testSsPost = function (s_id, s_lname, s_fname, specialization, isDoctor, experience_in_years) {
                    this.httpService.post({ sid: s_id,
                        s_lname: s_lname,
                        s_fname: s_fname,
                        specialization: specialization,
                        isDoctor: isDoctor,
                        experience_in_years: experience_in_years
                    }, 'staff').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                StaffComponent.prototype.parseSr = function (json) {
                    var _this = this;
                    console.log(json);
                    json.forEach(function (item) {
                        _this.addSr(item.s_lname, item.s_fname);
                    });
                };
                StaffComponent.prototype.addSr = function (s_lname, s_fname) {
                    var selectyear = new select_by_years_1.SelectYears(s_lname, s_fname);
                    this.selectyears.push(selectyear);
                };
                StaffComponent.prototype.parseStaff = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addStaff(item.sid, item.s_lname, item.s_fname, item.specialization, item.isDoctor, item.experience_in_years);
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
                        templateUrl: '/templates/staff.html',
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