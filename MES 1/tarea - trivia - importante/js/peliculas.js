//  peliculas
document.getElementById("peliculas").addEventListener("click",function(){
    document.getElementById("opciones").style.display = "none";
    document.getElementById("peliculas_1").style.display = "block";

})

// pelicula 1 correcta-----------------------------------------------------
document.getElementById("peliculas_1(1)").addEventListener("click",function(){
    Swal.fire({
        title:'CORRECTO',
        text:'+ 1 punto',
        icon:'success',
        background:"#fff",
        backdrop:true,
        timer:8000,
        timerProgressBar: true,
        allowOutsideClick:false,
        
        confirmButtonColor:'#fe1e74',

    });
    
    document.getElementById("peliculas_1").style.display = "none";
    document.getElementById("peliculas_2").style.display = "block";

})
// afirmacion incorrecta peliculas 1 _ 0
document.getElementById("peliculas_1(0)").addEventListener("click",function(){
    Swal.fire({
        title:'TE EQUIVOCASTE',
        text:'perderas 1 punto',
        icon:'error',
        background:"#fff",
        // color de fondo de la ventana[abajo]
        backdrop:true,
        timer:8000,
        // tiempo de ventana [abajo]
        timerProgressBar: true,
        // no permitir click afuera
        allowOutsideClick:false,
        confirmButtonColor:'#fe1e74',

    });
    
    document.getElementById("peliculas_1").style.display = "none";
    document.getElementById("peliculas_2").style.display = "block";

})
// afirmacion incorrecta peliculas 1 _ 0.1

document.getElementById("peliculas_1(0.1)").addEventListener("click",function(){
    Swal.fire({
        title:'TE EQUIVOCASTE',
        text:'perderas 1 punto',
        icon:'error',
        background:"#fff",
        // color de fondo de la ventana[abajo]
        backdrop:true,
        timer:8000,
        // tiempo de ventana [abajo]
        timerProgressBar: true,
        allowOutsideClick:false,

        confirmButtonColor:'#fe1e74',

    });
    
    document.getElementById("peliculas_1").style.display = "none";
    document.getElementById("peliculas_2").style.display = "block";

})
// series 2 correcta-----------------------------------------------------
document.getElementById("peliculas_2(1)").addEventListener("click",function(){
    Swal.fire({
        title:'CORRECTO',
        text:'+ 1 punto',
        icon:'success',
        background:"#fff",
        backdrop:true,
        timer:8000,
        timerProgressBar: true,
        allowOutsideClick:false,
        
        confirmButtonColor:'#fe1e74',

    });
    
    document.getElementById("peliculas_2").style.display = "none";
    document.getElementById("peliculas_3").style.display = "block";

})
// afirmacion incorrecta peliculas 2 _ 0
document.getElementById("peliculas_2(0)").addEventListener("click",function(){
    Swal.fire({
        title:'TE EQUIVOCASTE',
        text:'perderas 1 punto',
        icon:'error',
        background:"#fff",
        // color de fondo de la ventana[abajo]
        backdrop:true,
        timer:8000,
        // tiempo de ventana [abajo]
        timerProgressBar: true,
        // no permitir click afuera
        allowOutsideClick:false,
        confirmButtonColor:'#fe1e74',

    });
    
    document.getElementById("peliculas_2").style.display = "none";
    document.getElementById("peliculas_3").style.display = "block";

})
// afirmacion incorrecta peliculas 2 _ 0.1

document.getElementById("peliculas_2(0.1)").addEventListener("click",function(){
    Swal.fire({
        title:'TE EQUIVOCASTE',
        text:'perderas 1 punto',
        icon:'error',
        background:"#fff",
        // color de fondo de la ventana[abajo]
        backdrop:true,
        timer:8000,
        // tiempo de ventana [abajo]
        timerProgressBar: true,
        allowOutsideClick:false,

        confirmButtonColor:'#fe1e74',

    });
    
    document.getElementById("peliculas_2").style.display = "none";
    document.getElementById("peliculas_3").style.display = "block";

})


