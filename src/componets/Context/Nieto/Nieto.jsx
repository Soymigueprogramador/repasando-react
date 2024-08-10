// Consimuendo datos por props:

{
  /* const Nieto = ({ herencia }) => {
  return (
    <div>
        <p>Tengo este efectivo: {herencia.efectivo}</p>
        <p>Tengo estas propiedades: {herencia.propiedades}</p>
        <p>Tengo estas empresas: {herencia.empresas}</p>
    </div>
  );
};

export default Nieto; */
}

// Consumiendo datos del contexto con el nodo consumidor y una funcion de renderizado:

{/* import { contexto } from "../../../Context/Context.js";

const Nieto = () => {
  return (
    <div>
      <contexto.Consumer>
        {(herencia) => (
          <div>
            <p>Tengo este efectivo: {herencia.efectivo}</p>
            <p>Tengo estas propiedades: {herencia.propiedades}</p>
            <p>Tengo estas empresas: {herencia.empresas}</p>
          </div>
        )}
      </contexto.Consumer>
    </div>
  );
};

export default Nieto; */}

// Consumiendo datos del contexto con el hooks useContext ( Es la forma mas simple y la ams usada );

// Pasos para trabajar de esta forma:
/**
  * Importamos el hook
  * Importamos el contect.
  * Creamos una variable que almacene el valor del contect.
  * 
*/

import { useContext } from "react";
import { contexto } from "../../../Context/Context.js";

const Nieto = () => {
  const herencia = useContext( contexto );
  
  return (
    <div>
      <p>Tengo este efectivo: {herencia.efectivo}</p>
      <p>Tengo estas propiedades: {herencia.propiedades}</p>
      <p>Tengo estas empresas: {herencia.empresas}</p>
    </div>
  )
}

export default Nieto