System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var myApp;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by Joy on 2016-03-21.
             */
            myApp = angular.module('my-app', []);
            myApp.controller('equipmentController', function ($scope, $http) {
                dbfactory.showClientes().then(function (listview) {
                    $scope.equipments = listview;
                    console.log($scope.equipments);
                });
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBS0ksS0FBSzs7OztZQUhUOztlQUVHO1lBQ0MsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRXpDLEtBQUssQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsVUFBVSxNQUFNLEVBQUUsS0FBSztnQkFFM0QsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLFFBQVE7b0JBQzNDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO29CQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJjb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFcXVpcG1lbnR9IGZyb20gXCIuL2VxdWlwbWVudFwiO1xuaW1wb3J0IHtFcXVpcG1lbnRDb21wb25lbnR9IGZyb20gXCIuL2VxdWlwbWVudC5jb21wb25lbnRcIjtcbi8qKlxuICogQ3JlYXRlZCBieSBKb3kgb24gMjAxNi0wMy0yMS5cbiAqL1xudmFyIG15QXBwID0gYW5ndWxhci5tb2R1bGUoJ215LWFwcCcsIFtdKTtcblxubXlBcHAuY29udHJvbGxlcignZXF1aXBtZW50Q29udHJvbGxlcicsIGZ1bmN0aW9uICgkc2NvcGUsICRodHRwKSB7XG5cbiAgICBkYmZhY3Rvcnkuc2hvd0NsaWVudGVzKCkudGhlbihmdW5jdGlvbihsaXN0dmlldykge1xuICAgICAgICAkc2NvcGUuZXF1aXBtZW50cyA9IGxpc3R2aWV3O1xuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuZXF1aXBtZW50cyk7XG4gICAgfSk7XG5cbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
