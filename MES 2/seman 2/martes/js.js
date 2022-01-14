
function operarSimbolos(pSignos){
    var num1=parseInt(document.getElementById("num1").value);
    var num2=parseInt(document.getElementById("num2").value);

    if(pSignos=="+"){
        return num1+num2;
    }
    if(pSignos=="-"){
        return num1-num2;
        
    }
    if(pSignos=="/"){
        return num1/num2;
        
    }
    if(pSignos=="*"){
        return num1*num2;
        
    }

    else{
        return "signo invalido"
    }
}


var sumar=document.getElementById("sumar").addEventListener("click",()=>{
    let result=operarSimbolos("+");
    document.getElementById("resultado").innerHTML = result ;
});
var restar=document.getElementById("restar").addEventListener("click",()=>{
    let result=operarSimbolos("-");
    document.getElementById("resultado").innerHTML = result ;
});
var multiplicar=document.getElementById("multiplicacion").addEventListener("click",()=>{
    let result=operarSimbolos("*");
    document.getElementById("resultado").innerHTML = result ;
});
var divicion=document.getElementById("divicion").addEventListener("click",()=>{
    let result=operarSimbolos("/");
    document.getElementById("resultado").innerHTML = result ;
});

