// Programacion sincronica.
/*
    La programacion sincronica se caracteriza por tener un orden secuencial,
    es decir que primero se ejecuta una tarea y despues se ejecuta la siguiente tarea.
*/

// Programacion asincronica.
/*
    La programacion asincronica nos permite ejecutar varias tareas al mismo tiempo y en un orden no secuencial.
*/

// ¿ Como podemos practicar la programacion asincronica ?
/**
    para ellos tenemos que usar la funcion "setTimeOut()" que recibe dos parametros.
    * una funcion callback con la logica a implementar
    * un tiempo en milisegundos para que se ejecute la funcion callback.
*/

const AsincAwait = () => {
  // Ejemplo de sincronia. 
  console.log('tarea 1')
  console.log('tarea 2')
  
  // Ejemplo asincronico.
  setTimeout(() => console.log('Tarea A'), 2000);
  setTimeout(() => console.log('Tarea B'), 1000);
  
  return (
    <div>AsincAwait</div>
  )
}

export default AsincAwait