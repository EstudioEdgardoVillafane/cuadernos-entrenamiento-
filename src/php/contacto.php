<?php
	include 'cuaderno.php';
	include 'connect.php';
	/*$time=time();
$fecha=date("Y-m-d", $time);
$hora= date("H:i:s",$time);*/

	$NewConnect = new Cuaderno();
	
	if($_GET["data"]==1){
		$sql="SELECT * FROM contacto WHERE status = 1";	
		$NewConnect->CreateJson($sql);
	}elseif($_GET["data"]==3){
		$sql = "INSERT INTO contacto (nombre,telefono,email,mensaje,status) 
		VALUES ('".$_GET["nombre"]."','".$_GET["telefono"]."','".$_GET["email"]."','".$_GET["mensaje"]."','1')";
		$NewConnect->ExecuteSql($sql);
	}

?>