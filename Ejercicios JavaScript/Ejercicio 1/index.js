/* Ejercicio 1: Para ayudar a un trabajador a saber cuál será 
su sueldo semanal, se sabe que si trabaja 40 horas o menos, 
se le pagará $20 por hora, pero si trabaja más de 40 horas 
entonces las horas extras se le pagarán a $25 por hora. 
Confeccione un programa que:
Capture las horas trabajadas.
Imprima el sueldo por la cantidad de horas de trabajo.
*/

var horasTrabajadas = prompt("Introduzca las horas trabajadas:") ; 
const pagoHora = 20
const pagoExtra = 25;
const horarioNormal = 40;
if (horasTrabajadas > 40) {
	var sueldo = horarioNormal * pagoHora;
	var horasExtras = horasTrabajadas - horarioNormal;
	var salarioExtra = horasExtras * pagoExtra;
	var sueldoTotal = sueldo + salarioExtra;
	alert("Su sueldo es de: " + sueldoTotal + " pesos");
}else {
	var sueldoTotal = (horasTrabajadas * pagoHora);
	alert("Su sueldo es de: " + sueldoTotal + " pesos");
}
