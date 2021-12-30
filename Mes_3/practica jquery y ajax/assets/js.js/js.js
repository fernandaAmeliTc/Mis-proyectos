// documentacion de jquery
// https://api.jquery.com/hide/

// FUNCION DE LA  DATA
function showDATA(data){
    let tdM = $("<td>"+data.new_deaths+"</td>");
    let tdCC = $("<td>"+data.new_confirmed+"</td>");
    let tdFecha = $("<td>"+data.updated_at+"</td>");
        $("#table-data").append(tdFecha)
         $("#table-data").append(tdM);
         $("#table-data").append(tdCC);

}

$(document).ready(function(){
    
    // api de json  --- agregando img
    
    for(i=0;i<12;i++){
        
        
        $.ajax({
        type:"GET",
        url:"https://corona-api.com/countries/PE",
        dataType:"json",
        async:true,
        success:function(data){ 
            showDATA(data)
        }
        })
    }
   
    // 


})