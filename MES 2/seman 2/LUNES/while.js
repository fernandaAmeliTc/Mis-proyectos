// var btn=document.getElementById("btn-empezar").addEventListener("click",()=>{
    // impares
function impares(){
    alert("Los numeros impares")
        for(var numero=1 ;numero<=11;numero++  ){
            if(numero % 2 !== 0 )alert(numero);
        }
    }
    

//pares e impares
function pares_impares(){
    alert("Los numeros impares y numeros pares")
    for(var e=1 ; e<=12 ; e++  ){
        alert(e);
    }
}
// este sirve para recorrer variables las veces que quieras en ewste caso 3

function btn_paises(){
    var paises = ["perú","chile","venezuela","bolivia","ecuador"];
    var i = 0 ;
    var t = 0 ;
    while(i<paises.length & t < 3){
        alert(paises[i] );
        i++;
        if(i==paises.length){
            i=0;
            t++;
        }
    }
    // asi se recorre un arreglo
    // var paise = ["perú","chile","venezuela","bolivia","ecuador"];
    // var e = 0 ;
    // while(e<paise.length){
    //     alert(paise[e] );
    //     e++;
    // }
    
}