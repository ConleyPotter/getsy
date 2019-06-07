// import React from './node_modules/react';
// import { Link } from './node_modules/react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import './splash.css'
import etsyCheck from './etsyCheck.png';
/* eslint no-undef: 0 */ // --> OFF

class Splash extends React.Component {

  // componentDidMount() {
  //   (() => {
  //     document.getElementById("file-input").onchange = () => {
  //       const files = document.getElementById('file-input').files;
  //       const file = files[0];
  //       if (file == null) {
  //         return alert('No file selected.');
  //       }
  //       this.getSignedRequest(file);
  //     }
  //   })();
  // }

  // uploadFile(file, signedRequest, url) {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('PUT', signedRequest);
  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState === 4) {
  //       if (xhr.status === 200) {
  //         document.getElementById('preview').src = url;
  //         document.getElementById('avatar-url').value = url;
  //       }
  //       else {
  //         alert('Could not upload file.');
  //       }
  //     }
  //   };
  //   xhr.send(file);
  // }

  // getSignedRequest(file) {
  //   let xhr = new XMLHttpRequest();
  //   xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
  //   xhr.onreadystatechange = () => {
  //     if(xhr.readyState === 4){
  //       if(xhr.status === 200){
  //         const response = JSON.parse(xhr.responseText);
  //         this.uploadFile(file, response.signedRequest, response.url);
  //       } else{
  //         alert('Could not get signed URL.');
  //       }
  //     }
  //   };
  //   xhr.send();
  // }



  render() {

    return (
      <div className="splash">
        <h1 className="splash-header">
          If it’s handcrafted, vintage, custom, or unique, it’s on Getsy.
        </h1>
        <div className="splash-main">
          <div className="splash-promo-images">
            <div className="splash-main-left-container">
              <div className="yellow-box-large">
                <span className="y-b-l-text">
                  Magical Pieces for the make-believers
                </span>
              </div>
              <img
                className="left-container-img"
                src={'https://getsy-app.s3-us-west-2.amazonaws.com/animals-assorted-background-1043520.jpg'}
                alt=""
              />
            </div>
            <div className="splash-main-right-container">
              <img
                className="right-container-img"
                src={`https://getsy-app.s3-us-west-2.amazonaws.com/markus-spiske-626757-unsplash.jpg`}
                alt=""
              />
              <div className="yellow-box-small">
                <span className="y-b-s-text">
                  Perfectly personalized gifts for Dad
                </span>
              </div>
            </div>
          </div>
          <div className="marketing-labels">
            <div className="m-labels-outer-container">
              <div className="m-label-container">
                <img src={etsyCheck} className="etsy-check" alt="" />
                <label className="m-label">Unique everything</label>
              </div>
              <label className="m-sub-label">
                We have millions of one-of-a-kind items, so you can find
                whatever you need (or really, really, want).
              </label>
            </div>
            <div className="m-labels-outer-container">
              <div className="m-label-container">
                <img src={etsyCheck} className="etsy-check" alt="" />
                <label className="m-label">Independent sellers</label>
              </div>
              <label className="m-sub-label">
                Buy directly from someone who put their heart and soul into
                making something special.
              </label>
            </div>
            <div className="m-labels-outer-container">
              <div className="m-label-container">
                <img src={etsyCheck} className="etsy-check" alt="" />
                <label className="m-label">Secure shopping</label>
              </div>
              <label className="m-sub-label">
                We use best-in-class technology to protect your
                transactions.
              </label>
            </div>
          </div>
        </div>
        {/* <div>
          <input type="file" id="file-input"/>
            <p id="status">Please select a file</p>
            <img id="preview" src="/images/default.png"/>

          <form method="POST" action="/save-details">
            <input type="hidden" id="avatar-url" name="avatar-url" value="/images/default.png"/>
            <input type="text" name="username" placeholder="Username"/><br/>
            <input type="text" name="full-name" placeholder="Full name"/><br/>
            <input type="submit" value="Update profile"/>
          </form>
        </div> */}
      </div>
    );
  }
}

export default Splash;