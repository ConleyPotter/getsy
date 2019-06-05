import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getButtons = this.getButtons.bind(this);
    this.handleShoppingCart = this.handleShoppingCart.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleShoppingCart(e) {
    e.preventDefault();
    this.props.history.push('/cart');
  }

  handleRegister(e) {
    e.preventDefault();
    this.props.openModal('signup')
    this.props.history.push('/');
  }

  handleLogin(e) {
    e.preventDefault();
    this.props.openModal('login')
    this.props.history.push('/');
  }

  getButtons() {
    if (this.props.loggedIn) {
      return (
        <div>
          {/* any other links we have in the navbar */}
          <button
            onClick={this.handleShoppingCart}
            className="shopping-cart-link">
            Cart
          </button>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="nav-auth-links">
          <button onClick={this.handleRegister} className="register-link">
            Register
          </button>
          <button onClick={this.handleLogin} className="sign-in-link">
            Sign In
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar">
        <div className="top-navbar-buttons">
          <h1 className="etsy-header">Etsy</h1>
          <div className="right-hand-buttons">
            {this.getButtons()}
            <div className="shopping-cart-container">
              <span className="fas fa-shopping-cart" />
              Cart
            </div>
          </div>
        </div>
        <div className="bottom-navbar-category-buttons">
          <ul className="category-links">
            <li className="category-link-list-item">Jewelry</li>
            <li className="category-link-list-item">Jewelry</li>
            <li className="category-link-list-item">Jewelry</li>
            <li className="category-link-list-item">Jewelry</li>
            <li className="category-link-list-item">Jewelry</li>
            <li className="category-link-list-item">Jewelry</li>
            <li className="category-link-list-item">Jewelry</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);