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
  var flexContainerStyle = {
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'flex-start',
    alignItems:'flex-start'
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
                  <Grid item xs={6} style={{textAlign:'center', margin:'0 auto'}}>
                    <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum </p>
                  </Grid>
                    <Grid item xs={12} style={flexContainerStyle}>
                        <Grid xs={4} item>
                          <Paper className='item'>
                             Hola
                          </Paper>
                        </Grid>
                        <Grid xs={6} item>
                          <Paper className='item'>
                            que
                          </Paper>
                      </Grid>
                      <Grid container justify="center" spacing={Number(16)}>
                      {[0, 1, 2, 3, 4, 5].map(value => (
                        <Grid xs={4} key={value} item>
                          <a href="/article1">
                            <Paper style={{background:'#fff', backgroundImage:'url("/images/dummy/00'+value+'.png")',
                             height: 300, backgroundSize:'cover', backgroundPosition:'center',backgroundPositionY:'-40px',backgroundRepeat:'no-repeat', borderRadius:'3px'}}/>
                          </a>
                        </Grid>
                      ))}
                      </Grid>
                    </Grid>
                </div>
              </div>
            </Grid>
      </Paper>
    </div>
  );
};


export default PrelaunchPage;
