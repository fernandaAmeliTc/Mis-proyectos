let d = document;
d.getElementById("btn-empezar").addEventListener("click",()=>{
    var num_min = parseInt(document.getElementById("min-num").value );
    var num_max = parseInt(document.getElementById("max-num").value);
    var r = parseInt(document.getElementById("razon").value);
    // ciclo for
    // for (i = parceInt(num_min) ; i <= parceInt(num_max) ; i=+ parceInt(r)){ 
    //     alert(i);
    // } 

    // while
    while (num_min <= num_max){
            alert(num_min);
            break;
    }

}) 
