import { Link } from "react-router-dom"

const NuevoPassword = () => {
  return (
    <>
      <div className="container contenedor-login">
        <div className="recuperar-cuenta">
          <h1 className="h1-titulo">
            Reestablece tu <span>Password</span>
          </h1>
          
          <form className="formulario">
          <div>
            <label className="d-block label-auth" htmlFor="password">
              Nuevo Password
            </label>
            <input
              className="form-control input-auth"
              type="password"
              id="password"
              placeholder="Escribe tu Nuevo Password"
            />
          </div>
            <input
              className="btn-aceptar"
              type="submit"
              value="Guardar"
            />
            {/* <div>
              <Link className="link" to={"/"}>Cancelar</Link>
            </div> */}
          </form>
        </div>
      </div>
    </>
  )
}

export default NuevoPassword