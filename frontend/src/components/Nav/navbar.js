import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    const cartLink = this.props.loggedIn ? `/cart/${this.props.currentUser.id}` : "/"
    return (
      <div className="navbar">
        <div className="top-navbar-buttons">
          {/* <h1 className="etsy-header">Getsy</h1> */}
          <Link to="/products" className="etsy-header"> Getsy</Link>
          
          <div className="right-hand-buttons">
          {this.getButtons()}
            <Link to={cartLink} >
              <div className="shopping-cart-container">
                <span className="fas fa-shopping-cart" />
                Cart
              </div>
            </Link>
          </div>
        </div>
        <div className="bottom-navbar-category-buttons">
          <ul className="category-links">
            <li className="category-link-list-item">
              <Link to="/products/cat/jewelry_and_accessories">
                Jewelry & Accessories
              </Link>
            </li>
            <li className="category-link-list-item">
              <Link to="/products/cat/clothing_and_shoes">
                Clothing & Shoes
              </Link>
            </li>
            <li className="category-link-list-item">
              <Link to="/products/cat/home_and_living">
                Home & Living
              </Link>
            </li>
            <li className="category-link-list-item">
              <Link to="/products/cat/wedding_and_party">
                Wedding & Party
              </Link>
            </li>
            <li className="category-link-list-item">
              <Link to="/products/cat/toys_and_entertainment">
                Toys & Entertainment
              </Link>
            </li>
            <li className="category-link-list-item">
              <Link to="/products/cat/art_and_collectibles">
                Art & Collectibles
              </Link>
            </li>
            <li className="category-link-list-item">
              <Link to="/products/cat/craft_supplies">
                Craft Supplies
              </Link>
            </li>
            <li className="category-link-list-item">
              <Link to="/products/cat/vintage">
                Vintage
              </Link>
            </li>
            <li className="category-link-list-item">
              <Link to="/products/cat/gifts">
                Gifts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);