# JavaScript ![JavaScript](.javascript.png)

# Tabla de contenidos
- [Pasos previos](#pasos-previos)
- [Variables](#variables)

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