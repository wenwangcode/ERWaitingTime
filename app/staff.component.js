System.register(['angular2/core', './Staff', './http.service', "./select-by-years"], function(exports_1, context_1) {
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
    var core_1, Staff_1, http_service_1, select_by_years_1;
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
            }],
        execute: function() {
            StaffComponent = (function () {
                function StaffComponent(httpService) {
                    var _this = this;
                    this.httpService = httpService;
                    this.selectyears = [];
                    this.staffs = [];
                    this.httpService.getSQuery().subscribe(function (data) { return _this.parseStaff(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                }
                StaffComponent.prototype.condition = function (year) {
                    var _this = this;
                    this.httpService.selectyear(year).subscribe(function (data) { return _this.parseSr(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
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
                    console.log(s_lname);
                    var selectyear = new select_by_years_1.SelectYears(s_lname, s_fname);
                    console.log(selectyear);
                    console.log(this.selectyears.length);
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

//# sourceMappingURL=data:application/json;base64,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KipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDMtMjguXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U3RhZmZ9IGZyb20gJy4vU3RhZmYnO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWxlY3RZZWFyc30gZnJvbSBcIi4vc2VsZWN0LWJ5LXllYXJzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidzdGFmZicsXG4gICAgdGVtcGxhdGVVcmw6Jy90ZW1wbGF0ZXMvc3RhZmYuaHRtbCcsXG4gICAgcHJvdmlkZXJzOltIVFRQU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU3RhZmZDb21wb25lbnR7XG4gICAgc3RhZmZzOkFycmF5PFN0YWZmPjtcbiAgICBzZWxlY3R5ZWFyczpTZWxlY3RZZWFyc1tdPVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSFRUUFNlcnZpY2Upe1xuICAgICAgICB0aGlzLnN0YWZmcyA9IFtdO1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldFNRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVN0YWZmKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uZGl0aW9uKHllYXI6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5zZWxlY3R5ZWFyKHllYXIpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVNyKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpXG4gICAgICAgICk7XG4gICAgfVxuICAgIHRlc3RTc1Bvc3Qoc19pZCxzX2xuYW1lLHNfZm5hbWUsc3BlY2lhbGl6YXRpb24saXNEb2N0b3IsZXhwZXJpZW5jZV9pbl95ZWFycyl7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UucG9zdChcbiAgICAgICAgICAgICAgICB7c2lkOnNfaWQsXG4gICAgICAgICAgICAgICAgc19sbmFtZTpzX2xuYW1lLFxuICAgICAgICAgICAgICAgIHNfZm5hbWU6c19mbmFtZSxcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXphdGlvbjpzcGVjaWFsaXphdGlvbixcbiAgICAgICAgICAgICAgICBpc0RvY3Rvcjppc0RvY3RvcixcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlX2luX3llYXJzOmV4cGVyaWVuY2VfaW5feWVhcnNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3N0YWZmJ1xuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcGFyc2VTcihqc29uKXtcbiAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFNyKGl0ZW0uc19sbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnNfZm5hbWUpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFNyKHNfbG5hbWU6IHN0cmluZyxcbiAgICAgICAgICBzX2ZuYW1lOnN0cmluZyl7XG4gICAgICAgIGNvbnNvbGUubG9nKHNfbG5hbWUpO1xuICAgICAgICBsZXQgc2VsZWN0eWVhciA9IG5ldyBTZWxlY3RZZWFycyhzX2xuYW1lLHNfZm5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3R5ZWFyKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3R5ZWFycy5sZW5ndGgpO1xuICAgICAgICB0aGlzLnNlbGVjdHllYXJzLnB1c2goc2VsZWN0eWVhcik7XG4gICAgfVxuXG5cbiAgICBwYXJzZVN0YWZmKGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRTdGFmZihpdGVtLnNpZCxcbiAgICAgICAgICAgICAgICBpdGVtLnNfbG5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbS5zX2ZuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0uc3BlY2lhbGl6YXRpb24sXG4gICAgICAgICAgICAgICAgaXRlbS5pc0RvY3RvcixcbiAgICAgICAgICAgICAgICBpdGVtLmV4cGVyaWVuY2VfaW5feWVhcnMpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFN0YWZmKHNfaWQ6IG51bWJlcixcbiAgICAgICAgICAgICBzX2xuYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgc19mbmFtZTpzdHJpbmcsXG4gICAgICAgICAgICAgc3BlY2lhbGl6YXRpb246c3RyaW5nLFxuICAgICAgICAgICAgIGlzRG9jdG9yOmJvb2xlYW4sXG4gICAgICAgICAgICAgZXhwZXJpZW5jZV9pbl95ZWFyczogbnVtYmVyKXtcbiAgICAgICAgbGV0IHN0YWZmID0gbmV3IFN0YWZmKHNfaWQsc19sbmFtZSxzX2ZuYW1lLHNwZWNpYWxpemF0aW9uLGlzRG9jdG9yLGV4cGVyaWVuY2VfaW5feWVhcnMpO1xuICAgICAgICB0aGlzLnN0YWZmcy5wdXNoKHN0YWZmKTtcbiAgICB9XG5cblxuICAgIHJlbW92ZVN0YWZmKHN0YWZmOlN0YWZmKXtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zdGFmZnMuaW5kZXhPZihzdGFmZik7XG4gICAgICAgIHRoaXMuc3RhZmZzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
