/**
 * Created by wendywang on 2016-03-10.
 */
var Patient = (function () {
    function Patient(gender, pname, pid, dob) {
        this.gender = gender;
        this.pname = pname;
        this.pid = pid;
        this.dob = dob;
    }
    return Patient;
})();
exports.Patient = Patient;
