import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./Nav/navbar_container";
import Splash from "./Splash/splash";
import Modal from "./Modal/modal";

import ProductIndexContainer from "./Products/product_index_container";
import LoginFormContainer from "./Session/login_form_container";
import SignupFormContainer from "./Session/signup_form_container";

import ProductShowContainer from './Product_Show/product_show_container'

const App = () => (
	<div>
		<Modal />
		<NavBarContainer />
		<Switch>
			<ProtectedRoute exact path="/products/:product_id" component={ProductShowContainer} />
			<ProtectedRoute exact path="/products" component={ProductIndexContainer} />
			<AuthRoute exact path="/" component={Splash} />
		</Switch>
	</div>
);

export default App;
