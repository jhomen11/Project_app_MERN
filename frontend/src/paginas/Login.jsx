import { Link } from "react-router-dom";
const Login = () => {
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
          <form className="formulario">
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
