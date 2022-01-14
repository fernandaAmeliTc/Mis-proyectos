<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Eliminar Productos</title>
<link rel="stylesheet" href="css/elim.css">

</head>
<body>
  <h1>Resultados de la Operación</h1>
  <?php
	include("conexion.php");
	$cn=fnconexion();
	$codigo=$_POST["txtcodigo"];
	$sqleliminar="delete from productos where codigo='$codigo'";
	$rs=mysqli_query($cn,$sqleliminar);
    if($rs>0){  
		echo "<br>" ;
		mysqli_query($cn,"commit");
		echo "Se elimino el registro!! :(";
	}else{
		echo("error".mysqli_error());
	}
	echo "<br>" ;
	?>
	<br>
	<br>
	<a href="mostrar.php">Regresar a la lista</a>

</body>
</html>