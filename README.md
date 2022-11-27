# JavaScript ![JavaScript](javascript.png)

# Tabla de contenidos
- [Pasos previos](#pasos-previos)
- [Variables](#variables)
  - [Conversiones](#conversiones)
  - [Arrays](#arrays)
  - [Operadores](#operadores)
- [Comentarios](#comentarios)
- [Cuadros de dialogo](#cuadros-de-dialogo)
- [Condicionales](#condicionales)
- [Los bucles](#los-bucles)
  - [Los bucles while](#los-bucles-while)
  - [Los bucles do while](#los-bucles-do-while)
  - [Los bucles for](#los-bucles-for)
- [Extructuras](#las-estructuras)



- [Funciones](#funciones)
  - [Funciones anonimas](#las-funciones-anonimas)
  - [Funciones flecha](#las-funciones-flecha)
  - [Funciones callback](#las-funciones-callback)
  - [Funciones de tiempo (setTimeout y setInterval)](#funciones-de-tiempo)
- [La POO](#la-programacion-orientada-a-objetos-poo)

# Pasos previos
Enlazar un fichero javascript, necesitamos un fichero html para enlazarlo 
```html
<script src="prueba.js"></script>
```
Podemoa especificar cuando queremos que se ejecute el script, si despues de cargar toda la pagina o inmediatamente 
```html
<script defer src="prueba.js"></script>
```
En javascript tenemos el modo estricto que nos evita errores antiguos, esta sentencia sera la primera en nuestros scripts
```javascript
"use strict";
```

# Variables
Para definir variables podemos usar var o let
```javascript
var height = 150;
```
let nos impide declarar otra variable con el mismo nombre
```javascript
var height = 150;
```
Las constantes son un tipo de variables que no se puede cambiar su valor
```javascript
const greeting = "Hello!";
```
Podemos saber de que tipo es una variable con typeof
```javascript
console.log(typeof string_numero);
```

## Conversiones
En este caso convertimos un numero en un string
```javascript
let numero = 37;
console.log(numero);
let string_numero = String(numero);
console.log(string_numero);
```

## Arrays
Definimos un array
```javascript
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]); // -> Sun
console.log(days[2]); // -> Tue
console.log(days[5]); // -> Fri
```
Si queremos saber la posicon de un campo, si nos devuelve -1 es que no encuentra dicho elemento
```javascript
console.log(names.indexOf("Mateo")); // -> 2
```
El metodo push añade el campo al final de la matriz
```javascript
names.push("Amelia");
```
El metodo unshift añade el campo al final de la matriz
```javascript
names.unshift("Amelia");
```
El metodo pop elimina el elemento final de la matriz
```javascript
let name = names.pop();
console.log(names.length); // -> 3
```
El metodo shift elimina el prime elemento de la matriz
```javascript
let name = names.shift();
console.log(names.length); // -> 3
```

## Operadores
El operador condicional ternario "?", (es un condicional)
```javascript
let edad;
let resultado = (edad >= 18) ? "si" : "no";
```

# Comentarios
Comentarios de una sola linea 
```javascript
// este es un comentario de una sola linea
```
Comentarios de varias lineas
```javascript
/*
    esto es un
    comentario 
    de varias
    lineas
*/
```

# Cuadros de dialogo
Su uso no es muy recomendado, pero tenemos varias formas de generar un cuadro de dialogo  
las alertas para mostrar un mmensaje al cargar la pagina
```javascript
alert("Hola mundo");
```
Las confirmaciones nos saldran dos botones para aceptar o cancelar
```javascript
let borrar = confirm("¿Borrar todos los datos?");
let mensaje = borrar ? "Borrando datos" : "Cancelado";
```
Los prompt son como las confirmaciones pero con el cuadro de texto donde el usuario introduce un mensaje
```javascript
let nombre = prompt("¿Como te llamas?", "nombre");
nombre = nombre ? nombre : "anonimo";

let edad = prompt("Hola " + nombre + " ¿cuantos años tienes?");
alert(nombre + " tiene " + edad + " años");
```

# Condicionales
La condicion if
```javascript
let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady) {
    alert("User ready!");
}
```
La condicion if else
```javascript
if (isUserReady) {
    console.log("User ready!");
} else {
    console.log("User not ready!");
}
```
Condicionales encadenados
```javascript
if (conditions_1) {
  code
} else if (condition_2) {
  code
} else if (condition_3) {
  code
} else {
  code
}
```
El operador condicional ternario "?", (es un condicional)
```javascript
let edad;
let resultado = (edad >= 18) ? "si" : "no";
```
Los switch
```javascript
switch (expression) {
    case first_match:
        code
        break;
    case second_match:
        code
        break;
    default:  
        code
}
```

# los bucles
Son bloques de codigo que se repiten segun un numero de veces que le indiquemos
## Los bucles while
La condicion a cumplir se comprueba al principio, por lo que puede no entrar en ningun momento al bucle
```javascript
let isOver = false;
let counter = 1;

while (!isOver) {
    isOver = !confirm('[${counter++}] Continue the loop?');
}
```
## Los bucles do while
En cambio los do while se comprueba la condicion al final, por lo tanto sabemos que al menos una vez si entrara en el bucle
```javascript
let isOver;
let counter = 1;

do {
    isOver = !confirm('[${counter++}] Continue the loop?');
} while (!isOver);
```
## Los bucles for
Lo mejor a la hora de recorrer un array facilmente
```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

# Las estructuras 
## Los arrays
Un array se puede crear vacio e ir metiendo datos o con datos ya creados
```javascript
const cars = ["Mercedes", "BMW", "Audi"];
```
El acceso a sus elementos es como en otros lengaujes de programacion
```javascript
cars[0];
```
Para añadir un elemento al array usamos push
```javascript
cars.push("Citroen");
```
Algunos metodos sobre los arrays se muestran en la siguiente imagen
![Arrays](Documentacion/metodos%20de%20un%20array.png)
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```

# Funciones

```javascript
let temperatures;
let sum;
let meanTemp;

function getMeanTemp() {
    sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    meanTemp = sum / temperatures.length;    
}
```
La declaracion return nos devuelve un objeto en una funcion
```javascript
function showMsg() {
    console.log("message 1");
    return;
    console.log("message 2");
}

showMsg(); // -> message 1
```
Podemos añadir parametros a la funciones
```javascript
function add(first, second) {
  return first + second;
}
```

## Las funciones anonimas 

```javascript
const square = function(number) {
  return number * number;
};
var x = square(4) // -> x obtiene el valor de 16
```

## Las funciones flecha 

```javascript
par = (numero) =>  (numero % 2 == 0);

document.write(par(numero)); // -> devuelve true si un numero es par
```

## Las funciones callback

Es una funcion que se pasa a otra funcion como argumento
```javascript
funtion saludar(nombre) {
  alert('Hola'+nombre);
}
funtion procesarEntradaUsuario(callback) {
  var nombre = prompt('Introduce tu nombre');
  callback(nombre);
}
procesarEntradaUsuario(saludar);
```

## Funciones de tiempo

La funcion setTimeout espera un tiempo para ejecutar algo
```javascript
setTimeOut(function() {
  console.log("He ejecutado la funcion");
}, 2000); // -> llamara a la funcion callback cunado pasen dos segundos
```
La funcion setInterval llama a una funcion o ejecuta un fragmento de codigo de forma reiterada, con un retardo de tiempo
```javascript
setInterval(miTemporizador, 1000);
function miTemporizador() {
  const fecha = new Date();
  console.log(fecha.toLocaleTimeString());
}
```
Podemos usar clearInterval para detener la ejecucion 
```javascript
const myInterval = setInterval(miTemporizador, 1000);
function miTemporizador() {
  const fecha = new Date();
  console.log(fecha.toLocaleTimeString());
}
function myStop() {
  clearInterval(myInterval);
}
```

# La programacion orientada a objetos POO
Los objetos se crean de la siguiente manera
```javascript
const persona = {
  nombre: "Jose",
  edad: 23
};
console.log(persona.nombre);
```
Metodos en los objetos 
```javascript
const persona = {
  nombre: "Jose",
  apellido: "Almiron",
  edad: 23,
  nombrar: function() {
    return this.nombre + " " + this.apellido;
  }
};
console.log(persona.nombrar()); // -> Jose Almiron
```
Para obtener las propiedades de un objeto usando un for in
```javascript
for (let i in persona) {
  if (typeof persona[i] != "function") {
    console.log(`${i} tiene el valor de ${persona[i]}`);
  }
}
```
Para eliminar propiedades de un objeto pdemos usar el delete
```javascript
delete persona.nombre;
```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```