// En linea con fragment.

/*
    La usamos para renderizar un elemento condicional en funcion a una expresion buleana.
*/

// En este caso lo recibimos mediante props.

const Tecnica2 = ({ buleano }) => {
    return (
      <>
        {/* Si es verdadero va a mostrar lo indicado en la linea correspondiente a true */}
        {buleano && <h1>Usuario autorizado</h1>}
        
        {/* Si es falso va a mostrar lo indicado en la linea correspondiente a false */}
        {!buleano && (
          <>
            <h1> Usuario no autorizado </h1>
            <button> Registrate </button>
          </>
        )}
      </>
    );
  }
  
  export default Tecnica2;
  