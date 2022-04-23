import { Link } from "react-router-dom";

const Registrar = () => {
  return (
    <div className="container contenedor-login">
      <div className="contenido-titulo">
        <h1 className="h1-titulo">
          Bienvenido a <span>Proyect Manager</span>
        </h1>
        <p>Si tienes una cuenta inicia sesión y administra tus Proyectos</p>
        <Link className="link" to={"/login"}>Inicia Sesión</Link>
      </div>
      <div className="contenido-titulo">
        <form className="formulario">
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
            />
          </div>
          <div>
            <label className="d-block label-auth" htmlFor="repetir-password">
              Repetir Password
            </label>
            <input
              className="form-control input-auth"
              type="repetir-password"
              id="repetir-password"
              placeholder="Repetir Password"
            />
          </div>
          <input className="btn-aceptar" type="submit" value="Crear Cuenta" />
        </form>
      </div>
    </div>
  );
};

export default Registrar;
