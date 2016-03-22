import {log} from "util";
/**
 * Created by Joy on 2016-03-22.
 */
dbFactory.method = function findAll() {
    db.transaction(
        function(tx) {
            var sql = "SELECT (eid) as eids FROM equipment";
            log(sql);
            tx.executeSql(sql, [],
                function(tx, results) {
                    var len = results.rows.length,
                        equipments = [],
                        i = 0;
                    for (; i < len; i = i + 1) {
                        equipments[i] = results.rows.item(i).nomes;
                    }
                    log(equipments + '  found');


                }
            );
        },txErrorHandler,
        function () {

        }
    );

};