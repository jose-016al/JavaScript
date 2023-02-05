const player = document.getElementById('player');
const button = document.getElementById('button');
const mensaje = document.querySelector("#mensajeRepoduccion");
const time = document.querySelector("#time");
const name = document.querySelector("#name");
const duracion = document.querySelector("#duracion");
const barraProgreso = document.querySelector("#barraProgreso");
const cancion = document.querySelector("#cancion");
const formCancion = document.querySelector("#formCancion");
const imagenBoton = document.querySelector("#imagenBoton");
const disco = document.querySelector("#disco");

let tiempo;

/**
 * Este evento se encarga de seleccionar la cancion y la añade al componente player
 */
formCancion.addEventListener('change', (e) => {
    e.preventDefault();
    player.src = URL.createObjectURL(cancion.files[0]);
});


/**
 * Este evento se encarga de la gestion del boton de reproduccion y pausa, añade datos adicionales, como la duracion, el nombre de la cancion, el tiempo actual
 */
button.addEventListener('click', () => {
    if (player.paused) {
        player.play();
        imagenBoton.src = "img/iconPause.png";
        mensaje.innerHTML = "Reproduciendo..."; 
        tiempo = setInterval(updateTime, 1000);
        name.innerHTML = cancion.files[0].name;
        duracion.innerHTML = formatearDuracion(player.duration);
    } else{
        player.pause();
        imagenBoton.src = "img/iconPlay.png";
        clearInterval(tiempo);
        mensaje.innerHTML = "";
        name.innerHTML = "";
        time.innerHTML = "";
        duracion.innerHTML = "";
    }
})


/**
 * Este evento se encarga de rellenar la barra de progreso segun vaya avanzado la cancion
 */
player.addEventListener("timeupdate", () => {
    const porcentajeCompleto = (player.currentTime / player.duration) * 93;
    barraProgreso.style.width = porcentajeCompleto + "%";
    disco.style.transform = `rotate(${porcentajeCompleto*2}deg)`;
    console.log(barraProgreso.style.width);
})

/**
 * Esta funcion se encargar de actualizar el tiempo de la cancion y escribirlo en el DOM, esta funcion es necesaria para el setInterval
 */
function updateTime() {
    time.innerHTML = player.currentTime;
    time.innerHTML = formatearDuracion(player.currentTime);
}

/**
 * Esta funcion se encargar de darle formato al tiempo de la cancion 
 * @param {Number} segundos Pasamos los segundos de la cancion (currentime) o la duracion de la cancion (duration
 * @returns Devuelve el tiempo formateado de la cancion en minutos:segundos, segundos
 */
function formatearDuracion(segundos) {
    const minutos = Math.floor(segundos / 60);
    segundos = Math.floor(segundos % 60);
    return minutos + ":" + (segundos < 10 ? "0" + segundos : segundos);
}