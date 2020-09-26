/*Confeccione un programa en el usuario 
debe capturar números que rellenaran un arreglo. 
Una vez capturado: 
Imprima el número más grande.
Imprima el número más pequeño.
*/

let rango = parseInt(prompt("Bienvenido!! Introduce el rango: "));
let array = [];


for (let i = 0; i < rango; i++) {
	num = i + 1;
	let valor = parseInt(prompt("Introduce el valor del numero " + num + ": " ));
	array.push(valor);
}

let mayor = menor = array[0];

for (let i = 0; i < array.length; i++) {
	if (array [i] > mayor) {
		mayor = array[i];
	}
	if (array[i]< menor) {
		menor = array [i];
	}
}

alert("El numero mayor es: " + mayor + " y el numero menor es: " + menor);