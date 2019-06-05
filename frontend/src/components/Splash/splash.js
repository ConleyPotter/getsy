// import React from './node_modules/react';
// import { Link } from './node_modules/react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import './splash.css'

class Splash extends React.Component {
  render() {
    return (
      <div className="splash-main">
        <h1 
          className="splash-header">
          If it’s handcrafted, vintage, custom, or unique, it’s on Getsy.
        </h1>
      </div>
    )
  }
}

export default Splash;