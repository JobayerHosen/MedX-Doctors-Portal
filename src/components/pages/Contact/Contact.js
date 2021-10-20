import React, { useState } from "react";
import { Container, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./Contact.css";

const Contact = () => {
  const { user } = useAuth();
  const [msgList, setMsgList] = useState([]);
  const [msgText, setMsgText] = useState("");

  const handleMsgSubmit = (e) => {
    e.preventDefault();
    msgText && setMsgList([...msgList, { user: user?.displayName, type: "self", text: msgText }]);
    setMsgText("");
  };

  return (
    <div>
      <Container className="contact-panel">
        <h1 className="fs-2 fw-bold mb-2 text-center">Live Chat</h1>
        <div className="contact p-3">
          <div className="msg-box">
            <p className="msg-other">Hi! How can I help you ?</p>
            {msgList.map((msg, index) => (
              <p key={index} title={msg.user} className={msg.type === "self" ? "msg-self" : "msg-other"}>
                {msg.text}
              </p>
            ))}
          </div>

          <Form onSubmit={handleMsgSubmit}>
            <InputGroup className="rounded-pill">
              <FormControl
                value={msgText}
                onChange={(e) => setMsgText(e.target.value)}
                className="rounded-pill p-3 pt-3"
                as="input"
                aria-label="Chat"
              />
              <Button variant="outline" type="submit" className="rounded-pill p-0 ms-2">
                <i
                  style={{ fontSize: "3rem", lineHeight: "3rem" }}
                  className=" text-primary bi bi-arrow-right-circle-fill"
                ></i>
              </Button>
            </InputGroup>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
