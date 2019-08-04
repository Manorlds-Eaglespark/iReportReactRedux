import React from 'react';
import { Link } from 'react-router-dom';
import theBannerImage from '../assets/images/take_action1.jpg';
import newUserImage from '../assets/images/new-user.png';
import loginImage from '../assets/images/login.png';
import InfoComponent from './common/InfoComponent';

const landingPageComponent = () => (
  <div>
    <div className="pageHeading">
      <span className="logo-l">i</span>
      <span className="logo-r">Reporter</span>
    </div>
    <div>
      <div className="menu">
          &nbsp;
      </div>
      <div className="main">
        <p id="theme_about">A Stand Against Corruption</p>
        <div className="head-liner">
            &nbsp;
        </div>

        <div className="father">
          <img className="bannerImage" src={theBannerImage} alt="" />
        </div>
        <div className="head-liner">
            &nbsp;
        </div>

        <div className="father">
          <div className="brother">
            <p id="theme">Welcome</p>
            <Link to="/login">
              <button type="button" id="loginButton" name="loginButton" className="createAccount">
                <img
                  src={loginImage}
                  alt={loginImage}
                />
                {' '}
                Login

              </button>
            </Link>
          </div>
          <div className="sister">
            <p id="theme">New here?</p>
            <Link to="/signup">
              <button href="/login" type="button" className="signin">
                <img
                  src={newUserImage}
                  alt={newUserImage}
                />
                {' '}
                Signup today

              </button>
            </Link>
          </div>

        </div>

      </div>
      <InfoComponent />

    </div>

  </div>
);

export default landingPageComponent;
