// document.cookie?alert("Hola "+document.cookie.split("=")[1]):alert("No hay cookies");

    // 3 al introducir la edad se marcará el checkbox adecuado poniendo en verde la etiqueta correspondiente
function cambiarEdad() {
    let edad = document.getElementById("user_age").value;
    let seleccionado = "", texto = "";
    if (edad > 18) {
        seleccionado = document.getElementById("mayor");
        texto = document.getElementById("textoMayor");
    } else {
        seleccionado = document.getElementById("menor");
        texto = document.getElementById("textoMenor");
    }
    seleccionado.checked = true
    texto.style.color = "green";
}

    // 4 nos pide confirmacion de la profesion, en caso de candelar el confirm la lista se quedara con su estado inicial
function cambiarProfesion(seleccion) {
    let profesion = seleccion.options[seleccion.selectedIndex].text;
    if (confirm(`¿Eres ${profesion} ?`) != true) {
        seleccion.selectedIndex = 0;
    }
}

function GestionarFormulario() {
    var error = false;
    
    // 5 comprobamos si hay errores
    if ((document.getElementById("user_age").value == "") || (document.getElementById("condiciones").checked == false)) {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML += "<p>Ha habido errores:</p>";
        resultado.innerHTML += "<p style='color:red;'>La edad o las condiciones no se han completado</p>"
        resultado.style.backgroundColor = "yellow";
        error = true;
    }
    
    var ventana;
    var formulario = document.getElementsByTagName("form")[0];
    if (error == false) {
        var texto = "<p>El numero de elementos del formulario es " + formulario.length + "</p>";
        texto += "<h2>Los elementos de texto o de correo electronico son:</h2>"
        
    }
}