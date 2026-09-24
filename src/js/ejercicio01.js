import { modificarConCondicion, modificarElementos02, modificarElementos01, mostrarLista, reducirArray } from "../services/servicesEj01.js";

const formulario = document.querySelector('#formulario');
// const entradaNumeros = document.querySelector('#datos');
const listaNumeros = document.querySelector("#listaNumeros");

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
   
    // validación de datos
    // const textoIngresado = entradaNumeros.value.trim();
    const textoIngresado = formulario.elements["datos"].value.trim();
    // proceso de validación 

    // map devuelve un array
    const arrayDeNumeros = textoIngresado.split('-').map(Number);

    // Mostramos el resultado en la consola para verificar su tipo de dato
    console.log("Array de números:", arrayDeNumeros);
    console.log("Tipo de dato del primer elemento:", typeof arrayDeNumeros[0]);
    
    mostrarLista(arrayDeNumeros, listaNumeros);

    // combinarArrays(arrayDeNumeros);

    // agregarElementos(arrayDeNumeros);
    // console.log(agregarElementos(arrayDeNumeros));

    // modificarElementos01(arrayDeNumeros);
    const numerosModificados = modificarElementos02(arrayDeNumeros);
    console.log(numerosModificados);

    modificarConCondicion(arrayDeNumeros);

    reducirArray(arrayDeNumeros);
});
