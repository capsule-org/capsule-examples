import React,{ useState} from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from './logo.svg'
import {  Link } from "react-router-dom";

const Menu = () => (
  <>
     <Link to="https://github.com/capsule-org/web-sdk"><p>View GitHub</p> </Link>
     <Link to='https://7f4shq8oyfd.typeform.com/to/F86oVLhb'><p>Join Beta</p></Link>
     <Link to='https://usecapsule.com'><p>Website</p></Link>
     <Link to='https://docs-preview.usecapsule.com/'><p>View Docs</p></Link>
  </>
 )

 const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
  const [user,setUser] = useState(false)

  const handleLogout = () => {
    setUser(false);
  }
  const handleLogin = () => {
    setUser(true);
  }


  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
          <Link to="/">
            <h1>Capsule Marketplace</h1>
          </Link>
        </div>
        <div className="navbar-links_container">
          {/*<input type="text" placeholder='Search Item Here' autoFocus={true} />*/}
         <Menu />
         {user && <Link to="/"><p onClick={handleLogout}>Logout</p></Link> }

        </div>
      </div>
      <div className="navbar-sign">
      {/*{user ? (*/}
      {/*  <>*/}
      {/*   <Link to="/create">*/}
      {/*    <button type='button' className='primary-btn' >Create</button>*/}
      {/*  </Link>*/}
      {/*  <button type='button' className='secondary-btn'>Connect</button>*/}
      {/*  </>*/}
      {/*): (*/}
      {/*  <>*/}
      {/*  <Link to="/login">*/}
      {/*   <button type='button' className='primary-btn' onClick={handleLogin} >Sign In</button>*/}
      {/*  </Link>*/}
      {/*  <Link to="/register">*/}
      {/*    <button type='button' className='secondary-btn'>Sign Up</button>*/}
      {/*  </Link>*/}
        {/* <CapsuleButton capsule={capsule} appName={"NFT marketplace"} /> */}
      {/*  </>*/}
      {/*)}*/}

      </div>
      <div className="navbar-menu">
        {toggleMenu ?
        <RiCloseLine  color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center" >
            <div className="navbar-menu_container-links">
             <Menu />
            </div>
            <div className="navbar-menu_container-links-sign">
            {user ? (
              <>
              <Link to="/create">
                <button type='button' className='primary-btn' >Create</button>
              </Link>
              <button type='button' className='secondary-btn'>Connect</button>
              </>
            ): (
              <>
              <Link to="/login">
              <button type='button' className='primary-btn' onClick={handleLogin} >Sign In</button>
              </Link>
              <Link to="/register">
                <button type='button' className='secondary-btn'>Sign Up</button>
              </Link>
              </>
            )}

            </div>
            </div>
        )}
      </div>
    </div>
  )
}

const btnStyle = {
  backgroundColor:'white',
  color:'black',
  borderColor:'white',
  marginRight: '5%',
  marginBottom: '5%',
  fontSize: 'calc(10px + 1.5vmin)',
}

export default Navbar
