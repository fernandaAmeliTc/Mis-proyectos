
// Declaración de preguntas
var preguntas = ["¿Con qué frecuencia realizas deporte? Considera como deporte cualquier actividad que acelere tu ritmo cardiaco, como caminar rápido, andar en bicicleta, bailar o, por supuesto, practicar un deporte.",
"¿Cuántos vasos de agua (200mL) bebes al día? No consideres la ingesta de otros líquidos, como gaseosas, jugos azucarados o alcohol.",
"¿Cuántas porciones de frutas y verduras consumes diariamente?",
"¿Cuándo fue la última vez que fuiste al médico y/o te realizaste un chequeo general? No consideres visitas por situaciones muy específicas en las que no se revisó tu estado general de salud ni siquiera de manera visual, como por ejemplo en caso de una lesión.",
"Piensa en lo que sueles comer día a día. ¿Qué tipo de alimentos es el más frecuente en tu dieta?",
"¿Existen antecedentes de enfermedades crónicas en tu familia?.<br>Se considera como enfermedad crónica aquella que dura 3 ó más meses y que, posiblemente, empeore con el tiempo. Ejemplos: cáncer, diabetes, hipertensión, cardiopatías, accidentes cerebrovasculares."];

// Declaración de opciones, cada elemento de la lista (que a su vez es una lista)
// corresponde a las posibles respuestas de una pregunta.
// Se mantiene el orden de la lista de preguntas.
var opciones = [["3 ó más veces por semana",
"Entre 1 y 2 veces a la semana",
"Al menos 4 veces al mes",
"2 a 3 veces al mes",
"1 vez al mes ó menos"
],["Al menos 8 vasos al día",
"Entre 5 y 8, depende del día",
"Cuando me acuerdo",
"Solo si tengo sed",
"No me gusta el agua, prefiero la gaseosa"
],["5 ó más",
"2 a 4",
"Al menos 1 vez al día",
"Depende del día",
"Solo si me obligan"
],["Hace menos de un mes",
"Entre 1 y 3 meses atrás", 
"Estoy segura que fui al menos una vez en los últimos 12 meses", 
"Solo voy si hay algún hueso expuesto",
"Nunca me enfermo, no necesito ir al médico"
],["Harinas y cereales",
"Proteína de origen animal (carnes rojas, blancas o pescado)",
"Aceites y grasas",
"Ensaladas de verduras y/o frutas",
"Proteínas de origen vegetal (legumbres)"
],["Sí, ambos padres padecen enfermedades crónicas",
"Sí, uno de mis padres padece de una o más enfermedades crónicas",
"Sí, al menos uno de mis hermanos",
"Sí, pero es un tío y/o abuelo",
"No que yo sepa"]];

//puntajes de cada preguntas segun las opciones
var puntajesPorOpcion = [
    [5,4,3,2,1],
    [5,4,3,2,1],
    [5,4,3,2,1],
    [5,4,3,2,1],
    [5,4,3,2,1],
    [5,4,3,2,1]];

// Acá se define el despliegue de las preguntas y se almacenan los puntajes
var puntaje = 0
var indexPregunta = 0

// Despliegue de los resultados
function mostrarResultados(){

    //Variable para obtener el elemento div
    var div = document.getElementsByClassName("card")[0];
    
    //Vaciar elemento
    div.innerHTML = "";

    //Actualizar barra de proceso
    var barra = document.getElementById("barra-progreso").value = (indexPregunta * 100)/(preguntas.length-1);

    //Añadir h3 para el puntaje
    div.innerHTML += "<h3 class='pregunta_nombre'>PREGUNTA</h3>";

    //Obtener estilo de vida dependiendo del puntaje
    var estiloDeVida = "";

    if(puntaje >30){
        estiloDeVida = "<span id='estilo-excelente'>EXCELENTE</span>";
    }

    else if(puntaje > 25){
        estiloDeVida = "<span id='estilo-bueno'>BUENO</span>";
    }

    else if(puntaje > 20){
        estiloDeVida = "<span id='estilo-aceptable'>ACEPTABLE</span>";
    }

    else if(puntaje > 10){
        estiloDeVida = "<span id='estilo-regular'>REGULAR</span>";
    }
    else{
        estiloDeVida = "<span id='estilo-malo'>MALO</span>";
    }

    //Añadir un elemento HTML para la descripcion del resultado
    div.innerHTML +=`<p class="resultado_obtenido">Has obtenido ${puntaje} puntos. Entonces tu estilo de vida es ${estiloDeVida}.</p>`;
}

//Actualización de puntaje
function actualizarPuntaje(opcion){
    var indice = opcion -1

    puntaje += puntajesPorOpcion[indexPregunta][indice];
    indexPregunta++; //Aumenta la variable de uno en uno

    if(indexPregunta < preguntas.length){
        siguientePregunta();   
    }
    else{
        mostrarResultados();
    }
}

//Funcion para pasar siguiente pregunta
function siguientePregunta(){
    document.getElementById("pregunta").innerHTML = preguntas[indexPregunta];

    document.getElementById("op1").innerHTML = opciones[indexPregunta][0];
    document.getElementById("op2").innerHTML = opciones[indexPregunta][1];
    document.getElementById("op3").innerHTML = opciones[indexPregunta][2];
    document.getElementById("op4").innerHTML = opciones[indexPregunta][3];
    document.getElementById("op5").innerHTML = opciones[indexPregunta][4];

    document.getElementById("barra-progreso").value = indexPregunta * 100 / preguntas.length;

}

siguientePregunta(); //Se ejecuta al cargar la pagina por primera vez

document.getElementById("op1").addEventListener("click", function(){
    actualizarPuntaje(1);
});

document.getElementById("op2").addEventListener("click", function(){
    actualizarPuntaje(2);
});

document.getElementById("op3").addEventListener("click", function(){
    actualizarPuntaje(3);
});

document.getElementById("op4").addEventListener("click", function(){
    actualizarPuntaje(4);
});

document.getElementById("op5").addEventListener("click", function(){
    actualizarPuntaje(5);
});

    //Eventos onClick de cada boton
