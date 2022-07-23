# JavaScript ![JavaScript](javascript.png)

# Tabla de contenidos
- [Pasos previos](#pasos-previos)
- [Variables](#variables)
  - [Conversiones](#conversiones)
  - [Objetos](#objetos)
  - [Arrays](#arrays)
  - [Operadores](#operadores)
- [Metodos](#metodos)
- [Comentarios](#comentarios)
- [Cuadros de dialogo](#cuadros-de-dialogo)

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

## Objetos
```javascript 
let testObj = {
    nr: 600,
    str: "text"
};
console.log(testObj.nr); // -> 600
console.log(testObj.str); // -> text
```
Podemos añadir campos a un objeto
```javascript
user1.age = 22;
```
Podemos eliminar campos de un objeto 
```javascript
delete user1.age;
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

# Metodos
Un metodo es un tipo especial de funcion que pertenece a un objeto
```javascript
console.time();
console.log("test console");
console.timeEnd();
```
```javascript
let river = "Mekong";
let character = river.charAt(2);
console.log(character); // -> k
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