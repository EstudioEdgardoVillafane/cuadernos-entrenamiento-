<?php
	include 'cuaderno.php';
	include 'connect.php';

	$NewConnect = new Cuaderno();
	
	if($_GET["data"]==1){
		$sql="SELECT * FROM contacto WHERE status = 1";	
		$NewConnect->CreateJson($sql);
	}elseif($_GET["data"]==4){
		$sql="UPDATE contacto SET		
		respuesta = '".$_GET["respuesta"]."'
		 WHERE id = '".$_GET["id"]."'";
		$NewConnect->ExecuteSql($sql);
		$sql="SELECT * FROM contacto WHERE id='".$_GET["id"]."'";
		$result = $NewConnect->ExecuteSql($sql);
		$fila=mysqli_fetch_assoc($result);
		$NewConnect->Enviaremail($fila["respuesta"],$fila["nombre"],$fila["email"]);
	}

?>