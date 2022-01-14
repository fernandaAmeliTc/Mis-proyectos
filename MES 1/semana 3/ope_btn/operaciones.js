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
    var numero_1= document.getElementById("numero_1").value;
    var numero_2 = document.getElementById("numero_2").value; 

    var resultado = parseInt(numero_1) - parseInt(numero_2);

    var resulucion =  parseInt(resultado);

    alert("Este es su resultado: " + resulucion);
    // funcion.....
    resultado % 2 === 0 ? alert("el "+ resulucion+" es par") : alert("el "+ resulucion+" es impar");
    

} 
// divicion

function dividir() {
    var numero_1= document.getElementById("numero_1").value;
    var numero_2= document.getElementById("numero_2").value; 

    var resultado = parseInt(numero_1) / parseInt(numero_2);

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
    var numero_1= document.getElementById("numero_1").value;
    var numero_2= document.getElementById("numero_2").value; 

    var resultado = parseInt(numero_1) * parseInt(numero_2);

    var resulucion =  parseInt(resultado);

    alert("Este es su resultado: " + resulucion);

    if(resultado % 2 === 0){
        alert("el "+ resulucion+" es par");
    } else{
        alert("el "+ resulucion+" es impar");

    }

} 