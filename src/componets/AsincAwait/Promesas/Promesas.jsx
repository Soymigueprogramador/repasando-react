// ¿ Que son las promesas en JavaScript ?
/*
    Las promesas en JavaScript son objetos que representan un evento a futuro,
    en general representa el resultado de eventual de una peticion asincronica.
    Las promesas tienen 3 estados:
    1. Pendiente (pending): Cuando la promesa no ha terminado de ejecutar
    2. Resuelta (fulfilled): Cuando la promesa se ha ejecutado
    3. Rechazada (rejected): Cuando la promesa se ha rechazada
*/

// ¿ como trabajar con una promesa ?
/**
    Para trabajar con promesas debemos crear una funcion fecha " = () => {}; ", 
    esto nos retorna un nuevo objeto de tipo promesa, para ello usamos " new Promise() ", 
    ls promesas son objetos que dentro traen 2 elementos que son funciones, estos elementos representan:
    1) la resolucion exitosa de la promesa.
    2) el reclazo de la promesa.
    y lo escribimos asi " return new Promise( resolve, reject ) "
*/

// Metodos ( then y catch )
/*
    Con los metodos then y catch podemos concatenar los metodos para returnar una funcion si la promesa 
    se cumple o es rechazada. 
    El metodo then se ejecuta cuando la promesa se cumple.
    El metodo catch se ejecuta cuando la promesa es rechazada.
    El metodo finally se ejecuta siempre. 
*/

const Promesas = () => {
  // Ejemplos con promesas.
  const tusFalsasPromesas = (estado) => {
    return new Promise((resolve, reject) => {
      if (estado) {
        resolve("Promesa resuelta");
      } else {
        reject("Promesa rechazada");
      }
    });
  };

  tusFalsasPromesas(false)
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    });

  // Practicando promesas con un array.
  const nombres = [ 'Miguel', 'Celeste', 'Araceli', 'Yazmin' ];

  const conectadoNombres = (estado) => {
    return new Promise((resolve, reject) => {
      const nombres = ['Juan', 'María', 'Pedro']; // Asumo que hay un array de nombres
      if (estado) {
        resolve(nombres);
      } else {
        reject('No se pudo conectar al array de nombres');
      }
    });
  };
  
  conectadoNombres(true)
    .then((res) => {
      console.table(res);
    })
    .catch((error) => { // Corregido: Cambié "catch( error )" por "catch((error) => {"
      console.log(error);
    });
  

    return <div>Promesas</div>;
};

export default Promesas;