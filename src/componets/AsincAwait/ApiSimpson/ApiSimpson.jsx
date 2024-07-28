// ¿ Como trabajar con una api ?
/**
    Para trabajar consumiento una api podemos usar fetch() o si tambien trabajamos de forma asincronica podemos usar async await.
    En este caso trabajamos con fetch().
    fetch() va a necesitar 2 parametros.
    * La URL de la api. (Es obligatorio pero podemos guardar esa url en una constante y en fetch(nombreDeLaConstante)).
    * Un objeto con datos de configuracion. (Opcional pero si la api lo requiere debemos usarlo)
    * */

    import { useState, useEffect } from "react";

    const api = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=5';
    
    const ApiSimpson = () => {
      const [ personajes, setPersonajes ] = useState([]);
    
      useEffect(() => {
        fetch(api)
          .then((res) => res.json())
          .then((res) => {
            setPersonajes(res);
          })
          .catch((error) => {
            console.log('Error al recibir los datos', error);
          });
      }, []);
    
      return (
        <div>
          <h1>Personajes de The Simpsons</h1>
          <ul>
            {
              personajes.map((personaje, index) => {
                return (
                  <li key={index}>
                    <p>nombre: {personaje.character}</p>
                    <img src={personaje.image} alt={personaje.character} />
                    <p> mirando hacia la: { personaje.characterDirection } </p>
                    <p> frase: { personaje.quote } </p>
                  </li>
                );
              })
            }
          </ul>
        </div>
      );
    }
    
    export default ApiSimpson;