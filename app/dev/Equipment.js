System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Equipment;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by Joy on 2016-03-28.
             */
            Equipment = (function () {
                function Equipment(eid, type, room) {
                    this.eid = eid;
                    this.type = type;
                    this.room = room;
                }
                return Equipment;
            }());
            exports_1("Equipment", Equipment);
        }
    }
});
//# sourceMappingURL=Equipment.js.map