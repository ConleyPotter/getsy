// import React from './node_modules/react';
// import { Link } from './node_modules/react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import './splash.css'

class Splash extends React.Component {
  render() {
    return (
      <div className="splash">
        <h1 
          className="splash-header">
          If it’s handcrafted, vintage, custom, or unique, it’s on Getsy.
        </h1>
        <div className="splash-main">
          <div className="splash-promo-images">
            <div className="splash-main-left-container">
              <div className="yellow-box-large">
                <span className="y-b-l-text">Magical Pieces for the make-believers</span>
              </div>
              <img className="left-container-img"/>
            </div>
            <div className="splash-main-right-container">
              <img className="right-container-img"/>
              <div className="yellow-box-small">
                <span className="y-b-s-text">Perfectly personalized gifts for Dad</span>
              </div>
            </div>
          </div>
          <div className="marketing-labels">
            <label className="m-label">
              <img />
              Unique everything
              <label>
                We have millions of one-of-a-kind items, so you
                can find whatever you need (or really, really, want).
              </label>
            </label>
            <label className="m-label">
              <img />
              Independent sellers 
              <label>
                Buy directly from someone who put their heart
                and soul into making something special.
              </label>
            </label>
            <label className="m-label">
              <img />
              Secure shopping
              <label>
                We use best-in-class technology to protect your
                transactions.
              </label>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;