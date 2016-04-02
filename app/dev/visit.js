System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Visit;
    return {
        setters:[],
        execute: function() {
            Visit = (function () {
                function Visit(pid, sid, r, d) {
                    this.patient_id = pid;
                    this.staff_id = sid;
                    this.room = r;
                    this.date = d;
                }
                return Visit;
            }());
            exports_1("Visit", Visit);
        }
    }
});
//# sourceMappingURL=visit.js.map