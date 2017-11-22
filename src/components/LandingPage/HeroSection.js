import React from 'react';
import firebase from 'firebase';
import styled from "styled-components";

import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Navbar from '@trendmicro/react-navbar';
import StickyNavbar from './StickyNavbar';
import LoginAvatar from "../LoginAvatar";


class HeroSection extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    var divStyle = {
      backgroundImage: 'url()',
      WebkitTransition: 'all', // note the capital 'W' here
      msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    };
    var logoBox = {
       width: '380px',
       borderRadius:'6px',
       position:'absolute',
       left:0, right:0,
       top:'0', bottom:0,
       margin:'auto',
       textAlign:'center',
       maxWidth:'100%',
       maxHeight:'100%',
       overflow:'auto'
    }
    var logoContainer={
      height:'70px',
      left:0, right:0,
      top:'6vh', bottom:0,
      margin:'auto',
      position:'absolute',
    }
    var logoStyles = {
      height:'55px',
      marginTop:'-10px'
    }
    var tagLineContainer = {
      marginTop:'20px'
    }
    var tagLineStyle = {
       width:'100%',
      padding:'15px', textAlign:'center'
    }
    var tagLineFontStyle = {
      fontSize:'32px',
      color: 'rgb(20, 44, 93)',
      fontWeight:200, margin:'0px'
    }
    var backgroundArea = {
      backgroundImage: 'url("/images/bg.svg")',
      backgroundSize: 'contain',
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      height:'95vh',
      width:'100%',
    }

    return (
      <div style={divStyle}>
        <Grid item xs={12}>
         <StyledPaper>
           <div style={backgroundArea}>
             <Grid item xs={6} sm={3}>
               <div style={logoBox}>
                    <div style={logoContainer}>
                      <img style={logoStyles} src="/images/logo.png"/>
                        <h2 style={{color:'rgb(20,44,93)', margin:'3px',marginTop:'-5px', fontSize:'28px', fontWeight:400}}>The #1 platform in Gibraltar for social understanding</h2>
                          <div style={{marginTop:'15px'}}>
                            <StyledLoginAvatar loginText="Get Early Access" color="primary"/>
                            <StyledButton raised color="contrast">Learn more</StyledButton>
                          </div>
                    </div>
                </div>
             </Grid>
           </div>
           <div style={{height:'5vh', width:'100%', background:'#fff'}}></div>
          </StyledPaper>
       </Grid>
      </div>
    )
  }
}

export default HeroSection;

const StyledPaper = styled(Paper)`
    height:100vh;
`;

const StyledButton = styled(Button)`
  margin-left:8px;
  color: rgb(44,152,240);
  background-color:#f9f9f9;
`;

const StyledLoginAvatar = styled(LoginAvatar)`
  display:inline;
`;
