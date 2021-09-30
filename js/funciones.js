/*Este archivo contiene las funciones para el desarrollo de Teneme en Casa*/

/*Funcion para verificar si hay suficiente stock de un producto*/

/*const inStock = (quantity, stock) => {
    if(quantity > stock) {
        alert(`No hay stock disponible, el stock disponible es ${stock}`);
        return false;
    }
    else return true;
}*//*

/*Esta funcion ejecuta la adicion de productos al carrito*/

/*const addToCart = (option, quantity) => {
    const found = products.find(product=>product.id === option)
    if(inStock(quantity, found.stock)) {
        cart += (quantity * found.price);
        products[option-1].stock -=quantity;
        alert(`${found.name} se agrego a la compra`);
    }
}*/

/*Funcion para el menu dinamico en base a los productos existentes */

/*const showMenu = () =>{
    let menu = "Por favor, elegi un producto: \n";
    products.forEach((product) =>{
        menu += product.id + ".-" + product.name + "\n";
    });
    menu += (products.length + 1) + ".-Salir";
    let test = parseInt(prompt(menu));
    return test;
}*/

/*Esta funcion es para aumentar el precio de los productos */

/*const priceRise = products.map(product=>product.price +=50);
console.log(priceRise);*/


/*Este metodo busca y filtra los objetos mas baratos del stock */
/*const cheaperPrice = products.filter(product=>product.price < 370);
console.log(cheaperPrice);*/

/*Esta funcion convierte a los objetos en texto JSON

let products = [
    {id: 1, name: 'Hamburguesa de carne', price: 300, stock: 20},
    {id: 2, name: 'Panchos', price:200, stock: 30},
    {id: 3, name: 'Papas fritas', price: 450, stock: 50},
    {id: 4, name: 'Nuggets de pollo', price: 400, stock: 40}
]*/



/*let myProductsObjects = localStorage.setItem('ejemploJSON', JSON.stringify(products));

console.log(localStorage.getItem('ejemploJSON'));

let myProductsArray = JSON.parse(localStorage.getItem('ejemploJSON'));

console.log(JSON.parse(localStorage.getItem('ejemploJSON')));
*/
