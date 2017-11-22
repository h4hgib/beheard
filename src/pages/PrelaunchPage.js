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
    color: 'rgb(20, 44, 93)',
    fontWeight:200, margin:'0px',
    marginBottom:'25px'
  }

  var subTitleFontStyle = {
    fontSize:'22px',
    color: 'rgb(20, 44, 93)',
    fontWeight:200, margin:'0px',
  }

  var flexContainerStyle = {
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginTop:'30px'
  }

  return (
    <div>
      <HeroSection></HeroSection>

      <Grid item xs={12} style={{background:'#fff'}}>
        <div style={{'maxWidth':'1200px', margin:'1px auto'}}>
          <div style={tagLineStyle}>
            <span id="learnmore"/>
            <h1 style={tagLineFontStyle}>Why Be Heard?</h1>

            <Grid item xs={6} style={{textAlign:'center', margin:'0 auto'}}>
              <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum </p>
            </Grid>

            <Grid item xs={12} style={flexContainerStyle}>
                <Grid xs={4} item>
                  <div className='item'>
                    <img style={{height:'150px'}} src="/images/dummy/placeholder1.png"/>
                    <h1 style={subTitleFontStyle}>100 Signups in 1 day</h1>
                    <p>Join us on Facebook</p>
                  </div>
                </Grid>

                <Grid xs={4} item>
                  <div className='item'>
                    <img style={{height:'150px'}} src="/images/dummy/placeholder1.png"/>
                      <h1 style={subTitleFontStyle}>Turn ideas into action</h1>
                      <p>Working between the government and the people to facilitate real outcomes from online discussions.</p>
                  </div>
                </Grid>

                <Grid xs={4} item>
                  <div className='item'>
                    <img style={{height:'150px'}} src="/images/dummy/placeholder1.png"/>
                      <h1 style={subTitleFontStyle}>Everybody welcome</h1>
                      <p>Associated with Understanding Gibraltar - all backgrounds and religions opinions count</p>
                  </div>
                </Grid>

                <Grid xs={6} item>
                  <div className='item'>
                    <h1 style={tagLineFontStyle}>Turn opinion into action</h1>
                  </div>
                </Grid>
                <Grid xs={6} item>
                  <Paper className='item'>
                    uo
                  </Paper>
                </Grid>

                <Grid xs={6} item>
                  <div className='item'>
                    <Paper className='item'>
                      uo
                    </Paper>
                  </div>
                </Grid>
                <Grid xs={6} item>
                  <div className='item'>
                    <h1 style={tagLineFontStyle}>See live data</h1>
                  </div>
                </Grid>

                <Grid xs={6} item>
                  <div className='item'>
                    <h1 style={tagLineFontStyle}>Vote on what matters to you</h1>
                  </div>
                </Grid>
                <Grid xs={6} item>
                  <Paper className='item'>
                    uo
                  </Paper>
                </Grid>

            </Grid>

          </div>
        </div>
      </Grid>
    </div>
  );
};


export default PrelaunchPage;
