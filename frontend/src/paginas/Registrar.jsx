
import { useState } from "react";
import { Link } from "react-router-dom";
import Alertas from "../components/Alertas";


const Registrar = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repetirPassword, setrepetirPassword] = useState('')
  const [alerta, setAlerta] = useState({})

  const handleSubmit = (e) => {
    
    e.preventDefault()

    // Validación del Formulario
    if([nombre, email, password, repetirPassword].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
  }

  const { msg } = alerta

  return (
    <div className="container contenedor-login">
      <div className="contenido-titulo">
        <h1 className="h1-titulo">
          Bienvenido a <span>Proyect Manager</span>
        </h1>
        <p>Si tienes una cuenta inicia sesión y administra tus Proyectos</p>
        <Link className="link" to={"/login"}>Inicia Sesión</Link>
      </div>

      {/* Formulario */}

      <div className="contenido-titulo">

        {msg && <Alertas alerta={alerta}/>}

        <form 
          className="formulario"
          onSubmit={handleSubmit}
        >
          <h2>Crear una Cuenta</h2>
          <div className="my-2">
            <label className="d-block label-auth" htmlFor="nombre">
              Nombre
            </label>
            <input
              className="form-control input-auth"
              type="nombre"
              id="nombre"
              placeholder="Nombre"
              name={nombre}
              onChange={ e => setNombre(e.target.value)}
            />
          </div>
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
          <div>
            <label className="d-block label-auth" htmlFor="repetir-password">
              Repetir Password
            </label>
            <input
              className="form-control input-auth"
              type="password"
              id="repetir-password"
              placeholder="Repetir Password"
              value={repetirPassword}
              onChange={ e => setrepetirPassword(e.target.value)}

            />
          </div>
          <input className="btn-aceptar" type="submit" value="Crear Cuenta" />
        </form>
      </div>
    </div>
  );
};

export default Registrar;
