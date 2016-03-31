System.register(['angular2/core', './visit', './http.service'], function(exports_1, context_1) {
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
    var core_1, visit_1, http_service_1;
    var VisitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (visit_1_1) {
                visit_1 = visit_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            VisitComponent = (function () {
                function VisitComponent(httpService) {
                    this.httpService = httpService;
                    this.visits = [];
                }
                VisitComponent.prototype.testPost = function () {
                    this.httpService.post().subscribe(function (data) { return console.log(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                VisitComponent.prototype.testGet = function () {
                    var _this = this;
                    this.visits = [];
                    this.httpService.getQuery().subscribe(function (data) { return _this.parseVisit(data); }, function (err) { return alert(err); }, function () { return console.log("complete"); });
                };
                VisitComponent.prototype.parseVisit = function (json) {
                    var _this = this;
                    json.forEach(function (item) {
                        _this.addVisit(item.pid, item.sid, item.room, item.visit_date);
                    });
                };
                VisitComponent.prototype.addVisit = function (pid, sid, room, date) {
                    var visit = new visit_1.Visit(pid, sid, room, date);
                    this.visits.push(visit);
                };
                VisitComponent.prototype.removeVisit = function (visit) {
                    var index = this.visits.indexOf(visit);
                    this.visits.splice(index, 1);
                };
                VisitComponent = __decorate([
                    core_1.Component({
                        selector: 'visit',
                        template: "\n        <table>\n            <tr>\n                <th> patient_id </th>\n                <th> staff_id</th>\n                <th> room number</th>\n                <th> date of visit</th>\n            </tr>\n            <tr *ngFor=\"#visit of visits\"> \n                <td> {{visit.patient_id}} </td>\n                <td> {{visit.staff_id}} </td>\n                <td> {{visit.room}} </td>\n                <td> {{visit.date}} </td>\n            </tr>\n        </table>\n        \n        <br/><br/>\n        <input type=\"number\" min=\"5000\" max=\"10000\" #pid>\n        <input type=\"number\" min=\"0000\" max=\"4999\" #sid>\n        <input type=\"number\" min=\"0000\" max=\"10000\" #room>\n        <input type=\"Date\" #date>\n        <input type=\"submit\" (click)=\"\n            addVisit(pid.value, sid.value, room.value, date.value)\">\n        <button (click)=\"testPost()\"> Test post </button>\n        <button (click)=\"testGet()\"> Refresh </button>\n",
                        providers: [http_service_1.HTTPService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HTTPService])
                ], VisitComponent);
                return VisitComponent;
            }());
            exports_1("VisitComponent", VisitComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc2l0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtDQTtnQkFHQSx3QkFBb0IsV0FBd0I7b0JBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFFckIsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUM3QixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxnQ0FBTyxHQUFQO29CQUFBLGlCQU9DO29CQU5HLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUNyQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQXJCLENBQXFCLEVBQzdCLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsRUFDakIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxtQ0FBVSxHQUFWLFVBQVcsSUFBSTtvQkFBZixpQkFPQztvQkFORyxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQUEsSUFBSTt3QkFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQ3RCLElBQUksQ0FBQyxHQUFHLEVBQ1IsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3JCLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRUQsaUNBQVEsR0FBUixVQUFTLEdBQVUsRUFBRSxHQUFVLEVBQUUsSUFBVyxFQUFFLElBQVM7b0JBQy9DLElBQUksS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFHRCxvQ0FBVyxHQUFYLFVBQVksS0FBVztvQkFDbkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkF6RUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsT0FBTzt3QkFDaEIsUUFBUSxFQUFFLDg4QkF5QmI7d0JBQ0QsU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztxQkFDdEIsQ0FBQzs7a0NBQUE7Z0JBOENGLHFCQUFDO1lBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtZQTdDRCwyQ0E2Q0MsQ0FBQSIsImZpbGUiOiJ2aXNpdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Zpc2l0fSBmcm9tICcuL3Zpc2l0JztcbmltcG9ydCB7SFRUUFNlcnZpY2V9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J3Zpc2l0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPiBwYXRpZW50X2lkIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiBzdGFmZl9pZDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiByb29tIG51bWJlcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiBkYXRlIG9mIHZpc2l0PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwiI3Zpc2l0IG9mIHZpc2l0c1wiPiBcbiAgICAgICAgICAgICAgICA8dGQ+IHt7dmlzaXQucGF0aWVudF9pZH19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7e3Zpc2l0LnN0YWZmX2lkfX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+IHt7dmlzaXQucm9vbX19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiB7e3Zpc2l0LmRhdGV9fSA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgXG4gICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCI1MDAwXCIgbWF4PVwiMTAwMDBcIiAjcGlkPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjAwMDBcIiBtYXg9XCI0OTk5XCIgI3NpZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwMDAwXCIgbWF4PVwiMTAwMDBcIiAjcm9vbT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJEYXRlXCIgI2RhdGU+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgKGNsaWNrKT1cIlxuICAgICAgICAgICAgYWRkVmlzaXQocGlkLnZhbHVlLCBzaWQudmFsdWUsIHJvb20udmFsdWUsIGRhdGUudmFsdWUpXCI+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRlc3RQb3N0KClcIj4gVGVzdCBwb3N0IDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0ZXN0R2V0KClcIj4gUmVmcmVzaCA8L2J1dHRvbj5cbmAsXG5wcm92aWRlcnM6W0hUVFBTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBWaXNpdENvbXBvbmVudHtcbnZpc2l0czpBcnJheTxWaXNpdD47XG5cbmNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEhUVFBTZXJ2aWNlKXtcbiAgICB0aGlzLnZpc2l0cyA9IFtdO1xuXG59XG5cbnRlc3RQb3N0KCl7XG4gICAgdGhpcy5odHRwU2VydmljZS5wb3N0KCkuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICBlcnIgPT4gYWxlcnQoZXJyKSxcbiAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKVxuICAgICk7XG59XG5cbnRlc3RHZXQoKXtcbiAgICB0aGlzLnZpc2l0cyA9IFtdO1xuICAgICAgICB0aGlzLmh0dHBTZXJ2aWNlLmdldFF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHRoaXMucGFyc2VWaXNpdChkYXRhKSxcbiAgICAgICAgZXJyID0+IGFsZXJ0KGVyciksXG4gICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiY29tcGxldGVcIilcbiAgICApO1xufVxuXG5wYXJzZVZpc2l0KGpzb24pe1xuICAgIGpzb24uZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgIHRoaXMuYWRkVmlzaXQoaXRlbS5waWQsXG4gICAgICAgIGl0ZW0uc2lkLFxuICAgICAgICBpdGVtLnJvb20sXG4gICAgICAgIGl0ZW0udmlzaXRfZGF0ZSk7XG4gICAgfSlcbn1cblxuYWRkVmlzaXQocGlkOm51bWJlciwgc2lkOm51bWJlciwgcm9vbTpudW1iZXIsIGRhdGU6RGF0ZSl7XG4gICAgICAgIGxldCB2aXNpdCA9IG5ldyBWaXNpdChwaWQsc2lkLHJvb20sZGF0ZSk7XG4gICAgICAgIHRoaXMudmlzaXRzLnB1c2godmlzaXQpO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICByZW1vdmVWaXNpdCh2aXNpdDpWaXNpdCl7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMudmlzaXRzLmluZGV4T2YodmlzaXQpO1xuICAgICAgICB0aGlzLnZpc2l0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
