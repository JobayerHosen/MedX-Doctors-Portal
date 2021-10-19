import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children, ...rest }) => {
  const firebaseAuth = useAuth();

  if (firebaseAuth.isLoading) {
    return (
      <Route {...rest}>
        <Loading></Loading>
      </Route>
    );
  }

  return (
    <Route {...rest}>
      {({ location }) =>
        firebaseAuth.user ? children : <Redirect to={{ pathname: "/login", state: { from: location } }} />
      }
    </Route>
  );
};

export default PrivateRoute;
