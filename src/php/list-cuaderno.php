<?php
	include 'cuaderno.php';
	include 'connect.php';

	$NewConnect = new Cuaderno();
	
	if($_GET["data"]==1){
		$sql="SELECT * FROM producto WHERE status = 1";	
		$NewConnect->CreateJson($sql);
	}elseif($_GET["data"]==2){
		$sqld = "UPDATE producto SET status = 0 WHERE id = '".$_GET["id"]."'";
		$NewConnect->Borrar($sqld);
	}elseif($_GET["data"]==3){
		$sql = "INSERT INTO producto (nombre,descripcion,precio,categoria,status) 
		VALUES ('".$_GET["name"]."','".$_GET["desc"]."','".$_GET["precio"]."','".$_GET["categ"]."','1')";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==4){
		$sql="UPDATE producto SET
		nombre = '".$_GET["name"]."',
		descripcion = '".$_GET["desc"]."',
		precio = '".$_GET["precio"]."',
		categoria = '".$_GET["categ"]."' WHERE id = '".$_GET["id"]."'";
		$NewConnect->ExecuteSql($sql);

	}

?>