System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by Joy on 2016-03-30.
             */
            User = (function () {
                function User(username, password) {
                    this.username = username;
                    this.password = password;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map