import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/authLayout'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import Login from './paginas/login'
import NuevoPassword from './paginas/NuevoPassword'
import OlvidoPassword from './paginas/OlvidoPassword'
import Registrar from './paginas/Registrar'


const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <AuthLayout/> }>
          <Route index element= { <Login/> }/>
          <Route path='registrar' element= { <Registrar/> }/>
          <Route path='olvido-password' element= { <OlvidoPassword/> }/>
          <Route path='olvido-password/:token' element= { <NuevoPassword/> }/>
          <Route path='confirmar/:id' element= { <ConfirmarCuenta/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
