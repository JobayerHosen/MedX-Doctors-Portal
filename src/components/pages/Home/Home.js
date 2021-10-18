import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Banner from "../../Banner/Banner";
import DoctorsCards from "../../DoctorsCards/DoctorsCards";
import SectionTitle from "../../SectionTitle/SectionTitle";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <SectionTitle>
        <h4>Meet Our Doctors</h4>
        <h1>Top Rated Specialists</h1>
      </SectionTitle>
      <DoctorsCards home></DoctorsCards>
      <Container className="text-center my-5">
        <NavLink to="/doctors" className="mx-auto">
          <Button variant="outline" className="rounded-pill btn-main mt-2 py-3">
            Make Appointment &nbsp;
            <i className="bi bi-arrow-right"></i>
          </Button>
        </NavLink>
      </Container>
    </div>
  );
};

export default Home;
