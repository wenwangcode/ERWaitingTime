System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Prescription;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by Joy on 2016-04-01.
             */
            Prescription = (function () {
                function Prescription(pname, amount, rid) {
                    this.pname = pname;
                    this.amount = amount;
                    this.rid = rid;
                }
                return Prescription;
            }());
            exports_1("Prescription", Prescription);
        }
    }
});
//# sourceMappingURL=prescription.js.map