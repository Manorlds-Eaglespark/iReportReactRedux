/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import viewAllRedFlagsAction from '../actions/redflags/viewAllRedFlagsAction';
import history from '../utils/history';
import theBannerImage from '../assets/images/take_action1.jpg';
import redflagImage from '../assets/images/flag2.png';
import LogOutComponent from './common/LogOutComponent';
import InfoComponent from './common/InfoComponent';

export class homePageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      location: '',
      image: '',
      video: '',
      comment: '',
    };
  }

  componentDidMount() {
    const { fetchRedFlags } = this.props;
    fetchRedFlags();
  }


    handleLogOutClick = () => {
      sessionStorage.removeItem('token');
      sessionStorage.setItem('isLoggedIn', false);
      history.push('/login');
    };

    render() {
      const { redflags } = this.props;
      const redflagsList = redflags.map(redflag => (
        <div className="card" key={redflag.id}>
          <div className="row article">
            <div className="col-md-12 col-lg-5">
              <Link to={`/${redflag.id}`}>
                <img className="img-article" alt="article_image" src={redflagImage} />
              </Link>
            </div>
            <div className="col">
              <Link to={`/${redflag.id}`}>
                <h5 className="name">{redflag.comment}</h5>
              </Link>
              <p className="description">
                            Location:
                {' '}
                {redflag.location.substring(2, redflag.location.length - 2)}
              </p>
              <div className="article-details">

                <span>
                                Date:
                  {' '}
                  {new Date(redflag.created_on).toISOString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      ));


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
                <h2>View RedFlags</h2>
                <div className="row projects">{redflagsList}</div>
              </div>


              <div className="head-liner">
                            &nbsp;
              </div>

            </div>

            <LogOutComponent handleLogOut={this.handleLogOutClick} />
            <InfoComponent />


          </div>

        </div>
      );
    }
}


homePageComponent.propTypes = {
  redflags: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      created_on: PropTypes.string,
      location: PropTypes.string,
      created_by: PropTypes.string,
      type: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};

homePageComponent.propTypes = {
  fetchRedFlags: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  const { redflags } = state.viewAllRedFlagsReducer;
  return { redflags };
};

export default connect(mapStateToProps,
  { fetchRedFlags: viewAllRedFlagsAction })(homePageComponent);
