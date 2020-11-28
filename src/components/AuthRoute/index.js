import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkToken } from "../../utils";

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkToken() === null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/reminder" />
        )
      }
    />
  );
};

export default AuthRoute;
