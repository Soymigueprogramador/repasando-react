import { useState, useEffect } from 'react';

const PeliApi = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  const miKey = 'c9f04fa4';
  const api = `http://www.omdbapi.com/?apikey=${miKey}&s=${busqueda}`; 

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        if (data.Search) {
          setPeliculas(data.Search);
        } else {
          setPeliculas([]);
        }
      } catch (error) {
        console.log('Error al buscar la película', error);
      }
    };

    if (busqueda) {
      fetchPeliculas();
    }
  }, [busqueda, api]);

  return (
    <div>
      <h1>PeliApi</h1>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar película..."
      />
      <ul>
        {peliculas.map((pelicula) => (
          <li key={pelicula.imdbID}>
            <img src={pelicula.Poster} alt={pelicula.Title} />
            {pelicula.Title} ({pelicula.Year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeliApi;
