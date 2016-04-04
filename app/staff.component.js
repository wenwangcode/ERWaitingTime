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

//# sourceMappingURL=data:application/json;base64,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QUNiLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUNsQyxDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUVELGlDQUFRLEdBQVIsVUFBUyxJQUFZLEVBQ1osT0FBZSxFQUNmLE9BQWMsRUFDZCxjQUFxQixFQUNyQixRQUFnQixFQUNoQixtQkFBMkI7b0JBQ2hDLElBQUksS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxRQUFRLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDeEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsb0NBQVcsR0FBWCxVQUFZLEtBQVc7b0JBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBekdMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLE9BQU87d0JBQ2hCLFdBQVcsRUFBQyx1QkFBdUI7d0JBQ25DLFNBQVMsRUFBQyxDQUFDLDBCQUFXLENBQUM7cUJBQzFCLENBQUM7O2tDQUFBO2dCQXVHRixxQkFBQztZQUFELENBdEdBLEFBc0dDLElBQUE7WUF0R0QsMkNBc0dDLENBQUEiLCJmaWxlIjoic3RhZmYuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTI4LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1N0YWZmfSBmcm9tICcuL1N0YWZmJztcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcbmltcG9ydCB7U2VsZWN0WWVhcnN9IGZyb20gXCIuL3NlbGVjdC1ieS15ZWFyc1wiO1xuaW1wb3J0IHtNYXhNaW59IGZyb20gXCIuL21heG1pblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3Rvcjonc3RhZmYnLFxuICAgIHRlbXBsYXRlVXJsOicvdGVtcGxhdGVzL3N0YWZmLmh0bWwnLFxuICAgIHByb3ZpZGVyczpbSFRUUFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFN0YWZmQ29tcG9uZW50e1xuICAgIHN0YWZmczpBcnJheTxTdGFmZj47XG4gICAgc2VsZWN0eWVhcnM6U2VsZWN0WWVhcnNbXT1bXTtcbiAgICBtYXhtaW5zOk1heE1pbltdPVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSFRUUFNlcnZpY2Upe1xuICAgICAgICB0aGlzLnN0YWZmcyA9IFtdO1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldFNRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVN0YWZmKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uZGl0aW9uKHllYXI6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5zZWxlY3R5ZWFyKHllYXIpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVNyKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KCdZZWFyIG11c3QgYmUgYmV0d2VlbiAzMCBhbmQgNTAgaW5jbHVzaXZlbHknKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG4gICAgZ2V0bWF4bWluKHZhbHVlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UuZ2V0c2F2Zyh2YWx1ZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlbW0oZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcGFyc2VtbShqc29uKXtcbiAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZG1tKGl0ZW0uc3BlY2lhbGl6YXRpb24sXG4gICAgICAgICAgICAgICAgaXRlbS5hdmdfeWVhcik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkbW0oc3BlY2lhbGl6YXRpb246IHN0cmluZyxcbiAgICAgICAgICBhdmdfeWVhcjpudW1iZXIpe1xuICAgICAgICBjb25zb2xlLmxvZygnaGV5JythdmdfeWVhcik7XG4gICAgICAgIHRoaXMubWF4bWlucyA9IFtdO1xuICAgICAgICBsZXQgbWF4bWluID0gbmV3IE1heE1pbihzcGVjaWFsaXphdGlvbixhdmdfeWVhcik7XG4gICAgICAgIGNvbnNvbGUubG9nKG1heG1pbik7XG4gICAgICAgIHRoaXMubWF4bWlucy5wdXNoKG1heG1pbik7XG4gICAgfVxuICAgIFxuICAgIHRlc3RTc1Bvc3Qoc19pZCxzX2xuYW1lLHNfZm5hbWUsc3BlY2lhbGl6YXRpb24saXNEb2N0b3IsZXhwZXJpZW5jZV9pbl95ZWFycyl7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UucG9zdChcbiAgICAgICAgICAgICAgICB7c2lkOnNfaWQsXG4gICAgICAgICAgICAgICAgc19sbmFtZTpzX2xuYW1lLFxuICAgICAgICAgICAgICAgIHNfZm5hbWU6c19mbmFtZSxcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXphdGlvbjpzcGVjaWFsaXphdGlvbixcbiAgICAgICAgICAgICAgICBpc0RvY3Rvcjppc0RvY3RvcixcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlX2luX3llYXJzOmV4cGVyaWVuY2VfaW5feWVhcnNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3N0YWZmJ1xuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcGFyc2VTcihqc29uKXtcbiAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFNyKGl0ZW0uc19sbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnNfZm5hbWUpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFNyKHNfbG5hbWU6IHN0cmluZyxcbiAgICAgICAgICBzX2ZuYW1lOnN0cmluZyl7XG4gICAgICAgIGxldCBzZWxlY3R5ZWFyID0gbmV3IFNlbGVjdFllYXJzKHNfbG5hbWUsc19mbmFtZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0eWVhcnMucHVzaChzZWxlY3R5ZWFyKTtcbiAgICB9XG5cblxuICAgIHBhcnNlU3RhZmYoanNvbil7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFN0YWZmKGl0ZW0uc2lkLFxuICAgICAgICAgICAgICAgIGl0ZW0uc19sbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnNfZm5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbS5zcGVjaWFsaXphdGlvbixcbiAgICAgICAgICAgICAgICBpdGVtLmlzRG9jdG9yLFxuICAgICAgICAgICAgICAgIGl0ZW0uZXhwZXJpZW5jZV9pbl95ZWFycyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkU3RhZmYoc19pZDogbnVtYmVyLFxuICAgICAgICAgICAgIHNfbG5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICBzX2ZuYW1lOnN0cmluZyxcbiAgICAgICAgICAgICBzcGVjaWFsaXphdGlvbjpzdHJpbmcsXG4gICAgICAgICAgICAgaXNEb2N0b3I6Ym9vbGVhbixcbiAgICAgICAgICAgICBleHBlcmllbmNlX2luX3llYXJzOiBudW1iZXIpe1xuICAgICAgICBsZXQgc3RhZmYgPSBuZXcgU3RhZmYoc19pZCxzX2xuYW1lLHNfZm5hbWUsc3BlY2lhbGl6YXRpb24saXNEb2N0b3IsZXhwZXJpZW5jZV9pbl95ZWFycyk7XG4gICAgICAgIHRoaXMuc3RhZmZzLnB1c2goc3RhZmYpO1xuICAgIH1cblxuICAgIHJlbW92ZVN0YWZmKHN0YWZmOlN0YWZmKXtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zdGFmZnMuaW5kZXhPZihzdGFmZik7XG4gICAgICAgIHRoaXMuc3RhZmZzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
