import React from 'react';

import styled from "styled-components";
import HeroSection from "../components/LandingPage/HeroSection";
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const PrelaunchPage = function PrelaunchPage(props) {
  var tagLineStyle = {
    background:'#fff', width:'100%',
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
      <Paper>
        <div>
          <div style={{'maxWidth':'1200px', margin:'0 auto'}}>
             <Grid item xs={12}>
                <div style={tagLineStyle}>
                  <h1 style={tagLineFontStyle}>Why Be Heard?</h1>
                </div>
            </Grid>
          </div>

          <div style={{marginTop:'100px','height':'200px', width:'100%', background:'#eaeaea'}}></div>
        </div>
            </Paper>
    </div>
  );
};


export default PrelaunchPage;
