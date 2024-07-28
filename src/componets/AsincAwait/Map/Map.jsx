// Metodo map.
/*
    en React.js usamos el metodo map() generalmente para crear una lista de componentes a partir de un array de datos.
*/

// ¿ Como trabajar con el metodo map() ?
/**
    Para poder mostrar por pantalla tenemos que hacer esto:
    * Lo vamos a renderizar dentro de lo que es la estructura del return.
    creamos una lista desordenada <ul>
    dentro de dicha lista vamos a usar las {} ya que vamos a trabajar con un objeto
    dentro de las {} escribimos el nombre del array seguido de .map()
    dentro de los () volvemos a llamar al nombreDelArray => () 
    dentro de los () creamos la estructura de las etiquetas <li>
    dentro de las etiquetas <li> escribimos key={nombreDelArray, ID O INDEX}
    dentro de las etiquetas <li> abrimos {} y escribimos lo que vamos a mostrar por pantalla.
*/

const Map = () => {
    const nombres = [ 'Miguel', 'Celeste', 'Araceli', 'Yazmin' ];
  
    return (
    <div>
        <h1> Array de nombres </h1>
        <ul>
            {
                nombres.map((nombres, index) => (
                    <li key={index}> {nombres} </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Map