import { Link } from 'react-router-dom'
import '../css/Header.css'
import menu from '../img/Hamburger_icon.png'

const Header = () => {
  return (
    <header>
        <div id="toggle-menu" className="toggle-menu">
          <img src={menu} />
        </div>
      <nav>
        <div className='menu-items'>
          <Link className='logo' to={'/proyectos'}>Project Manager</Link>
        </div>
        <div className='menu-items'>
          <input 
            type="search" 
            placeholder='Buscar Proyecto'
          />
        </div>
        <div className='menu-items'>
          <Link className='enlace-proyectos' to={'/proyectos'}>Proyectos</Link>
          <button className='btn-menu'>Cerrar Sesión</button>
        </div>
      </nav>
    </header>
  )
}

export default Header