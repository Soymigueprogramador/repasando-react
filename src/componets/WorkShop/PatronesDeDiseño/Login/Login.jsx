import LoginButton from '../LoginButton/LoginButton'
import InicioSesion from '../InisioSesion/InisioSesion'
import { useState } from 'react'

const Login = () => {
  
  const [ usuarios, setUsuarios ] = useState(null)
  
  const manejadorLogin = () => {
    setUsuarios('Miguel')
  };

    return (
    <div>
        {
            usuarios ? <InicioSesion nombre={usuarios} /> : <LoginButton logearse={manejadorLogin} /> 
        }
        <LoginButton />
    </div>
  )
}

export default Login