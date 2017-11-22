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
    marginTop:'30px', marginBottom:'25px'
  }

  return (
    <div>
      <HeroSection></HeroSection>
      <Paper style={{marginTop:'1px', background:'#f6f6f6'}}>
             <Grid item xs={12}>
               <div style={{'maxWidth':'1200px', margin:'0 auto'}}>
                <div style={tagLineStyle}>
                  <span id="learnmore"/>
                  <h1 style={tagLineFontStyle}>Why Be Heard?</h1>
                </div>
              </div>
            </Grid>
      </Paper>
    </div>
  );
};


export default PrelaunchPage;
