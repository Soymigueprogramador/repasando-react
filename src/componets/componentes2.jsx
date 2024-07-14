// ¿ Que es un componente ?
/**
    Un componente es un conjunto de elementos que cumplen una misma funcion en la interfaz del proyecto.
    un componente puede ser:
    * un boton
    * un input
    * un formulario y demas.
 */

// Ciclos de un componente.
/**
    Los ciclos de un componente son:
    * Montaje: esto sucede cuando un componente entra al dom.
    * Actualizacion: esto sucede cuando un componente ya esta en el dom y se actualiza
    * Desmontaje: esto sucede cuando salimos del componente actual y pasamos a otro componente. 
 */

// Nuevos hooks en react.
/* 
    El efecto promario de React es renderizar componentes, manipulando el DOM. 
    Pero una aplicacion web tiene que hacer mucho mas que solo mostrarse, tambien tiene que:
    1- Realizar operaciones.
    2- consumir informacion del algun servidor mediante una API.
    3- usar eventos y demas cosas. 
*/

// useEffect
/*
    useEffect es un hook que nos permite realizar mas operaciones aparte de renderizar un componente.
    Tambien nos permite controlar eventos producidos por las actualizaciones de los estados de otros componentes. 
*/

const componentes2 = () => {
  return (
    <div>componentes2</div>
  )
}

export default componentes2; 