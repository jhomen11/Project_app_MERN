import { useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const ConfirmarCuenta = () => {
  
  const params = useParams()
  
  const { id } = params

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `http://localhost:4000/api/usuarios/confirmar/${id}`
        const { data } = await axios(url)
        console.log(data)
        
      } catch (error) {
        console.log(error)
      }
    }
    confirmarCuenta()
  }, [])
  

  return (
    <>
      <div className="container contenedor-login">
        <div className="recuperar-cuenta">
          <h1 className="h1-titulo">
            Confirma tu <span>Cuenta</span>
          </h1>
        </div>
      </div>
    </>
  )
}

export default ConfirmarCuenta