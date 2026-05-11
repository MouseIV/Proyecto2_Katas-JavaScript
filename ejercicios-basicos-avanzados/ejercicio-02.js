//.1
const jedi = { nombre: "Luke Skywalker", edad: 19 };
console.log(jedi);

// Cambiar la edad a 25
jedi.edad = 25;

console.log(jedi);

//.2
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;

let mensaje =
  "Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.";

console.log(mensaje);

//.3
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };

const precioTotal = sable1.precio + sable2.precio;

console.log(precioTotal);

//.4
let precioBaseGlobal = 10000;

// Cambiamos el precio base global
precioBaseGlobal = 25000;

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000 };

// Actualizamos precioFinal sumando precioBaseGlobal
nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(nave1);
console.log(nave2);
