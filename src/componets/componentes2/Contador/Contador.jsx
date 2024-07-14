/*
    Cuando recibimos los valores de un producto desde otro lado tenemos que recibirlos mediante props.
    esto nos pide 2 parametros que son
    1 - una variable de referencia ( en este caso es un stock )
    1 - un valor inicial u dentro de useState(inicial)
*/ 

// Trabajando con useEddect. 
// Vamos a cambiarte el titulo a la pestaña del navegador con useEffect.
/**
    Para ello seguimos estos pasos.
    * importamos useEffect.
    * Hacemos la invocacion d useEffect() y tenemos que pasarle 2 parametros entre los parentesis.
      1- El primero es una funcion que se ejecutara cuando se monte el componente.
      2- El segundo parametro es un array de dependencias. este va a contener los estados que va a estar mirando y en caso de que se actualice
         alguno de ellos se va a ejecutar la funcion que esta dentro del useEffect.
 */

// Esto se hacia en JavaScript pero no es recomendable en React.js
    /*
        if( contador >= 5 ) {
        document.getElementById('agregar').style.color = 'yellow';
        document.getElementById('agregar').style.backgroundColor = 'blue';
    } else if( contador <= 5 ) {
        document.getElementById('agregar').style.color = '';
        document.getElementById('agregar').style.backgroundColor = '';
    } id='agregar' ( el 'id' se lo agregabamos al boton )
    */
    // Asi lo hacemos en React.js con los estados y useState.
    /**
      * Creamos un estado.
      * Lo igualamos con useState.
      * Usamos un condicional para cambiar su valor, esto lo hacemos dentro del useEffect.
     */

// Cambiando el color al boton de agregar al carrito.
// Para eso tenemos que seguir estos pasos usando 

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Contador = ({ stock, inicial }) => {
    const [contador, setContador] = useState(inicial);
    const [color, setColor] = useState('black');
    
    useEffect(() => {
        document.title = `Contador: ${contador}`;

    if( contador >= 5 ) {
        setColor('blue')
    } else {
        setColor('black')
    }

    }, [ contador ]);

    const aumentar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const disminuir = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    };

    const agregar = () => {
        console.log(`Producto agregado al carrito ${contador} item`);

    };

  return (
    <div>
      <h2>Contador con Samu en React</h2>
      <button onClick={aumentar}> + </button>
      <strong> {contador} </strong>
      <button onClick={disminuir}> - </button>
      <button onClick={agregar} style={{color: color}} > Agregar al carrito </button>
    </div>
  );
}

Contador.propTypes = {
    stock: PropTypes.number.isRequired,
    inicial: PropTypes.number.isRequired,
  };

export default Contador;