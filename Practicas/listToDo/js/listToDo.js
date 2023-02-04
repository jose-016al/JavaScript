/**
 * @fileoverview Esta aplicacion es un gestor de tareas con guardado de listas pendientes y eliminadas en 
 * Local Storage. El gestor de tareas no se mostra hasta que el usuario se haya registrado
 * 
 * @author      Jose Almiron
 * 
 */

/**
 * @param {Element} mensajeError Creamos el p del DOM que contendra el mensaje de error
 */
const mensajeError = document.createElement('p');
/**
 * Esta funcion nos ayudara a gestionar los errores posibles, creando mensajes de error, que se mostraran en el DOM, bajo el elemento padre 
 * @param {Element} elemento Este sera un elemento del DOM, se usara su padre para mostrar el mensaje de error
 * @param {String} textoError Sera un string, donde indicaremos el mensaje a mostrar
 * @param {Boolean} mostrarError Nos indicara si el mensaje debe mostrarse o no, True lo muestra
 * @returns Devuelve el mensaje introducido
 */
function error(elemento, textoError, mostrarError) {
    if (mostrarError == true) {
        mensajeError.innerHTML = textoError;
        mensajeError.classList.add("error", "visible");
        elemento.parentElement.appendChild(mensajeError);
        return mensajeError;
    } else {
        mensajeError.classList.remove("visible");
    }
}

/**
 * @param {Element} login_boton Boton de login 
 */
const login_boton = document.querySelector('#login_boton');
/**
 * @param {Element} cerrar_sesion Boton de cerrar sesion
 */
const cerrar_sesion = document.querySelector('#cerrar_sesion');
login_boton.addEventListener("click", login, false);

/**
 * Esta funcion nos permite realizar el login y el guardado del nombre del objeto usuario en el 
 * local Storage
 */
function login(evento) {

    const usuario = {
        username: document.querySelector('#username'),
        password: document.querySelector('#password'),
        email: document.querySelector('#email'),
        dni: document.querySelector('#dni')
    };

    if (validarLogin(usuario.username, usuario.password, usuario.email, usuario.dni) == true) {
        const usuarioJSON = JSON.stringify(usuario.username.value);
        localStorage.setItem("usuario", usuarioJSON);
    } else {
        evento.preventDefault();

    }
}

/**
 * Esta funcion valida el formulario de registro
 * @param {String} dni El dni que se introduce en el formulario
 * @param {String} email El email qe se introduce en el formulario
 * @param {String} username El nombre de usuario que se introduce en el formulario
 * @param {String} password El password que se introduce en el formulario 
 * @returns {Boolean}
 */
function validarLogin(username, password, email, dni) {
    let isCorrecto = true;
    const validarDNI = /^[0-9]{8}[a-zA-Z]$/;
    const validarEmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
    const validarPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
        // Valida la contraseña
    if (!validarPassword.test(password.value) && password.value.search(username) != 1) {
        error(password, "La contraseña no es valida", true);
        isCorrecto = false;
    } else if (!validarEmail.test(email.value)) {
        error(email, "La contraseña no es valida", true);
        isCorrecto = false;
    } else if (!validarDNI.test(dni.value)) {
        error(dni, "La contraseña no es valida", true);
        isCorrecto = false;
    } else {
        error(password, "", false);
        error(email, "", false);
        error(dni, "", false);
    }

    return isCorrecto;
}

/**
 * Este evento nos permite cerrar sesion, borrando el usuario del local Storage
 */
cerrar_sesion.addEventListener("click", () => {
    localStorage.removeItem("usuario");
    location.reload();
},false);

const containerLogin = document.querySelector(".login"),
    containerListaTareas = document.querySelector('.listaTareas'), 
    containerBusqueda = document.querySelector('#container_busqueda');;
if (JSON.parse(localStorage.getItem("usuario"))) {
    containerLogin.style.display = "none";
    containerListaTareas.style.display = "block";
    cerrar_sesion.style.display = "block";
    
} else {
    containerLogin.style.display = "block";
    containerListaTareas.style.display = "none";
    cerrar_sesion.style.display = "none";
}

/**
 * A partir de aqui se gestiona el gestor de tareas las variables que se definen a continuacion 
 * son elementos del DOM, arrays y objetos
 */

/**
 * @param {Element} boton_add Boton para añadir una nueva tarea
 */
const boton_add = document.querySelector('#boton_add');
/**
 * @param {Element} boton_busqueda Boton para mostrar la busqueda
 */
const boton_busqueda = document.querySelector('#boton_busqueda');
/**
* @param {Element} descripcion input donde se escribe la nueva tarea 
 */
