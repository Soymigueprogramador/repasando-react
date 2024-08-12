// Return temprano.

/*
    Usamos esta tecnica en JavaScript con la finalidad de evitarnos escribir el else en una estructura condicional. 
*/

// Llevando esta tecnica a la practica. 

// Forna traducional. 
function esFinde(dia) {
    if (dia === 'Sabado' || dia === 'Domingo') {
        return '¡Llegó el fin de semana y como un argentino de bien, te la podés dar en la pera!' + true;
    } else {
        return 'No, ¡Andá a laburar, kuka!' + false;
    }
}

// Return temprano. 
function esFinDe(dia) {
    if (dia === 'Sabado' || dia === 'Domingo') {
        return '¡Llegó el fin de semana y como un argentino de bien, te la podés dar en la pera!' + true;
    }
    return false;
}


const Tecnica1 = ({ nombre }) => {
  if( nombre === 'Miguel' ) {
    return (
        <h1> Hola administrador </h1>
    )
  }
  
    return (
    <h1> Hola { nombre } </h1>
  )
}

export default Tecnica1