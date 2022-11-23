// compras de camisas mas de 3 descuento 20% 
// menos de 3 descuento de 10% total compra 

let precio;
let cant;
let descuento;
let total;
let pagoo;

precio = Number(prompt(`ingrese el precio de las camisetas`))
cant   = Number(prompt(`ingrese la cantidad de camisetas`))
total = precio * cant;

if(cant<3){
    descuento = total * .10;
}
else{
    descuento = total * .20;
}

 pagoo = total - descuento;

alert(`el total a pagar es: $${pagoo} y el descuento es de: $${descuento}`);

