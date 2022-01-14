document.getElementById("btn-cambiar").addEventListener("click",function(){
    var mensaje = document.getElementById("msj").value;
    var codigosNew = [];
    var nuevoMsj="";
    for(i=0;i<mensaje.length;i++){
        var codMsj = mensaje[i].charCodeAt();
        var codNew = codMsj + 1;
        codigosNew.push(codNew);
        nuevoMsj += String.fromCharCode(codNew);
    
    }
    document.getElementById("new_msj").innerHTML = nuevoMsj
})


// codigo de el profesor
//Evento de click en el boton con el id 'btn-cambiar'
// document.getElementById("btn-cambiar").addEventListener("click",function(){
//     Variable para guardar el valor del input
//     var mensaje = document.getElementById("msj").value;
//     //Arreglo vacío para los nuevas códigos
//     var codigosNuevos = [];
//     //Creamos una variable para el nuevo mensaje
//     var nuevoMensaje = "";
//     //Bucle para recorrer las letras de la palabra
// for(i=0;i<mensaje.length ;i++){
//         //Variable para guardar el número de la posición de la letra del mensaje
//         var codMsj = mensaje[i].charCodeAt();
//         //Variable para obtener el nuevo código de mi nueva letra
//         var codNuevo = codMsj + 2;
//         //Agregar el nuevo codigo al arreglo
//         codigosNuevos.push(codNuevo);
//         //Concatenar las nuevas letras en un solo string, la variable nuevoMensaje
//         nuevoMensaje += String.fromCharCode(codNuevo);
//     }
//     //Colocar mensaje final en la etiqueta span
//     document.getElementById("new_msj").innerHTML = nuevoMensaje;
// })
