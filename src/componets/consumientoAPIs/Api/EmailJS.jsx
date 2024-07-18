// Llamamos a la libreria con un metodo send()
    /**
        la libreria nos pedira estos parametros.
        * server ID.
        * template ID
        * templateParams ( el objeto que creamos con los datos de los estados ).
        * api ID.
     */

        import { useState, useEffect } from "react";
        import emailjs from 'emailjs-com';
        
        const EmailJS = () => {
          const [nombre, setNombre] = useState("");
          const [email, setEmail] = useState("");
          const [mensaje, setMensaje] = useState("");
        
          useEffect(() => {
            
          }, []);
        
          const enviarMensaje = (e) => {
            e.preventDefault();
            const templateParams = {
              from_nombre: nombre,
              from_email: email,
              message: mensaje
            };
        
            emailjs.send(
              'service_gm6bfbq',
              'template_ggimxog',
              templateParams,
              'OgLDvK528LH90P-KS'
            )
            .then(() => {
              alert('Mensaje enviado correctamente');
              console.log('Mensaje enviado correctamente');
            })
            .catch(() => {
              alert('Mensaje no enviado');
              console.log('Mensaje no enviado');
            });

            setNombre('')
            setEmail('')
            setMensaje('')

          };
        
          return (
            <div>
              <form onSubmit={enviarMensaje}>
                <label> Nombre </label>
                <input 
                  type="text" 
                  value={nombre} 
                  onChange={(e) => setNombre(e.target.value)} 
                  placeholder="Ingresa tu nombre" 
                />
        
                <label> Email </label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Ingresa tu email" 
                />
        
                <label> Mensaje </label>
                <textarea 
                  value={mensaje} 
                  onChange={(e) => setMensaje(e.target.value)} 
                  placeholder="Ingresa tu mensaje" 
                />
        
                <button type="submit"> Enviar mensaje </button>
              </form>
            </div>
          );
        };
        
        export default EmailJS;