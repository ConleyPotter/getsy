import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./Nav/navbar_container";
import Splash from "./Splash/splash";
import Modal from "./Modal/modal";
import "./app.css";

import ProductIndex from "./Products/product_index";
import UserProfileContainer from './Users/user_profile_container'

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/products" component={ProductIndex} />
      <ProtectedRoute path="/users/:user_id" component={UserProfileContainer} />
      <AuthRoute exact path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;
