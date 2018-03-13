<?php 
class Cuaderno{
	public function ExecuteSql($sql){
		$conex = New Connect();
		$conex -> CreateConnection();
		$conex -> Execute($sql);
		$conex -> CloseConnection();
	}	  
	public function CreateJson($sql){
		$con = New Connect();
		$con -> CreateConnection();
		$result = $con -> Execute($sql);
		$i=0;
		$ArrayJson= array();
		while($fila=mysqli_fetch_assoc($result)){
			$ArrayJson[$i] = $fila;
	        $i++;
		}
		echo json_encode($ArrayJson);
		$con -> CloseConnection();		
	}
	public function Borrar($sel){
			$con = new Connect();
			$seleccion = explode("|",$sel);
			for($x=0;$x<count($seleccion);$x++){
				//$sql="UPDATE producto SET p_status=0 WHERE p_id=$seleccion[$x]"; 
				$con->CreateConnection();
				$con->Execute($sql);
			}
			$con->CloseConnection();
	}
}

?>