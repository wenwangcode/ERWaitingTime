System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PatientReport;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by Joy on 2016-04-02.
             */
            PatientReport = (function () {
                function PatientReport(p_lname, p_fname, pid, is_male, dob, rid, diagnosis, report_date, vid) {
                    this.p_lname = p_lname;
                    this.p_fname = p_fname;
                    this.pid = pid;
                    this.is_male = is_male;
                    this.dob = dob;
                    this.rid = rid;
                    this.diagnosis = diagnosis;
                    this.report_date = report_date;
                    this.vid = vid;
                }
                return PatientReport;
            }());
            exports_1("PatientReport", PatientReport);
        }
    }
});
//# sourceMappingURL=patient_report.js.map