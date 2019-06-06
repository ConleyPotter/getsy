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
        if (this.props.user._id === this.props.currentUser.id){
            sameuser = <p>this is the login user's page</p>
        }
        return(
            <div> 
                <h1> User Profile</h1>
                <p>{this.props.user.fName}</p>
                <p>{this.props.user.email}</p>
                {sameuser}
                <br></br>
                <Link to="/products/new" className="create-product-btn">Create a product</Link>
            </div>
        )
    }
}

export default UserProfile