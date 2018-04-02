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
		// Imagen
		// if($_FILES['foto_alumno']['size']!=""){
		// 	$tipo = $_FILES['foto_alumno']['type'];
		// 	$tamano = $_FILES['foto_alumno']['size'];
		// 	$tmp = $_FILES['foto_alumno']['tmp_name'];
		// 	$ruta="../fotos/portfolio";
		// 	$ancho_fijo=1920;
		// 	//este alto fijo no se utiliza porque todas las portadas van a ser apaisadas
		// 	$alto_fijo=1080;
		// 	//renombro la foto
		// 	$ext=explode('/',$tipo);
		// 	$aleatorio=rand(0,999999999);
		// 	$nuevo_nombre="port-".$aleatorio.'.'.$ext[1];
		// 	if($tamano){
		// 		if($tipo == "image/pjpeg" || $tipo == "image/jpeg"){
		// 			$nueva_img = imagecreatefromjpeg($tmp);
		// 		}elseif($tipo == "image/x-png" || $tipo == "image/png"){
		// 			$nueva_img = imagecreatefrompng($tmp);
		// 		}elseif($tipo == "image/gif"){
		// 			$nueva_img = imagecreatefromgif($tmp);
		// 		}
		// 	}
		// 	//Obtener el ancho y alto de la imagen
		// 	list($ancho, $alto) = getimagesize($tmp);
		// 	$proporcion = $ancho/$alto;
		// 	if($proporcion >1){
		// 		$nuevo_ancho=$ancho_fijo;
		// 		$nuevo_alto=$ancho_fijo/$proporcion;
		// 	}else{
		// 		//este no se va a cumplir porque todas las portadas van a ser apaisadas
		// 		$nuevo_ancho=$alto_fijo*$proporcion;
		// 		$nuevo_alto=$alto_fijo;
		// 	}
		// 	$img_redimensionada = imagecreatetruecolor($nuevo_ancho,$nuevo_alto);
		// 	imagecopyresampled($img_redimensionada, $nueva_img, 0, 0, 0, 0, $nuevo_ancho, $nuevo_alto, $ancho, $alto);
		// 	if($tipo == "image/x-png" || $tipo == "image/png"){
		// 		imagepng ($img_redimensionada,"$ruta/$nuevo_nombre");
		// 	}else{
		// 		imagejpeg ($img_redimensionada,"$ruta/$nuevo_nombre",80);
		// 	}
		// 	imagedestroy ($img_redimensionada);
		// 	imagedestroy ($nueva_img);
		// 	}
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