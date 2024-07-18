import { useState, useEffect } from 'react';

const OtraApi = () => {
  const [usuarios, setUsuarios] = useState([]); 

  useEffect(() => {
    const datosSimpsons = async () => {
      try {
        const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=5');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.log('Error al traer datos de los Simpsons', error);
      }
    };
    
    
    datosSimpsons();
  }, []);

  return (
    <div>
      <h1>Esta es otra api</h1>
      <ul>
        {
          usuarios.map((index) => {
            return (
              <li key={index}>
                
                {index.image}
                
                
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default OtraApi;