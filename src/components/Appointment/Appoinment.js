import React from "react";
import { Col, Container, FloatingLabel, Form, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useDoctorList from "../../hooks/useDoctorList";
import "./Appointment.css";

const Appoinment = () => {
  const [doctors] = useDoctorList();
  return (
    <div>
      <Container fluid className="appointment-heading"></Container>
      <Container className="appointment-panel">
        <Row>
          <Col xs={12} lg={8}>
            <h1 className="title text-center">Book Appointment</h1>
            <p>
              Please feel welcome to contact our friendly reception staff with any general or medical enquiry. Our
              doctors will receive or return any urgent calls.
            </p>
            <div className="appointment d-flex flex-column justify-content-center mt-4 pb-5">
              <Form>
                <Row className="g-2">
                  <Col xs={12} sm={6}>
                    <Form.Group className=" mb-3" controlId="doctor">
                      <FloatingLabel controlId="floatingSelect" label="Doctor">
                        <Form.Select className="rounded-pill ps-4" aria-label="Doctor">
                          {doctors.map((doctor) => (
                            <option key={doctor.id} value={doctor.id}>
                              {doctor.name}
                            </option>
                          ))}
                        </Form.Select>
                      </FloatingLabel>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6}>
                    <Form.Group className=" mb-3" controlId="name">
                      <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                        <Form.Control className="rounded-pill ps-4" type="text" placeholder="name" required />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6}>
                    <Form.Group className=" mb-3" controlId="formBasicEmail">
                      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                        <Form.Control className="rounded-pill ps-4" type="email" placeholder="email" required />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6}>
                    <Form.Group className=" mb-3" controlId="formBasicPhone">
                      <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
                        <Form.Control className="rounded-pill ps-4" type="text" placeholder="Phone" required />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6}>
                    <Form.Group className=" mb-3" controlId="date">
                      <FloatingLabel controlId="floatingInput" label="Date" className="mb-3">
                        <Form.Control className="rounded-pill ps-4" type="date" placeholder="date" required />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6}>
                    <Form.Group className=" mb-3" controlId="time">
                      <FloatingLabel controlId="floatingInput" label="Time" className="mb-3">
                        <Form.Control className="rounded-pill ps-4" type="time" placeholder="time" required />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>

                  <Button variant="outline" className="btn-main rounded-pill p-3 w-100" type="submit">
                    Book Appointment
                  </Button>
                </Row>
              </Form>
            </div>
          </Col>

          <Col xs={12} lg={4}>
            <div className="d-flex justify-content-around align-items-center  h-100">
              <div
                className="d-flex flex-column mt-3 bg-main text-white p-4 border-start border-5 border-primary"
                style={{ borderRadius: "1rem" }}
              >
                <h3 className="mb-3 fw-bold">Quick Contacts</h3>
                <p className="mb-3 text-white ">
                  If you have any questions or need help, feel free to contact us for medical assistance.
                </p>
                <h3 className="mb-3 fw-bolder">
                  <i className="bi bi-telephone-fill"></i> 01501234567
                </h3>
                <p className="mb-3 text-white ">2307 Beverley Rd Brooklyn, New York 11226 United States.</p>

                <NavLink to="/contact">
                  <Button variant="outline" className="rounded-pill btn-primary my-5 p-2 px-3">
                    Contact &nbsp;
                    <i className="bi bi-arrow-right"></i>
                  </Button>
                </NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Appoinment;
