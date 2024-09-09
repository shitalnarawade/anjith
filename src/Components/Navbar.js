import React from "react";
// import logoImg from "../Image/logoCl.jpeg";
// import { Link, useLocation } from "react-router-dom";
// import { NavLink} from "react-router-dom";

function Navbar() {
    // const location = useLocation();

    // const getLinkClassName = (path) => 
    //     location.pathname === path ? "nav-link active" : "nav-link";
  return (
    <>
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              to="/features"
            >
              Features
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              to="/pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              className="nav-link disabled"
              to="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </NavLink>
          </div>
        </div>
      </div>
    </nav> */}
    </>
  );
}

export default Navbar;
