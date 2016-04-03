System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Staff;
    return {
        setters:[],
        execute: function() {
            Staff = (function () {
                function Staff(s_id, s_lname, s_fname, specialization, isDoctor, experience_in_years) {
                    this.s_id = s_id;
                    this.s_lname = s_lname;
                    this.s_fname = s_fname;
                    this.specialization = specialization;
                    this.isDoctor = isDoctor;
                    this.experience_in_years = experience_in_years;
                }
                return Staff;
            }());
            exports_1("Staff", Staff);
        }
    }
});
//# sourceMappingURL=Staff.js.map