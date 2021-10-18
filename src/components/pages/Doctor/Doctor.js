import React from "react";
import { Alert, Card, Col, Container, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import useDoctorList from "../../../hooks/useDoctorList";
import "./Doctor.css";

const Doctor = () => {
  const [doctors] = useDoctorList();
  const { doctorId } = useParams();

  const doctor = doctorId ? doctors.find((dr) => dr.id === parseInt(doctorId)) : undefined;

  if (!doctor) {
    return <div className="alert">No result found</div>;
  }

  return (
    <div>
      {/* DETAILS PAGE'S HEADING  */}
      <Container fluid className="details-heading">
        <Container className="name h-100">
          <Row className="h-100">
            <Col xs={12} lg={4}></Col>
            <Col xs={12} lg={8} className="d-flex justify-content-center align-items-center">
              <h1 className="title">{doctor.name}</h1>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* DETAILS  */}
      <Container className="details">
        <Row>
          <Col xs={12} lg={4}>
            <Card className="shadow mx-auto" style={{ width: "300px" }}>
              <Card.Img className="details-img" variant="top" src={doctor.image} />
              <Card.Body>
                <h3>{doctor.name}</h3>
                <h5 className="my-2 text-main">{doctor.speciality}</h5>
                <p>{doctor.bio}</p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={8}>
            <div className="details-main p-5">
              <h4 className="mb-3">Biography</h4>
              <p className="mb-3">{doctor.bio}</p>
              <Alert className="d-flex justify-content-between text-black px-4 rounded-pill">
                <span>Speciality: </span>
                {doctor.speciality}
              </Alert>
              <Alert className="d-flex justify-content-between text-black px-4 rounded-pill">
                <span>Degrees: </span>
                {doctor.degrees}
              </Alert>
              <Alert className="d-flex justify-content-between text-black px-4 rounded-pill">
                <span>Office: </span>
                {doctor.office}
              </Alert>

              <NavLink to="/home" className="ms-auto">
                <Button variant="outline" className="rounded-pill btn-main mt-4">
                  Make Appointment &nbsp;
                  <i className="bi bi-calendar2-day"></i>
                </Button>
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Doctor;
