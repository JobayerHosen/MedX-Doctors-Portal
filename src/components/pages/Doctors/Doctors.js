import React from "react";
import { Container } from "react-bootstrap";
import DoctorsCards from "../../DoctorsCards/DoctorsCards";

const Doctors = () => {
  return (
    <div>
      <Container>
        <DoctorsCards></DoctorsCards>
      </Container>
    </div>
  );
};

export default Doctors;
