function showText(){
var mainText = 'El texto que has colocado es: \n ';

var inputText = ' \" ' + document.getElementById("texto_1").value + '\"';
var result = mainText + inputText;
alert(result);
}

function lengthText(){
    var mainText = 'El texto tiene:\n ';
    var inputText = ' \" ' + document.getElementById("texto_1").value + '\"';
    var textLength = inputText.length ;
    var result = mainText + textLength + " caracteres ";
    alert(result);
} 

function mayuscula(){
    var inputText =  document.getElementById("texto_1").value ;
    var mayusculasUpper = inputText.toUpperCase();
    alert(mayusculasUpper);
}

function minuscula(){
    var inputText =  document.getElementById("texto_1").value ;
    var minusculaLower = inputText.toLowerCase();
    alert(minusculaLower);
}



function cortadoDePalabras(){
    var inputText =  document.getElementById("texto_1").value ;
    var numero1 =  document.getElementById("texto_2").value ;
    var numero2 =  document.getElementById("texto_3").value ;
    var slice = inputText.slice(numero1,numero2);
    alert(slice);
}