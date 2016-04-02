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
                StaffComponent.prototype.testSsPost = function (s_id, s_lname, s_fname, specialization, isDoctor, experience_in_years) {
                    this.httpService.post({ sid: s_id,
                        s_lname: s_lname,
                        s_fname: s_fname,
                        specialization: specialization,
                        isDoctor: isDoctor,
                        experience_in_years: experience_in_years
                    }, 'staff').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
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

//# sourceMappingURL=data:application/json;base64,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YWZmLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKb3kgb24gMjAxNi0wMy0yOC5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTdGFmZn0gZnJvbSAnLi9TdGFmZic7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOidzdGFmZicsXG4gICAgdGVtcGxhdGVVcmw6Jy90ZW1wbGF0ZXMvc3RhZmYuaHRtbCcsXG4gICAgcHJvdmlkZXJzOltIVFRQU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU3RhZmZDb21wb25lbnR7XG4gICAgc3RhZmZzOkFycmF5PFN0YWZmPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKXtcbiAgICAgICAgdGhpcy5zdGFmZnMgPSBbXTtcbiAgICAgICAgdGhpcy5odHRwU2VydmljZS5nZXRTUXVlcnkoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VTdGFmZihkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cbiAgICB0ZXN0U3NQb3N0KHNfaWQsc19sbmFtZSxzX2ZuYW1lLHNwZWNpYWxpemF0aW9uLGlzRG9jdG9yLGV4cGVyaWVuY2VfaW5feWVhcnMpe1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoXG4gICAgICAgICAgICB7c2lkOnNfaWQsXG4gICAgICAgICAgICAgICAgc19sbmFtZTpzX2xuYW1lLFxuICAgICAgICAgICAgICAgIHNfZm5hbWU6c19mbmFtZSxcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXphdGlvbjpzcGVjaWFsaXphdGlvbixcbiAgICAgICAgICAgICAgICBpc0RvY3Rvcjppc0RvY3RvcixcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlX2luX3llYXJzOmV4cGVyaWVuY2VfaW5feWVhcnNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3N0YWZmJ1xuICAgICAgICApLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZVN0YWZmKGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRTdGFmZihpdGVtLnNpZCxcbiAgICAgICAgICAgICAgICBpdGVtLnNfbG5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbS5zX2ZuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0uc3BlY2lhbGl6YXRpb24sXG4gICAgICAgICAgICAgICAgaXRlbS5pc0RvY3RvcixcbiAgICAgICAgICAgICAgICBpdGVtLmV4cGVyaWVuY2VfaW5feWVhcnMpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFN0YWZmKHNfaWQ6IG51bWJlcixcbiAgICAgICAgICAgICBzX2xuYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgc19mbmFtZTpzdHJpbmcsXG4gICAgICAgICAgICAgc3BlY2lhbGl6YXRpb246c3RyaW5nLFxuICAgICAgICAgICAgIGlzRG9jdG9yOmJvb2xlYW4sXG4gICAgICAgICAgICAgZXhwZXJpZW5jZV9pbl95ZWFyczogbnVtYmVyKXtcbiAgICAgICAgbGV0IHN0YWZmID0gbmV3IFN0YWZmKHNfaWQsc19sbmFtZSxzX2ZuYW1lLHNwZWNpYWxpemF0aW9uLGlzRG9jdG9yLGV4cGVyaWVuY2VfaW5feWVhcnMpO1xuICAgICAgICB0aGlzLnN0YWZmcy5wdXNoKHN0YWZmKTtcbiAgICB9XG5cblxuICAgIHJlbW92ZVN0YWZmKHN0YWZmOlN0YWZmKXtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zdGFmZnMuaW5kZXhPZihzdGFmZik7XG4gICAgICAgIHRoaXMuc3RhZmZzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
