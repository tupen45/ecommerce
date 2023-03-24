import React from "react";
import "./Header1.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Header1 = ({user}) => {
 
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#fff" }}>
        <Navbar.Brand href="/">
          <img
            src="https://i.ibb.co/qsXmy2v/logo2.png"
            width="120"
            alt=""
            className="img-fluid"
            id="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me -auto">
            <Link className="nav-link" to="/Cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              cart
            </Link>
            <Nav.Link style={{ color: "#111" }}>
              {" "}
              <Link to="/Sign">Login</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <button className="button-sign-up">
                <Link
                  style={{ color: "#fff", textDecoration: "none" }}
                  to="/register"
                >
                 sign up
                </Link>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header1;
