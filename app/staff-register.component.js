System.register(['angular2/core', './Staff', './http.service', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, Staff_1, http_service_1, router_1;
    var StaffRegisterComponent;
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
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            StaffRegisterComponent = (function () {
                function StaffRegisterComponent(httpService) {
                    this.httpService = httpService;
                    this.preprocessStaffForm();
                }
                StaffRegisterComponent.prototype.testSsPost = function (s_lname, s_fname, specialization, experience_in_years) {
                    this.httpService.post({
                        s_lname: s_lname,
                        s_fname: s_fname,
                        specialization: specialization,
                        isDoctor: this.isD,
                        experience_in_years: experience_in_years
                    }, 'staff').subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                StaffRegisterComponent.prototype.preprocessStaffForm = function () {
                    var _this = this;
                    this.httpService.getSQuery().subscribe(function (data) { return _this.parseStaffPreprocess(data); }, function (err) { return alert(err); }, function () { return console.log("GET patient data preprocessing complete"); });
                };
                StaffRegisterComponent.prototype.parseStaff = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addStaff(item.sid, item.s_lname, item.s_fname, item.specialization, item.isDoctor, item.experience_in_years);
                    });
                };
                StaffRegisterComponent.prototype.addStaff = function (s_id, s_lname, s_fname, specialization, isDoctor, experience_in_years) {
                    var staff = new Staff_1.Staff(s_id, s_lname, s_fname, specialization, isDoctor, experience_in_years);
                    this.staffs.push(staff);
                };
                StaffRegisterComponent.prototype.parseStaffPreprocess = function (json) {
                    var staff_ids = [];
                    var next_id = 0;
                    json.forEach(function (item) {
                        staff_ids.push(item.sid);
                    });
                    for (var i = 0; i < staff_ids.length; i += 1) {
                        if (staff_ids[i] > next_id)
                            next_id = staff_ids[i];
                    }
                    console.log(next_id + 1);
                    this.nexts_id = next_id + 1;
                };
                StaffRegisterComponent.prototype.removeStaff = function (staff) {
                    var index = this.staffs.indexOf(staff);
                    this.staffs.splice(index, 1);
                };
                StaffRegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'staff',
                        templateUrl: '/templates/staff-regisiter.component.html',
                        providers: [http_service_1.HTTPService, router_1.RouterLink],
                        directives: [router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], StaffRegisterComponent);
                return StaffRegisterComponent;
            }());
            exports_1("StaffRegisterComponent", StaffRegisterComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLXJlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUtJLGdDQUFvQixXQUF3QjtvQkFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUNELDJDQUFVLEdBQVYsVUFBVyxPQUFPLEVBQUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxtQkFBbUI7b0JBQ3pELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNqQjt3QkFDSSxPQUFPLEVBQUMsT0FBTzt3QkFDZixPQUFPLEVBQUMsT0FBTzt3QkFDZixjQUFjLEVBQUMsY0FBYzt3QkFDN0IsUUFBUSxFQUFDLElBQUksQ0FBQyxHQUFHO3dCQUNqQixtQkFBbUIsRUFBQyxtQkFBbUI7cUJBQzFDLEVBQ0QsT0FBTyxDQUNWLENBQUMsU0FBUyxDQUNQLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQztnQkFDTixDQUFDO2dCQUNELG9EQUFtQixHQUFuQjtvQkFBQSxpQkFNQztvQkFMRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FDbEMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQS9CLENBQStCLEVBQ3ZDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsRUFBdEQsQ0FBc0QsQ0FDL0QsQ0FBQztnQkFDTixDQUFDO2dCQUVELDJDQUFVLEdBQVYsVUFBVyxJQUFJO29CQUFmLGlCQVNDO29CQVJHLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJO3dCQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFDbEIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRUQseUNBQVEsR0FBUixVQUFTLElBQVksRUFDWixPQUFlLEVBQ2YsT0FBYyxFQUNkLGNBQXFCLEVBQ3JCLFFBQWdCLEVBQ2hCLG1CQUEyQjtvQkFDaEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsY0FBYyxFQUFDLFFBQVEsRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUN4RixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCxxREFBb0IsR0FBcEIsVUFBcUIsSUFBSTtvQkFDckIsSUFBSSxTQUFTLEdBQWEsRUFBRSxDQUFDO29CQUM3QixJQUFJLE9BQU8sR0FBVyxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJO3dCQUNkLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM3QixDQUFDLENBQUMsQ0FBQztvQkFDSCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO3dCQUMzQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDOzRCQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ3RELENBQUM7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFHRCw0Q0FBVyxHQUFYLFVBQVksS0FBVztvQkFDbkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkE1RUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsT0FBTzt3QkFDaEIsV0FBVyxFQUFDLDJDQUEyQzt3QkFDdkQsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBQyxtQkFBVSxDQUFDO3dCQUNuQyxVQUFVLEVBQUUsQ0FBQyxtQkFBVSxDQUFDO3FCQUMzQixDQUFDOzswQ0FBQTtnQkF5RUYsNkJBQUM7WUFBRCxDQXhFQSxBQXdFQyxJQUFBO1lBeEVELDJEQXdFQyxDQUFBIiwiZmlsZSI6InN0YWZmLXJlZ2lzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBKb3kgb24gMjAxNi0wNC0wMS5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTdGFmZn0gZnJvbSAnLi9TdGFmZic7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5pbXBvcnQge1JvdXRlckxpbmt9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3N0YWZmJyxcbiAgICB0ZW1wbGF0ZVVybDonL3RlbXBsYXRlcy9zdGFmZi1yZWdpc2l0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0hUVFBTZXJ2aWNlLFJvdXRlckxpbmtdLFxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJMaW5rXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFmZlJlZ2lzdGVyQ29tcG9uZW50e1xuICAgIHN0YWZmczpBcnJheTxTdGFmZj47XG4gICAgbmV4dHNfaWQ6IG51bWJlcjtcbiAgICBpc0Q6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKXtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzU3RhZmZGb3JtKCk7XG4gICAgfVxuICAgIHRlc3RTc1Bvc3Qoc19sbmFtZSxzX2ZuYW1lLHNwZWNpYWxpemF0aW9uLGV4cGVyaWVuY2VfaW5feWVhcnMpe1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc19sbmFtZTpzX2xuYW1lLFxuICAgICAgICAgICAgICAgIHNfZm5hbWU6c19mbmFtZSxcbiAgICAgICAgICAgICAgICBzcGVjaWFsaXphdGlvbjpzcGVjaWFsaXphdGlvbixcbiAgICAgICAgICAgICAgICBpc0RvY3Rvcjp0aGlzLmlzRCxcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlX2luX3llYXJzOmV4cGVyaWVuY2VfaW5feWVhcnNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnc3RhZmYnXG4gICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICAgICApO1xuICAgIH1cbiAgICBwcmVwcm9jZXNzU3RhZmZGb3JtKCkge1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldFNRdWVyeSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5wYXJzZVN0YWZmUHJlcHJvY2VzcyhkYXRhKSxcbiAgICAgICAgICAgIGVyciA9PiBhbGVydChlcnIpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJHRVQgcGF0aWVudCBkYXRhIHByZXByb2Nlc3NpbmcgY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZVN0YWZmKGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRTdGFmZihpdGVtLnNpZCxcbiAgICAgICAgICAgICAgICBpdGVtLnNfbG5hbWUsXG4gICAgICAgICAgICAgICAgaXRlbS5zX2ZuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0uc3BlY2lhbGl6YXRpb24sXG4gICAgICAgICAgICAgICAgaXRlbS5pc0RvY3RvcixcbiAgICAgICAgICAgICAgICBpdGVtLmV4cGVyaWVuY2VfaW5feWVhcnMpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFN0YWZmKHNfaWQ6IG51bWJlcixcbiAgICAgICAgICAgICBzX2xuYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgc19mbmFtZTpzdHJpbmcsXG4gICAgICAgICAgICAgc3BlY2lhbGl6YXRpb246c3RyaW5nLFxuICAgICAgICAgICAgIGlzRG9jdG9yOmJvb2xlYW4sXG4gICAgICAgICAgICAgZXhwZXJpZW5jZV9pbl95ZWFyczogbnVtYmVyKXtcbiAgICAgICAgbGV0IHN0YWZmID0gbmV3IFN0YWZmKHNfaWQsc19sbmFtZSxzX2ZuYW1lLHNwZWNpYWxpemF0aW9uLGlzRG9jdG9yLGV4cGVyaWVuY2VfaW5feWVhcnMpO1xuICAgICAgICB0aGlzLnN0YWZmcy5wdXNoKHN0YWZmKTtcbiAgICB9XG5cbiAgICBwYXJzZVN0YWZmUHJlcHJvY2Vzcyhqc29uKXtcbiAgICAgICAgbGV0IHN0YWZmX2lkczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgbGV0IG5leHRfaWQ6IG51bWJlciA9IDA7XG4gICAgICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICBzdGFmZl9pZHMucHVzaChpdGVtLnNpZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YWZmX2lkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHN0YWZmX2lkc1tpXSA+IG5leHRfaWQpIG5leHRfaWQgPSBzdGFmZl9pZHNbaV1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhuZXh0X2lkICsgMSk7XG4gICAgICAgIHRoaXMubmV4dHNfaWQgPSBuZXh0X2lkICsgMTtcbiAgICB9XG5cblxuICAgIHJlbW92ZVN0YWZmKHN0YWZmOlN0YWZmKXtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5zdGFmZnMuaW5kZXhPZihzdGFmZik7XG4gICAgICAgIHRoaXMuc3RhZmZzLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
