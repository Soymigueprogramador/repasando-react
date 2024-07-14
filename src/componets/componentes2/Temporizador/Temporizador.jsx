import { useState, useEffect, useRef } from "react";

const Temporizador = () => {
  const [segundos, setSegundos] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSegundos((segundos) => segundos + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []); 

  useEffect(() => {
    document.title = `segundos: ${segundos}`;
  }, [segundos]);

  const altoAhiBro = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h1>Temporizador: {segundos}</h1> 
      <button onClick={altoAhiBro}>Alto ahí bro</button>
    </div>
  );
};

export default Temporizador;