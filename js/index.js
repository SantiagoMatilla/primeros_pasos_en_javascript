/*Crear variables de diferentes tipos de datos: número, cadena de texto, booleano e imprimir su valor por
la pantalla del navegador y la consola.*/

let number1 = 5;
let number2 = 7;
let number3 = 72;

const myName = "Santiago";
let age = "26";
let jsExpert = false;

console.log("Nombre: ", myName);
document.write("Nombre: ", myName, "<br>");

console.log("Edad: ", age);
document.write("Edad: ", age, "<br>");

console.log("Experto en JavaScript: ", jsExpert);
document.write("Experto en JavaScript: ", jsExpert, "<br>");


console.log("Número 1: ", number1);
document.write("Número 1: ", number1, "<br>");

console.log("Número 2: ", number2);
document.write("Número 2: ", number2, "<br>");

console.log("Número 3: ", number3);
document.write("Número 3: ", number3, "<br>");

document.write("<br><br><br>");







/*De las variables declaradas anteriormente, identifica las que son de tipo integer y realiza operaciones
matemáticas básicas con las variables creadas anteriormente (suma, resta, multiplicación, división).
Deberás imprimir el resultado por la pantalla del navegador y la consola. */
let sum = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number3 * number2;
let division = number3 / number2;

console.log(number1, " + ", number2, " = ", sum);
document.write(number1, " + ", number2, " = ", sum, "<br>");

console.log(number1, " - ", number2, " = ", subtraction);
document.write(number1, " - ", number2, " = ", subtraction, "<br>");

console.log(number3, " * ", number2, " = ", multiplication);
document.write(number3, " * ", number2, " = ", multiplication, "<br>");

console.log(number3, " / ", number2, " = ", division);
document.write(number3, " / ", number2, " = ", division, "<br>");

document.write("<br><br><br>");




/*De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas
cadenas de texto. Deberás imprimir el resultado por la pantalla del navegador y la consola.*/
console.log("Nombre: ", myName, "Edad: ", age);
document.write("Nombre: ", myName, ", ", "Edad: ", age);

document.write("<br><br><br>");




/*Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]"
con un parámetro para el nombre. */
function salute(i){
    console.log("Hola ", i);
    document.write("Hola ", i);
}

salute(myName);

document.write("<br><br><br>");




/*Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás
imprimir el resultado por la pantalla del navegador y la consola. */
function sum2(i,j) {
    console.log(i + j);
    document.write(i + j);
}
sum2(4,12);

document.write("<br><br><br>");




/*Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla
del navegador y la consola. */
function oddOrEven(i){
    if (i % 2 == 0) {
        console.log("El número es par");
        document.write("El número es par");
    }
}
oddOrEven(78);

document.write("<br><br><br>");




/*Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado. */
let car = {
    make: "Honda",
    model: "Accord",
    year: "2002",
    doors: "5",
    wheel:{
        size: "17",
        wheelYear: "2009"
    }
}






/*Crear una función que devuelva la marca del carro.*/
function carModel(){
    console.log("La marca del carro es ", car.model);
    document.write("La marca del carro es ", car.model);
}
carModel();

document.write("<br><br><br>");




/*Crear una función que devuelva la cantidad de puertas que tiene el carro. */
function doorNumber(){
    console.log("El coche tiene ", car.doors, " puertas");
    document.write("El coche tiene ", car.doors, " puertas");
}
doorNumber();

document.write("<br><br><br>");




/*Crear una función que devuelva un atributo del objeto anidado. */
function wheelSize(){
    console.log("El coche tiene unas ruedas de", wheel.size, "cm de diametro");
    document.write("El coche tiene unas ruedas", wheel.size, "cm de diametro");
}