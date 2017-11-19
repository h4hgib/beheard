import React from 'react';
import firebase from 'firebase';
import styled from "styled-components";

import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Navbar from '@trendmicro/react-navbar';
import StickyNavbar from './StickyNavbar';
import Radio, { RadioGroup } from 'material-ui/Radio';

class MainContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
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
        <div style={{'maxWidth':'1200px', margin:'0 auto'}}>
           <Grid item xs={12}>
            <div style={tagLineStyle}>
              <h1 style={tagLineFontStyle}>The #1 platform in Gibraltar for social understanding</h1>
            </div>
           </Grid>
           <StickyNavbar
                 state={this.state}
                 actions={this.actions}
             />
        </div>
        <div style={{marginTop:'100px','height':'200px', width:'100%', background:'#eaeaea'}}></div>
      </div>
    )
  }
}

export default MainContent;
