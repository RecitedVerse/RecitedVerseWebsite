import React, { Component } from 'react';

import facebookBtn from '../res/facebook-logo.svg';
import instagramBtn from '../res/instagram-logo.svg';
import twitterBtn from '../res/twitter-logo.svg';

// eslint-disable-next-line
import _ from '../css/Footer.css';

class PageFooter extends Component {

    /**********************
    *                     *
    *    INITIALIZATION   *
    *                     *
    ***********************/

    componentDidMount() {

    }



    /**********************
    *                     *
    *        STYLES       *
    *                     *
    ***********************/

    getStyles() {
        return {
            position: 'relative',
            bottom: this.props.bottom || '150px',
            left: '0px',
            width: '100%',
            height: '100%',
            color: 'black',
            marginBottom: '50px',
            backgroundColor: 'white',
        }
    }



    /**********************
    *                     *
    *        RENDER       *
    *                     *
    ***********************/

    render() {
        const isMobile = window.innerWidth <= 800;
        if(isMobile){
          return (
              <div style={this.getStyles()}>


                  <div>
                      <h1 id='copyright'><span className='fa fa-copyright'></span>
                          &nbsp;
                          Recited Verse 2017
                      </h1>
                  </div>
                  {this.props.children}
              </div>
          );

        }else{
          return (
              <div style={this.getStyles()}>
                  <div className='sectionHolders'>
                      <div className='companyInfoSection'>
                          <h1>Find Out More</h1>
                          <a href="/about">About</a>
                          <br/>
                          <a href="/volunteer">Volunteer & Internships</a>
                          <br/>
                          <a href="/donations">Donatinos</a>
                          <br/>
                          <a href="/beta">Beta Testing Info</a>
                          <br/>
                          <a href="/copyright">Copyright Info</a>
                      </div>

                      

                      <div className='buttonsSection'>
                          <button className='socialBtn' onClick={this.goToFacebook.bind(this)}><img className='socialImg' src={facebookBtn} alt="facebook"/></button>
                          <button className='socialBtn' onClick={this.goToInstagram.bind(this)}><img className='socialImg' src={instagramBtn} alt="instagram"/></button>
                          <button className='socialBtn' onClick={this.goToTwitter.bind(this)}><img className='socialImg' src={twitterBtn} alt="twitter"/></button>
                      </div>
                  </div>

                  <div>
                      <h1 id='copyright'><span className='fa fa-copyright'></span>
                          &nbsp;
                          Recited Verse 2017
                      </h1>
                  </div>
                  {this.props.children}
              </div>
          );

        }

    }


    /**********************
    *                     *
    *       METHODS       *
    *                     *
    ***********************/

    goToFacebook() {
        window.location = "https://www.facebook.com/recitedpoetry/"
    }

    goToInstagram() {
        window.location = "https://www.instagram.com/recitedverse2017/"
    }

    goToTwitter() {
        window.location = "https://twitter.com/recitedverse"
    }
}

export default PageFooter;
