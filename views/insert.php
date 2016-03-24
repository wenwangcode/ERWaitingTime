<?php$username="root";
$password="639288";$database="me";
$field1-name=$_POST['Value1'];
$field2-name=$_POST['Value2'];
$field3-name=$_POST['Value3'];
$field4-name=$_POST['Value4'];
$field5-name=$_POST['Value5'];
mysql_connect(localhost,$username,$password);
@mysql_select_db($database) or die( "Unable to select database");
$query = "INSERT INTO equipment VALUES('','$field1-name','$field2-name',
'$field3-name','$field4-name','$field5-name')";mysql_query($query);mysql_close();?>