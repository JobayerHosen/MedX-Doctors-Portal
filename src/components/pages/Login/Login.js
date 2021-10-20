import React, { useState } from "react";
import { Col, Container, Form, Row, Button, FloatingLabel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Error from "../../Error/Error";
import Loading from "../../Loading/Loading";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInWithGoogle, signInWithGithub, logInWithEmailandPassword, error, isLoading } = useAuth();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    logInWithEmailandPassword(email, password);
    setEmail("");
    setPassword("");
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Container fluid className="login-heading">
        {error && <Error></Error>}
      </Container>

      <Container className="login-panel">
        <Row>
          {/* LOGIN FORM  */}
          <Col xs={12} md={6}>
            <h1 className="title text-center">Login</h1>
            <div className="login d-flex flex-column justify-content-center h-100  pb-5">
              <Form onSubmit={handleLoginSubmit}>
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

                <Button variant="outline" className="btn-main rounded-pill p-3 w-100" type="submit">
                  Log In
                </Button>
              </Form>
            </div>
          </Col>

          {/* THIRD PARTY LOGIN */}
          <Col xs={12} md={1}>
            <div className="d-flex justify-content-center align-items-center my-3 pt-5 pb-3 h-100">
              <p>--OR--</p>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <h1 className="title text-center fw-bold">Login with</h1>
            <div className="d-flex justify-content-around align-items-center  h-100 pb-5">
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
          No Account yet? <NavLink to="/signup">Sign Up</NavLink> instead.
        </h6>
      </Container>
    </div>
  );
};

export default Login;
