function caso(n) {


    switch (n) {
        case "1" :
            alert("Equipo 1");
            break;
        case "2" :
            alert("Equipo 2");
            break;
        case "3" :
            alert("Equipo 3");
            break;
        case "1" :
            alert("Equipo 4");
            break;
        
        default:
            alert("ese no es un equipo");
            break;

        }


}
document.getElementById("btn2").addEventListener("click", function() {
    var inputEquipo = document.getElementById("case").value ;
    caso(inputEquipo);
})
//  ocultar 

document.getElementById("btnHide").addEventListener("click", function() {
    // document.getElementById("content").style.visibility = "hidden" ;
    document.querySelector("cont_punt").style.display = "none";

})
// mostrar
document.getElementById("btnShow").addEventListener("click", function() {
    // document.getElementById("content").style.visibility = "visible" ;
    document.getElementById("content").style.display = "block";
    

})