const API_URL = "http://localhost:3000/api/libros";


async function obtenerLibros() {
    const res = await fetch(API_URL);
    const datos = await res.json();

    const tabla = document.getElementById("tablaLibros");
    tabla.innerHTML = "";

    datos.forEach(libro => {
        tabla.innerHTML += `
            <tr>
                <td>${libro.titulo}</td>
                <td>${libro.autor}</td>
                <td>${libro.anioPublicacion || "-"}</td>
                <td>${libro.genero || "-"}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editarLibro('${libro._id}')">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="eliminarLibro('${libro._id}')">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

obtenerLibros();

document.getElementById("formLibro").addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = document.getElementById("idLibro").value;
    let genero = document.getElementById("genero").value;
    if (genero === "") {
        alert("Por favor seleccione un género.");
        return;
    }

    const datos = {
        titulo: document.getElementById("titulo").value,
        autor: document.getElementById("autor").value,
        anioPublicacion: document.getElementById("anioPublicacion").value,
        genero: genero
    };

    let metodo = id ? "PUT" : "POST";
    let url = id ? `${API_URL}/${id}` : API_URL;

    const res = await fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos)
    });

    if (!res.ok) {
        alert("No se pudo guardar el libro. Revisa la consola.");
        return;
    }

    limpiarFormulario();
    obtenerLibros();
});

async function editarLibro(id) {
    const res = await fetch(`${API_URL}/${id}`);
    const libro = await res.json();

    document.getElementById("idLibro").value = libro._id;
    document.getElementById("titulo").value = libro.titulo;
    document.getElementById("autor").value = libro.autor;
    document.getElementById("genero").value = libro.genero;
    document.getElementById("anioPublicacion").value = libro.anioPublicacion;
}

async function eliminarLibro(id) {
    const confirmar = confirm("¿Seguro que deseas eliminar este libro?");
    if (!confirmar) return;

    await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    obtenerLibros();
}

function limpiarFormulario() {
    document.getElementById("formLibro").reset();
    document.getElementById("idLibro").value = "";
}



function AñadirFormulario() {
    limpiarFormulario();
    document.getElementById("titulo").focus();
}