const descripcion = document.querySelector('#descripcion');
/**
 * @param {Element} ul El ul para la lista de tareas
 */
const ul = document.querySelector('ul');
/**
 * @param {Element} sinTareas El div que muestra el mensaje sin tareas
 */
const sinTareas = document.querySelector('#sin_tareas');
/**
 * @param {Element} borrar_lista Creamos un boton para la eliminacion de todas las tareas
 */
const borrar_lista = document.createElement('buttom');
/**
 * @type {Array<object>} 
 */
var tareasPendientes = [], tareasEliminadas = [];
/**
 * Variables del JSON con sus claves
 * @param {JSON} tareasJSON Tareas pendientes guardadas en el local Storage
 */
var tareasJSON = JSON.parse(localStorage.getItem("tareasP"));
/**
 * @param {JSON} tareasEliminadasJSON Tareas eliminadas guardadas en el local Storage
 */
var tareasEliminadasJSON = JSON.parse(localStorage.getItem("tareasE"));
/**
 * @param {Element} sin_resultados Elemento del DOM para mostrar cuando no haya resultados
 */
const sin_resultados = document.querySelector('#sin_resultados');
/**
 * @param {Boolean} mostrarBusqueda Booleano que nos indica false o true para mostrar el contenedor de busqueda
 */
var mostrarBusqueda = false;
/**
 * @param {Element} busqueda Es el input de la busqueda 
 */
const busqueda = document.querySelector('#busqueda');
/**
 * @param {Boolean} isTareaTerminada Booleano que nos servira para saber si una tarea esta terminada o no
 */
var isTareaTerminada = false;
const date = new Date();
mostrarLista();

/**
 * Este evento llama a una funcion flecha para gestionar añadir una tarea, gestionando algunos errores
 * y modificando las teras pendientes guardadas en el local Storage
 */
boton_add.addEventListener("click", (evento) => {
    evento.preventDefault();

    const texto = descripcion;
    

    const tarea = {
        descripcion: descripcion.value,
        fecha: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
        hora: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
        terminada: 0
    }
    
    if (tareasJSON == null) {
        tareasPendientes = [];
    } else {
        tareasPendientes = tareasJSON;
    }
    for (let tarea of tareasPendientes) {
        if (tarea.descripcion == texto.value) {
            error(texto, "Tarea ya existente", true);
            descripcion.value = "";
            return;
        } else {
            error(texto, "", false);
        }
    }
    if (texto.value == "") {
        error(texto, "No se puede añadir una tarea vacia", true);
    } else {
        error(texto, "", false);
        tareasPendientes.push(tarea);
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = descripcion.value;
        descripcion.value = "";
        li.appendChild(p);
        li.appendChild(deleteTarea());
        ul.appendChild(li);
        containerListaTareas.appendChild(borrar_lista);
        
        localStorage.setItem('tareasP', JSON.stringify(tareasPendientes));
        
        comprobarSizeTareas();
    }
    
}, false);

/**
 * Esta funcion rellena lo lista de tareas pendientes añadiendolas al DOM, creamos un evento para 
 * especificar el funcionamiento dle boton borrar_lista, que borra todas las teras del array
 */
function mostrarLista() {
    if (tareasJSON == null) {
        tareasPendientes = [];
    } else {
        tareasPendientes = tareasJSON;
    }
    for (let tarea of tareasPendientes) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = tarea.descripcion;
        li.appendChild(p);
        li.appendChild(deleteTarea());
        ul.appendChild(li);
        containerListaTareas.appendChild(borrar_lista);
        if (tarea.terminada == 1) {
            p.classList.add('terminada');
        }
    }

    borrar_lista.addEventListener("click", () => {
        tareasEliminadas =  tareasEliminadas.concat(tareasPendientes);
        localStorage.setItem('tareasE', JSON.stringify(tareasEliminadas));
        tareasPendientes = [];
        localStorage.setItem('tareasP', JSON.stringify(tareasPendientes));
        ul.innerHTML = "";
        sinTareas.style.display = "block";
        borrar_lista.style.display = "none";
        tareas_Eliminadas();
        comprobarSizeTareas();
    },false);

    comprobarSizeTareas();
}

/**
 * Esta funcion gestiona la eliminacion de las tareas individuales, creando un boton para la eliminacion,
 * usa un evento para el funcionamiento del boton. Las tareas eliminadas se borran del array de tareas pendientes
 * y se añaden al array de tareas eliminadas
 */
