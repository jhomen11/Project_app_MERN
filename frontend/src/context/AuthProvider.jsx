import { useState, useEffect, createContext } from 'react'

import clienteAxios from '../config/clienteAxios'


const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [cargando, setCargando] = useState(true)


    useEffect(()=>{
        const autenticarUsuario = async () =>{
            const token = localStorage.getItem('token')
            
            if(!token){
                setCargando(false)
                return
            }

            const config = {
                headers:{
                    "Content-Type": "aplication/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await clienteAxios(`/usuarios/perfil`, config )
                setAuth(data)
                
            } catch (error) {
                
            }
            setCargando(false)
        }

        autenticarUsuario()
    }, [])

    return(
        <AuthContext.Provider
            value={{
                auth,
                cargando,
                setAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext