const clasificacion = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];
 
document.writeln("Clasificacion inicial<br>");
for (let i = 0; i < clasificacion.length; i++) {
    // texto += i + ". " + clasificacion[i];
    document.writeln(i + ". " + clasificacion[i] + "<br>");
}

console.log(clasificacion);

    // Celia adelanta a Raúl
clasificacion[2] = "Celia";
clasificacion[3] = "Raul";
    // Antonio es descalificado y se elimina del concurso
clasificacion.pop();
    // Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes:
    // Roberto y Amaya, en ese orden
clasificacion.splice(1, 0, 'Roberto', 'Amaya');
    // Hay una nueva participante que pasa a encabezar la clasificación: Marta
clasificacion.unshift("Maria");

document.writeln("<br>Clasificacion modificada<br>");
document.writeln("For in <br>")
for (let name in clasificacion) {
    document.writeln(name + ". " + clasificacion[name] + "<br>");
}
document.writeln("<br> For of <br>")
for (let name of clasificacion) {
    document.writeln(name + "<br>");
}