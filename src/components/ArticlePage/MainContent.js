import React from 'react';
import firebase from 'firebase';
import styled from "styled-components";

import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Navbar from '@trendmicro/react-navbar';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Recorder from '../Recorder';
import RawBody from "../RawBody";
import Skeleton from 'react-loading-skeleton';
import Typography from "material-ui/Typography";

class MainContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var tagLineStyle = {
      background:'#fff', width:'100%',
      padding:'15px', textAlign:'left',
    }
    var tagLineFontStyle = {
      fontSize:'28px',
      color: 'rgb(20, 44, 93)',
      fontWeight:400, margin:'0px',
      marginTop:'30px', marginBottom:'25px'
    }
    var contentStyle = {
      width:'800px',
      margin:'0 auto',
      fontFamily:'Merriweather, serif',
      fontWeight:'400',
      fontSize:'20px',
      lineHeight:'26px'
    }
    var recorderStyle = {
      padding:'20px',
      background:'#f9f9f9',
      borderRadius:'6px',
      height:'360px'
    }

    return (
      <div>
        <div style={{'maxWidth':'1200px', margin:'0 auto'}}>
           <Grid item xs={12}>
            <div style={tagLineStyle}>
              <section style={contentStyle}>

                <Typography type="subheading">
                 {this.props.desc ? this.props.desc : <Skeleton count={3}/>}
                </Typography>

                <div style={recorderStyle}>
                  <h1>Be Heard</h1>
                  <p>Press record and tell us what you think</p>
                  <Recorder />
                </div>

                {this.props.content ? <RawBody content={this.props.content}/> : <Skeleton count={10}/>}
              </section>
            </div>
             {this.props.children}
           </Grid>
        </div>
        <div style={{marginTop:'100px','height':'200px', width:'100%', background:'#eaeaea'}}></div>
      </div>
    )
  }
}

export default MainContent;
