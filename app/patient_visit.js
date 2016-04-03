System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PatientVisit;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by Joy on 2016-04-02.
             */
            PatientVisit = (function () {
                function PatientVisit(p_lname, p_fname, pid, is_male, dob, visit_id, staff_id, room, date) {
                    this.p_lname = p_lname;
                    this.p_fname = p_fname;
                    this.pid = pid;
                    this.is_male = is_male;
                    this.dob = dob;
                    this.visit_id = visit_id;
                    this.staff_id = staff_id;
                    this.room = room;
                    this.date = date;
                }
                return PatientVisit;
            }());
            exports_1("PatientVisit", PatientVisit);
        }
    }
});
//# sourceMappingURL=patient_visit.js.map