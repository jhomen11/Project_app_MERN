import { useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Alertas from '../components/Alertas'

const ConfirmarCuenta = () => {
  
  const [alerta, setAlerta] = useState({})
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

  const params = useParams()
  
  const { id } = params

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `http://localhost:4000/api/usuarios/confirmar/${id}`
        const { data } = await axios(url)
        console.log(data)
        
        setAlerta({
          msg: data.msg,
          error: false
        })
        setCuentaConfirmada(true)
        

      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    confirmarCuenta()
  },[id])
  
  const { msg } = alerta
  return (
    <>
      <div className="container recuperar-cuenta ">
        <div>
          <h1 className="h1-titulo">
            Confirma tu <span>Cuenta</span>
          </h1>
        </div>
          <div>
            {msg && <Alertas alerta={ alerta }/>}

            {cuentaConfirmada && (
              <Link className="link" to={"/login"}>Inicia Sesión</Link>
            )}
          </div>
      </div>
    </>
  )
}

export default ConfirmarCuenta