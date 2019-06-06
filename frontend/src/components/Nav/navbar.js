import React from 'react';
import { withRouter } from 'react-router-dom';
import './navbar.css'
import DropdownCard from './drowpdown_card';

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
    const { logout, currentUser } = this.props
    if (this.props.loggedIn) {
      return (
        <div className="nav-logged-in">
          {/* any other links we have in the navbar */}
          <DropdownCard currentUser={currentUser} logout={logout}/>
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
            <li className="category-link-list-item">Jewelry & Accessories</li>
            <li className="category-link-list-item">Clothing & Shoes</li>
            <li className="category-link-list-item">Home & Living</li>
            <li className="category-link-list-item">Wedding & Party</li>
            <li className="category-link-list-item">Toys & Entertainment</li>
            <li className="category-link-list-item">Art & Collectibles</li>
            <li className="category-link-list-item">Craft Supplies</li>
            <li className="category-link-list-item">Vintage</li>
            <li className="category-link-list-item">Gifts</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);