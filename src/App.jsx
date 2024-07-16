/*
  JSX es una extencion de JavaScript. si bien se relaciona con React,js aun asi es pripia de JavaScript.
  React.js es una combinacion de HTML con JavaScript
*/

// Cosas que cambian en React.js.
/**
  * Cada componente es una funcion.
    En la parte superior de la funcion vamos a escribir la logica y dentro de return vamos a escribir lka estructura de lo que vamos a mostrar.
  * Todos los elementos de JSX tienen que ser balanciados, es decir que deben tener una etiqueta de apertura y otra de cierre.
    una forma de abrebiar esto es con <etiqueta />
  * En JSX cuando queremos asignarle una clase para despues trabajar con css tenemos que hacer esto "className='nombredelaclase'"
*/

// Caracteristicas del componente.
/*
  Dentro del return vamos a tener un doble parentesis que dentro tiene un elemento que engloba a los demas y si este es eliminado la app se rompe,
  esto sucede porque cada elemento debe retornar un elemento de JSx.

*/
import TituloPrincipal from './componets/componentes1/TituloPrincipal/TituloPrincipal'
import ItenCount from './componets/componentes1/ItenCount/ItenCount'
import Contador from './componets/componentes2/Contador/Contador'
import Categorias from './componets/componentes2/Categorias/Categorias'
import UseRef from './componets/componentes2/useRef/UseRef'
import Temporizador from './componets/componentes2/Temporizador/Temporizador'

import AsyncAwait from './componets/consumientoAPIs/AsincAwait/AsincAwait.jsx'
import Api from './componets/consumientoAPIs/Api/Api.jsx'
import OtraApi from './componets/consumientoAPIs/Api/OtraApi.jsx'
import PeliApi from './componets/consumientoAPIs/Api/PeliApi.jsx'

const App = () => {
  // Vamos a escribir la logica
  return (
    <>
      {/* Vamos a renderizar la estructura */}
      <h1> Repasando React.js </h1>
      <TituloPrincipal TituloPrincipal={'Hola!! Estoy repasando React.js con Samu'} esto = {' esto tendria que haberlo hecho antes!!  '} />
      <ItenCount />
      <Contador stock={100} inicial={1} />
      <Contador stock={10} inicial={2} />
      <Categorias categorias={['Alfajores', 'Yerba', 'Dulce de leche', 'Bebidas']} />
      <UseRef />
      <Temporizador />

      <AsyncAwait />
      <Api />
      <OtraApi />
      <PeliApi />
    </>
  )
}

export default App;