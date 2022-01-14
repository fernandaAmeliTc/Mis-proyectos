function sumar() {
    var numero_1 = document.getElementById("numero_1").value;
    var numero_2 = document.getElementById("numero_2").value; 

    var resultado = parseInt(numero_1) + parseInt(numero_2);

    alert("Este es su resultado: " +  resultado);

    if(resultado % 2 === 0){
        alert("el "+resultado+" es par");
    } else{
        alert("el "+resultado+" es impar");

    }

} 

// resta

function resta() {
    var numero_3= document.getElementById("numero_3").value;
    var numero_4 = document.getElementById("numero_4").value; 

    var resultado = parseInt(numero_3) - parseInt(numero_4);

    var resulucion =  parseInt(resultado);

    alert("Este es su resultado: " + resulucion);

    if(resultado % 2 === 0){
        alert("el "+ resulucion+" es par");
    } else{
        alert("el "+ resulucion+" es impar");

    }

} 
// divicion

function dividir() {
    var numero_5= document.getElementById("numero_5").value;
    var numero_6= document.getElementById("numero_6").value; 

    var resultado = parseInt(numero_5) / parseInt(numero_6);

    var resulucion =  parseInt(resultado);

    alert("Este es su resultado: " + resulucion);

    if(resultado % 2 === 0){
        alert("el "+ resulucion+" es par");
    } else{
        alert("el "+ resulucion+" es impar");

    }

} 
// multiplicacion

function multiplicar() {
    var numero_7= document.getElementById("numero_7").value;
    var numero_8= document.getElementById("numero_8").value; 

    var resultado = parseInt(numero_7) * parseInt(numero_8);

    var resulucion =  parseInt(resultado);

    alert("Este es su resultado: " + resulucion);

    if(resultado % 2 === 0){
        alert("el "+ resulucion+" es par");
    } else{
        alert("el "+ resulucion+" es impar");

    }

} 