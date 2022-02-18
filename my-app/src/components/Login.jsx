import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button, StyledPreFooter } from '../Styles/StyledLogin'

const Login = () => {
  return (
    <StyledPreFooter>

    <Container>
        <h1 className="header">Iniciar sesión</h1>
        <div className='centerButtons'>
            <button class="loginBtn loginBtn--facebook">
            Continuar con Facebook
            </button>

            <button class="loginBtn loginBtn--google">
            Continuar con Google
            </button>
        </div>
        <h2 className="header">ó</h2>
        <form>
            <div class="input-parent">
                <label>Correo electrónico</label>
                <input type="text" id="username"></input>
            </div>
            <div class="input-parent">
                <label>Contraseña</label>
                <input type="password" id="password"></input>
            </div>
        </form>
        <Button type="submit">Iniciar sesión</Button>
        <Link to="/Login">
            <h2 className="header">¿Olvidó su contraseña?</h2>
        </Link>
    </Container>
    </StyledPreFooter>

  )
}

export default Login