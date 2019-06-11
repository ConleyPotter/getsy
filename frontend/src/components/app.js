import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./Nav/navbar_container";
import Splash from "./Splash/splash";
import Modal from "./Modal/modal";
import ProductIndexByCategory from './Products/index_products_by_category'
import "./app.css";

import ProductIndex from "./Products/product_index";
import UserProfileContainer from './Users/user_profile_container'
import ProductIndexContainer from "./Products/product_index_container";
import ProductUserContainer from "./Products/product_user_index_container";
import ProductShowContainer from './Product_Show/product_show_container'
import ProductCreateContainer from './Product_Form/product_create_container'
import CartIndexContainer from './Cart/cart_index_container'

import './app.css'
const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/cart/:user_id" component={CartIndexContainer} />
      <ProtectedRoute exact path="/products/new" component={ProductCreateContainer} />
			<ProtectedRoute exact path="/products/:product_id" component={ProductShowContainer} />
			<ProtectedRoute exact path="/users/:user_id/products" component={ProductUserContainer} />
			<ProtectedRoute exact path="/products" component={ProductIndexContainer} />
      <ProtectedRoute path="/users/:user_id" component={UserProfileContainer} />
      <ProtectedRoute
        exact
        path="/products/cat/:category"
        component={ProductIndexByCategory}
      />
      <AuthRoute exact path="/" component={Splash} />
    </Switch>
  </div>
);

export default App; 
