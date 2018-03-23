<?php
include '../../src/php/cuaderno.php';
include '../../src/php/connect.php';

$NewConnect = new Cuaderno();
	
	// $Descripcion = $_POST["descripcion"];
	$Nombre = $_POST["nombre"];
	// $Precio = $_POST["precio"];
	// $Categoria = $_POST["categoria"];
	
	// $uploadedfileload="true";
	// $uploadedfile_size=$_FILES['uploadedfile']['size'];
	// // echo "ESte es el nombre del archivo".$_FILES['uploadedfile']['name'];
	// if ($_FILES['uploadedfile']['size']>2000000)
	// {
	// $msg="El archivo es mayor que 2mb, debes reduzcirlo antes de subirlo";
	// $uploadedfileload="false";
	// }

	// if (!($_FILES['uploadedfile']['type'] =="image/jpeg" OR $_FILES['uploadedfile']['type'] =="image/gif"))
	// {
	// $msg=" Tu archivo tiene que ser JPG o GIF. Otros archivos no son permitidos";
	// $uploadedfileload="false";
	// }

	// $file_name=$_FILES['uploadedfile']['name'];
	// $add="uploads/$file_name";
	// if($uploadedfileload=="true"){

	// if(move_uploaded_file ($_FILES['uploadedfile']['tmp_name'], $add)){
	
	// 	// echo " Ha sido subido satisfactoriamente";
	// 	$URL="script/uploads/".$_FILES['uploadedfile']['name'];
        $sql = "INSERT INTO producto (nombre,descripcion,precio,categoria,status) 
		VALUES ('".$Nombre."','puto','123','23asda','1')";
        $NewConnect->ExecuteSql($sql);
    

?>