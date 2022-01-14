// kdramas 

document.getElementById("kdramas").addEventListener("click",function(){
    document.getElementById("opciones").style.display = "none";
    document.getElementById("kdramas_1").style.display = "block";

})
// kdrama 1 correcta
document.getElementById("kdramas_1(1)").addEventListener("click",function(){
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
    
    document.getElementById("kdramas_1").style.display = "none";
    document.getElementById("kdramas_2").style.display = "block";

})
// afirmacion incorrecta kdrama 1.1
document.getElementById("kdramas_1(0)").addEventListener("click",function(){
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
    
    document.getElementById("kdramas_1").style.display = "none";
    document.getElementById("kdramas_2").style.display = "block";

})
document.getElementById("kdramas_1(0.1)").addEventListener("click",function(){
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
    
    document.getElementById("kdramas_1").style.display = "none";
    document.getElementById("kdramas_2").style.display = "block";

})
// kdrama 2 correcta----------------------------------------------
document.getElementById("kdramas_2(1)").addEventListener("click",function(){
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
    
    document.getElementById("kdramas_2").style.display = "none";
    document.getElementById("kdramas_3").style.display = "block";

})
// afirmacion incorrecta series 2.1
document.getElementById("kdramas_2(0)").addEventListener("click",function(){
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
    
    document.getElementById("kdramas_2").style.display = "none";
    document.getElementById("kdramas_3").style.display = "block";

})
document.getElementById("kdramas_2(0.1)").addEventListener("click",function(){
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
    
    document.getElementById("kdramas_2").style.display = "none";
    document.getElementById("kdramas_3").style.display = "block";

})
// kdrama 3 correcta-----------------------------------------------------
document.getElementById("kdramas_3(1)").addEventListener("click",function(){
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
    
    document.getElementById("kdramas_3").style.display = "none";
    document.getElementById("kdramas_4").style.display = "block";

})
// afirmacion incorrecta kdrama 3
document.getElementById("kdramas_3(0)").addEventListener("click",function(){
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
    
    document.getElementById("kdramas_3").style.display = "none";
    document.getElementById("kdramas_4").style.display = "block";

})
document.getElementById("kdramas_3(0.1)").addEventListener("click",function(){
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
    
    document.getElementById("kdramas_3").style.display = "none";
    document.getElementById("kdramas_4").style.display = "block";

})
// kdrama 4 correcta-----------------------------------------------------
document.getElementById("kdramas_4(1)").addEventListener("click",function(){
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
    
    document.getElementById("kdramas_4").style.display = "none";
    document.getElementById("puntajes_todo").style.display = "block";

})
// afirmacion incorrecta series 4
document.getElementById("kdramas_4(0)").addEventListener("click",function(){
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
    
    document.getElementById("kdramas_4").style.display = "none";
    document.getElementById("puntajes_todo").style.display = "block";

})
document.getElementById("kdramas_4(0.1)").addEventListener("click",function(){
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
    
    document.getElementById("kdramas_4").style.display = "none";
    document.getElementById("puntajes_todo").style.display = "block";

})