// declaracion de variables

// DNI:nombre,apellido M , apellido P , fecha de nacimienti , dirrecion ,Fecha de emision , fecha de caducidad , firma , foto , numero de DNI

// variables de un partido de voley

// let deporte = "Boley";
// let equipos = ["equipo1", "equipo2"];
// let contadorDePenalidades = 0;
// let contadorDePuntos=0;
// let ganador = equipos[0]

$(document).ready(function(){
    $("btn-ingresar").click(function(){
        var correo = $("#mail").val();
        var clave = $("#pass").val();
        if(correo=="ctc@gmail.com"& clave == "1234"){
            alert("Datos correctos")
            // llevar al usuario a la web
        }else{
            alert("Datos Incorrectos")
            // popup de para avisar
        }
    })
})

