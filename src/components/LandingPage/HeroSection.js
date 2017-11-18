import React from 'react';
import firebase from 'firebase';
import styled from "styled-components";

import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';


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

    return (
      <div style={divStyle}>
        <Grid item xs={12}>
         <StyledPaper className={this.props.paper}>
           <Grid item xs={6} sm={3}>
                <LogoPaper className={this.props.paper}>xs=6 sm=3</LogoPaper>
           </Grid>
          </StyledPaper>
       </Grid>
      </div>
    )
  }
}

export default HeroSection;

const StyledPaper = styled(Paper)`
    height:700px;
    background-image: url("/images/bg.png");
    background-size: contain;
    background-position:center;
    background-repeat:no-repeat;
`;

const LogoPaper = styled(Paper)`
   width: 200px;
   height: 100px;
   background-color: blue;

   position:absolute;
   left:0; right:0;
   top:0; bottom:0;
   margin:auto;

   max-width:100%;
   max-height:100%;
   overflow:auto;
`;
