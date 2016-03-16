/**
 * Created by wendywang on 2016-03-16.
 */

//http://mysqlhighavailability.com/the-javascript-connector-for-mysql-you-never-heard-of/
var mySQLClient = require('mysql-js');
var properties = new mySQLClient.ConnectionProperties('mysql');
properties.user = '';
properties.password = '';
//mySQLClient.openSession(properties, onOpenSession);
