// import React from './node_modules/react';
// import { withRouter } from './node_modules/react-router-dom';
import React from 'react'
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      fName: this.state.fName,
      email: this.state.email,
      password: this.state.password
    };

    this.props.signup(user)
      .then(this.props.history.push('/products'),
      this.props.closeModal());
  }

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
      <div className="sign-up-form-container">
        <form
          onSubmit={this.handleSubmit}
          className="sign-up-form">
          <label className="sign-up-label1">Create your account</label>
          <label className="sign-up-label2">Registration is easy.</label>
          <div className="sign-up-input-container">
            <div className="sign-up-label">
              <div className="sign-up-label-div">
                Email address <span className="sign-up-span">  *</span>
              </div>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                className="sign-up-input"
              />
            </div>
            <div className="sign-up-label">
              <div className="sign-up-label-div">
                First name <span className="sign-up-span">  *</span>
              </div>
              <input type="text"
                value={this.state.firstName}
                onChange={this.update('fName')}
                placeholder="First Name"
                className="sign-up-input"
              />
            </div>
            <div className="sign-up-label">
              <div className="sign-up-label-div">
                Password <span className="sign-up-span">  *</span>
              </div>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="sign-up-input"
              />
            </div>
            <input 
              type="submit" 
              value="Register" 
              className="register-button"
            />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);