System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PatientID;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by Joy on 2016-04-02.
             */
            PatientID = (function () {
                function PatientID(pid) {
                    this.pid = pid;
                }
                return PatientID;
            }());
            exports_1("PatientID", PatientID);
        }
    }
});
//# sourceMappingURL=patient_id.js.map