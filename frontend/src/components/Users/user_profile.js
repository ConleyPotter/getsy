import React from 'react'
import {Link} from 'react-router-dom'
import './user_profile.css'
class UserProfile extends React.Component{

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.user_id)
    }

    render(){
        if(!this.props.user) return null;
        let sameuser = null;
        if (this.props.user.id === this.props.currentUser.id){
            sameuser = <p>this is the login user's page</p>
        }
        const { fName, email, date } = this.props.user;
        const dateObj = new Date(date);
        let month = dateObj.getMonth();
        const months = {
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December",
        }
        month = months[month];
        const day = dateObj.getDate();
        const year = dateObj.getUTCFullYear();
        let numberOfReviews;
        let numberOfProductsSold;
        let numberOfProductsOnSale;
        return (
          <div className="outer-profile-container">
            <div className="user-profile-container">
              <div className="avatar">
                <span className="fas fa-user-alt" />
              </div>
              <div className="user-profile-info">
                <h2>{fName}</h2>
                <p>{email}</p>
                <button className="edit-profile-button">
                  <span className="fas fa-pencil-alt" />
                  Edit Profile
                </button>
              </div>
              <div className="profile-about">
                <h3>About</h3>
                <p>Joined {`${month} ${day}, ${year}`}</p>
              </div>
            </div>
            <div className="more-info-container">
              <button>
                <h2>
                  Reviews
                  <span className="number-of-reviews">
                    {numberOfReviews}
                  </span>
                </h2>
              </button>
              <button>
                <h2>
                  <span className="number-of-products-sold">
                    {numberOfProductsSold}
                  </span>
                  Products Sold
                </h2>
              </button>
              <button>
                <h2>
                  <span className="number-of-products-on-sale">
                    {numberOfProductsOnSale}
                  </span>
                  Products on Sale
                </h2>
              </button>
            </div>
            <Link to="/products/new" className="create-product-btn">
              Create a product
            </Link>
          </div>
        );
    }
}

export default UserProfile