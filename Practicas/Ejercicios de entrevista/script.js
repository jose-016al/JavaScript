// Este programa procesa casos de prueba que consisten en matrices de caracteres,
// eliminando caracteres consecutivos idénticos para obtener una "buena matriz".

// Importamos el módulo necesario para la entrada y salida estándar
process.stdout.write("----------ENTRADA----------" + '\n');
process.stdout.write("Introduce el numero de casos: ");
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var stdin_input = "";

// Configuramos la lectura de la entrada estándar
process.stdin.on('data', function (input) {
    stdin_input += input;
    process.stdout.write("Introduce un caso, enter para continuar o 'CTRL + D' (para salir): ");
    // Leemos la entrada estándar y la almacenamos en la variable stdin_input
});

// Cuando se completa la entrada estándar, llamamos a la función main con la entrada acumulada
process.stdin.on('end', function () {
    main(stdin_input);
});

// Función para convertir una matriz de caracteres en una "buena matriz"
function convertirEnBuenaMatriz(matriz) {
    let buenaMatriz = [];

    for (let i = 0; i < matriz.length; i++) {
        // Si es el primer carácter o es diferente al carácter anterior, lo agregamos a la buena matriz
        if (i === 0 || matriz[i] !== matriz[i - 1]) {
            buenaMatriz.push(matriz[i]);
        }
    }

    return buenaMatriz.join('');
}

// Función para procesar los casos de prueba
function procesarCasosDePrueba(casosDePrueba) {
    process.stdout.write('\n' + "----------SALIDA----------" + '\n');
    for (const caso of casosDePrueba) {
        // Llamamos a la función convertirEnBuenaMatriz para cada caso de prueba
        const buenaMatriz = convertirEnBuenaMatriz(caso);
        // Escribimos la buena matriz resultante en la salida estándar (consola)
        process.stdout.write(buenaMatriz + '\n');
    }
}

// Función principal que recibe la entrada acumulada y la procesa
function main(input) {
    // Dividimos la entrada en líneas para obtener el número de casos de prueba y los casos individuales
    const lineas = input.split('\n');
    const numCasosDePrueba = parseInt(lineas[0], 10);
    const casosDePrueba = lineas.slice(1);

    // Asegurémonos de que haya suficientes casos de prueba antes de procesarlos
  if (casosDePrueba.length < numCasosDePrueba) {
    console.error("No hay suficientes casos de prueba en la entrada.");
    return;
  }

    // Llamamos a la función para procesar los casos de prueba
    procesarCasosDePrueba(casosDePrueba);
}
