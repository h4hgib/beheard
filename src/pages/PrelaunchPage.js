import React from 'react';

import styled from "styled-components";
import HeroSection from "../components/LandingPage/HeroSection";
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import LoginAvatar from "../components/LoginAvatar";

const PrelaunchPage = function PrelaunchPage(props) {
  var tagLineStyle = {
    padding:'15px', textAlign:'center'
  }
  var tagLineFontStyle = {
    fontSize:'32px',
    color: 'rgb(20, 44, 93)',
    fontWeight:200, margin:'0px',
    marginBottom:'25px',
    marginTop:50
  }

  var placeholderImageStyle = {
    height:'150px',
    borderRadius:'6px',
    marginBottom:'20px'
  }
  var titleFontStyle = {
    fontSize:'32px',
    color: 'rgb(20, 44, 93)',
    fontWeight:200, margin:'0px',
    marginBottom:'25px',
    textAlign:'left'
  }

  var subTitleFontStyle = {
    fontSize:'22px',
    color: 'rgb(20, 44, 93)',
    fontWeight:200, margin:'0px',
  }

  var headerPanelStyle = {
    padding:'25px',
    textAlign:'left'
  }

  var flexContainerStyle = {
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginTop:'60px'
  }
  var signUpFontStyle = {
    fontSize:'32px',
    color: '#fff',
    fontWeight:200, margin:'0px',
    marginBottom:'25px',
    marginTop:20
  }

  return (
    <div>
      <HeroSection></HeroSection>

      <Grid item xs={12} style={{background:'#f9f9f9'}}>
        <div style={{'maxWidth':'900px', margin:'1px auto', paddingBottom:50}}>
          <div style={tagLineStyle}>
            <span id="learnmore"/>
            <h1 style={tagLineFontStyle}>Why Be Heard?</h1>

            <Grid item xs={6} style={{textAlign:'center', margin:'0 auto'}}>
              <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum </p>
            </Grid>

            <Grid item xs={12} style={flexContainerStyle}>
                <Grid xs={4} item>
                  <div className='item'>
                    <img style={placeholderImageStyle} src="/images/dummy/placeholder1.png"/>
                    <h1 style={subTitleFontStyle}>100 Signups in 1 day</h1>
                    <p>Join us on Facebook lorem ipsum lorem ipsum lorem ipsum</p>
                  </div>
                </Grid>

                <Grid xs={4} item>
                  <div className='item'>
                    <img style={placeholderImageStyle} src="/images/dummy/placeholder1.png"/>
                      <h1 style={subTitleFontStyle}>Turn ideas into action</h1>
                      <p>Working between the government and the people to facilitate real outcomes.</p>
                  </div>
                </Grid>

                <Grid xs={4} item>
                  <div className='item'>
                    <img style={placeholderImageStyle} src="/images/dummy/placeholder1.png"/>
                      <h1 style={subTitleFontStyle}>Everybody welcome</h1>
                      <p>Understanding Gibraltar partner - all backgrounds and religions opinions count</p>
                  </div>
                </Grid>


                <div style={{height:50, width:'100%'}}></div>


                <StyledGrid xs={6} item>
                  <div style={headerPanelStyle}>
                    <h1 style={titleFontStyle}>Turn opinion into action</h1>
                      <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum </p>
                  </div>
                </StyledGrid>
                <StyledGrid xs={6} item>
                  <StyledPaper className='item'>
                    <img style={{width:'100%'}} src="/images/dummy/dummy-topics.png"/>
                  </StyledPaper>
                </StyledGrid>

                <StyledGrid xs={6} item>
                  <div className='item'>
                    <StyledPaper className='item'>
                      <img style={{width:'100%'}} src="/images/dummy/dummy-data.png"/>
                    </StyledPaper>
                  </div>
                </StyledGrid>
                <StyledGrid xs={6} item>
                  <div style={headerPanelStyle}>
                    <h1 style={titleFontStyle}>See live data</h1>
                      <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum </p>
                  </div>
                </StyledGrid>

                <StyledGrid xs={6} item>
                  <div style={headerPanelStyle}>
                    <h1 style={titleFontStyle}>Vote on what matters to you</h1>
                      <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum </p>
                  </div>
                </StyledGrid>
                <StyledGrid xs={6} item>
                  <StyledPaper className='item'>
                    <img style={{width:'100%'}} src="/images/dummy/dummy-screen.png"/>
                  </StyledPaper>
                </StyledGrid>

            </Grid>

          </div>
        </div>


        <Grid xs={12} style={{backgroundColor:'#2797f0', width:'100%'}}>
          <div style={{'maxWidth':'900px', margin:'1px auto', textAlign:'center', padding:5}}>
          <h1 style={signUpFontStyle}>Sign up now for early access</h1>
            <LoginAvatar loginText="Sign up for free" color="primary"/>
              <br/>
                >????
              <p>Join before anyone else</p>
              <p>Get our updates in your inbox</p>
              <p>Be the first to access our beta</p>
          </div>
        </Grid>

      </Grid>
    </div>
  );
};


export default PrelaunchPage;

const StyledPaper = styled(Paper)`
    height:250px;
    margin:25px;
    border-radius:4px;
`;
const StyledGrid = styled(Grid)`
    margin-bottom:40px;
`;
