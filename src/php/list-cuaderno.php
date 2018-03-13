<?php

	include 'cuaderno.php';
	include 'connect.php';
	
$sql="SELECT * FROM producto";
	
$NewConnect = new Cuaderno();
$NewConnect->CreateJson($sql);
//  echo "[{id:'hola'}]";
?>