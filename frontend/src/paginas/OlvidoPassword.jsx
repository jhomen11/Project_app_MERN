
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Alertas from "../components/Alertas";

const OlvidoPassword = () => {

  const[email, setEmail] = useState('')
  const[alerta, setAlerta] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(email === '' || email.length < 6){
      setAlerta({
        msg: 'El campo email es obligatorio',
        error: true
      })
      return
    }

    try {
      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/usuarios/olvido-password`,{ email })
      
      setAlerta({
        msg: data.msg,
        error: false
      })
      setEmail('')


    } catch (error) {
      
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }

  }

  const { msg } = alerta

  return (
    <>
      <div className="container contenedor-login">
        <div className="cuenta">
          <h1 className="h1-titulo">
            Recupera tu <span>Cuenta</span>
          </h1>

          {msg && <Alertas alerta={alerta} />}
          
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
                onChange={e => setEmail(e.target.value)}
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
