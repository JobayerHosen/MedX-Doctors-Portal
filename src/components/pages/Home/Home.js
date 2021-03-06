import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import About from "../../About/About";
import Banner from "../../Banner/Banner";
import DoctorsCards from "../../DoctorsCards/DoctorsCards";
import Faq from "../../Faq/Faq";
import Loading from "../../Loading/Loading";
import SectionTitle from "../../SectionTitle/SectionTitle";

const Home = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Loading></Loading>;
  }

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

      <About></About>

      <Faq></Faq>
    </div>
  );
};

export default Home;
