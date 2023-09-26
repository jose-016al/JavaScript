/* VARIABLES */
var arr1 = [1, 1, 2, 2];
var arr2 = [5, 5, 5, 5];
var arr = ["hola", "hola", "adios", "bienvenido", "adios"];

/* FUNCIONES */
/* Escribe una función llamada sumaArrays que tome dos arrays arr1 y arr2 del mismo tamaño.
La función debe devolver un nuevo array que contenga la suma de los elementos
correspondientes de arr1 y arr2 . */
const sumaArrays = (arr1, arr2) => {
    arr1.length == arr2.length ? arr1.map((item, index) => item + arr2[index]) : "Los arrays no tienen el mismo tamaño"
}

/* Define una función llamada eliminarDuplicados que tome un array arr . La función debe
eliminar los elementos duplicados y devolver un nuevo array con elementos únicos, manteniendo
el orden original. */
const eliminarDuplicados = arr => arr.filter((item, index) => arr.indexOf(item) === index)

/* Crea una función llamada filtrarPares que tome un array de números arr y devuelva un
nuevo array que contenga solo los números pares. */
const filtrarPares = arr1 => arr1.filter(item => item % 2 == 0)

/* Escribe una función llamada unirArrays que acepte un número variable de arrays y los combine
en uno solo. Nota: Se podría utilizar el método reduce y el método concat para lograrlo. */
const unirArrays = (...arrays) => {
    return arrays.reduce((accumulated, currentValue) => accumulated.concat(currentValue));
} 

console.log(unirArrays(arr1, arr2));
