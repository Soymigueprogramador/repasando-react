import { useState, useEffect } from "react";

const productos = [
    { id: 1, nombre: 'Alfajor', precio: 100 },
    { id: 2, nombre: 'Mantecol', precio: 200 },
    { id: 3, nombre: 'Dulce de leche', precio: 160 },
    { id: 4, nombre: 'Yerba', precio: 300 },
];

const getMisProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);  
    });
};

const ConsumiendoAPIs = () => {
  const [misProductos, setMisProductos] = useState([]);

  useEffect(() => {
    const pedirDatos = async () => {
      const respuesta = await getMisProductos();
      setMisProductos(respuesta);
    };
    
    pedirDatos();
  }, []);
  console.log(getMisProductos)
  return (
    <>
      <h1>Mis productos</h1>
      {
        misProductos.map(({ nombre, precio }, index) => (
          <div key={index.id}>
            <p>Nombre: {nombre}</p>
            <p>Precio: {precio}</p>
          </div>
        ))
      }
    </>
  );
}

export default ConsumiendoAPIs;