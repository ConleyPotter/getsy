import React from "react";
import { Link } from "react-router-dom"
import './dropdown_card.css'

class DropdownCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.dropdownElement = null;

    this.setDropwdownElementRef = element => {
      this.dropdownElement = element;
    }
  }

  componentWillUnmount() {

  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", event => this.closeMenu(event));
    });
  }

  closeMenu(event) {
    if (this.dropdownElement && !this.dropdownElement.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", event =>
          this.closeMenu(event)
        );
      });
    }
  }

  render() {
    const { currentUser, logout } = this.props;
    const menu = this.state.showMenu ? (
      <div className="menu">
        <div className="profile-info">
          <div className="avatar">
            <span className="fas fa-user-alt" />
          </div>
          <div className="additional-profile-info">
            <p className="fName">{currentUser.fName}</p>
            <Link to={`/users/${currentUser.id}`} className="profile-link"> <p className="view-profile">
              View profile 
              <span className="fas fa-chevron-right" />
            </p>
            </Link>
          </div>
        </div>
        <div className="item-separator" />
        <Link to="/">
          Purchases and reviews
        </Link>
        <div className="item-separator" />
        <button onClick={e => logout()} className="link menu-item">
          Logout
        </button>
      </div>
    ) : null;
    return (
      <div>
        <button onClick={this.showMenu} className="drop-down-open">
          <div
            className="avatar"
            ref={el => {
              this.dropdownElement = el;
            }}
          >
            <span className="fas fa-user-alt"></span>
            <p>
              You
            </p>
          </div>
        </button>

        {menu}
      </div>
    );
  }
}

export default DropdownCard;
