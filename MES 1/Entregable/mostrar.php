
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Productos</title>
<link rel="stylesheet" href="css/tabla.css">

</head>
<body>
  <h1>Lista de Productos</h1>

  <br>

  <div id="main-tabla">
<table>	
	<thead>
	<tr>
		<th>Codigo</th>
		<th>Producto</th>
		<th>Categoria</th>
		<th>Stock</th>
		<th>Precio</th>	
	</tr>
	</thead>
	

	<?php 
	    //incluimos la conexion
		include("conexion.php");
		$cn=fnconexion();
		//seleccionamos la tabla de la base de datos
	$sql="SELECT * from productos";
	$result=mysqli_query($cn,$sql);

	while($mostrar=mysqli_fetch_array($result)){
	 ?>

	<tr>
		<td><?php echo $mostrar['codigo'] ?></td>
		<td><?php echo $mostrar['producto'] ?></td>
		<td><?php echo $mostrar['categoria'] ?></td>
		<td><?php echo $mostrar['stock'] ?></td>
		<td><?php echo $mostrar['precio'] ?></td>
	</tr>
	
<?php 
}
 ?>
</table>
<br>
<a href="formulario.html">Agregar producto</a>
<br>
<br>
<a href="formulario2.html">Eliminar producto</a>
</div>

</body>
</html>
