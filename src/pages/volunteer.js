import React, { Component } from 'react';
import HomeHeader from '../components/HomePageComponents/HomeHeader';

export default class About extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    getStyles() {
        return {
            position:'absolute',
            left:'0px',
            top:'0px',
            width:'100%'
        };
    }
    getOverlay() {
        return {
            position:'absolute',
            width:'100%',
            height:'100%',
            zIndex:'0',
            backgroundColor: 'white'
        }
    }
    getImageStyles() {
        return {
            position:'absolute',
            width:'100%',
            height:'100%',
            zIndex:'-1',
        }
    }
    getBannerTextStyles() {
        return {
            position:'relative',
            top:'20px',
            color:'white',
            textAlign:'center',
            fontSize:'100px',
            fontFamily:'Monthoers'
        }
    }

    getTitleStyles(){
      return{
        marginBottom:'50px'
      }
    }

    render() {
        return (

            <div style={this.getStyles()}>
            <HomeHeader nav={this.props.nav} rStore={this.props.rStore} callbackParent={this.onChildChanged} ></HomeHeader>
            <div style={this.getOverlay()}></div>
            <div className='resultsSection'>
            <div style={{ padding: '10px', color: 'black', textAlign: 'left', marginLeft: '20%', marginRight: '20%'}}>
            
                <h3>Opportunities:</h3>

<p>We are currently seeking poetry enthusiasts as volunteers and interns to help grow Recited Verse. We welcome anyone, including students, instructors, and scholars, to help us with expanding our archive, recruitment, social media campaigns, and spearheading local events. </p>
                <br/>
                <p>We are also seeking the following specific volunteer opportunities:</p>

                <ul>
                    <li>Period Scholars Coordinator: As part of the Advisory Board, this person will be responsible for overseeing a team of Literary Period Scholars (see below), making sure that each of them is fulfilling their monthly goals for generating site content and for recruiting affiliated scholars (see below).  </li>
                    <li>Period Scholars: Each period scholar will oversee a given literary period (e.g., Medieval Britain, Early American, Renaissance, 19th Century British, etc.). He/She will also be responsible for recruiting as many affiliated scholars (see below) as possible and for generating as much content as possible within his/her area.</li>
                    <li>Affiliated Scholars: This person will be associated with one specific author on PRV. For example, the Affiliated Scholar for William Wordsworth will work to develop / expand the online archive of recordings of Wordsworth's poems. These scholars will also curate the content of each main poem page, including the comments section. Their photos and bio will appear on each Wordsworth page, and they will directly interface with the general public (i.e., RecitedVerse users).</li>
                </ul>

                <p>If interested in any position, please email us at hello@recitedverse.com with a resume/CV and a cover letter. Use the subject line “Volunteer / Intern Application.” </p>
                
            </div>
            </div>
            </div>

        )
    }
}