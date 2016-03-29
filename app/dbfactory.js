System.register(["util"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var util_1;
    return {
        setters:[
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            /**
             * Created by Joy on 2016-03-22.
             */
            dbFactory.method = function findAll() {
                db.transaction(function (tx) {
                    var sql = "SELECT (eid) as eids FROM equipment";
                    util_1.log(sql);
                    tx.executeSql(sql, [], function (tx, results) {
                        var len = results.rows.length, equipments = [], i = 0;
                        for (; i < len; i = i + 1) {
                            equipments[i] = results.rows.item(i).nomes;
                        }
                        util_1.log(equipments + '  found');
                    });
                }, txErrorHandler, function () {
                });
            };
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1lBQ0E7O2VBRUc7WUFDSCxTQUFTLENBQUMsTUFBTSxHQUFHO2dCQUNmLEVBQUUsQ0FBQyxXQUFXLENBQ1YsVUFBUyxFQUFFO29CQUNQLElBQUksR0FBRyxHQUFHLHFDQUFxQyxDQUFDO29CQUNoRCxVQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUNqQixVQUFTLEVBQUUsRUFBRSxPQUFPO3dCQUNoQixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDekIsVUFBVSxHQUFHLEVBQUUsRUFDZixDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNWLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDOzRCQUN4QixVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUMvQyxDQUFDO3dCQUNELFVBQUcsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUM7b0JBR2hDLENBQUMsQ0FDSixDQUFDO2dCQUNOLENBQUMsRUFBQyxjQUFjLEVBQ2hCO2dCQUVBLENBQUMsQ0FDSixDQUFDO1lBRU4sQ0FBQyxDQUFDIiwiZmlsZSI6ImRiZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bG9nfSBmcm9tIFwidXRpbFwiO1xuLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTIyLlxuICovXG5kYkZhY3RvcnkubWV0aG9kID0gZnVuY3Rpb24gZmluZEFsbCgpIHtcbiAgICBkYi50cmFuc2FjdGlvbihcbiAgICAgICAgZnVuY3Rpb24odHgpIHtcbiAgICAgICAgICAgIHZhciBzcWwgPSBcIlNFTEVDVCAoZWlkKSBhcyBlaWRzIEZST00gZXF1aXBtZW50XCI7XG4gICAgICAgICAgICBsb2coc3FsKTtcbiAgICAgICAgICAgIHR4LmV4ZWN1dGVTcWwoc3FsLCBbXSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbih0eCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuID0gcmVzdWx0cy5yb3dzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVxdWlwbWVudHMgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSA9IGkgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcXVpcG1lbnRzW2ldID0gcmVzdWx0cy5yb3dzLml0ZW0oaSkubm9tZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG9nKGVxdWlwbWVudHMgKyAnICBmb3VuZCcpO1xuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9LHR4RXJyb3JIYW5kbGVyLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfVxuICAgICk7XG5cbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
