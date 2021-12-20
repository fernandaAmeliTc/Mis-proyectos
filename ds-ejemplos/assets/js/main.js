var heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

  var teamName = heroes.squadName; //una forma
  //var teamName = heroes["squadName"]; -> otra forma
  console.log(teamName);
// Mostrando el nombre de la base secreta
var teamMebers=heroes.members;

console.log(teamMebers)

// Mostrar el primer elemento
var Membres1=teamMebers[0];
console.log(Membres1);

// mostrar l0s super poderes de la segunada opccion

var PowerSeg= teamMebers[1].powers;
console.log("segundo ")
console.log(PowerSeg)

function Persona(nombre,edad,pais,intereses){
  this.nombre=nombre;
  this.edad=edad;
  this.pais=pais;
  this.intereses=intereses;
  this.info = function(){
    let mensaje = this.nombre+" tiene"+this.edad+" años Y es: "+this.pais+"."; 
    alert(mensaje);

    this.hobbis=function(){
      let mensaje ="los intereses de "+this.nombre+" son : "+this.intereses[0]+" y "+this.intereses[1];
      alert(mensaje)
    }
  };

}