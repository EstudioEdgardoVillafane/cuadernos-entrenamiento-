<?php

	include 'cuaderno.php';
	include 'connect.php';
	
// $sql="SELECT * FROM producto";
$sqld = "UPDATE producto SET status = 5 WHERE id = 1"; 

$NewConnect = new Cuaderno();
// $NewConnect->CreateJson($sql);
$NewConnect->Borrar($sqld);
?>