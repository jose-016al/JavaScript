if (!document.cookie) {
    alert("No hay cookie");
} else {
    alert("Hola " + document.cookie.split("=")[1]);
}

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
        // generamos lo datos ha mostrar
    if (error == false) {
        var texto = "<p>El numero de elementos del formulario es " + formulario.length + "</p>";
        texto += "<h3>Los elementos de texto o de correo electronico son:</h3>"
        for (let i = 0; i < formulario.length; i++) {
            if ((formulario.elements[i].type == "text") || (formulario.elements[i].type == "email")) {
                texto += "<strong>" + formulario.elements[i].name + "</strong>";
                texto += " Valor: " + formulario.elements[i].value; 
                texto += "<br>"
            }
        }
        texto += "<p><strong>Tu profesion es: </strong>" + formulario.profesion.options[formulario.profesion.selectedIndex].text + "</p>";

            // generamos la fecha de hoy
        var date = new Date();
        var fecha = "La fecha de hoy es: " + date.getDate() + " del mes " + date.getMonth() + " del año " + date.getFullYear();
        texto += "<p style='color:red;'>" + fecha + "</p>"

            // mostramos la cookie
        texto += "La cadena contenida en la cookie es:";
        document.cookie = "usernmae=" + formulario.user_name.value.split(' ')[0];
        texto += "<p>" + document.cookie + "</p>";

            // mostramos el resultado en la nueva ventana
        ventana = window.open("", "formulario", "height=400, width=500");
        ventana.document.write(texto);
    }
}

    // 7 eliminar cookie
function borraCookie() {
    document.cookie = "username=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}