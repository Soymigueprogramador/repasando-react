import './Formulario.css'
import { useState } from 'react'

const Formulario = () => {
  const [ nombre, setNombre ] = useState('')
  const [ apellido, setApellido ] = useState('')
  
  const enviarFormulario = (e) => {
    e.preventDefault()
    const nuevoCliente = {nombre, apellido}
    console.log(nuevoCliente)
    setNombre('')
    setApellido('')
  };

    return (
    <div className='general'>
        <form onSubmit={enviarFormulario} className='form-practic'>
            <label className='indicacion' htmlFor='nombre'> Nombre </label>
            <input 
                type='text'
                id='nombre'
                placeholder='Ingresa tu nombre'
                className='campo'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <label className='indicacion' htmlFor='apellido'> Apellido </label>
            <input 
                type='text'
                id='apellido'
                placeholder='Ingresa tu apellido'
                className='campo'
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />
            <button type='submit'> Enviar </button>
        </form>
    </div>
  )
}

export default Formulario