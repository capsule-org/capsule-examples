import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from './logo.svg'
import { Link } from "react-router-dom";

const Menu = () => (
  <>
    <Link target="_blank" rel="noreferrer" to='https://7f4shq8oyfd.typeform.com/to/F86oVLhb'><p>Join Beta</p></Link>
    <Link target="_blank" rel="noreferrer" to='https://usecapsule.com'><p>Website</p></Link>
    <Link target="_blank" rel="noreferrer" to='https://docs-preview.usecapsule.com/'><p>View Docs</p></Link>
    <Link target="_blank" rel="noreferrer" to='https://github.com/capsule-org/capsule-example'><p>View Demo App Github</p></Link>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)


  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
          <Link to="/">
            <h1>Capsule Mint Site</h1>
          </Link>
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu ?
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center" >
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
