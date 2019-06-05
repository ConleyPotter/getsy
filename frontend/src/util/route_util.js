import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      // Here we will redirect to our products page if the user is authenticated
      <Redirect to="/products" />
    )
  )} />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route 
    {...rest}
    render={props => 
      loggedIn ? (
        <Component {...props} />
      ) : (
        // <Redirect to="/login" />
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => (
  {loggedIn: state.session.isAuthenticated}
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));