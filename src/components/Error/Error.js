import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

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
      <Alert style={{ maxWidth: "300px", margin: "10px auto" }} variant="danger">
        {error}
      </Alert>
    </div>
  );
};

export default Error;
