<?php
include '../../src/php/cuaderno.php';
include '../../src/php/connect.php';

$NewConnect = new Cuaderno();
	
	$Descripcion = $_POST["descripcion"];
	$Nombre = $_POST["nombre"];
	$Precio = $_POST["precio"];
	$Categoria = $_POST["categoria"];
	
	$uploadedfileload="true";
	$uploadedfile_size=$_FILES['uploadedfile']['size'];
	$file_name=$_FILES['uploadedfile']['name'];
	$add='uploads/'.$file_name;
	
	move_uploaded_file ($_FILES['uploadedfile']['tmp_name'], $add);
	
		echo " Ha sido subido satisfactoriamente";
		$URL="http://localhost/cuad/cuadernos/dist/php/uploads/".$_FILES['uploadedfile']['name'];
        $sql = "INSERT INTO producto (nombre,descripcion,precio,categoria,foto,status) 
		VALUES ('".$Nombre."','".$Descripcion."','".$Precio."','".$Categoria."','".$URL."','1')";
        $NewConnect->ExecuteSql($sql);
	


?>