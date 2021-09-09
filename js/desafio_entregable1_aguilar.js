/*********** INICIO DESAFIO CLASE 1****************/

//let nombreIngresado = prompt("Por favor, ingresa tu nombre");

//let resultado = "Hola," + " " + nombreIngresado;

////alert(resultado);

////let anioActual = parseInt (prompt("¿En qué año estamos?"));

//let fechaNacimiento = parseInt (prompt("¿En qué año naciste?"));

//let restaAnios = anioActual - fechaNacimiento;

//alert("Tenés" + " " + restaAnios + " " + "años de edad. ¡Gracias por participar!");


/*********** INICIO DESAFIO CLASE 2 ********************/

/***********Primer ejercicio desafio 2 ****************/

let producto = prompt("Ingresá un producto de supermercado que quieras comprar");

let precio = parseInt(prompt("Ingresá el precio del producto"));

if (precio < 80) {
    alert("El producto es muy barato");
}

else if (precio == 100) {
    alert("El producto esta en precio");
}

else if (precio <= 150) {
    alert ("El producto esta un poco caro");
}

else {
    alert("El precio de este producto es una locura");
}

/************Segundo ejercicio Desafio 2 *************/

let nombre = prompt("¿Como te llamas?");

let monto = parseFloat(prompt("Ingresá el monto que queres pagar por un combo de RyanAir que se subasta"));


if ((monto != "") && ((monto >= 0.7) && (monto <= 1.49))) {
    alert(nombre + " dale, ¡subí un poquito la oferta!");
}

else if ((monto != "") && ((monto >= 1.5) && (monto <= 2.49))) {
    alert (nombre +", te estás acercando al combo, ¡esforzate un poquito más!");
}

else if ((monto != "") && ((monto >= 2.5) && (monto <= 4))) {
    alert(nombre +", ¡el combo de sandwich, papas fritas y gaseosa es tuyo!");
}

else {
    alert(nombre +", o no ingresaste un monto o el monto es muy elevado");
}

/**********Tercer ejercicio Desafio 2 ***********************/

let palabraIngresada = prompt("Ingresa una de estas tres palabras: Casa, Trabajo o Estudio");

if ((palabraIngresada == "Casa") || (palabraIngresada == "casa")) {
    alert("La palabra ingresada es Casa");
}

else if ((palabraIngresada == "Trabajo") || (palabraIngresada == "trabajo")) {
    alert("La palabra ingresada es Trabajo");
}

else if ((palabraIngresada == "Estudio") || (palabraIngresada == "estudio")) {
    alert("La palabra ingresada es Estudio");
}

else {
    alert("No es ninguna de las palabras solicitadas");
}