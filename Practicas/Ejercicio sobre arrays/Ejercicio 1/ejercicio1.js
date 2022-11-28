var numeros = [];
function generarArray() {
    let cadena = document.forms[0].numeros.value;
    numeros = cadena.split(','); 
}

function calcular() {
    let mayor = Math.max.apply(null, numeros);
    let menor = Math.min.apply(null, numeros);
    let media = 0;

    for (let i = 0; i < numeros.length; i++) {
        media += parseInt(numeros[i]);
    }
    media = media / numeros.length;
    
    let p = document.getElementById("resultado");
    p.innerHTML += "<h2>El numero mayor del array es: " + mayor + "</h2>";
    p.innerHTML += "<h2>El numero menor del array es: " + menor + "</h2>";
    p.innerHTML += "<h2>La media del array es: " + media + "</h2>";

}