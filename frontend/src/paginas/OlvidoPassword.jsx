
import { useState } from "react";
import { Link } from "react-router-dom";

const OlvidoPassword = () => {

  const[email, setEmail] = useState('')
  const[alerta, setAlerta] = useState('')

  return (
    <>
      <div className="container contenedor-login">
        <div className="cuenta">
          <h1 className="h1-titulo">
            Recupera tu <span>Cuenta</span>
          </h1>
          
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
            <input
              className="btn-aceptar"
              type="submit"
              value="Enviar Instrucciones"
            />
            <div>
              <Link className="link" to={"/"}>Cancelar</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OlvidoPassword;
