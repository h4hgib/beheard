import React from 'react';

import styled from "styled-components";
import HeroSection from "../components/LandingPage/HeroSection";
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const PrelaunchPage = function PrelaunchPage(props) {
  var tagLineStyle = {
    padding:'15px', textAlign:'center'
  }
  var tagLineFontStyle = {
    fontSize:'32px',
    marginTop:30,
    color: 'rgb(20, 44, 93)',
    fontWeight:200, margin:'0px',
    marginBottom:'25px'
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

  return (
    <div>
      <HeroSection></HeroSection>

      <Grid item xs={12} style={{background:'#fff'}}>
        <div style={{'maxWidth':'900px', margin:'1px auto'}}>
          <div style={tagLineStyle}>
            <span id="learnmore"/>
            <h1 style={tagLineFontStyle}>Why Be Heard?</h1>

            <Grid item xs={6} style={{textAlign:'center', margin:'0 auto'}}>
              <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum </p>
            </Grid>

            <Grid item xs={12} style={flexContainerStyle}>
                <Grid xs={4} item>
                  <div className='item'>
                    <img style={{height:'150px'}} src="/images/dummy/placeholder1.png"/>
                    <h1 style={subTitleFontStyle}>100 Signups in 1 day</h1>
                    <p>Join us on Facebook lorem ipsum lorem ipsum lorem ipsum</p>
                  </div>
                </Grid>

                <Grid xs={4} item>
                  <div className='item'>
                    <img style={{height:'150px'}} src="/images/dummy/placeholder1.png"/>
                      <h1 style={subTitleFontStyle}>Turn ideas into action</h1>
                      <p>Working between the government and the people to facilitate real outcomes.</p>
                  </div>
                </Grid>

                <Grid xs={4} item>
                  <div className='item'>
                    <img style={{height:'150px'}} src="/images/dummy/placeholder1.png"/>
                      <h1 style={subTitleFontStyle}>Everybody welcome</h1>
                      <p>Understanding Gibraltar partner - all backgrounds and religions opinions count</p>
                  </div>
                </Grid>
                <div style={{height:50, width:'100%'}}></div>
                <Grid xs={6} item>
                  <div style={headerPanelStyle}>
                    <h1 style={titleFontStyle}>Turn opinion into action</h1>
                      <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum </p>
                  </div>
                </Grid>
                <Grid xs={6} item>
                  <StyledPaper className='item'>
                  </StyledPaper>
                </Grid>

                <Grid xs={6} item>
                  <div className='item'>
                    <StyledPaper className='item'>

                    </StyledPaper>
                  </div>
                </Grid>
                <Grid xs={6} item>
                  <div style={headerPanelStyle}>
                    <h1 style={titleFontStyle}>See live data</h1>
                      <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum </p>
                  </div>
                </Grid>

                <Grid xs={6} item>
                  <div style={headerPanelStyle}>
                    <h1 style={titleFontStyle}>Vote on what matters to you</h1>
                      <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum </p>
                  </div>
                </Grid>
                <Grid xs={6} item>
                  <StyledPaper className='item'>
                  </StyledPaper>
                </Grid>

            </Grid>

          </div>
        </div>
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
