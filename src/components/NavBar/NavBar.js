import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-1.png";
import useAuth from "../../hooks/useAuth";
import "./NavBar.css";

const NavBar = () => {
  const { user, logOut } = useAuth();

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

              <NavLink activeClassName="active" className="nav-item" to="/appointment">
                Appointment
              </NavLink>
              <NavLink activeClassName="active" className="nav-item" to="/about">
                About us
              </NavLink>
              <NavLink activeClassName="active" className="nav-item" to="/contact">
                Live Chat
              </NavLink>

              <NavLink activeClassName="active" className="nav-item" to="/faq">
                FAQs
              </NavLink>
            </Nav>

            {/* SHOW LOGIN OR LOGOUT BUTTON BASE ON LOGIN STATUS */}
            {!user ? (
              <NavLink to="/login">
                <Button variant="outline" className="rounded-pill btn-main p-2 px-3">
                  <i className="bi bi-person"></i>
                  &nbsp;Login Now
                </Button>
              </NavLink>
            ) : (
              <div className="user d-flex">
                <Button onClick={logOut} variant="outline" className="rounded-pill btn-main p-2 px-3">
                  Log Out&nbsp;
                  <i className="bi bi-box-arrow-right"></i>
                </Button>
                <div className=" user-icon ms-3">
                  <img
                    title={user.email}
                    src={
                      user.photoURL ? user.photoURL : "https://i.ibb.co/4NM5vPL/Profile-avatar-placeholder-large.png"
                    }
                    alt="user avatar"
                  />
                  <div className="user-info">
                    <h3 className="mb-3">{user.displayName ? user.displayName : "Anonimous"}</h3>
                    <h5 className="mb-3">{user.email}</h5>
                  </div>
                </div>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
