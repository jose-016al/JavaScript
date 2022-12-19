var personas = [
    {nombre: "Carla Lopez Lopez", email: "carla@gamil.com", edad: 13, color: "lightgreen"},
    {nombre: "Eva Casas Martin", email: "eva@gamil.com", edad: 17, color: "yellow"},
];

function Persona(nombre, email, edad, color) {
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
    this.color = color;
};

function obtenerPersonas() {
    const p1 = new Persona();
    p1.nombre = document.getElementById("user_name1").value;
    p1.email = document.getElementById("user_mail1").value;
    p1.edad = document.getElementById("user_age1").value;
    p1.color = document.getElementById("user_color1").value;
    personas.push(p1);

    const p2 = new Persona();
    p2.nombre = document.getElementById("user_name2").value;
    p2.email = document.getElementById("user_mail2").value;
    p2.edad = document.getElementById("user_age2").value;
    p2.color = document.getElementById("user_color2").value;
    personas.push(p2);
}

function mostrarPersonas(obtener=true) {
    obtenerPersonas();
    var texto = "";
    const fragment = document.createDocumentFragment();
    var br = document.createElement("br"); 
    var ventana;
    for (let p of personas) {
        const div = document.createElement("div");
        div.textContent = "nombre tiene el valor " + p.nombre
        + "email tiene el valor " + p.email
        + "edad tiene el valor " + p.edad
        + "color tiene el valor " + p.color;
        div.style = "background-color: " + p.color;
        fragment.appendChild(div);
        fragment.appendChild(br.cloneNode());
    }

    ventana = window.open("", "ventana resultados", "width=600, height=400");
    ventana.document.body.appendChild(fragment);
}

function eliminarPrimeraUltima() {
    obtenerPersonas();
    personas.pop();
    personas.shift();
    console.log(personas);
    mostrarPersonas();
}

function modificarPersona() {
    for (let p of personas) {
        p.edad += 1;
    }
    mostrarPersonas();
}





if (!document.cookie) {
    alert("No hay cookie");
} else {
    alert("Hola " + document.cookie.split("=")[1]);
}

function cambiarEdad() {
    let edad = document.getElementById("user_age1").value;
    let edadSeleccionada = "", edadTexto = "";
    if (edad > 18) {
        edadSeleccionada = document.getElementById("mayor");
        edadTexto = document.getElementById("textoMayor");
    } else {
        edadSeleccionada = document.getElementById("menor");
        edadTexto = document.getElementById("textoMenor");
    }
    edadSeleccionada.checked = true;
    edadTexto.style.color = "yellow";
    console.log(edadTexto);
}

function cambiarProfesion(select) {
    let profesion = select.options[select.selectedIndex].text;
    if (confirm("Eres " + profesion) != true) {
        select.selectedIndex = 0;
    }
}


function borraCookie() {
    document.cookie = "username = expires=Thu, 01 Jan 1970 00:00:00 UTC";
}