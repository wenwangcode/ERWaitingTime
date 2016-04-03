System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * Created by Joy on 2016-03-28.
     */
    function isLoggedin() {
        return !!localStorage.getItem('token');
    }
    exports_1("isLoggedin", isLoggedin);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=is-loggedin.js.map