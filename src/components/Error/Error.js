import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./Error.css";

const Error = () => {
  const { error, setError } = useAuth();
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 8000);
    }
  }, [error]);
  return (
    <div className={`error ${error && "active"}`}>
      <Alert variant="danger">{error}</Alert>
    </div>
  );
};

export default Error;
