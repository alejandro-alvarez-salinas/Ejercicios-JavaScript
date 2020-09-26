/*Ejercicio 4:Confeccione un programa en el que 
el usuario capture caracteres, imprima:
Todos los caracteres en el orden capturado.
Todos los caracteres en orden inverso.
Todos los caracteres en orden alfabético.
*/

let rango = prompt("Introduce el rango: ");

let array = [];
for (let i = 0; i < rango; i++) {
	num = i + 1;
	let valCaracter = prompt("Introduzca el caracter " + num + ": ");
	array.push(valCaracter);
}

alert("Orden Capturado: " + array);
alert("Orden Inverso: " + array.reverse());
alert("Orden alfabetico: " + array.sort());

