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

/*let entrada = prompt("Adiviná cuál es mi comida favorita ingresando alguna de estas opciones: \n Hamburguesas, \n Milanesas, \n Pastas, \n Ensalada");

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

/*let luzRoja = "Luz roja";
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

/*let ingresarNumero = parseInt(prompt("Ingresar numero"));

for (let i = 1; i <= 10; i++) {

    if (i == 3) {
        continue;
    }
    let resultado = ingresarNumero + i;

    console.log(ingresarNumero +" + "+ i +" = "+ resultado);
}

/*******************************Cuarto ejercicio ********************************/

/*for (let i = 1; i <=10; i++) {

    let ingresarNombre = prompt("Ingresar nombre para participar del sorteo");

    if (ingresarNombre == "Paula") {
        continue;
    }

    console.log("Ticket No. " +i+ " Nombre: "+ingresarNombre);
}

/****************************DESAFIO 4 FUNCIONES ******************************/

/*const suma = (a, b) => a + b;
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
*/
/*******************************FIN DESAFIO 4 FUNCIONES ***************************/


/************************INICIO DESAFIO 5 OBJETOS **************************/

/*class Product {
    constructor (id, name, price, deliveryPrice) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.deliveryPrice = deliveryPrice;
        
    }
    addVAT() {
        this.price = this.price * 0.21 + this.price;
    }
    discount(value) {
        this.price -= value
    }
    addDelivery() {
        this.price = this.price + this.deliveryPrice;
    }
}

const product1 = new Product(1, 'Hamburguesa de carne', 200, 250);
const product2 = new Product(2, 'Panchos', 90, 250);
const product3 = new Product(3, 'Papas fritas', 350, 250);
const product4 = new Product(4, 'Nuggets de pollo', 450, 250);

//quiero primero mostrar el precio de costo del objeto "product1", luego sumarle el IVA y luego mostrar el precio con IVA
console.log(product1.price);
product1.addVAT();
console.log(product1.price);
//quiero hacer el descuento sobre el producto y mostrar el precio final con el descuento
product1.discount(40);
console.log(product1.price);
//quiero sumarle el precio de delivery al precio final con IVA y descuento ya aplicado.
product1.addDelivery();
console.log(product1.price);

console.log(product2.price);
product2.addVAT();
console.log(product2.price);
product2.discount(10);
console.log(product2.price);
product2.addDelivery();
console.log(product2.price);

console.log(product3.price);
product3.addVAT();
console.log(product3.price);
product3.discount(40);
console.log(product3.price);
product3.addDelivery();
console.log(product3.price);

console.log(product4.price);
product4.addVAT();
console.log(product4.price);
product4.discount(40);
console.log(product4.price);
product4.addDelivery();
console.log(product4.price);
*/

/***********************************INICIO CLASE 6 ARRAYS******************************************************/

/*class Product {
    constructor (id, name, price, deliveryPrice) {
        this.id = parseInt(id);
        this.name = name.toUpperCase();
        this.price = parseFloat(price);
        this.deliveryPrice = parseFloat(deliveryPrice);
        
    }
    addVAT() {
        this.price = this.price * 0.21; //+ this.price;
    }
    discount(value) {
        this.price -= value;
    }
    addDelivery() {
        this.price = this.price + this.deliveryPrice;
    }
}

const products = [];

products.push(new Product(1, 'Hamburguesa de carne', 200, 250));
products.push(new Product(2, 'Panchos', 90, 250));
products.push(new Product(3, 'Papas fritas', 350, 250));
products.push(new Product(4, 'Nuggets de pollo', 450, 250));
products.push(new Product(5, 'Empanadas', 800, 250));
products.push(new Product(6, 'Croquetas de papa', 500, 250));

for (const product of products) {
    console.log(product.id);
    console.log(product.name);
    console.log(product.price);
    console.log(product.deliveryPrice);
}


const baratos = products.filter(product=>product.price < 300);
console.log(baratos);

const caros = products.filter(product=>product.price > 95);
console.log(caros);

const precioAumentado = products.map(product=>product.price +=50);
console.log(precioAumentado);*/

