import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container fluid className="about-bg">
      <Container className="name h-100 ">
        <Row className="h-100 p-5">
          <Col xs={12} md={7}>
            <h1 className="text-white text-start mb-3">
              <i className="bi bi-activity"></i> &nbsp;MedX Has Touched The Lives Of Patients & Providing Care for The
              Sickest In Our Community.
            </h1>
          </Col>

          <Col xs={12} md={4}></Col>
          <Col xs={12} md={12} className="my-2">
            <i className="bi bi-shield-plus text-white" style={{ fontSize: "5rem" }}></i>
          </Col>
          <Col xs={12} md={5}></Col>
          <Col xs={12} md={7}>
            <h5 className="text-white text-start mb-3">
              MedX has been present in US since 1990, offering innovative solutions, specializing in medical services
              for treatment of medical infrastructure. With over 100 professionals actively participates in numerous
              initiatives aimed at creating sustainable change for patients!
            </h5>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="service-grid bg-white text-main mx-auto my-3 p-3 text-center">
              <i className=" bi bi-activity"></i>
              <h5>Medical Advices & Check Ups </h5>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="service-grid bg-white text-main mx-auto my-3 p-3 text-center">
              <i className="bi bi-shield-check"></i>
              <h5>Trusted Medical Treatment </h5>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="service-grid bg-white text-main mx-auto my-3 p-3 text-center">
              <i className="bi bi-truck"></i>
              <h5>Emergency Help Available 24/7 </h5>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="service-grid bg-white text-main mx-auto my-3 p-3 text-center">
              <i className="bi bi-binoculars"></i>
              <h5>Medical Research Professionals </h5>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="service-grid bg-white text-main mx-auto my-3 p-3 text-center">
              <i className="bi bi-award"></i>
              <h5> Only Qualified Doctors</h5>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="service-grid bg-white text-main mx-auto my-3 p-3 text-center">
              <i className="bi bi-lightbulb"></i>
              <h5> Cutting Edge Facility</h5>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="service-grid bg-white text-main mx-auto my-3 p-3 text-center">
              <i className="bi bi-cash-coin"></i>
              <h5> Affordable Prices For All Patients </h5>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div className="service-grid bg-white text-main mx-auto my-3 p-3 text-center">
              <i className="bi bi-heart"></i>
              <h5>Quality Care For Every Patient </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
