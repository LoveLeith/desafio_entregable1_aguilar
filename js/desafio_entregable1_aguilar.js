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

/*let producto = prompt("Ingresá un producto de supermercado que quieras comprar");

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

/*let nombre = prompt("¿Como te llamas?");

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

/*let palabraIngresada = prompt("Ingresa una de estas tres palabras: Casa, Trabajo o Estudio");

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

/**********************Inicio Desafío CLASE 3 - CICLOS ******************/

/**********************Primer Ejercicio**************************/

let entrada = prompt("Adiviná cuál es mi comida favorita ingresando alguna de estas opciones: \n Hamburguesas, \n Milanesas, \n Pastas, \n Ensalada");

while((entrada != "Milanesas") && (entrada != " ")) {
    switch (entrada) {
        case "Hamburguesas":
            alert("Si, las hamburguesas son ricas, pero hay algo que me gusta mucho más");
            break;
        case "Pastas":
            alert("Una pasta bien hecha hace bien al alma, pero no.");
            break;
        case "Ensalada":
            alert("Una ensaladita con de todo súper rico, pero acompañado de otra cosa.");
            break;
        default:
            alert("Seguí participando");
            break;
    }
    entrada = prompt("Adiviná cuál es mi comida favorita ingresando alguna de estas opciones: \n Hamburguesas, \n Milanesas, \n Pastas, \n Ensalada");
}

/***********************************Segundo ejercicio **********************************/

let luzRoja = "Luz roja";
let luzAmarilla = "Luz amarilla";
let luzVerde = "Luz verde";

let ingresarLuzSemaforo = parseInt(prompt("Ingresá una opción para saber cómo cruzar la calle: \n (1) Luz roja \n (2) Luz amarilla \n (3) Luz verde"))

if (ingresarLuzSemaforo <=3) {

    switch (ingresarLuzSemaforo) {
        case 1:
            alert("El semáforo está en " +luzRoja+ ", ahora no podés cruzar la calle");
            break;
        case 2:
            alert("El semáforo está en " +luzAmarilla+ ", prestá atención que los autos siguen pasando");
            break;
        case 3:
            alert("El semáforo está en " +luzVerde+ ", ya podés cruzar la calle");
            break;
    
        default:
            alert("No estás prestando atención");
            break;
    }
}

else {
    alert("Prestá atención porque vas a volar por lo aires si te atropellan");
    ingresarLuzSemaforo = parseInt(prompt("Ingresá una opción para saber cómo cruzar la calle: \n (1) Luz roja \n (2) Luz amarilla \n (3) Luz verde"))
}

/*******************************Tercer ejercicio ********************************/

let ingresarNumero = parseInt(prompt("Ingresar numero"));

for (let i = 1; i <= 10; i++) {

    if (i == 3) {
        continue;
    }
    let resultado = ingresarNumero + i;

    console.log(ingresarNumero +" + "+ i +" = "+ resultado);
}

/*******************************Cuarto ejercicio ********************************/

for (let i = 1; i <=10; i++) {

    let ingresarNombre = prompt("Ingresar nombre para participar del sorteo");

    if (ingresarNombre == "Paula") {
        continue;
    }

    console.log("Ticket No. " +i+ " Nombre: "+ingresarNombre);
}

/****************************DESAFIO 4 FUNCIONES ******************************/

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;
const multiplicar = (a, b) => a * b;

let consultaPrecioProducto = prompt("Ingresa un producto para averiguar el precio final con descuento mas el envio");
let precioCostoProducto = parseInt(prompt("Ingresa por favor el precio al costo del producto"));
let cantidadProducto = parseInt(prompt("Ingresa cuantas unidades queres del producto:"));
let precioDescuento = 50;
let precioEnvio = 250;

//quiero averiguar el precio al costo con iva mas el descuento
let nuevoPrecio = resta(suma(precioCostoProducto, iva(precioCostoProducto)), precioDescuento);

//quiero averiguar el precio final segun la cantidad que ingrese el usuario
let precioCantidad = multiplicar(cantidadProducto, nuevoPrecio);

//quiero averiguar el costo total de la compra mas el envio
let precioFinalConEnvio = suma(precioCantidad, precioEnvio);

function mostrar(mensaje, mensaje2) {
    alert(mensaje, mensaje2);
}

mostrar("El precio final de " +consultaPrecioProducto+ " es: \n" +precioCantidad+ "\nEl costo de envio es: \n" + precioEnvio + "\nEl costo total con envio es: \n" +precioFinalConEnvio);

/*******************************FIN DESAFIO 4 FUNCIONES ***************************/
