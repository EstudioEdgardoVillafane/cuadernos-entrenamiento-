<?php
require_once 'cuaderno.php';
require_once 'connect.php';
$NewConnect = new Cuaderno();
	
	$Descripcion = $_POST["descripcion"];
	$Nombre = $_POST["nombre"];
	$Precio = $_POST["precio"];
	$Categoria = $_POST["categoria"];
	
	$uploadedfileload="true";
	$uploadedfile_size=$_FILES['uploadedfile']['size'];
	$numero_aleatorio = rand(1,10);
	$file_name = $_FILES['uploadedfile']['name'];
	// $file_name = $numero_aleatorio.$file_name;
	$add='uploads/'.$file_name;
	
	move_uploaded_file ($_FILES['uploadedfile']['tmp_name'], $add);
	
		echo " Ha sido subido satisfactoriamente";
		$URL="php/uploads/".$file_name;
        $sql = "INSERT INTO producto (nombre,descripcion,precio,categoria,foto,status) 
		VALUES ('".$Nombre."','".$Descripcion."','".$Precio."','".$Categoria."','".$URL."','1')";
        $NewConnect->ExecuteSql($sql);
	


?>