var nombre= "elias"
var email= "jesss635000@gmail.com"
var edad= 19

function getNombre(){
var myNameElement = document.getElementById("nombre");
myNameElement.innerHTML = nombre;
console.log(nombre);
}

function getEmail(){
var myEmailElement = document.getElementById("email");
myEmailElement.innerHTML = '<b>' + email + '</b>';
console.log(email);
}

function getEdad(){
var myEdadElement = document.getElementById("edad");
myEdadElement.innerHTML = '<h1>' + edad + '</h1>';
myEdadElement.style.color = "#0000FF";
console.log(edad);
}

