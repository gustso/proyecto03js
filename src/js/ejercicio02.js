import { guardarDatos, mostrarDatos } from "../services/servicesEj02.js"

const formulario = document.querySelector('#formulario');
const contenedorEstudiantes = document.querySelector("#listaEstudiantes");

const listaEstudiantes = [];

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
   
    const textoNombre = formulario.elements["nombre"].value.trim();
    const textoApellido = formulario.elements["apellido"].value.trim();
    
    listaEstudiantes.push(guardarDatos(textoNombre, textoApellido));
    mostrarDatos(listaEstudiantes, contenedorEstudiantes);

});

// legal propiedad intelectual uso de datos personal tratamiento de datos sensibles

// etica responsabilidad citar las fuentes

// tecnica tratamiento de errores tokens
