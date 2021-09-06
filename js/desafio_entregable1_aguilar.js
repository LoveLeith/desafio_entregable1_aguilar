let nombreIngresado = prompt("Por favor, ingresa tu nombre");

let resultado = "Hola," + " " + nombreIngresado;

alert(resultado);

let anioActual = prompt("¿En qué año estamos?");
let fechaNacimiento = prompt("¿En qué año naciste?");

let anio = parseInt(anioActual);
let edad = parseInt(fechaNacimiento);

let restaAnios = anioActual - fechaNacimiento;

alert("Tu edad es:" + " " + restaAnios);