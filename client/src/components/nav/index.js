import React from 'react';
import {Link} from "react-router-dom";

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">
          React Reading List
        </Link>
        <div className="navbar-nav">
          <Link to="/" className={window.location.pathname === "/" ? "nav-item nav-link active" 
          : "nav-item nav-link"}>Search</Link>

          <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-item nav-link active"
          : "nav-item nav-link"}>Saved</Link>
        </div>
        
      </nav>
    )
}

export default Nav;