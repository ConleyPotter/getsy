// import React from './node_modules/react';
// import { Link } from './node_modules/react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import './splash.css'
import etsyCheck from './etsyCheck.png';
// import dadEtsy from './dadEtsyImg.png';
// import makeBelieve from './makeBelieveEtsyImg.png';

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
              <img 
                className="left-container-img"/>
                {/* src={makeBelieve}/> */}
            </div>
            <div className="splash-main-right-container">
              <img 
                className="right-container-img"/>
                 {/* src={dadEtsy}/> */}
              <div className="yellow-box-small">
                <span className="y-b-s-text">Perfectly personalized gifts for Dad</span>
              </div>
            </div>
          </div>
          <div className="marketing-labels">
            <div className="m-labels-outer-container">
              <div className="m-label-container">
                <img src={etsyCheck} className="etsy-check"/>
                <label className="m-label">
                  Unique everything
                </label>
              </div>
              <label className="m-sub-label">
                We have millions of one-of-a-kind items, so you
                can find whatever you need (or really, really, want).
              </label>
            </div>
            <div className="m-labels-outer-container">
              <div className="m-label-container">
                <img src={etsyCheck} className="etsy-check" />
                <label className="m-label">
                  Independent sellers 
                </label>
              </div>
              <label className="m-sub-label">
                Buy directly from someone who put their heart
                and soul into making something special.
              </label>
            </div>
            <div className="m-labels-outer-container">
              <div className="m-label-container">
                <img src={etsyCheck} className="etsy-check" />
                <label className="m-label">
                  Secure shopping
                </label>
              </div>
              <label className="m-sub-label">
                We use best-in-class technology to protect your
                transactions.
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;