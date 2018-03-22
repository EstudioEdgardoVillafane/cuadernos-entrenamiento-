<?php
require_once 'cuaderno.php';
require_once 'connect.php';
$NewConnect = new Cuaderno();
	
	$Descripcion = $_POST["descripcion"];
	$Nombre = $_POST["nombre"];
	$Precio = $_POST["precio"];
	$Categoria = $_POST["categoria"];
	$tipo = $_FILES['uploadedfile']['type'];
	$tamano = $_FILES['uploadedfile']['size'];
	$tmp = $_FILES['uploadedfile']['tmp_name'];
	$file_name = $_FILES['uploadedfile']['name'];
	$uploadedfileload="true";
	$numero_aleatorio = rand(1,10);	
	$file_name = $numero_aleatorio.$file_name;
	$add='uploads/'.$file_name;
	$ancho_fijo=1920;
	$alto_fijo=1080;
	$ext=explode('/',$tipo);
	$aleatorio=rand(0,999999999);
	$nuevo_nombre="port-".$aleatorio.'.'.$ext[1];
	$ruta="uploads";
	$URL = "php/".$ruta."/".$nuevo_nombre;
	if($tamano){
		if($tipo == "image/pjpeg" || $tipo == "image/jpeg"){
			$nueva_img = imagecreatefromjpeg($tmp);
		}elseif($tipo == "image/x-png" || $tipo == "image/png"){
			$nueva_img = imagecreatefrompng($tmp);
		}elseif($tipo == "image/gif"){
			$nueva_img = imagecreatefromgif($tmp);
		}
	}

	list($ancho, $alto) = getimagesize($tmp);
	$proporcion = $ancho/$alto;
	if($proporcion >1){
		$nuevo_ancho=$ancho_fijo;
		$nuevo_alto=$ancho_fijo/$proporcion;
	}else{
		//este no se va a cumplir porque todas las portadas van a ser apaisadas
		$nuevo_ancho=$alto_fijo*$proporcion;
		$nuevo_alto=$alto_fijo;
	}	

	$img_redimensionada = imagecreatetruecolor($nuevo_ancho,$nuevo_alto);
	imagecopyresampled($img_redimensionada, $nueva_img, 0, 0, 0, 0, $nuevo_ancho, $nuevo_alto, $ancho, $alto);
	
if($tipo == "image/x-png" || $tipo == "image/png"){
    imagepng ($img_redimensionada,"$ruta/$nuevo_nombre");
}else{
	imagejpeg ($img_redimensionada,"$ruta/$nuevo_nombre",80);
}	
imagedestroy ($img_redimensionada);
imagedestroy ($nueva_img);

		echo " Ha sido subido satisfactoriamente";
		// $URL="php/uploads/".$file_name;
        $sql = "INSERT INTO producto (nombre,descripcion,precio,categoria,foto,status) 
		VALUES ('".$Nombre."','".$Descripcion."','".$Precio."','".$Categoria."','".$URL."','1')";
        $NewConnect->ExecuteSql($sql);
	

 ?>