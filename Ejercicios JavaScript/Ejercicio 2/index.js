/*Ejercicio 2:Confeccione un programa que permita calcular 
su promedio escolar y muestre su mejor y su peor calificación.
*/

let num = parseInt(prompt("Inserte el numero de materias: "))
let a=0; b=0;
let array = [];
while (a<num){
	c = a+1;
	i = parseFloat(prompt("Inserte la calificacion de la materia " + c + ": "))
	b=b+i;
	a++;
	array.push(i);
}
let prom = b/num;

let mejor = peor = array[0];

for (let i = 0; i < array.length; i++) {
	if (array [i] > mejor) {
		mejor = array[i];
	}
	if (array[i]< peor) {
		peor = array [i];
	}
}

alert("El promedio es: " + prom);
alert("La mejor calificación es: " + mejor + " y la peor es: " + peor);




