// Estilos condicionales en línea y con clases.
/*
    En React.js tenemos libertad absoluta para los estilos.
    ¿Cómo podemos aplicar estilos?
    1) Estilos en línea: <h1 style={{ propiedad: buleano ? valor }}></h1>
    2) Estilos en linea con clases <h1 className={ buleano }></h1> 
       ( Despues de definir las clases en el codigo de retirn las tenemos que nombrar en el archivo css o lo que estemos usando para los estilos )
    3) Estilos con clases mediante props <h3 className={clases}></h3> ( eN LOS ESTILOS ESCRIBIMOS LA NUEVA CLASE )
*/

import './EstilosCondicionales.css';

const EstilosCondicionales = ({ buleano, clases }) => {

  return (
    <div>
      <h3 style={{ color: buleano ? 'green' : 'red' }}>¡¿Qué onda perro?!</h3>
      <h3 className={  buleano ? 'amarrillo' : 'azul' }> Trabajando con estilos condicionales </h3>
      <h3 className={  buleano && 'amarrillo'  }> Trabajando con estilos condicionales </h3>
      <h3 className={clases}> Recibimos una clase por props </h3>
    </div>
  );
};

export default EstilosCondicionales;