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
	public function Borrar($sql){
			$con = new Connect();
			$con->CreateConnection();
			$con->Execute($sql);
			$con->CloseConnection();
	}

	public function Enviaremail($respuesta,$nombre,$email){
		
		$headers  = 'MIME-Version: 1.0'."\r\n";
		$headers .= 'Content-type: text/html; charset=utf-8'."\r\n";
		$headers .= 'From:Cuadernos artesanales<informes@cuadernosartesanales.com.ar>'."\r\n";
		$cuerpo = "
		<div style='width:100%;height:682px;margin:0 auto;'>
			<div style='width:100%;height:50px;margin:0 auto;
				background-color:#007FFF;color:#fff;text-align:center;font-size:13px;line-height:50px;'>
				<h1 style='color:#fff;text-align:center;font-size:28px;line-height:50px;'>INSTITUTO BRIENZA</h1>
			</div>
			<div style='background-color:#fff;width:95%;height:682px;margin:0 auto;'>
				<div style='background-color:#fff;width:92%;height:682px;margin:0 auto;padding-top:10px'>
					<p>Estimado/a ".$nombre."</p>					
					<br>
					Mensaje:<br>			
					".$respuesta."			
					<p>Saluda Atte.</p>
					<p>INSTITUTO BRIENZA</p>
				</div>
			</div>
		</div>
		</div>";
		mail($email,"Cuadernos artesanales Tu Respuesta!!!", $cuerpo ,$headers);
		
		
}
}


?>