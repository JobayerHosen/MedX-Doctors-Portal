import React from "react";
import { Container } from "react-bootstrap";
import "./SectionTitle.css";

const SectionTitle = ({ children }) => {
  return (
    <Container className="section-title">
      <div>{children}</div>
    </Container>
  );
};

export default SectionTitle;
