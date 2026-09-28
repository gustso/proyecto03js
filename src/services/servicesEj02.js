export const guardarDatos = (nombre, apellido) =>{
    const estudiante = {
        nombre : nombre,
        apellido: apellido,
        estado: true
    }

    return estudiante; 
};

export const mostrarDatos = (estudiantes, contenedor) =>{    
    contenedor.innerHTML = estudiantes.map((estudiante,index)=>
    `<li>Número ${index +1}: <strong>${estudiante.apellido} ${estudiante.nombre}</strong></li>`).join(" ");    
};
