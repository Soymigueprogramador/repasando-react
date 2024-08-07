import { useState, useEffect } from "react";

const Automatico = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  useEffect(() => {
    let tiempoDeEspera = null;

    const reiniciarTemporizador = () => {
      clearTimeout(tiempoDeEspera);
      tiempoDeEspera = setTimeout(() => {
        setMostrarMensaje(true);
      }, 5000);
    };

    const activo = () => {
      reiniciarTemporizador();
      setMostrarMensaje(false);
    };

    reiniciarTemporizador(); 

    window.addEventListener('mousemove', activo); 
    window.addEventListener('keydown', activo);

    return () => {
      window.removeEventListener('mousemove', activo); 
      window.removeEventListener('keydown', activo);
      clearTimeout(tiempoDeEspera);
    };
  }, []);

  const seguirMirando = () => {
    setMostrarMensaje(false);
  };

  return (
    <div>
      {mostrarMensaje && (
        <div>
          <h2>¿Estás vivo perro?</h2>
          <button onClick={seguirMirando}>¿Vas a seguir mirando?</button>
        </div>
      )}
      <h2>Contenido de Netflix</h2>
      <p>Seguir mirando</p>
    </div>
  );
};

export default Automatico;