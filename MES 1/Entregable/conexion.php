<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Base de datos</title>
</head>
<body>
   <?php
   function fnconexion(){	
		$cn =mysqli_connect('localhost', 'root', '');
		$bd=mysqli_select_db($cn,'bdproductos');
	    return $cn; 
    }
   ?>
</body>
</html>

