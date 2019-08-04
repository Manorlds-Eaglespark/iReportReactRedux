/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import theBannerImage from '../assets/images/take_action1.jpg';
import signinImage from '../assets/images/new-user2.png';
import registerUserAction from '../actions/auth/registerAction';
import Loader from './common/Loader';
import InfoComponent from './common/InfoComponent';

export class SignupComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      firstname: '',
      lastname: '',
      othernames: '',
      email2: '',
      password2: '',
      phonenumber: '',
      username: '',
    };
  }

      onInputChange = (e) => {
        e.preventDefault();
        this.setState({
          [e.target.name]: e.target.value,
        });
      }

      handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ isLoading: true });
        const {
          firstname, lastname, othernames, email2, password2, phonenumber, username,
        } = this.state;

        const registerInfo = {
          firstname,
          lastname,
          othernames,
          email: email2,
          password: password2,
          phonenumber,
          username,
        };

        const { registerAction } = this.props;

        await registerAction(registerInfo);

        await this.setState({ isLoading: false });
      }


      render() {
        const {
          firstname, lastname, othernames, email2, password2, phonenumber, username, isLoading,
        } = this.state;
        return (
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

                  <form className="modal-content animate" id="register-form" onSubmit={this.handleSubmit}>
                    <div className="imgcontainer">
                      <img src={signinImage} alt="Avatar" className="avatar" />
                    </div>

                    <div className="container">
                      {
                        isLoading
                          ? <Loader />
                          : (
                            <div>

                              <label htmlFor="uname"><b>Firstname</b></label>
                              <input
                                id="firstname"
                                type="text"
                                name="firstname"
                                value={firstname}
                                onChange={this.onInputChange}
                                placeholder="Enter First name"
                                required
                              />

                              <label htmlFor="uname"><b>Lastname</b></label>
                              <input
                                id="lastname"
                                type="text"
                                name="lastname"
                                value={lastname}
                                onChange={this.onInputChange}
                                placeholder="Last name"
                                required
                              />

                              <label htmlFor="uname"><b>Othernames</b></label>
                              <input
                                id="othernames"
                                type="text"
                                name="othernames"
                                value={othernames}
                                onChange={this.onInputChange}
                                placeholder="Other names"
                              />

                              <label htmlFor="uname"><b>Email</b></label>
                              <input
                                id="email2"
                                type="email"
                                name="email2"
                                value={email2}
                                onChange={this.onInputChange}
                                placeholder="Email"
                                required
                              />

                              <label htmlFor="psw"><b>Password</b></label>
                              <input
                                id="password2"
                                type="password"
                                name="password2"
                                value={password2}
                                onChange={this.onInputChange}
                                placeholder="Password"
                                required
                              />

                              <label htmlFor="uname"><b>Phone Number</b></label>
                              <input
                                id="phonenumber"
                                type="text"
                                name="phonenumber"
                                value={phonenumber}
                                onChange={this.onInputChange}
                                placeholder="Phone number"
                                required
                              />

                              <label htmlFor="uname"><b>UserName</b></label>
                              <input
                                id="username"
                                type="text"
                                name="username"
                                value={username}
                                onChange={this.onInputChange}
                                placeholder="User name"
                              />

                              <button className="register_button" type="submit">REGISTER</button>
                              <div className="head-liner">
                &nbsp;
                              </div>
                            </div>

                          )}
                    </div>
                  </form>

                </div>
                <div className="head-liner">
                &nbsp;
                </div>

              </div>
              <Link to="/"><h4>Home </h4></Link>
              <InfoComponent />
            </div>

          </div>
        );
      }
}

SignupComponent.propTypes = {
  registerAction: PropTypes.func.isRequired,
};


export const mapStateToProps = state => ({
  registerReducer: state.registerReducer,
});

export default connect(mapStateToProps, { registerAction: registerUserAction })(SignupComponent);
