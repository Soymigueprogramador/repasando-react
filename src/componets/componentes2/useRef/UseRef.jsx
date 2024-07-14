import { useRef } from "react";

const UseRef = () => {
  const productosComprados = useRef(0);
  
  const comprar = () => {
    productosComprados.current + 1;
    console.log(productosComprados.current);
  };

  return (
    <div>
      <p>Productos comprados: {productosComprados.current}</p>
      <button onClick={comprar}>Comprar</button>
    </div>
  );
}

export default UseRef;