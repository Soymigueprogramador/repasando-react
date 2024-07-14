import { useState, useEffect } from "react"
import PropTypes from 'prop-types';

const Categorias = () => {
  const [ categorias, setCategorias ] = useState('');
  
    useEffect(() => {
        document.title = `categorias: ${categorias}`;
    }, [categorias]);

    const manejadorCategorias = (categorias) => {
        setCategorias(categorias);
    };

    return (
    <div>
        <h1>Categorias de productos</h1>
        <button onClick={() => manejadorCategorias('Alfajores')}> Alfajores </button>
        <button onClick={() => manejadorCategorias('Yerba')}> Yerba </button>
        <button onClick={() => manejadorCategorias('Dulce de leche')}> Dulce de leche </button>
        <button onClick={() => manejadorCategorias('Bebidas')}> Bebidas </button>
    </div>
  )
}

Categorias.propTypes = {
    categorias: PropTypes.array.isRequired
};


export default Categorias