// speliculas 3 correcta-----------------------------------------------------
document.getElementById("peliculas_3(1)").addEventListener("click",function(){
    Swal.fire({
        title:'CORRECTO',
        text:'+ 1 punto',
        icon:'success',
        background:"#fff",
        backdrop:true,
        timer:8000,
        timerProgressBar: true,
        allowOutsideClick:false,
        
        confirmButtonColor:'#fe1e74',

    });
    
    document.getElementById("peliculas_3").style.display = "none";
    document.getElementById("peliculas_4").style.display = "block";

})
// afirmacion incorrecta peliculas 3 _ 0
document.getElementById("peliculas_3(0)").addEventListener("click",function(){
    Swal.fire({
        title:'TE EQUIVOCASTE',
        text:'perderas 1 punto',
        icon:'error',
        background:"#fff",
        // color de fondo de la ventana[abajo]
        backdrop:true,
        timer:8000,
        // tiempo de ventana [abajo]
        timerProgressBar: true,
        // no permitir click afuera
        allowOutsideClick:false,
        confirmButtonColor:'#fe1e74',

    });
    
    document.getElementById("peliculas_3").style.display = "none";
    document.getElementById("peliculas_4").style.display = "block";

})
// afirmacion incorrecta peliculas 3 _ 0.1

document.getElementById("peliculas_3(0.1)").addEventListener("click",function(){
    Swal.fire({
        title:'TE EQUIVOCASTE',
        text:'perderas 1 punto',
        icon:'error',
        background:"#fff",
        // color de fondo de la ventana[abajo]
        backdrop:true,
        timer:8000,
        // tiempo de ventana [abajo]
        timerProgressBar: true,
        allowOutsideClick:false,

        confirmButtonColor:'#fe1e74',

    });
    
    document.getElementById("peliculas_3").style.display = "none";
    document.getElementById("peliculas_4").style.display = "block";

})
// pelicula 4 correcta-----------------------------------------------------
document.getElementById("peliculas_4(1)").addEventListener("click",function(){
    Swal.fire({
        title:'CORRECTO',
        text:'+ 1 punto',
        icon:'success',
        background:"#fff",
        backdrop:true,
        timer:8000,
        timerProgressBar: true,
        allowOutsideClick:false,
        
        confirmButtonColor:'#fe1e74',

    });
    
    document.getElementById("peliculas_4").style.display = "none";
    document.getElementById("puntajes_todo").style.display = "block";

})
// afirmacion incorrecta peliculas 4 _ 0
document.getElementById("peliculas_4(0)").addEventListener("click",function(){
    Swal.fire({
        title:'TE EQUIVOCASTE',
        text:'perderas 1 punto',
        icon:'error',
        background:"#fff",
        // color de fondo de la ventana[abajo]
        backdrop:true,
        timer:8000,
        // tiempo de ventana [abajo]
        timerProgressBar: true,
        // no permitir click afuera
        allowOutsideClick:false,
        confirmButtonColor:'#fe1e74',

    });
    
    document.getElementById("peliculas_4").style.display = "none";
    document.getElementById("puntajes_todo").style.display = "block";

})
// afirmacion incorrecta peliculas 4 _ 0.1

document.getElementById("peliculas_4(0.1)").addEventListener("click",function(){
    Swal.fire({
        title:'TE EQUIVOCASTE',
        text:'perderas 1 punto',
        icon:'error',
        background:"#fff",
        // color de fondo de la ventana[abajo]
        backdrop:true,
        timer:8000,
        // tiempo de ventana [abajo]
        timerProgressBar: true,
        allowOutsideClick:false,

        confirmButtonColor:'#fe1e74',

    });
    
    document.getElementById("peliculas_4").style.display = "none";
    document.getElementById("puntajes_todo").style.display = "block";

})
