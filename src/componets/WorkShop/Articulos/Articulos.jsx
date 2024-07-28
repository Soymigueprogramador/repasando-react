// Children
/*
    Me permite renderizar un mismo componente pero tambien me permite pasarlo diferentes elementos para que se vea direferte al resto de mi aplicacion.
*/

// ¿ Como trabajar con children ?
/**
    Para poder trabajar con children tenemos que hacer esto:
    * En la parte donde recibimos las props escribimos ({ children })
    * En la parte del renderizado escribimos { children }
    Entonces en la parte donde llamamos a children le pasaremos los nuevos elementos.
*/


const Articulos = ({ img, children, titulo }) => {
  return (
    <article>
        <img src={img} alt={titulo} />
        <h1> { titulo } </h1>
        { children }
        <button> Leet articulo </button>
    </article>
  )
}

export default Articulos