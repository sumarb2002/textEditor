import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


export default function Navbar(property) {    
  return (
<div>
<nav className={`navbar navbar-expand-lg navbar-${property.mode} bg-${property.mode}`}>
  <a className="navbar-brand mx-2 " href="/"><i>{property.title}</i></a>
  <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>    */}
    <div className={`form-check form-switch text-${property.mode==='light'?'dark':'light'} mx-2`}>
  <input className="form-check-input" type="checkbox" onClick={property.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{property.mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
</div>
 {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
  </div>
</nav>
</div>
 
  )
}
Navbar.propTypes=
{
    title:PropTypes.string.isRequired
}
Navbar.defaultProps=
{
    title:'Hellow'
}
