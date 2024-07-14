// Creando un contador.
/**
    * Tenemos que trabajar con un estado.
    * Para modificar el estado tyenemos que ayudarnos con las funciones propias de React llamadas hooks.
    * 
*/

import { useState } from "react"

const ItenCount = () => {
  // El primer elemento es el nombre del estado que estamos creando y el segundo elemento es la funcion que cambia ese estado asi que tenemos que usar "set" antes del nombre del estado.
    const [ contador, setContador ] = useState(1)
    
    // Funciones para incrementar y decrementar el contador.
    const incrementar = () => {
        if( contador < 10 ) {
            setContador(contador + 1)
        }
    };

    const decrementar = () => {
        if( contador > 1 ) {
            setContador(contador - 1)
        }
    };

    return (
    <>
        <button onClick={decrementar}> - </button>
        <p> { contador } </p>
        <button onClick={incrementar}> + </button>
    </>
  )
}

export default ItenCount