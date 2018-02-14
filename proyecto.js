var edad=0;
var rh=0;
var rc=0;
const precioBase = 250;
var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
if (conyuge == "si" || conyuge == "SI" ){
  var edadConyuge =prompt("Ingrese la edad de su conyuge");
  }
 if (edadConyuge<30){
    rc=precioBase*0.01;
    }
 else if (edadConyuge >=30 && edadConyuge<40){
    rc=precioBase*0.02;
 }
 else if (edadConyuge >=40 && edadConyuge<50){
    rc=precioBase*0.03;
 }
 else if (edadConyuge >=50 && edadConyuge<70){
    rc=precioBase*0.05;
 }
var hijos = prompt("¿Tiene hijos?", "SI/NO");
if (hijos=="si" || hijos == "SI"){
var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");
}
else {cantidadHijos=0;}
edad=2018-anioNacimiento;
rh=precioBase*cantidadHijos*0.01;
if  (edad>=18 && edad<21 ){
recargos=0;
comision = precioBase * 0.30;
totalPagar = precioBase + comision + recargos+rh+rc;
document.write("Sr(a) "+nombreCompleto+"<br>Su Recargo por edad es: "+recargos+"<br>Su recargo por Conyuge es: "+rc+"<br>Su recargo por hijos es: "+rh+"<br>Su Total a Pagar es: "+totalPagar);
}else if  (edad>=21 && edad<25 ){
recargos=(precioBase*0.01);
comision = precioBase * 0.30;
totalPagar = precioBase + comision + recargos+rh+rc;
document.write(totalPagar);
}else if  (edad>=25 && edad<30 ){
recargos=(precioBase*0.02);
comision = precioBase * 0.30;
totalPagar = precioBase + comision + recargos;
document.write("Sr(a) "+nombreCompleto+"<br>Su Recargo por edad es: "+recargos+"<br>Su recargo por Conyuge es: "+rc+"<br>Su recargo por hijos es: "+rh+"<br>Su Total a Pagar es: "+totalPagar);
}else if  (edad>=30 && edad<40 ){
recargos=(precioBase*0.05);
comision = precioBase * 0.30;
totalPagar = precioBase + comision + recargos+rh+rc;
document.write("Sr(a) "+nombreCompleto+"<br>Su Recargo por edad es: "+recargos+"<br>Su recargo por Conyuge es: "+rc+"<br>Su recargo por hijos es: "+rh+"<br>Su Total a Pagar es: "+totalPagar);
}else if  (edad>=40 && edad<50 ){
recargos=(precioBase*0.08);
comision = precioBase * 0.30;
totalPagar = precioBase + comision + recargos+rh+rc;
document.write("Sr(a) "+nombreCompleto+"<br>Su Recargo por edad es: "+recargos+"<br>Su recargo por Conyuge es: "+rc+"<br>Su recargo por hijos es: "+rh+"<br>Su Total a Pagar es: "+totalPagar);
}else if  (edad>=50 && edad<65 ){
recargos=precioBase*0.12;
comision = precioBase * 0.30;
totalPagar = precioBase + comision + recargos+rh+rc;
document.write("Sr(a) "+nombreCompleto+"<br>Su Recargo por edad es: "+recargos+"<br>Su recargo por Conyuge es: "+rc+"<br>Su recargo por hijos es: "+rh+"<br>Su Total a Pagar es: "+totalPagar);
}else{
  document.write("NO SE PUEDE ASEGURAR");
}
