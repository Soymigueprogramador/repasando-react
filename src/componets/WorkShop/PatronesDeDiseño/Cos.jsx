// Componentes de orden superior.

import { func } from "prop-types";

// Patrones de diseño.
/*
    En React.js tenemos algunos patrones de diseño que nos permiten reutilizar componentes.
*/
// High order components ( Componentes de orden superior )
/*
    Es una funcion que toma como argumento a un componente y devuelve un nuevo componente con funcionalidades adicionales.
*/

// Ejemplo 1
/*
    1- Vamos a crear una funcion que toma como argumento a un componente llamado mensaje y le agregamos un titulo.
    2- En los argumentos de la funcion agregamos el nombre del componente como argumento.
    3- Al nuevo componente lo vamos a trabajar con una funcion anonima.
    4- Dentro de la funcion anonima metemos otro return.
    5- Dentro escribimos un fragme " <></> "
    6- dentro del fragmen nombramos al componente que llega por parametros " <ComponenteEnParametros /> "
    7- Agregamos el resto de la estructura necesaria.
*/

export const MensajeConTitulo = (Mensaje) => {
    return function() {
        return (
            <>
                <h1> Este es un lorem re largo </h1>
                <Mensaje />
            </>
        );
    }
};

export const ConUaumentos = (Productos) => {
    return function({ nombre, precio }) {
        let nuevoPrecio = precio + 1000;
        return (
            <>
                <Productos />
                <p>{nombre}</p>
                <p>{nuevoPrecio}</p>
            </>
        );
    }
};

const Cos = () => {
  return (
    <div>Cos</div>
  )
}

export default Cos;