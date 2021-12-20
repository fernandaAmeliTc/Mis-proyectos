// documentacion de jquery
// https://api.jquery.com/hide/

// FUNCION DE LA  DATA
function showDATA(data){
    let img = $("<img></img>");
    let div = $("<div></div>");
    let h3 = $("<h3>"+data.author+"</h3>");
        img.attr("src",data.download_url);
        $(div).append(img)
         $(div).append(h3);
         $("#gallery").append(div);
        $(div).addClass("items-g");

}

$(document).ready(function(){
    // ocultar en jquery .hide()

    $("#hidden-btn").click(function(){
        $(".parrafo").hide("slow")
    })

    // mostar con jquery .show()

    $("#show-btn").click(function(){
        $(".parrafo").show("slow")
    })

    // crear parrafo

    $("#btn-create-span").click(function(){
        
        for(i=0;i<3;i++){
        let span="<span>hola bebe</span>";
        $(".content-span").append(span);
        $("span").addClass("create-span");
        }
    })
    // api de json  --- agregando img
    
    for(i=0;i<12;i++){
        
        let number =Math.round(Math.random()*220) ;
        console.log(number)
        $.ajax({
        type:"GET",
        url:"https://picsum.photos/id/"+number+"/info",
        dataType:"json",
        async:true,
        success:function(data){ 
            showDATA(data)
        }
        })
    }
   
    // 


})
