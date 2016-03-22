import {Equipment} from "./equipment";
import {EquipmentComponent} from "./equipment.component";
/**
 * Created by Joy on 2016-03-21.
 */
var myApp = angular.module('my-app', []);

myApp.controller('equipmentController', function ($scope, $http) {

    dbfactory.showClientes().then(function(listview) {
        $scope.equipments = listview;
        console.log($scope.equipments);
    });

});