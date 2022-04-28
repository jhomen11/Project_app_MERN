import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Alertas from "../components/Alertas";

const NuevoPassword = () => {
  const [password, setPassword] = useState('')
  const [passwordModificado, setPasswordModificado] = useState(false)
  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        // TODO: Mover cliente axios
        const url = `http://localhost:4000/api/usuarios/olvido-password/${token}`;
        await axios(url);
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    };
    comprobarToken();
  }, []);

  const handleSubmit  = async (e) =>{
    e.preventDefault()

    //Validar campo password
    if(password.length < 6 ){
      setAlerta({
        msg: 'El password debe tener minimo 6 caracteres',
        error: true
      })
      return

      
    }
    try {
      const url = `http://localhost:4000/api/usuarios/olvido-password/${token}`;
      const { data } = await axios.post(url, { password })
      
      setAlerta({
        msg: data.msg,
        error: false
      })
      setPasswordModificado(true)
      setPassword('')
      
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg, error } = alerta

  return (
    <>
      <div className="container contenedor-login">
        <div className="cuenta">
          <h1 className="h1-titulo">
            Reestablece tu <span>Password</span>
          </h1>

            {msg && <Alertas alerta={alerta}/>}

          {tokenValido && (
            <form className="formulario"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="d-block label-auth" htmlFor="password">
                  Nuevo Password
                </label>
                <input
                  className="form-control input-auth"
                  type="password"
                  id="password"
                  placeholder="Escribe tu Nuevo Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <input className="btn-aceptar" type="submit" value="Guardar" />
            </form>
          )}
          { error && (<div>
                <Link className="link" to={"/"}>Volver al Home</Link>
            </div>)}

            {passwordModificado && (
              <Link className="link" to={"/login"}>Inicia Sesión</Link>
            )}
        </div>
      </div>
    </>
  );
};

export default NuevoPassword;
