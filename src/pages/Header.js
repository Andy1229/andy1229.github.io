import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {

    return (
        <nav className="Navbar">
            <div className="float-md-start mb-0">
                <NavLink className="logo" to="/"><h3>Andy An</h3></NavLink>
            </div >
            <div className="nav justify-content-center float-md-end">
                {/* <div className="nav-link"> */}
                <NavLink className="nav-link" to="/About" activeClassName="active" >About</NavLink>
                <NavLink className="nav-link" to="/Blog" activeClassName="active" >Blog</NavLink>
                <NavLink className="nav-link" to="/Portfolio" activeClassName="active">Portfolio</NavLink>
                {/* </div> */}
            </div>
        </nav >
    )
}

export default Header;