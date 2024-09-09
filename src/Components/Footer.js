import React from "react";
import logoImg from "../Image/logoCl.jpeg";
import { NavLink } from "react-router-dom";
import "./Main.css";

function Footer() {
  return (
    <>
      <footer className="bg-tran text-center text-lg-start mt-5 footer-sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <NavLink className="navbar-brand" to="/">
                <img src={logoImg} alt="Logo" className="logoimg" />
              </NavLink>
              <p>
                Some description about the company, its mission, and values.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    className="text-dark"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact Us</h5>
              <p>Email: info@company.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="text-center p-3 bg-light">
            <p className="mb-0">
              © {new Date().getFullYear()} Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
