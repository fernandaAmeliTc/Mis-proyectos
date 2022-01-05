$(document).ready(function(){
  $("#registro").hide();
  $("#content-initial").hide();
  $("#btn-crear").click(function(){
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


  //Iniciar firebase
  firebase.initializeApp(firebaseConfig);

  //Iniciar servicio de autenticación
  const auth = firebase.auth();

  //Login o inicio de sesion
  $("#btn-login").click(function(e){
      e.preventDefault();
      //Variables de los inputs
      var correo = $("#email").val();
      var clave = $("#pass").val();
      //Usar servicio de login de firebase
      auth.signInWithEmailAndPassword(correo,clave)
      .then(userCredential=>{
          alert("Datos Correctos");
      })
      .catch((error)=>{
          let errorCode = error.code;
          let errorMessage = error.message;
          alert("Código:"+errorCode+". Mensaje: "+errorMessage);
      })
  })

  //Singup o crear cuenta
  $("#btn-singup").click(function(e){
      e.preventDefault();
      //Variables de inputs
      var correo = $("#email-new").val();
      var clave = $("#pass-new").val();
      //Usar servicio de firebase para crear cuenta
      auth.createUserWithEmailAndPassword(correo,clave)
      .then(userCredential=>{
          $("#login-container").hide();
          $("#registro").show();
          alert("Cuenta Creada");
      })
      .catch((error)=>{
          let errorCode = error.code;
          let errorMessage = error.message;
          alert("Código:"+errorCode+". Mensaje: "+errorMessage);
      })
  })
  $("#btn-logout").click(function(e){
    e.preventDefault();
    auth.signOut().then(()=> {
      alert("sesion cerrada");
      $("#content").hide();
      $("#login-container").show();
    })
  })
  // Iniciar sesion con google
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  $("#btn-login-google").click(function(e){
    e.preventDefault();
    auth.signInWithPopup(provider).then(result =>{
      alert("Ingreso con Google")
    }).catch(error =>{
      alert(error)
    })
  })
  auth.onAuthStateChanged((user)=>{
      if(user){
          //Sesion iniciada
          $("#login-container").hide();
      }
      else{
          //Sesion finalizada
          // $("login-container").show();
      }
  })
})

