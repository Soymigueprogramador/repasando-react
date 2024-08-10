// Pasos para crear el archivo de context.js

/*
    1- Creamos una carpeta llamada 'context', dentro creamos un archivo llamado 'context.js'
       ( Esta carpeta debe estar afuera de lacarpeta componets ).
    
    2- Una ves creado el context le damos un valor por defecto, para ellos hacemos esto.

    3- Importamos el archivo context.js en el archivo app.jsx

    4- Consumir el contexto en el componente deseado, para ellos creamos una funcion de renderizado. 
*/

// Valor por defecto.
import React from "react";

export const contexto = React.createContext(null); 