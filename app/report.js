System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Report;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by Joy on 2016-04-01.
             */
            Report = (function () {
                function Report(rid, diagnosis, report_date, vid, pid) {
                    this.rid = rid;
                    this.diagnosis = diagnosis;
                    this.report_date = report_date;
                    this.vid = vid;
                    this.pid = pid;
                }
                return Report;
            }());
            exports_1("Report", Report);
        }
    }
});
//# sourceMappingURL=report.js.map