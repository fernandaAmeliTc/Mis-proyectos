
//Array
var names = ["Julia","Martin","Miguel","Sofia","maartinademivida"];
var content = document.getElementById("array-content");
var newContent=document.getElementById("new-arrays-content");
var resutContent = document.getElementById("result-content");
//  Mostrar datos de el array
showData(names,content);
showData(names,newContent);
// variables---input--- esto e coloca en la funcion
// let inputString = document.getElementById("ip-search").value;
// let inputInt = document.getElementById("ip-index").value;
//Varaibles de botones
let btnPush = document.getElementById("btn-Push");
let btnPop = document.getElementById("btn-Pop");
let btnUnShift = document.getElementById("btn-unshift");
let btnShift = document.getElementById("btn-shift");
let btnSlice= document.getElementById("btn-slice");
let btnConcat= document.getElementById("btn-concat");
let btnSplice= document.getElementById("btn-splice");

// -----------------------------------
let btnIndexOf= document.getElementById("btn-Indexof");
let btnLastindexOf= document.getElementById("btn-Lastindexof");
let btnIncludes= document.getElementById("btn-Includes");
let btnFind= document.getElementById("btn-Find");
let btnFindindex= document.getElementById("btn-FindIndex");
let btnFilter= document.getElementById("btn-Filter");



//Anclar funciones a los botones
btnPush.onclick = fPush;
btnPop.onclick = fPop;
btnShift.onclick=Fshift;
btnUnShift.onclick=FUnshift;
btnSlice.onclick=fSlice;
btnConcat.onclick=fConcat;
btnSplice.onclick=fSplice;
btnIndexOf.onclick=fIndexof;
btnLastindexOf.onclick=fLastindexof;
btnIncludes.onclick=fIncludes;  
btnFind.onclick=fFind;
btnFindindex.onclick=fFindindex;
btnFilter.onclick=fFilter;
//Funciones

function fPush(e){
    names.push("marge");
    showData(names,content);
}

function fPop(e){
    names.pop();
    showData(names,content);
    console.log(names)
}
function FUnshift(){
    names.unshift("mateoo")
    showData(names,content);
}
function Fshift(e){
    names.shift();
    showData(names,content);
}
function fSlice(e){
     b= 0;
     e= 4;
    newArray = names.slice(b,e);
    showData(newArray,newContent);
}
function fConcat(){
    colorsArray=["amarillo","azul","rasado","verde"]
    concat=names.concat(colorsArray);
    showData(concat,newContent)
}
function fSplice(e){
    b=2;
    c=0;
    newString="juanito";
    names.splice(b,c,newString);
    showData(names,newContent)
}
function fIndexof(){
    let inputString = document.getElementById("ip-search").value;
    let i=names.indexOf(inputString);
    let mensaje="el index de este item es:"+i;
    resutContent.innerHTML="<span>"+mensaje+'</span>';
}
function fLastindexof(){
    let inputString = document.getElementById("ip-search").value;
    let i=names.lastIndexOf(inputString);
    let mensaje="este es el ultimo:"+i;
    resutContent.innerHTML="<span>"+mensaje+'</span>';
}
// funcion con parametros
function fIncludes(){
    let inputString = document.getElementById("ip-search").value;
    let inputInt = document.getElementById("ip-index").value;
    let numbers=0;
    if(inputInt!=" "){
        numbers=parseInt(inputInt);
    }
    let i=names.includes(inputString,numbers);
    let mensaje="Este mensaje no see encuentra:";
    if(i){
        mensaje="Este mensaje si see encuentra:";
    }
    resutContent.innerHTML="<span>"+mensaje+'</span>';
}
function fFind(){
     let inputInt = document.getElementById("ip-index").value;
    let numbers=0;
    if(inputInt!=" "){
        numbers=parseInt(inputInt);
    }
    let mensaje = "ningunos de los elementos cumple"
    let s=names.find(Element => Element.length > numbers);
    if(s!=null){
        mensaje="El primer elemento encontrado fue:"+s;
    }


    resutContent.innerHTML="<span>"+mensaje+'</span>';
}
function fFindindex(){
    let inputInt = document.getElementById("ip-index").value;
    let numbers=0;
   if(inputInt!=" "){
       numbers=parseInt(inputInt);
   }
   
   let s=names.findIndex(Element => Element.length > numbers);

       mensaje="El primer elemento encontrado fue:"+s;


   resutContent.innerHTML="<span>"+mensaje+'</span>';
}
function fFilter(){
    let inputInt = document.getElementById("ip-index").value;
   let numbers=0;
   if(inputInt!=" "){
       numbers=parseInt(inputInt);
   }
   let s=names.filter(element => element.length > numbers);
   let mensaje = "ningunos de los elementos cumple"
   if(s.length>0){
       showData(s,resutContent)
   }else{
       resutContent.innerHTML=mensaje;
   }


   
}


function showData(array,div){
    let lst="";
    
    for(i=0;i < array.length;i++){
        lst += "<p class='item'>"+array[i]+"</p>";
    }
    div.innerHTML=lst;
}

// "push" es para agregar al final
// "pop" para quitar al final
// "unshift" es para agregar al comienzo
// "shift" es para quitar al comienzo