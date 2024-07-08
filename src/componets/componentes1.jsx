// Componentes 1

// ¿ Qu son los componentes en React.js
/*
    Los componentes en React.js son conjuntos delelementos que cumplen una funcion espesifica. 
    podemos decir que una card seria un componente o un formulario tambien es un componente pero tambien podemos crear componentes mas pequeños como un boton o un titulo y
    despues simplemente lo invocamos en el lugar necesario y listo. 
    Al trabajar con componentes tenemos ventajas como:
    - Reutilizacion de codigo
    - Facilidad de mantenimiento
    - Facilidad de testear y depura
    - Favorece la separacion de tareas en un trabajo colaborativo. 
*/

// Caracteristicas de un componente.
/*
    - Una de sus caracteristicas prinicipales es que un componente es capaz de renderizar un unico elemento y que a su vez este tiene otros elementos en su interior.
    - Pueden recibir props (Propiedades) esto permite que un componente padre le pase informacion a un componente hijo. 
    - Pueden tener estado (state) esto permite que un componente tenga un estado interno 
*/

// Ejemplo de props.
/**
  * Creamo un componente llamado ( TituloPrincipal.jsx ).
  * dentro del componente hijo escribimos ( props ) entre los parentesis de la funcion que se crea junto al componente.
  * en el componente padre escribimos la informacion que le vamos a mandar al componente hijo como si fueran atributos de HTML.
  * en el componente hijo llamamos a las props ( { props.nombreDeLaProps } o tambien { nombreDeLaProps } )
*/

// ¿ Que son los estados en React.js ?
/*
  Los estados son objeto que estan dentro del componente y contienen informacion del mismo, esta informacion puede cambiar durante la ejecucion de la aplicacion. 
  un ejemplo simple de un estado en react es un contador, ya que a medida que seleccionamos que incremente o decremente esta informacion va a cambiar. 
*/

// ¿ Que son los hooks en React ?
/*
  Llos hooks son funciones integradas en React que nos permiten modificar los estados.
  ¿ Que tipos de hooks tenemos ?
  - useState: 
    Este hooks nos permite crear un estado.
    Este hooks nos devuelve un estado con 2 elementos,
    A) El primer elemento es el estado actual.
    B) El segundo elemento es una funcion que nos permite modificar el estado.
  - useEffect:
    Este hooks nos permite ejecutar codigo cuando el componente se renderiza.
*/

const componentes1 = () => {
  return (
    <div>componentes1</div>
  )
}

export default componentes1