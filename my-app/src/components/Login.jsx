import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button, Center, MiniText, LinkStyle, Background, Cuadro } from '../Styles/StyledLogin'




const Login = () => {
  return (
    <Background>
        <Center>
            <Container><Cuadro>
                <h1 className="header1">Iniciar sesión</h1>
                <div className='centerButtons'>
                    <button className="loginBtn loginBtn--facebook">
                    Continuar con Facebook
                    </button>

                    <button class="loginBtn loginBtn--google">
                    Continuar con Google
                    </button>
                </div>
                <h2 className="header1">ó</h2>
                <form>
                    <div className="input-parent">
                        <label>Correo electrónico</label>
                        <input type="text" id="username"></input>
                    </div>
                    <div className="input-parent">
                        <label>Contraseña</label>
                        <input type="password" id="password"></input>
                    </div>
                </form>
                <MiniText ><Link to='/Login'>¿Olvidó su contraseña?</Link> </MiniText>
                <Button type="submit">Iniciar sesión</Button>
                <MiniText >¿No tienes cuenta? <Link to='/register'>Regístrate!</Link> </MiniText>
                </Cuadro>   
            </Container>
        </Center>

        
    </Background>

  )
}

export default Login