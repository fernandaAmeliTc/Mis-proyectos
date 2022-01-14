function  condicional(){
    var number = document.getElementById("number").value ;
    var numero = parseInt(number);
    
    if(numero % 2 === 0){
        alert("es divicible por 2")
    }

    if (numero % 3 === 0 ){
        alert("es divicible por 3")
    }
    if (numero % 3 === 0 & numero % 2 === 0 ){
        alert("es divicible por 6")
    }

    if (numero % 3 !== 0 & numero % 2 !== 0 ){
        alert("no es divicible por 2 , 3 y 6")
    }


}