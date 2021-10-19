import React, { useState } from "react";
import { Col, Container, FloatingLabel, Form, Row, Button, Alert, InputGroup, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const [msgList, setMsgList] = useState([]);
  const [msg, setMsg] = useState("");

  const handleMsgSubmit = (e) => {
    e.preventDefault();
    msg && setMsgList([...msgList, msg]);
    setMsg("");
  };

  return (
    <div>
      <Container className="contact-panel">
        <h1 className="title text-center">Contact</h1>

        <div className="contact p-3">
          <div className="msg-box">
            {msgList.map((msg) => (
              <p key={msg} className="msg-self">
                {msg}
              </p>
            ))}
          </div>

          <Form onSubmit={handleMsgSubmit}>
            <InputGroup className="rounded-pill">
              <FormControl
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="rounded-pill p-3 pt-3"
                as="input"
                aria-label="Chat"
              />
              <Button variant="outline" type="submit" className="rounded-pill p-0 ms-2">
                <i style={{ fontSize: "3rem" }} className=" text-primary bi bi-arrow-right-circle-fill"></i>
              </Button>
            </InputGroup>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
