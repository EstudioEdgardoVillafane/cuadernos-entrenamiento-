<?php
	include 'cuaderno.php';
    include 'connect.php';
    
    $NewConnect = new Cuaderno();
	
	if($_GET["data"]==1){
		$sql="SELECT * FROM categoria WHERE status = 1";	
		$NewConnect->CreateJson($sql);
	}elseif($_GET["data"]==2){
		$sqld = "UPDATE categoria SET status = 0 WHERE id = '".$_GET["id"]."'";
		$NewConnect->Borrar($sqld);
	}elseif($_GET["data"]==3){
		$sql = "INSERT INTO categoria (nombre,status) 
		VALUES ('".$_GET["categoriaproducto"]."','1')";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==4){
		$sql="UPDATE categoria SET
		nombre = '".$_GET["categoriaproducto"]."' WHERE id = '".$_GET["id"]."'";
		$NewConnect->ExecuteSql($sql);

	}

?>