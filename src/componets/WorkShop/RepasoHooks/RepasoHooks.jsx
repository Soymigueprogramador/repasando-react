import React from 'react';
import { useContador } from './useContador.js';
import { useFetch } from './useFetch.js';

const RepasoHooks = () => {
  const [contador, aumentar, disminuir] = useContador(1, 10);
  const { data: api, error } = useFetch();

  if (error) {
    return <div>Error al cargar los datos: {error.message}</div>;
  }

  return (
    <div>
      <h1>Mi contador</h1>
      <button onClick={aumentar}>Sumar</button>
      <strong>{contador}</strong>
      <button onClick={disminuir}>Restar</button>
    
      <h1> Cotización del dólar actual </h1>
      
      <ul>
        {api.map((item, index) => (
          <li key={index}>
            Compra: {item.compra}<br />
            Venta: {item.venta}<br />
            Casa: {item.casa}<br />
            Nombre: {item.nombre}<br />
            Moneda: {item.moneda}<br />
            Fecha de Actualización: {item.fechaActualizacion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepasoHooks;
