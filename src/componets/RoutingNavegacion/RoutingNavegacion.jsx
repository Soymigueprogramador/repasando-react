// Tipos de enlaces
/*
    Dentro de la etiqueta a " <a href=''></a> " que se usan en HTML tenemos dos tipos de enlaces
    1- Enlaces relativos:
       Los enlaces relativos son aquellos enlaces que permiten la conexion de elementos como multimedia, otras paginas y demas
       pero que estas estan dentro de nuestro proyecto.
    2- Enlaces absolutos:
       Son aquellos enlaces que me permiten conectarme a otros elementos o paginas qyue estan por fuera de mi proyecto ( en internet )
       estos pueden ser enlaces a youtube, google o alguna otra pagina web.
    
       En React.js no es recomendable usar la etiqueta a ya que haria que se recargue la pagina perdiendose el sentido al usar React 
       y ademas consume muchos recursos y vuelve lenta a nuestra pagina.
*/

// Librerias de enrutamiento ( react-router-dom )
/*
    Si bien tenemos muchas librerias o dependencias que cumplen con dicho rol, react-router-dom es la mas comun.
    Para instalarla tenemos que:
    1- en nuetro proyecto abrimos una nueva terminar
    2- con el comando " npm install react-router-dom " la podemos instalar
    3- en el archivo app.jsx la invocamos asi " import { BrowserRouter, Routes, Route } from 'react-router-dom' "
    4- em la parte del return tenemos que configurar esto:
       <Routes>
            <Route path'/rutadelarchivo' element={<NombreDelComponente/>} />
       </Routes>
    En una version mas actual de dicha libreria ya no es necesario invocar al BrowserRouter
*/

// ¿ Para que sirve cada componente de react-router-dom ?
/**
    * BrowserRouter:
      Envuelve todos los elementos en su interior y permite la navegacion entre ellos.
    * Routes:
      Define las rutas de navegacion.
    * Route:
      Define una ruta espesifica
*/

// Elementos de react-router-dom en el componente NavBar. 
/* 
    En nuestro componente de NavBar tenemos que invocar a componentes de react-router-dom que nos permiten enlazar las rutas ya creadas.
    Estos componentes son:
    1- Nav
    2- NavLink
    y para importarlo en nuestro NavBar hacemos esto " import { Nav, NavLink } from 'react-router-dom' "
*/

// ¿ En que casos se usan los componentes Link y NavLink ?
/**
    * Link se utiliza para envolver el titulo o logo del navbar, le agregamos " to='/' " para que navege al home
    * NavLink se utiliza para enlazar las rutas y tamben se le pueden agregar className para los estilos.
*/

// Parametros dinamicos
/*
    Los parametros dinamicos nos permiten poder generar algun tipo de comportamiento espesifico en algun componente, 
    como por ejemplo que en la rita el usuario pueda buscar un producto por ID.
*/

// ¿ Como trabajamos conlos parametros dinamicos ?
/*
    Para trabajar con los parametros dinamicos hacemos esto:
    1- En el archivo app.js vamos hasta la rita del producto al que le queremos agregar el parametro dinamico y le agregamos " /:parametrodinamico " a la rita.
    2- En el componente indicado en la ruta tenemos que agregarle esto:
       A) utilizamos un hook llamado useParams y lo importamos asi " import { useParams } from 'react-router-dom' "
    3- Dentro del return en la parte de la logica ponemos esto " const { id } = useParams(); " tambien lo podemos mostrar por consola con el " console.log(id); "
    4- para renderizarlo se lo agregamos a una etiqueta con id producto. 
*/

const RoutingNavegacion = () => {
  return (
    <div>RoutingNavegacion</div>
  )
}

export default RoutingNavegacion