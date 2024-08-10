/*
  JSX es una extensión de JavaScript. Si bien se relaciona con React, aún así es propia de JavaScript.
  React.js es una combinación de HTML con JavaScript.
*/

// Cosas que cambian en React.js.
/**
  * Cada componente es una función.
    En la parte superior de la función vamos a escribir la lógica y dentro de return vamos a escribir la estructura de lo que vamos a mostrar.
  * Todos los elementos de JSX tienen que ser balanceados, es decir que deben tener una etiqueta de apertura y otra de cierre.
    Una forma de abreviar esto es con <etiqueta />.
  * En JSX, cuando queremos asignarle una clase para después trabajar con CSS tenemos que hacer esto "className='nombreDeLaClase'".
*/

// Características del componente.
/*
  Dentro del return vamos a tener un doble paréntesis que dentro tiene un elemento que engloba a los demás y si este es eliminado la app se rompe,
  esto sucede porque cada componente debe retornar un elemento de JSX.
*/

import TituloPrincipal from "./componets/componentes1/TituloPrincipal/TituloPrincipal.jsx";
import ItemCount from "./componets/componentes1/ItenCount/ItenCount.jsx";
import Contador from "./componets/componentes2/Contador/Contador.jsx";
import Categorias from "./componets/componentes2/Categorias/Categorias.jsx";
import UseRef from "./componets/componentes2/useRef/UseRef.jsx";
import Temporizador from "./componets/componentes2/Temporizador/Temporizador.jsx";
import AsyncAwait from "./componets/AsincAwait/AsincAwait.jsx";
import Promesas from "./componets/AsincAwait/Promesas/Promesas.jsx";
import Map from "./componets/AsincAwait/Map/Map.jsx";
import ApiSimpson from "./componets/AsincAwait/ApiSimpson/ApiSimpson.jsx";
import Api from "./componets/consumientoAPIs/Api/Api.jsx";
import OtraApi from "./componets/consumientoAPIs/Api/OtraApi.jsx";
import PeliApi from "./componets/consumientoAPIs/Api/PeliApi.jsx";
import EmailJS from "./componets/consumientoAPIs/Api/EmailJS.jsx";
import Articulos from "./componets/WorkShop/Articulos/Articulos.jsx";
import RepasoHooks from "./componets/WorkShop/RepasoHooks/RepasoHooks.jsx";
import Mensaje from "./componets/WorkShop/PatronesDeDiseño/Mensaje.jsx";
import {
  MensajeConTitulo,
  ConUaumentos,
} from "./componets/WorkShop/PatronesDeDiseño/Cos.jsx";
import Productos from "./componets/WorkShop/PatronesDeDiseño/Productos.jsx";
import Login from "./componets/WorkShop/PatronesDeDiseño/Login/Login.jsx";
import Eventos from "./componets/Eventos/Eventos.jsx";
import Formulario from "./componets/Eventos/Formulario/Formulario.jsx";
import Automatico from "./componets/Eventos/Automatico/Automatico.jsx";
import Abuelo from "./componets/Context/Abuelo/Abuelo.jsx";
import { contexto } from "./Context/Context.js";

const App = () => {
  // Vamos a escribir la lógica
  const NuevoComponente = MensajeConTitulo(Mensaje);
  const NuevoPrecio = ConUaumentos(Productos);

  // Ejemplo con herencias de props.
  const herencia = {
    efectivo: 300,
    propiedades: 3,
    empresa: 3,
  };

  return (
    <>
      {/* Vamos a renderizar la estructura */}
      <h1>Repasando React.js</h1>
        <TituloPrincipal
          titulo="Hola!! Estoy repasando React.js con Samu"
          esto="esto tendría que haberlo hecho antes!!"
        />
        <ItemCount />
        <Contador stock={100} inicial={1} />
        <Contador stock={10} inicial={2} />
        <Categorias
          categorias={["Alfajores", "Yerba", "Dulce de leche", "Bebidas"]}
        />
        <UseRef />
        <Temporizador />
        <AsyncAwait />
        <Promesas />
        <Map />
        <ApiSimpson />
        <Api />
        <OtraApi />
        <PeliApi />
        <EmailJS />
        <Articulos
          img="https://phantom-marca-mx.unidadeditorial.es/d63b456d92448d91dd7d127c3d744e80/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/11/17/17002401760128.jpg"
          titulo="La bombonera"
        />
        <Articulos
          img="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0927%2Fr1230445_1296x729_16%2D9.jpg"
          titulo="La bombonera"
        >
          <p>El mejor estadio del mundo!!!</p>
        </Articulos>
        <RepasoHooks />
        <Mensaje />
        <NuevoComponente />
        <NuevoPrecio nombre="Facturas" precio={5000} />
        <Login />
        <Eventos />
        <Formulario />
        <Automatico />
        {/* <Abuelo herencia={ herencia } />  Ejemplo hecho con props de forma tradicional  */}
      <contexto.Provider value={ herencia } >
       <Abuelo /> 
      </contexto.Provider>
    </>
  );
};

export default App;