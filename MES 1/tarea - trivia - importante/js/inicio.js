let d = document;

function enviar(){
var usuario = d.getElementById("name").value ;
    if(usuario.length=== 0){ 
        var usuario = "desconocido";
        // alert("usted no ha colocado su usuario se le dira: " + usuario)
        Swal.fire({
            text:"usted no ha colocado su usuario se le dira: " + usuario,
            background:"#fff",
            // color de fondo de la ventana[abajo]
            backdrop:true,
            timer:8000,
            // tiempo de ventana [abajo]
            timerProgressBar: true,
            allowOutsideClick:false,
    
            confirmButtonColor:'#fe1e74',
    
        });
    // alert("usted es: " +usuario);    
    }
let use2 = usuario;
d.getElementById("use").innerHTML = usuario;      

}




// contador de puntos

let contador = 0;
const valor = document.querySelector('#punt');
const botones = document.querySelectorAll('.but')

botones.forEach(boton => {
    boton.addEventListener('click', function(e) {

    const estilos = e.currentTarget.classList;

    if(estilos.contains('series(0)')) {
        contador--;
        d.getElementById("punt_10").innerHTML = contador;
    }
    else if(estilos.contains('series(1)')) {
        contador++;
        d.getElementById("punt_10").innerHTML = contador;
    }
    else {
        contador = 0;
    }
        valor.textContent = contador;

      // vamos a cambiar los colores 

        if(contador > 0) {
        valor.style.color = '#51e723';

        }
        if(contador < 0) {
        valor.style.color = '#c83c3c';

        }
    })
})



// boton de inicio
document.getElementById("button").addEventListener("click",function(){
    document.getElementById("inicio").style.display = "none";
    document.getElementById("opciones").style.display = "block";

})




// puntos y usuario --- cerrado 
// ocultar
document.getElementById("btnHide").addEventListener("click", function() {
    document.getElementById("cont_punt").style.display = "none";
    document.getElementById("body").style.display = "block";
})

// mostrar
document.getElementById("btnShow").addEventListener("click", function() {
    document.getElementById("cont_punt").style.display = "block";
    document.getElementById("body").style.display = "flex";
})
// ----redirecciones-----
// inicio y opciones
document.getElementById("inicio_1").addEventListener("click",function(){
    document.getElementById("puntajes_todo").style.display = "none";
    document.getElementById("inicio").style.display = "block";
    location.reload();

})
document.getElementById("opciones_1").addEventListener("click",function(){
    document.getElementById("puntajes_todo").style.display = "none";
    document.getElementById("opciones").style.display = "block";
    


})
// cronometro no funcional
// let cronometro = document.getElementById("cronometro");
// setInterval(updatecuntdown(), 5000);
// function updatecuntdown() {
//     // cronometro.innerHTML=
// }
w