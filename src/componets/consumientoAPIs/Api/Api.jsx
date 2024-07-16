import { useState, useEffect } from "react"

const Api = () => {
  const [ usuarios, setUusuarios ] = useState([]);
    
  useEffect(() => {
    try {
        const pedirUsuarios = async () => {
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await respuesta.json();
                setUusuarios(data)
        };
        pedirUsuarios();
    } catch( error ) {
        console.log('Algo salio mal', error)
    }
  }, []);

  
    return (
        <div>
        <h1>Mostrando los resultados de una API</h1>
        <ul>
            {
                usuarios.map(usuario => (
                    <li key={usuario.id}>
                        {usuario.name}
                        {usuario.id}
                        {usuario.email}
                    </li>
                ))
            }
        </ul>
    </div>
    
  )
}

export default Api