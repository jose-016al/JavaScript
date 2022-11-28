var a = [], b = [];
function generarPrimerArray() {
    let cadena = document.forms[0].valores1.value;
    a = cadena.split(',');
}

function generarSegundoArray() {
    let cadena = document.forms[0].valores2.value;
    b = cadena.split(',');
}

function aleatorio1() {
    let total = document.forms[0].select1.options[select1.selectedIndex].text;
    let aleatorio;
    for (let i = 1; i <= total; i++) {
        aleatorio = Math.floor((Math.random() * (100 - 0)) + 0);  
        a.push(aleatorio);
    }
    let cadena = a.toString();
    a = cadena.split(',');
}

function aleatorio2() {
    let total = document.forms[0].select2.options[select2.selectedIndex].text;
    let aleatorio;
    for (let i = 1; i <= total; i++) {
        aleatorio = Math.floor((Math.random() * (100 - 0)) + 0);  
        b.push(aleatorio);
    }
    let cadena = b.toString();
    b = cadena.split(',');
}

function concatenar() {
    let total;
    if (a.length > b.length) {
        total = a.length
    } else {
        total = b.length
    }
    
    var concatenados = [];
    for (let i = 0; i < total; i++) {
        if (a[i] != null && b[i] != null) {
            concatenados.push(a[i]) + concatenados.push(b[i]);
        } else if (a.length > b.length) {
            concatenados.push(a[i]);
        } else {
            concatenados.push(b[i]);
        }
        concatenados[i];
    }
    let p = document.getElementById("resultado");
    p.innerHTML = "<h2>"+concatenados+"</h2";
}

function reinicar() {
    location.reload();
}