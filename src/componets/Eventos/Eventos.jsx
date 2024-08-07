// ¿ Que son los eventos ?
/*
    Los eventos son como funciones que estan escuchando cuando hacemos click en algun boton o pasamos el mouse 
    por encima de algun elemento.
*/

// ¿    Que tipos de eventos existen ?
/**
    Tenemos 2 tipos de eventos como: 
    * Eventos manuales
      Los eventos manuales son aquellos que se activan por la interaccion del usuario,
      como cuando hacemos click en el boton de enviar un formulario. 
    * Eventos automaticos
      Los eventos automaticos son aquellos que se ejecutan solos o por el paso del tiempo,
      como cuando se activa rl proyectos de pantalla de la PC.
*/

// ¿ Como trabajar con un evento manual en React.js ?
/*
    En react para trabajar con este tipo de eventos tenemos que:
    1- Crear una funcion que nos permite crear un evento que despues podemos ejecutar mediante el navegador.
       A estas funciones se las suele llamar " handler "
    2- En la parte del return dentro de la etiqueta buton vamos a llamar al nodo onclick para asi llamar a la uncion y poder ejecutarla.
       Esa linea de codigo se debbe ver asi " <button onClick={manejadorClick}> Haceme click perro </button> "
*/

// ¿ Que tipos de eventos tenemos en React.js ?
/**
    * dentro de los eventos de React tenemos:
    * onClick ( Detecta los eventos de click generados por el usuario )
    * onMouseMove ( Detecta los movimientos del mouse generados por el usuario )
    * onMouseEnter ( Detecta cuando el usuario pasa el mouse sobre un lugar determindo )
    * onChange ( Detecta cuando cambia el valor de un input, por lo general se usa en los formularios )
    * onKeyDown ( Detecta cuando el usuario preciona una tecla )
    * onKeyUp ( Detecta cuando el usuario suelta una tecla )
    * onSubmit ( detecta cuando un formulario es enviado )
 * 
 */

import './caja.css'
import { useState } from 'react'

const Eventos = () => {
  // Ejemplo 1
  const manejadorClick = () => {
    alert('Que onda perro!!')
    console.log('Que onda perro!!')
  }
  
  const [ input, setInput ] = useState('')

  const manejarInput = (e) => {
    setInput( e.target.value )
    console.log(input)
  }

  const manejarFormulario = () => {}
    return (
    <div>
        <button onClick={manejadorClick}> Haceme click perro </button>
    
        <div className='caja' 
             onMouseMove={() => console.log('Mobete boquita mobete!!')}
             onMouseEnter={() => console.log('Aguante boca!!!')}
             onMouseLeave={() => console.log('riBer sos de la B por siempre jamas!!')}
        >

        </div>

        <h1> { input } Mi formulario </h1>
        <form onSubmit={manejarFormulario}>
          <label> Escribi algo </label>
          <input 
            type='text'
            placeholder='Ingresa in texto'
            onChange={manejarInput}
            onKeyDown={() => console.log('Presionaste una tecla')}
            onKeyUp={() => console.log('Soltaste una tecla')}
          />
        </form>

    </div>
  )
}

export default Eventos