import React from "react";
import { Container } from "react-bootstrap";
import DoctorsCards from "../../DoctorsCards/DoctorsCards";
import SectionTitle from "../../SectionTitle/SectionTitle";

const Doctors = () => {
  return (
    <div>
      <SectionTitle>
        <h1>Our Doctors</h1>
      </SectionTitle>
      <Container>
        <DoctorsCards></DoctorsCards>
      </Container>
    </div>
  );
};

export default Doctors;
