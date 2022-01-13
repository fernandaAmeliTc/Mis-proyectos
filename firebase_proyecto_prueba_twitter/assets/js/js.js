$(document).ready(function () {
    $("#registro").hide();
    $("#content").hide();

    $("#btn-register").click(function () {
        $("#login-container").hide();
        $("#registro").show();
    })

      // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDQqP4l-WIK4_nIkT1rukw_iS6pVmueavg",
    authDomain: "proyecto-prueba-1e6ba.firebaseapp.com",
    projectId: "proyecto-prueba-1e6ba",
    storageBucket: "proyecto-prueba-1e6ba.appspot.com",
    messagingSenderId: "898796205699",
    appId: "1:898796205699:web:446fd3fd9645137a590db6",
    measurementId: "G-B0E3G1FTD7"
  };


    //Inicializar firebase
    firebase.initializeApp(firebaseConfig);

    //Inicializar servicio de autenticación
    const auth = firebase.auth();

    //Login o inicio de sesión
    $("#btn-login").click(function (e) {
        e.preventDefault();
        //Variables de inputs
        var correo = $("#mail").val();
        var clave = $("#pass").val();
        //Usar servicio de login de firebase
        auth
            .signInWithEmailAndPassword(correo, clave)
            .then(userCredential => {
                Swal.fire({
                    title:'Datos Correctos',
                    text:'Preciones Ok para continuar',
                    background:"#fff",
                    // color de fondo de la ventana[abajo]
                    backdrop:true,
                    timer:8000,
                    // tiempo de ventana [abajo]
                    timerProgressBar: true,
                    allowOutsideClick:false,
                    confirmButtonColor:'#6C63FF',
                });
                
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                alert("Código:" + errorCode + ". Mensaje: " + errorMessage);
            })
    })

    //Singup o crear cuenta    
    $("#btn-singup").click(function (e) {
        e.preventDefault();
        //Variables de inputs
        var correo = $("#mail-new").val();
        var clave = $("#pass-new").val();

        //Usar servicio de firebase para crear cuenta
        auth
            .createUserWithEmailAndPassword(correo, clave)
            .then((userCredential) => {
                $(".container").hide()
                //$("#login-container").show();
                //$("#registro").hide();
                Swal.fire({
                    title:'Cuenta Creada',
                    text:'Ya esta habilitada su cuenta',
                    background:"#fff",
                    // color de fondo de la ventana[abajo]
                    backdrop:true,
                    timer:8000,
                    // tiempo de ventana [abajo]
                    timerProgressBar: true,
                    allowOutsideClick:false,
                    confirmButtonColor:'#6C63FF',
                });
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                Swal.fire({
                    title:'Oh no!!!',
                    text:"recuerda colocar un formato valido de correo y que la contraseña debe tener mas de 6 caracteres",
                    background:"#fff",
                    // color de fondo de la ventana[abajo]
                    backdrop:true,
                    timer:8000,
                    // tiempo de ventana [abajo]
                    timerProgressBar: true,
                    allowOutsideClick:false,
                    confirmButtonColor:'#6C63FF',
                });
            })

    
    
            
    })

    // Desconexion de Usuarios
    // Boton LogOut
    $("#btn-logout").click(function (e) {
        e.preventDefault();
        auth.signOut().then(() => {
            Swal.fire({
                title:'Sesión Cerrada',
                text:'Usted acaba de cerrar sesión',
                background:"#fff",
                // color de fondo de la ventana[abajo]
                backdrop:true,
                timer:8000,
                // tiempo de ventana [abajo]
                timerProgressBar: true,
                allowOutsideClick:false,
                confirmButtonColor:'#6C63FF',
            });
            //$("#content").hide();
            //$("#login-container").show();
        })
    })
    var provider = new firebase.auth.GoogleAuthProvider();
    //Iniciar sesión con Google
    $("#btn-login-google").click(function (e) {
        e.preventDefault();
        auth.signInWithPopup(provider)
            .then(result => {
                Swal.fire({
                    title:'Ingreso con Google',
                    text:'Usted Ingreso con Google',
                    background:"#fff",
                    // color de fondo de la ventana[abajo]
                    backdrop:true,
                    timer:8000,
                    // tiempo de ventana [abajo]
                    timerProgressBar: true,
                    allowOutsideClick:false,
                    confirmButtonColor:'#6C63FF',
                });
            })
            .catch(error => {
                alert(error);
            })
    })
// inciar session con gogle
var provider_fb = new firebase.auth.FacebookAuthProvider();
$("#btn-login-facebook").click(function (e) {
    e.preventDefault();
    auth.signInWithPopup(provider_fb)
        .then(result => {
            Swal.fire({
                title:'Ingreso con Google',
                text:'Usted Ingreso con Google',
                background:"#fff",
                // color de fondo de la ventana[abajo]
                backdrop:true,
                timer:8000,
                // tiempo de ventana [abajo]
                timerProgressBar: true,
                allowOutsideClick:false,
                confirmButtonColor:'#6C63FF',
            });
        })
        .catch(error => {
            alert(error);
        })
})



    auth.onAuthStateChanged((user) => {
        if (user) {
            //Sesión iniciada
            $("#login-container").hide();
            $("#register").hide();
            $("#content").show();
            readPosts();
        }
        else {
            //Sesión finalizada
            $("#content").hide();
            $("#login-container").show();
        }
    })
    const db = firebase.firestore();
    //Publicar un nuevo estado
    $("#btn-publish").click(function(e){
        e.preventDefault();
        let postText = $("#status-text").val();
        let date = new Date();
        db.collection("posts").add({
            post: postText,
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
            fecha :"a las "+ date.getHours() + ': ' + ( date.getMinutes() + 1 ) + ': ' + date.getSeconds(),
        })
        .then((docRef)=>{
            Swal.fire({
                title:'Estado publicado',
                text:'Usted publico un post',
                background:"#fff",
                // color de fondo de la ventana[abajo]
                backdrop:true,
                timer:8000,
                // tiempo de ventana [abajo]
                timerProgressBar: true,
                allowOutsideClick:false,
                confirmButtonColor:'#6C63FF',
            });
            $("#status-text").val('');
            readPosts();
        })
        .catch((error) =>{
            alert(error);
        })
    })

    function readPosts(){
        db.collection("posts").get().then((posts)=>{
            listPosts(posts.docs);
        })
    }

    function listPosts(data){
        var divContent = $("#post-feed");
        divContent.empty(); 
        if(data.length > 0){
            let content = "";
            data.forEach(document => {
                let doc = document.data();
                const divPost = `

                <div style='border:solid 2px;'>
                        <p  class="parrafo">${doc.post}</p><br>
                        
                        <textarea class="textarea_edit" style='display: none;'></textarea>
                        <button class="button_edit" data-id="${document.id}" style='display: none;'>Guardar</button>
                        <br>
                        <span>Publicado el: ${doc.day}/${doc.month}/${doc.year}/${doc.fecha}</span>
                        <button data-id="${document.id}" class=" btn-warning btn-edit-post">Editar</button>
                        <button data-id="${document.id}" class=" btn-danger btn-delete-post">Eliminar</button>
                    </div>
                    <hr>

                `;
                content += divPost;
            });
            divContent.append(content);
             //Agregar listener a btn-delete
            const btnDelete = document.querySelectorAll(".btn-delete-post");
            btnDelete.forEach(btn=>{
                btn.addEventListener("click",(e)=>{
                    const id = e.target.dataset.id;
                    DeletePost(id);
                })
            })
            const btnEdit = document.querySelectorAll(".btn-edit-post");
            btnEdit.forEach(btn=>{
                    btn.addEventListener("click",(e)=>{
                        const id = e.target.dataset.id;
                        OpenEdit(id,btn);
                })
            })
        }
    }

    function OpenEdit(id,button){
        let parent = button.parentNode;
        let textEdit = $(parent).children().eq(2);
        let btnEdit = $(parent).children().eq(3);
        textEdit.show();
        btnEdit.show();
        btnEdit.on("click",function(e){
            SaveUpdate(e,id,textEdit.val())
        });
    }

    function DeletePost(id){
        db.collection("posts").doc(id).delete().then(() => {
            Swal.fire({
                title:'Se ha eliminado correctamente',
                text:'Usted a eleminado un post',
                background:"#fff",
                // color de fondo de la ventana[abajo]
                backdrop:true,
                timer:8000,
                // tiempo de ventana [abajo]
                timerProgressBar: true,
                allowOutsideClick:false,
                confirmButtonColor:'#6C63FF',
            });
            readPosts();
        }).catch((error) => {
            console.error("Detalle del Error: ", error);
        });
    }


    function SaveUpdate(e,id_post,text_new){
        e.preventDefault();
        db.collection("posts").doc(id_post).update({
            post: text_new,
        }).then(()=>{
            Swal.fire({
                title:'Post actualizado',
                text:'Usted a modificado un post',
                background:"#fff",
                // color de fondo de la ventana[abajo]
                backdrop:true,
                timer:8000,
                // tiempo de ventana [abajo]
                timerProgressBar: true,
                allowOutsideClick:false,
                confirmButtonColor:'#6C63FF',
            });
            readPosts();
        })
        .catch((error)=>{
            alert("Error:",error);
        })
    }

})