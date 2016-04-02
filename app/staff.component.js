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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTBDQTtnQkFHSSx3QkFBb0IsV0FBd0I7b0JBSGhELGlCQXVDQztvQkFwQ3VCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQ2xDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBckIsQ0FBcUIsRUFDN0IsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQVYsQ0FBVSxFQUNqQixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDaEMsQ0FBQztnQkFDTixDQUFDO2dCQUVELG1DQUFVLEdBQVYsVUFBVyxJQUFJO29CQUFmLGlCQVNDO29CQVJHLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJO3dCQUNkLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFDbkIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRUQsaUNBQVEsR0FBUixVQUFTLElBQVksRUFDWixPQUFlLEVBQ2YsT0FBYyxFQUNkLGNBQXFCLEVBQ3JCLFFBQWdCLEVBQ2hCLG1CQUEyQjtvQkFDaEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsY0FBYyxFQUFDLFFBQVEsRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUN4RixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFHRCxvQ0FBVyxHQUFYLFVBQVksS0FBVztvQkFDbkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkF4RUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsT0FBTzt3QkFDaEIsUUFBUSxFQUFFLG9vQ0E4QmI7d0JBQ0csU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztxQkFDMUIsQ0FBQzs7a0NBQUE7Z0JBd0NGLHFCQUFDO1lBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtZQXZDRCwyQ0F1Q0MsQ0FBQSIsImZpbGUiOiJzdGFmZi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDMtMjguXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U3RhZmZ9IGZyb20gJy4vU3RhZmYnO1xuaW1wb3J0IHtIVFRQU2VydmljZX0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3Rvcjonc3RhZmYnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+IHN0YWZmX2lkIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiBzdGFmZl9sbmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiBzdGFmZl9mbmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiBzcGVjaWFsaXphdGlvbiA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD4gaXNEb2N0b3I8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD4gZXhwZXJpZW5jZV9pbl95ZWFyczwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cIiNzdGFmZiBvZiBzdGFmZnNcIj4gXG4gICAgICAgICAgICAgICAgPHRkPiB7e3N0YWZmLnNfaWR9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge3tzdGFmZi5zX2xuYW1lfX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+IHt7c3RhZmYuc19mbmFtZX19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7e3N0YWZmLnNwZWNpYWxpemF0aW9ufX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+IHt7c3RhZmYuaXNEb2N0b3J9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ge3tzdGFmZi5leHBlcmllbmNlX2luX3llYXJzfX0gPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIFxuICAgICAgICA8YnIvPjxici8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgI3NfaWQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzX2xuYW1lPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc19mbmFtZT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3NwZWNpYWxpemF0aW9uPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjaXNEb2N0b3I+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgI2V4cGVyaWVuY2VfaW5feWVhcnM+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cIlxuICAgICAgICAgICAgYWRkRXF1aXBtZW50KHNfaWQudmFsdWUgLHNfbG5hbWUudmFsdWUsc19mbmFtZS52YWx1ZSxzcGVjaWFsaXphdGlvbi52YWx1ZSxpc0RvY3Rvci52YWx1ZSxleHBlcmllbmNlX2luX3llYXJzLnZhbHVlKVwiPlxuICAgICAgICAgICAgXG5gLFxuICAgIHByb3ZpZGVyczpbSFRUUFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFN0YWZmQ29tcG9uZW50e1xuICAgIHN0YWZmczpBcnJheTxTdGFmZj47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIVFRQU2VydmljZSl7XG4gICAgICAgIHRoaXMuc3RhZmZzID0gW107XG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UuZ2V0U1F1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLnBhcnNlU3RhZmYoZGF0YSksXG4gICAgICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwYXJzZVN0YWZmKGpzb24pe1xuICAgICAgICBqc29uLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRTdGFmZihpdGVtLnNfaWQsXG4gICAgICAgICAgICAgICAgaXRlbS5zX2xuYW1lLFxuICAgICAgICAgICAgICAgIGl0ZW0uc19mbmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtLnNwZWNpYWxpemF0aW9uLFxuICAgICAgICAgICAgICAgIGl0ZW0uaXNEb2N0b3IsXG4gICAgICAgICAgICAgICAgaXRlbS5leHBlcmllbmNlX2luX3llYXJzKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRTdGFmZihzX2lkOiBudW1iZXIsXG4gICAgICAgICAgICAgc19sbmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgIHNfZm5hbWU6c3RyaW5nLFxuICAgICAgICAgICAgIHNwZWNpYWxpemF0aW9uOnN0cmluZyxcbiAgICAgICAgICAgICBpc0RvY3Rvcjpib29sZWFuLFxuICAgICAgICAgICAgIGV4cGVyaWVuY2VfaW5feWVhcnM6IG51bWJlcil7XG4gICAgICAgIGxldCBzdGFmZiA9IG5ldyBTdGFmZihzX2lkLHNfbG5hbWUsc19mbmFtZSxzcGVjaWFsaXphdGlvbixpc0RvY3RvcixleHBlcmllbmNlX2luX3llYXJzKTtcbiAgICAgICAgdGhpcy5zdGFmZnMucHVzaChzdGFmZik7XG4gICAgfVxuXG5cbiAgICByZW1vdmVTdGFmZihzdGFmZjpTdGFmZil7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuc3RhZmZzLmluZGV4T2Yoc3RhZmYpO1xuICAgICAgICB0aGlzLnN0YWZmcy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
