var Visit = (function () {
    function Visit(pid, sid, r, d) {
        this.patient_id = pid;
        this.staff_id = sid;
        this.room = r;
        this.date = d;
    }
    return Visit;
})();
exports.Visit = Visit;
