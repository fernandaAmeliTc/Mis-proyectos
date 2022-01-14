function mostrarvalores(){
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var birthay = document.getElementById("birthay").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var color = document.getElementById("color").value ;
    var numero = document.getElementById("numero").value ;
    var contra = document.getElementById("contra").value ;
    var numero = document.getElementById("numero").value ;

    var mensaje1 = "Nombre: "+nombre;
    var mensaje2 = "Email: "+email; 
    var mensaje3 = "Birthay: "+birthay;
    var mensaje4 = "Phonenumber: "+phonenumber;
    var mensaje5 = "Color: "+color;
    var mensaje6 = "Digitos de su tarjeta: "+contra + " no se utilizaran para nada ilisito xdd";
    var mensaje7 = "Su numero favorito es: "+numero;
    var gracias = "Gracias por participar ╰(*°▽°*)╯ humano " + nombre ;

    /*Esto pinta la consola con el valor de la variable console.log(mensaje);*/
    //esto es un comentario de una sola linea 

    alert(mensaje1);
    alert(mensaje2);
    alert(mensaje3);
    alert(mensaje4);
    alert(mensaje5);
    alert(mensaje6);
    alert(mensaje7);
    alert(gracias);
}