import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Banner.css";
import bannerBg from "../../assets/banner-bg.png";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <Container>
      <section className="about-style-two">
        <div className="row align-items-center ">
          <div className="col-12 col-lg-6 col-xl-5 me-auto content-column">
            <div className="content_block_1">
              <div className="content-box me-50">
                <div className="sec-title">
                  <p className="text-main">About MedX</p>
                  <h2 className="title text-second">Bring care to your home with one click</h2>
                </div>
                <div>
                  <p>
                    Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope
                    you will allow us to care for you and strive to be the first and best choice for healthcare.
                  </p>
                </div>

                <div className="btn-box">
                  <NavLink to="/about">
                    <Button variant="outline" className="rounded-pill btn-main my-5 p-2 px-3">
                      About Us &nbsp;
                      <i className="bi bi-arrow-right"></i>
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 image-column">
            <div className="image_block_3">
              <img src={bannerBg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Banner;
