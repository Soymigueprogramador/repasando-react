import { useState } from "react";

const BotonCondicional = () => {
  const [verificado, setVerificado] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const habilitarUsuario = (e) => {
    e.preventDefault();

    if (usuario === "soymigueprogramador@gmail.com" || password === "1234") {
      setVerificado(true);
    } else {
      setUsuario("Messi dice");
      setPassword("Anda pa alla bobo!!");
    }
  };

  const desabilitarUusuario = () => {
    setUsuario(true);
  };

  return (
    <>
      {verificado ? (
        <button onClick={desabilitarUusuario}>Cerrar sesión</button>
      ) : (
        <form onSubmit={habilitarUsuario}>
          <label htmlFor="usuario"> Usuario </label>
          <input
            type="email"
            placeholder="Ingresa tu email"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            placeholder="Ingresa tu password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => setVerificado(true)}>Iniciar sesión</button>
        </form>
      )}
    </>
  );
};

export default BotonCondicional;