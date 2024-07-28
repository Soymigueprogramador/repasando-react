// Custom hooks.
/* 
    Sbi bien en React.js tenemos los hooks ya creados como useState o useEffect tambien podemos crear nuestros propios hooks para cuando trabajamos con 
    componentes o elementos que vamos a repetir varias veces dentro de nuestra app.
*/

// ¿ Como trabajar con los custom hooks ?
/**
    * Para trabajar con los custom hooks debemos tener algunas cosas en cuenta.
    * debemos usar PascalCase para nombrarlos.
    * Cuando los tengamos que usar debemos crearlos y dejarlos fuera de la carpeta de componentes.
    * Debemos crear una carpeta llamada " CustomHooks " o similar.
    * Debemos crear un archivo para cada custom hooks.
*/

// ¿ Como crear nuestro propio custom hooks ?
/*
    1- Si necesitamos usar estados o algun hooks de React simplemente lo importamos.
    2- Debemos crear una funcion y dejarla disponible para toda la aplicacion.
    3- Dentro de dicha funcion general creamos la funcionalidad que va a tener nuestro custom hooks.
    4- Despues de crear dicha funcionalidad debemos retornar algunos datos como: 
       A) El estado creado para dicho custom hooks.
       B) Las funciones internar que estan dentro de dicho custom hooks.
    5- Una ves terminado de crear el custom hooks debemos importarlo y llamarlo en el archivo deceado. 

*/

// Contador.
import { useState } from "react";

export const useContador = ( valorInicial, valorMaximo ) => {
    const [ contador, setContador ] = useState(valorInicial);

    const aumentar = () => {
        if( contador < valorMaximo ) {
            setContador( contador + 1 );
        }
    };

    const disminuir = () => {
        if( contador > valorInicial ) {
            setContador( contador - 1 );
        }
    };

    return [
        contador,
        aumentar,
        disminuir
    ]

};