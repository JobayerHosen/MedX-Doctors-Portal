import React from "react";
import { Container, Button, Accordion } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import bannerBg from "../../assets/faq-1.png";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Faq.css";

const Faq = () => {
  return (
    <Container>
      <section className="about-style-two">
        <SectionTitle>
          <h4>FAQs</h4>
          <h1>Frequently Asked Questions</h1>
        </SectionTitle>
        <div className="row align-items-center ">
          <div className="col-12 col-lg-5 image-column">
            <div className="image_block_3">
              <img src={bannerBg} alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-6 ms-auto content-column">
            <div className="content_block_1">
              <div className="content-box ms-50">
                <Accordion defaultActiveKey="0" className="p-3">
                  <Accordion.Item className="accordion-item" eventKey="0">
                    <Accordion.Header className="accordion-header">How do I contact customer service?</Accordion.Header>
                    <Accordion.Body>
                      You can emain us. you will find email edress in our contact page . Or you can directly call us to
                      the phone provided in the contact page and footer.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Do doctors pay for good reviews?</Accordion.Header>
                    <Accordion.Body>
                      No. Our doctors do not intend to manipulate their review themselves. All reviews you see are fully
                      organic and real.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>What are your office hours?</Accordion.Header>
                    <Accordion.Body>
                      Our staff strives to make each interaction with patients clear, concise, and inviting. Support the
                      important work of Medicsh Hospital by making a much-needed donation today. We will work with you
                      to develop individualised care plans, including management of chronic diseases. If we cannot
                      assist.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Is testing included in my membership fee?</Accordion.Header>
                    <Accordion.Body>
                      No. We don't bare cost for your Diagnostic Test. Though we refer discount in many Diagnostic
                      center.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Faq;
