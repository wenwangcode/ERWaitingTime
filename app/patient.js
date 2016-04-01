System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Patient;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by wendywang on 2016-03-10.
             */
            Patient = (function () {
                function Patient(p_lname, p_fname, pid, is_male, dob) {
                    this.p_lname = p_lname;
                    this.p_fname = p_fname;
                    this.pid = pid;
                    this.is_male = is_male;
                    this.dob = dob;
                }
                return Patient;
            }());
            exports_1("Patient", Patient);
        }
    }
});
//# sourceMappingURL=Patient.js.map