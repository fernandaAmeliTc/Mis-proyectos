
// series 
document.getElementById("series").addEventListener("click",function(){
    document.getElementById("opciones").style.display = "none";
    document.getElementById("series_1").style.display = "block";

})
// afirmacion correcta - series 1
document.getElementById("series_1(1)").addEventListener("click",function(){
    Swal.fire({
        title:'CORRECTO',
        text:'+ 1 punto',
        icon:'success',
        background:"#fff",
        // color de fondo de la ventana[abajo]
        backdrop:true,
        timer:8000,
        // tiempo de ventana [abajo]
        timerProgressBar: true,
        allowOutsideClick:false,
        confirmButtonColor:'#fe1e74',

    });
    
    document.getElementById("series_1").style.display = "none";
    document.getElementById("series_2").style.display = "block";

})
// afirmacion incorrecta series 1
document.getElementById("series_1(0)").addEventListener("click",function(){
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
    
    document.getElementById("series_1").style.display = "none";
    document.getElementById("series_2").style.display = "block";

})
document.getElementById("series_1(0.1)").addEventListener("click",function(){
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
    
    document.getElementById("series_1").style.display = "none";
    document.getElementById("series_2").style.display = "block";

})
// series 2
// afirmacion correcta - series 2
document.getElementById("series_2(1)").addEventListener("click",function(){
    Swal.fire({
        title:'CORRECTO',
        text:'+ 1 punto',
        icon:'success',
        background:"#fff",
        // color de fondo de la ventana[abajo]
        backdrop:true,
        timer:8000,
        // tiempo de ventana [abajo]
        timerProgressBar: true,
        // no permitir click afuera
        allowOutsideClick:false,
    
        // showConfirmButton:
        confirmButtonColor:'#fe1e74',

    });
    
    document.getElementById("series_2").style.display = "none";
    document.getElementById("series_3").style.display = "block";

})
// afirmacion incorrecta series 2.1
document.getElementById("series_2(0)").addEventListener("click",function(){
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
    
    document.getElementById("series_2").style.display = "none";
    document.getElementById("series_3").style.display = "block";

})
document.getElementById("series_2(0.1)").addEventListener("click",function(){
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
    
    document.getElementById("series_2").style.display = "none";
    document.getElementById("series_3").style.display = "block";

})
// series 3
// afirmacion correcta - series 3
document.getElementById("series_3(1)").addEventListener("click",function(){
    Swal.fire({
        title:'CORRECTO',
        text:'+ 1 punto',
        icon:'success',
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
    
    document.getElementById("series_3").style.display = "none";
    document.getElementById("series_4").style.display = "block";

})
// afirmacion incorrecta series 3.1
document.getElementById("series_3(0)").addEventListener("click",function(){
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
    
    document.getElementById("series_3").style.display = "none";
    document.getElementById("series_4").style.display = "block";

})
document.getElementById("series_3(0.1)").addEventListener("click",function(){
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
    
    document.getElementById("series_3").style.display = "none";
    document.getElementById("series_4").style.display = "block";

})
// series 4 
// afirmacion correcta - series 4
document.getElementById("series_4(1)").addEventListener("click",function(){
    Swal.fire({
        title:'CORRECTO',
        text:'+ 1 punto',
        icon:'success',
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
    
    document.getElementById("series_4").style.display = "none";
    document.getElementById("puntajes_todo").style.display = "block";

})
// afirmacion incorrecta series 4.1
document.getElementById("series_4(0)").addEventListener("click",function(){
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
    
    document.getElementById("series_4").style.display = "none";
    document.getElementById("puntajes_todo").style.display = "block";

})
document.getElementById("series_4(0.1)").addEventListener("click",function(){
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
    
    document.getElementById("series_4").style.display = "none";
    document.getElementById("puntajes_todo").style.display = "block";


})
