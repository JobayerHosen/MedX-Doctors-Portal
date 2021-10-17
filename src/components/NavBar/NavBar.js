import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-1.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="white" expand="lg" className="py-3">
        <Container>
          <NavLink to="/home" className="logo text-decoration-none d-flex justify-content-center align-items-center">
            <img src={logo} alt="logo" />
            <h1>MedX</h1>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 fw-bold align-items-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink activeClassName="active" className="nav-item" to="/home">
                Home
              </NavLink>
              <NavLink activeClassName="active" className="nav-item" to="/doctors">
                Doctors
              </NavLink>

              <NavLink activeClassName="active" className="nav-item" to="/about">
                About us
              </NavLink>

              <NavLink activeClassName="active" className="nav-item" to="/faq">
                FAQs
              </NavLink>
            </Nav>
            <NavLink to="/login">
              <Button variant="outline" className="rounded-pill btn-main p-2 px-3">
                <i class="bi bi-person"></i>
                &nbsp;Login Now
              </Button>
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
