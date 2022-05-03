import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alertas from '../components/Alertas'
import clienteAxios from "../config/clienteAxios";


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if([email, password].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
    try {
      const { data } = await clienteAxios.post(`usuarios/login`, { email, password})
      setAlerta({})
      localStorage.setItem('token', data.token)
      
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg ,
        error: true
      })
    }
  }

  const { msg } = alerta

  return (
    <>
      <div className="container contenedor-login">
        <div className="contenido-titulo">
          <h1 className="h1-titulo">
            Inicia sesión y administra tus <span>proyectos</span>
          </h1>
          <p>
            Si no tienes una cuenta <Link className="link" to={"/"}>Regístrate</Link>
          </p>
        </div>
        <div className="contenido-titulo">

          {msg && <Alertas alerta={alerta}/>}

          <form 
            className="formulario"
            onSubmit={handleSubmit}
          
          >
            <div className="my-2">
              <label className="d-block label-auth" htmlFor="email">
                Email
              </label>
              <input
                className="form-control input-auth"
                type="email"
                id="email"
                placeholder="Email de Registro"
                value={email}
                onChange={ e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="d-block label-auth" htmlFor="password">
                Password
              </label>
              <input
                className="form-control input-auth"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={ e => setPassword(e.target.value)}
              />
            </div>
            <input
              className="btn-aceptar"
              type="submit"
              value="Iniciar Sesión"
            />
            <div>
              <Link className="link" to={"/olvido-password"}>Olvide mi Password</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
