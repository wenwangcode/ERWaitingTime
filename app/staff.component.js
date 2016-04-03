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
                    this.maxmins = [];
                    this.staffs = [];
                    this.httpService.getSQuery().subscribe(function (data) { return _this.parseStaff(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                }
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

//# sourceMappingURL=data:application/json;base64,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UUFBUSxFQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ3hGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUVELG9DQUFXLEdBQVgsVUFBWSxLQUFXO29CQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQTNHTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxPQUFPO3dCQUNoQixXQUFXLEVBQUMsdUJBQXVCO3dCQUNuQyxTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO3FCQUMxQixDQUFDOztrQ0FBQTtnQkF5R0YscUJBQUM7WUFBRCxDQXhHQSxBQXdHQyxJQUFBO1lBeEdELDJDQXdHQyxDQUFBIiwiZmlsZSI6InN0YWZmLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKb3kgb24gMjAxNi0wMy0yOC5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTdGFmZn0gZnJvbSAnLi9TdGFmZic7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5pbXBvcnQge1NlbGVjdFllYXJzfSBmcm9tIFwiLi9zZWxlY3QtYnkteWVhcnNcIjtcbmltcG9ydCB7TWF4TWlufSBmcm9tIFwiLi9tYXhtaW5cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3N0YWZmJyxcbiAgICB0ZW1wbGF0ZVVybDonL3RlbXBsYXRlcy9zdGFmZi5odG1sJyxcbiAgICBwcm92aWRlcnM6W0hUVFBTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFmZkNvbXBvbmVudHtcbiAgICBzdGFmZnM6QXJyYXk8U3RhZmY+O1xuICAgIHNlbGVjdHllYXJzOlNlbGVjdFllYXJzW109W107XG4gICAgbWF4bWluczpNYXhNaW5bXT1bXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKXtcbiAgICAgICAgdGhpcy5zdGFmZnMgPSBbXTtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5nZXRTUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VTdGFmZihkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cblxuPDw8PDw8PCBIRUFEXG49PT09PT09XG4gICAgY29uZGl0aW9uKHllYXI6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5zZWxlY3R5ZWFyKHllYXIpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVNyKGRhdGEpLFxuICAgICAgICAgICAgZXJyID0+IGFsZXJ0KCdZZWFyIG11c3QgYmUgYmV0d2VlbiAzMCBhbmQgNTAgaW5jbHVzaXZlbHknKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG4gICAgZ2V0bWF4bWluKHZhbHVlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UuZ2V0c2F2Zyh2YWx1ZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlbW0oZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcGFyc2VtbShqc29uKXtcbiAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZG1tKGl0ZW0uc3BlY2lhbGl6YXRpb24sXG4gICAgICAgICAgICAgICAgaXRlbS5hdmdfeWVhcik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkbW0oc3BlY2lhbGl6YXRpb246IHN0cmluZyxcbiAgICAgICAgICBhdmdfeWVhcjpudW1iZXIpe1xuICAgICAgICBjb25zb2xlLmxvZygnaGV5JythdmdfeWVhcik7XG4gICAgICAgIHRoaXMubWF4bWlucyA9IFtdO1xuICAgICAgICBsZXQgbWF4bWluID0gbmV3IE1heE1pbihzcGVjaWFsaXphdGlvbixhdmdfeWVhcik7XG4gICAgICAgIGNvbnNvbGUubG9nKG1heG1pbik7XG4gICAgICAgIHRoaXMubWF4bWlucy5wdXNoKG1heG1pbik7XG4gICAgfVxuPj4+Pj4+PiAwNDkwZDkwNmFkM2M3ZmE2ZmNmM2NkZDcwOGQ1MDUzMzY1Mjc0ZTk3XG4gICAgdGVzdFNzUG9zdChzX2lkLHNfbG5hbWUsc19mbmFtZSxzcGVjaWFsaXphdGlvbixpc0RvY3RvcixleHBlcmllbmNlX2luX3llYXJzKXtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5wb3N0KFxuICAgICAgICAgICAgICAgIHtzaWQ6c19pZCxcbiAgICAgICAgICAgICAgICBzX2xuYW1lOnNfbG5hbWUsXG4gICAgICAgICAgICAgICAgc19mbmFtZTpzX2ZuYW1lLFxuICAgICAgICAgICAgICAgIHNwZWNpYWxpemF0aW9uOnNwZWNpYWxpemF0aW9uLFxuICAgICAgICAgICAgICAgIGlzRG9jdG9yOmlzRG9jdG9yLFxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VfaW5feWVhcnM6ZXhwZXJpZW5jZV9pbl95ZWFyc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnc3RhZmYnXG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cbiAgICBwYXJzZVNyKGpzb24pe1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkU3IoaXRlbS5zX2xuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0uc19mbmFtZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkU3Ioc19sbmFtZTogc3RyaW5nLFxuICAgICAgICAgIHNfZm5hbWU6c3RyaW5nKXtcbiAgICAgICAgbGV0IHNlbGVjdHllYXIgPSBuZXcgU2VsZWN0WWVhcnMoc19sbmFtZSxzX2ZuYW1lKTtcbiAgICAgICAgdGhpcy5zZWxlY3R5ZWFycy5wdXNoKHNlbGVjdHllYXIpO1xuICAgIH1cblxuXG4gICAgcGFyc2VTdGFmZihqc29uKXtcbiAgICAgICAganNvbi5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkU3RhZmYoaXRlbS5zaWQsXG4gICAgICAgICAgICAgICAgaXRlbS5zX2xuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0uc19mbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnNwZWNpYWxpemF0aW9uLFxuICAgICAgICAgICAgICAgIGl0ZW0uaXNEb2N0b3IsXG4gICAgICAgICAgICAgICAgaXRlbS5leHBlcmllbmNlX2luX3llYXJzKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRTdGFmZihzX2lkOiBudW1iZXIsXG4gICAgICAgICAgICAgc19sbmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgIHNfZm5hbWU6c3RyaW5nLFxuICAgICAgICAgICAgIHNwZWNpYWxpemF0aW9uOnN0cmluZyxcbiAgICAgICAgICAgICBpc0RvY3Rvcjpib29sZWFuLFxuICAgICAgICAgICAgIGV4cGVyaWVuY2VfaW5feWVhcnM6IG51bWJlcil7XG4gICAgICAgIGxldCBzdGFmZiA9IG5ldyBTdGFmZihzX2lkLHNfbG5hbWUsc19mbmFtZSxzcGVjaWFsaXphdGlvbixpc0RvY3RvcixleHBlcmllbmNlX2luX3llYXJzKTtcbiAgICAgICAgdGhpcy5zdGFmZnMucHVzaChzdGFmZik7XG4gICAgfVxuXG4gICAgcmVtb3ZlU3RhZmYoc3RhZmY6U3RhZmYpe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnN0YWZmcy5pbmRleE9mKHN0YWZmKTtcbiAgICAgICAgdGhpcy5zdGFmZnMuc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
