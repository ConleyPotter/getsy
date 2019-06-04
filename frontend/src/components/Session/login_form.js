// import React from './node_modules/react';
// import { withRouter } from './node_modules/react-router-dom';
import React from 'react'
import { withRouter } from 'react-router-dom';
import './session_form.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Product Index page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/products');
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="sign-in-form-container">
        <form 
          onSubmit={this.handleSubmit}
          className="sign-in-form">
          <label className="sign-in-form-label">Sign in to continue</label>
          <div className="input-container">
            <label className="sign-in-label">
              Email address
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className="sign-in-input"
              />
            </label>
            <br />
            <label className="sign-in-label">
              Password
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="sign-in-input"
              />
            </label>
            <br />
            <input 
              type="submit" 
              value="Sign in" 
              className="sign-in-signin-button"
            />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);