/***************************PRIMERA ENTREGA PARCIAL***********************/
/*Este archivo contiene el bucle del menu principal para que el usuario elija los productos que se muestran
y los alert de salida para mostrar los resultados de la compra elegida */


/*alert ('Bienvenidos a Teneme en casa');

do {
    let option = showMenu();
    if(option === products.length + 1) break;
    let qty = parseInt(prompt(selectedQty));

    addToCart(option, qty);

    resp = prompt('¿Querés agregar más productos al carrito? Si/No');

}while(resp === "SI" || resp === "si");

if(cart > 0) {
    let vatPrice = cart * 0.21;
    let finalPrice = vatPrice + cart;
    let priceDelivery = finalPrice + delivery;
    alert(`El precio de tu compra es $${cart}. El precio final más IVA es $${finalPrice}.\n El precio final con envio es $${priceDelivery}`);
}

alert('¡Gracias por tu compra! Si querés ver los aumentos de precio \ny saber cuáles son los mas baratos mirá la consola');
*/
/******************************PRACTICA STORAGE Y JSON****************************************** */

/*const productos = [{id: 1, producto: "Arroz", precio: 125},
                {id: 2, producto: "Fideo", precio: 70},
                {id: 3, producto: "Pan", precio: 50},
                {id: 4, producto: "Flan", precio: 100}];

const guardarLocal = (clave, valor)=> {localStorage.setItem(clave, valor)};

for(const producto of productos) {
    /*guardarLocal(producto.precio, JSON.stringify(producto));*/ //con este codigo recorro todo el objeto de productos y los almaceno uno por uno en el local storage
    /*guardarLocal("listaProductos", JSON.stringify(productos)); // con este codigo recorro todo el objeto de productos y los almaceno todos juntos dentro de la "key" de listaProductos.
        
}*/


/*class Producto {
    constructor (id, nombre, precio) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

const producto1 = new Producto (1, "DONA", 60);

localStorage.setItem("ejemploObjeto", producto1);
localStorage.setItem("ejemploJSON", JSON.stringify(producto1)); // la seccion "application" imprime la key "ejemploJson" y el objeto convertido en texto JSON

console.log(localStorage.getItem("ejemploJSON")); // consola imprime con formato texto JSON

console.log(JSON.parse(localStorage.getItem("ejemploJSON"))); // consola imprime nuevamente con el texto JSON ya convertido a un objeto
*/

/*let myArrayOfNumber = [1, 2, 3, 4, 5];
console.log(myArrayOfNumber);

console.log(JSON.stringify(myArrayOfNumber));

let myArrayJson = JSON.stringify(myArrayOfNumber);

console.log(myArrayJson);


console.log(JSON.parse(myArrayJson));

let myArrayParse = JSON.parse(myArrayJson);

console.log(myArrayParse);
*/
/***********************************FIN EJERCICIO LOCAL STORAGE**************** */

const mainSection = document.querySelector('#container');
let newDiv = document.createElement('div');
let newH1 = document.createElement('h1');
let newParagraph = document.createElement('p');

mainSection.appendChild(newDiv); 
newDiv.appendChild(newH1);
newDiv.appendChild(newParagraph);

newH1.innerHTML = "NUESTROS PRODUCTOS";
newParagraph.innerHTML = "A continuacion te mostramos algunos de nuestros productos";
newH1.classList.add('titulo')
newParagraph.classList.add('subtituloProductos')

const products = [{id: 1, name: 'Hamburguesa de carne', price: 300, stock: 20},
                  {id: 2, name: 'Panchos', price:200, stock: 30},
                  {id: 3, name: 'Papas fritas', price: 450, stock: 50},
                  {id: 4, name: 'Nuggets de pollo', price: 400, stock: 40}];

for (const product of products) {
    let container = document.createElement('div');
    container.classList.add('productos');
    container.innerHTML = `<p>Id: ${product.id}</p>
                          <p>Producto: ${product.name}</p>
                          <p>Price: $${product.price}</p>`;  
    newDiv.appendChild(container);
}
