/**
 * Created by wendywang on 2016-03-16.
 */
var Staff = (function () {
    function Staff(s_id, s_lname, s_fname, specialization, isDoctor, experience_in_years) {
        this.s_id = s_id;
        this.s_lname = s_lname;
        this.s_fname = s_fname;
        this.specialization = specialization;
        this.isDoctor = isDoctor;
        this.experience_in_years = experience_in_years;
    }
    return Staff;
})();
exports.Staff = Staff;
//# sourceMappingURL=staff.js.map