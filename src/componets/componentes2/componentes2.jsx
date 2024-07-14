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

// useRef
/**
    useRef es un hook que nos permite crear una referencia mutable que puede ser actualizada sin probocar una nueva renderizacion del componente. 
    una referencia mutable significa que puedo cambiar el valor.
    Este hook me retoruna un objeto que tiene una propiedad llamada "current" en la cual puedo guardar ese valor mutable.
    
*/ 

const componentes2 = () => {
  return (
    <div>componentes2</div>
  )
}

export default componentes2; 