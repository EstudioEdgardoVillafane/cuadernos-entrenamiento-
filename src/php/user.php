<?php

	include 'cuaderno.php';
	include 'connect.php';

	$NewConnect = new Cuaderno();
	
	if($_GET["data"]==1){
		$sql="SELECT * FROM usuario WHERE status = 1";	
		$NewConnect->CreateJson($sql);
	}elseif($_GET["data"]==2){
		$sqld = "UPDATE usuario SET status = 0 WHERE id = '".$_GET["id"]."'";
		$NewConnect->Borrar($sqld);
	}elseif($_GET["data"]==3){
		$sql = "INSERT INTO usuario (usuario,contrasena,status) 
		VALUES ('".$_GET["name"]."','".$_GET["contra"]."','1')";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==4){
		$sql="UPDATE usuario SET
		usuario = '".$_GET["name"]."',
        contrasena = '".$_GET["contra"]."'
         WHERE id = '".$_GET["id"]."'";
		$NewConnect->ExecuteSql($sql);

	}

?>