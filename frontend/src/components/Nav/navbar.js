import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          {/* any other links we have in the navbar */}
          <Link 
            to={'/cart'}
            className="shopping-cart-link">
            Shopping Cart
          </Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link 
            to={'/'}
            className="register-link">
            Register
          </Link>
          <Link 
            to={'/'}
            className="login-link">
            Sign In
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar">
        <h1 className="etsy-header">Etsy</h1>
        <div className="nav-links">
          { this.getLinks() }
        </div>
      </div>
    );
  }
}

export default NavBar;