function deleteTarea() {
    const boton_delete = document.createElement('buttom');

    boton_delete.textContent = "X";
    boton_delete.id = "boton_delete";

    boton_delete.addEventListener("click", (evento) => {
        const elemento_eliminar = evento.target.parentElement;

            // Gestion de tareas eliminadas
        let eliminar = elemento_eliminar.querySelector('p').textContent;
        for (let tarea of tareasPendientes) {
            if (tarea.descripcion == eliminar) {
                tareasEliminadas.push(tarea);
                tareasPendientes.splice(tarea, 1)
                localStorage.setItem('tareasP', JSON.stringify(tareasPendientes));
                localStorage.setItem('tareasE', JSON.stringify(tareasEliminadas));
                tareas_Eliminadas();
            }
        }

        ul.removeChild(elemento_eliminar);

        comprobarSizeTareas();
    });
    
    return boton_delete;
}

ul.addEventListener('click', tareasTerminadas, false);
/**
 * Esta funcion le añade una clase a las tareas terminadas que cambiara su formato desde css, 
 * modifica el valor de tarea terminada a 1 o 0, para que los cambios queden guardados en el local Storage
 */
function tareasTerminadas(evento) {
    let p = evento.target.parentElement.querySelector('p');
    for (let tarea of tareasPendientes) {
        if (tarea.descripcion == p.textContent) {
            if (tarea.terminada == 0) {
                isTareaTerminada = true;
                tarea.terminada = 1;
                p.classList.add('terminada');
                localStorage.setItem('tareasP', JSON.stringify(tareasPendientes));
            } else {
                isTareaTerminada = false;
                tarea.terminada = 0;
                p.classList.remove('terminada');
                localStorage.setItem('tareasP', JSON.stringify(tareasPendientes));
            }
        } 
    }
}

/**
 * Este condicional comprueba si existe en el local Storage un array de tareas eliminadas, en caso de que no exista lo crea
 * en caso de que ya exista lo rellena con el que esta guardado y llama a la funcion tareas_Eliminadas
 */
if (tareasEliminadasJSON == null) {
    tareasEliminadas = [];
} else {
    tareasEliminadas = tareasEliminadasJSON;
    tareas_Eliminadas();
}

/**
 * Esta funcion muestra una lista por consola, recorriendo el array de tareas eliminadas
 */
function tareas_Eliminadas() {
    let eliminada = "Tareas eliminadas:\n";
    for (let i = 0; i < tareasEliminadas.length; i++) {
        eliminada += i + ": " + tareasEliminadas[i].descripcion + " " + tareasEliminadas[i].fecha + " " + tareasEliminadas[i].hora + "\n";
    }
    // console.clear();
    console.log(eliminada);
}

/**
 * Esta funcion comprueba el tamaño del array de tareas pendientes, segun su tamaño muestra o no ciertos elementos del DOM
 */
function comprobarSizeTareas() {
    if (tareasPendientes.length == 0) {
        sinTareas.style.display = "block";
        borrar_lista.style.display = "none";
        boton_busqueda.style.display = "none";
    } else {
        sinTareas.style.display = "none";
        borrar_lista.style.display = "block";
        borrar_lista.textContent = "Eliminar " + tareasPendientes.length;
        borrar_lista.id = "borrar_lista";
        boton_busqueda.style.display = "block";
    }
}


boton_busqueda.addEventListener("click", (evento) => {
    evento.preventDefault();
    if (mostrarBusqueda == false) {
        containerBusqueda.style.visibility  = "visible";
        containerBusqueda.style.opacity  = "100%";
        containerBusqueda.style.transform = "translateY(0%)";
        mostrarBusqueda = true;
    } else {
        containerBusqueda.style.visibility  = "hidden";
        containerBusqueda.style.opacity  = "0%";
        containerBusqueda.style.transform = "translateY(-100%)";
        mostrarBusqueda = false;
    }
}, false);

busqueda.addEventListener("input", (evento) => {
    console.log(evento.target.value);
    const campoBuscar = evento.target.value;
    ul.innerHTML = "";
    let contador = 0;
    for (let tarea of tareasPendientes) {
        if (tarea.descripcion.includes(campoBuscar)) {
            contador++;
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.textContent = tarea.descripcion;
            li.appendChild(p);
            li.appendChild(deleteTarea());
            ul.appendChild(li);
        } 
        sinTareas.style.display = "none";
        borrar_lista.style.display = "none";
    }
    if (contador == 0) {
        sin_resultados.style.display = "block";
    } else {
        sin_resultados.style.display = "none";
        comprobarSizeTareas();
    }
}, false);