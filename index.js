class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.estado = 'pendiente'
    }
}

const tareas = []

document.getElementById("inputButton").addEventListener("click", crearTareas)

function crearTareas() {
    const inputTarea = document.getElementById("inputText").value.trim()

    if (inputTarea !== '') {
        const tarea = new Tarea(inputTarea)
        tareas.push(tarea)
        vista()
    }

}


function vista() {
    const pendientes = document.getElementById("listaPendiente");
    const enProgreso = document.getElementById("listaEnProgreso");
    const completadas = document.getElementById("listaCompletadas");

    pendientes.innerHTML = ''
    enProgreso.innerHTML = ''
    completadas.innerHTML = ''

    tareas.forEach((tarea, index) => {
        const item = document.createElement("div")
        item.className = 'task'
        item.innerHTML = `
            <p class='titleCard'>${tarea.nombre}</p>
            <div class='taskButtons'>
                ${tarea.estado === 'pendiente' ? `<button onclick="cambiarEstado(${index}, 'progreso')">En progreso</button>` : ''}
                ${tarea.estado === 'progreso' ? `
                    <div class='buttonsSeparate'>
                        <button onclick="cambiarEstado(${index}, 'completado')">completado</button>
                        <button onclick="cambiarEstado(${index}, 'pendiente')">pendiente</button>
                    </div>
                ` : ''}
                ${tarea.estado === 'completado' ? "" : ''}
            </div>
        `

        if (tarea.estado == "pendiente") {
            pendientes.appendChild(item)
        } else if (tarea.estado == "progreso") {
            enProgreso.appendChild(item)
        } else {
            completadas.appendChild(item)
        }
    });
}

function cambiarEstado(index, nuevoEstado) {
    if (tareas[index].estado !== 'completada') {
        tareas[index].estado = nuevoEstado;
        vista();
    }
}