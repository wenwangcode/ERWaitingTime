var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var visit_1 = require('./visit');
var VisitComponent = (function () {
    function VisitComponent() {
        this.visits = [];
    }
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
            template: "\n        <table>\n            <tr>\n                <th> patient_id </th>\n                <th> staff_id</th>\n                <th> room number</th>\n                <th> date of visit</th>\n            </tr>\n            <tr *ngFor=\"#visit of visits\"> \n                <td> {{visit.patient_id}} </td>\n                <td> {{visit.staff_id}} </td>\n                <td> {{visit.room}} </td>\n                <td> {{visit.date}} </td>\n            </tr>\n        </table>\n        \n        <br/><br/>\n        <input type=\"number\" min=\"5000\" max=\"10000\" #pid>\n        <input type=\"number\" min=\"0000\" max=\"4999\" #sid>\n        <input type=\"number\" min=\"0000\" max=\"10000\" #room>\n        <input type=\"Date\" #date>\n        <input type=\"submit\" (click)=\"\n            addVisit(pid.value, sid.value, room.value, date.value)\">\n"
        })
    ], VisitComponent);
    return VisitComponent;
})();
exports.VisitComponent = VisitComponent;
