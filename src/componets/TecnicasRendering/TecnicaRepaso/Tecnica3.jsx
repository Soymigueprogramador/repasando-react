// Operador ternario:

/* 
    Debemos recordar que el operador ternario tiene 2 condiciones
    1- Si el codigo es verdadero se usa el ?
    2- Siel codigo es falso se usa :
*/

const Tecnica3 = ({ buleano }) => {
  return (
    <div>
        {/* Funciona de la misma manera que con los fragment solo que aca se usa el operador ternario " true=? o false=: " */}
        {
            buleano ? <h2> Estas activo perro!! </h2> : <h2> Anda pa alla bobo!! </h2>
        }
    </div>
  )
}

export default Tecnica3