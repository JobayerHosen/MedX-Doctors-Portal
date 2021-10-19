import React from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import DoctorsCards from "../../DoctorsCards/DoctorsCards";
import Loading from "../../Loading/Loading";
import SectionTitle from "../../SectionTitle/SectionTitle";

const Doctors = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Loading></Loading>;
  }

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
