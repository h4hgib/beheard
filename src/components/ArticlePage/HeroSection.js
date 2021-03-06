import React from 'react';
import firebase from 'firebase';
import styled from "styled-components";

import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Navbar from '@trendmicro/react-navbar';
import Skeleton from 'react-loading-skeleton';


class HeroSection extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    var divStyle = {
      color: 'white',
      backgroundImage: 'url()',
      WebkitTransition: 'all', // note the capital 'W' here
      msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    };

    var logoContainer={
      height:'70px',
      left:0, right:0,
      top:0, bottom:0,
      margin:'auto',
      position:'absolute',
    }
    var logoStyles = {
      height:'70px',
      marginTop:'-7px'
    }
    var tagLineContainer = {
      marginTop:'20px'
    }
    var tagLineStyle = {
      background:'#fff', width:'100%',
      padding:'15px', textAlign:'center'
    }
    var tagLineFontStyle = {
      fontSize:'32px',
      color: 'rgb(20, 44, 93)',
      fontWeight:200, margin:'0px'
    }
    var overlayStyle = {
      position:'absolute',
      background:'rgba(0,0,0,0.7)',
      width:'100%',
      height:'500px'
    }
    var titleStyle = {
      fontSize:'42px',
      fontWeight:'500',
      textAlight:'center'
    }
    var titleContainer={
      // height:'200px',
      left:0, right:0,
      top:0, bottom:0,
      margin:'auto',
      position:'absolute',
      marginTop: '250px',
      width:'800px',
      margin:'0 auto',
    }

    return (
      <div style={divStyle}>
        <Grid item xs={12}>
         <StyledPaper bg={this.props.bgUrl}>
           <Grid item xs={6} sm={3}>
                <div style={overlayStyle}></div>
                <div style={titleContainer}>
                <h1 style={titleStyle}>{this.props.title || <Skeleton />}</h1></div>
           </Grid>
          </StyledPaper>
       </Grid>
      </div>
    )
  }
}

export default HeroSection;

const StyledPaper = styled(Paper)`
    height:500px;
    background-image: url("${props => props.bg ? props.bg : ''}");
    background-size: cover;
    background-position:center;
    background-repeat:no-repeat;
`;
