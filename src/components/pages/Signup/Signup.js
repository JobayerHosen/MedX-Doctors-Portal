import React, { useState } from "react";
import { Col, Container, Form, Row, Button, FloatingLabel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Error from "../../Error/Error";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signInWithGoogle, signInWithGithub, createAccountWithEmailPassword, error, setError } = useAuth();

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      createAccountWithEmailPassword(email, password);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      setError("Password Does Not Match");
    }
  };

  return (
    <div>
      <Container fluid className="signup-heading pt-5">
        {error && <Error></Error>}
      </Container>
      <Container className="signup-panel">
        <Row>
          <Col xs={12} md={6}>
            <h1 className="title text-center">signup</h1>
            <div className="signup h-100 d-flex flex-column justify-content-center">
              <Form onSubmit={handleSignupSubmit}>
                <Form.Group className=" mb-3" controlId="formBasicEmail">
                  <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-pill ps-4"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="rounded-pill ps-4"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                  <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password">
                    <Form.Control
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="rounded-pill ps-4"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </FloatingLabel>
                </Form.Group>

                <Button variant="outline" className="btn-main rounded-pill p-3 w-100" type="submit">
                  Sign Up
                </Button>
              </Form>
            </div>
          </Col>
          <Col xs={12} md={1}>
            <div className="d-flex justify-content-center align-items-center my-3 pt-5 h-100">
              <p>--OR--</p>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <h1 className="title text-center fw-bold">Signup With</h1>
            <div className="d-flex justify-content-around align-items-center h-100 ">
              <button onClick={signInWithGoogle} className="btn btn-danger">
                <i className="bi bi-google fs-2"></i> <br />
                Google
              </button>
              <button onClick={signInWithGithub} className="btn btn-success">
                <i className="bi bi-github fs-2"></i> <br />
                Github
              </button>
              <button disabled className="btn btn-primary">
                <i className="bi bi-facebook fs-2"></i> <br />
                FaceBook
              </button>
            </div>
          </Col>
        </Row>
        <h6 className="my-5 pt-5 text-center">
          Already have account? <NavLink to="/login">Log In</NavLink> instead.
        </h6>
      </Container>
    </div>
  );
};

export default Signup;