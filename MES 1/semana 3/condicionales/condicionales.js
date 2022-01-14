function idega(){
    var d =  document ;
    var age = d.getElementById("edad").value;

    // if (edad < 18) {
    //     alert("Eres menor de edad")
    // } else if(edad >= 18 & edad < 30){
    //     alert("Eres mayor de edad")
    // }
    // else {
    //     alert("eres un viejito")
    // }

    // if (age < 6) {
    //     alert("estas en la infancia")
    // } else if(age < 12) {
    //     alert("estas en la niñes")
        
    // }  else if(age < 18) {
    //     alert("estas en la adolecencia")
        
    // } else if(age < 30) {
    //     alert("estas en la juventud")
        
    // } else if(age < 65) {
    //     alert("estas en la adultes")
        
    // }else{
    //     alert("eres ancianito")
    // }

    // DINAMICA

    if (age < 21) {
        if( age < 11){
            alert("tocar la cabeza")
        }else if(age < 16){
            alert( "tocar la nariz")
        }
        else{ alert("tocar el cachete")}
    
    } else {
        alert("mueca")
    }
    // var x = 2; if (x % 2 == 0) { alert('even'); } else { alert('odd') }
    // Si (num % 3) === 0 Entonces

}