
export const mostrarLista = (numeros, lista) =>{
    // map devuelve un array
    lista.innerHTML = numeros.map((numero,index)=>
    `<li>Número ${index +1}: <strong>${numero}</strong></li>`).join(" ");    
};

// spread operator
export const combinarArrays = (numeros) => {
    // copia
    const copiaDeNumeros = [...numeros];
    let otrosNumeros = [3,5,12,123];
    const nuevosNumeros = [...copiaDeNumeros, ...otrosNumeros];
    console.log(nuevosNumeros);
};

export const agregarElementos = (numeros) => (
    // validar
    // let nuevoArray = ["hola", "mundo", ...numeros];
    ["hola", "mundo", ...numeros]
    // retorno explícito
    // return nuevoArray;    
);

export const modificarElementos01 = (numeros) => {
    const nuevosNumeros = [...numeros];
    nuevosNumeros.forEach((n,i) => {
        n=n+10;
        console.log(`${n} en la posición ${i}`);
    });
    console.log(nuevosNumeros);
};

export const modificarElementos02 = (precios) => {
    const nuevosPrecios = [...precios];
    // nuevosNumeros.map((n,i) => {
    //     n=n+10;
    //     console.log(`${n} en la posición ${i}`);
    // });
    // console.log(nuevosNumeros);
    return nuevosPrecios.map(n=>n+10);
};


// filter devuelve un array pero con una condición
export const modificarConCondicion = (precios) => {
    //const preciosMayores = precios.filter(p=>{
        // condicion
    //    return p>30;
    //});

    // console.log(preciosMayores);
    console.log(precios.filter(p=>p<30));
};

// reduce 
export const reducirArray = (numeros)=>{
    const resultadoDelArray = numeros.reduce(nuevaFuncion,2);

    console.log(resultadoDelArray);
};

const nuevaFuncion = (acumulador,p)=>{
    return acumulador = acumulador * p;
}