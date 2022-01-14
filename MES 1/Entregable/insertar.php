<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Registrar ventas</title>
<link rel="stylesheet" href="css/insert.css">

</head>
<body>
  <h1>Registro a la base de datos</h1>
  <?php
	  include("conexion.php");
	  $cn=fnconexion();
	  $codigo=$_POST["txtcodigo"];
	  $producto=$_POST["txtproducto"];
	  $categoria=$_POST["txtcategoria"];
	  $stock=$_POST["txtstock"];
	  $precio=$_POST["txtprecio"];
	  //agregar una sentencia sql para insertar datos
	  $sqlinsert="insert into productos(codigo,producto,categoria,stock,precio)
	 values('$codigo','$producto','$categoria','$stock','$precio')";
	  //se ejecuta la sentencia sql 
	  $rs=mysqli_query($cn,$sqlinsert);
	  echo "<br>";
	  //se realiza la transacción
	  mysqli_query($cn,"commit");
      echo "Se agrego un nuevo registro!! :)";
      echo "<br>";
	  echo "<br>";
  ?>
     <a href="mostrar.php">Regresar a la lista</a>

</body>
</html>
