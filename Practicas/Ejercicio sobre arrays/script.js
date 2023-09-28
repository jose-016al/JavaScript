/* VARIABLES */
var arr1 = [1, 1, 2, 2];
var arr2 = [5, 5, 5, 5];
var arr = [6, 8, 20, 8, 4, 22, 88, 4333, 22, 1, 1, 4, 20, 1, 29, 827463, 21, 43, 9]
var text = "Hola me llamo jose, ¿que tal?. Jose, hola estoy bien, yo me llamo Javi";

/* Ejercicio 1 */
const sumaArrays = (arr1, arr2) => arr1.length == arr2.length ? arr1.map((item, index) => item + arr2[index]) : "Los arrays no tienen el mismo tamaño";

/* Ejercicio 2 */
const eliminarDuplicados = arr => arr.filter((item, index) => arr.indexOf(item) === index);

/* Ejercicio 3 */
const filtrarPares = arr => arr.filter(item => item % 2 == 0);

/* Ejercicio 4 */
const unirArrays = (...arrays) => arrays.reduce((accumulated, currentValue) => accumulated.concat(currentValue));

/* Ejercicio 5 */
const contarPalabras = text => {
    const count = {};
    text = text.toLowerCase();
    text.split(/[ ,.]+/).map(word  => !count[word] ? count[word] = 1 : count[word]++);
    return JSON.stringify(count);
}

/* Ejercicio 6 */
const ordenarNumeros = arr => arr.sort((a, b) => b - a);

/* Ejercicio 7 */
const eliminarElemento = (arr, element) => arr.indexOf(element) !== -1 && arr.splice(arr.indexOf(element), 1) && arr;

/* Ejercicio 8 */
const encontrarMaxMin = arr => JSON.stringify({max: Math.max(...arr), min: Math.min(...arr)});

/* Ejercicio 9 */
const buscarElemento = (arr, element) => arr.indexOf(element) !== -1 ? arr.indexOf(element) : -1;

/* Ejercicio 10 */
const dividirFragmento = (arr, num) => {
    const fragmentSize = Math.ceil(arr.length / num);
    return arr.map((item, index) =>
      `[${arr.slice(index * fragmentSize, (index + 1) * fragmentSize)}]`
    ).filter(arr => arr !== '[]');
}

/* OUT */
console.log(`Ejercicio 1: Suma de Arrays [${sumaArrays(arr1, arr2)}]`);
console.log(`Ejercicio 2: Duplicados [${eliminarDuplicados(arr)}]`);
console.log(`Ejercicio 3: Filtrar Pares [${filtrarPares(arr)}]`);
console.log(`Ejercicio 4: Union de Arrays [${unirArrays(arr, arr1, arr2)}]`);
console.log(`Ejercicio 5: Conteo de Palabras ${contarPalabras(text)}`);
console.log(`Ejercicio 6: Ordenar Numeros [${ordenarNumeros(arr)}]`);
console.log(`Ejercicio 7: Eliminar Elementos [${eliminarElemento(arr, 1)}]`);
console.log(`Ejercicio 8: Maximo y Minimo ${encontrarMaxMin(arr)}`);
console.log(`Ejercicio 9: Buscar Elemento ${buscarElemento(arr, 20)}`);
console.log(`Ejercicio 10: Dividir en Fragmentos [${dividirFragmento(arr, 8)}]`);