import React from "react";
import "./Footer.css";
import logo from "../../assets/logo-1-light.png";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className="d-flex flex-column align-items-start">
              <NavLink
                to="/home"
                className="logo text-decoration-none d-flex justify-content-center align-items-center mb-4"
              >
                <img src={logo} alt="logo" />
                <h1 className="text-light">MedX</h1>
              </NavLink>

              <p className="text-white mb-3 pe-5">
                Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you
                will allow us to care for you and strive to be the first and best choice for your family healthcare.
              </p>

              <NavLink to="/doctors">
                <i className="bi bi-arrow-right"></i>
                Make Appoinment
              </NavLink>
            </div>
          </Col>

          <Col xs={12} sm={6} md={2}>
            <div className="d-flex flex-column">
              <h6 className="text-white mb-3">Departments</h6>
              <ul>
                <li className="mb-2">
                  <NavLink className="text-muted" to="/doctors">
                    Neurology Clinic
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted" to="/doctors">
                    Cardiology Clinic
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted" to="/doctors">
                    Pathology Clinic
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted" to="/doctors">
                    Laboratory Analysis
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted" to="/doctors">
                    Pediatric Clinic
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted" to="/doctors">
                    Outpatient Surgery
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <div className="d-flex flex-column">
              <h6 className="text-white mb-3">Links</h6>
              <ul>
                <li className="mb-2">
                  <NavLink className="text-muted" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted" to="/doctors">
                    Our Doctors
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted" to="/doctors">
                    Appoinments
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink className="text-muted" to="/faq">
                    FAQs
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <div className="d-flex flex-column bg-white text-main rounded p-4 border-start border-5 border-primary">
              <h5 className="mb-3 fw-bold">Quick Contacts</h5>
              <p className="mb-3">
                If you have any questions or need help, feel free to contact us for medical assistance.
              </p>
              <h5 className="mb-3 fw-bolder">
                <i className="bi bi-telephone-fill"></i> 01501234567
              </h5>
              <p className="mb-3">2307 Beverley Rd Brooklyn, New York 11226 United States.</p>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center align-items-center py-4 mt-5">
          <p className="text-white">Copyright &copy; 2021 All rights reserved. </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
