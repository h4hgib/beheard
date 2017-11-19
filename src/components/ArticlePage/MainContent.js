import React from 'react';
import firebase from 'firebase';
import styled from "styled-components";

import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Navbar from '@trendmicro/react-navbar';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Recorder from '../Recorder';

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
        <div style={{'max-width':'1200px', margin:'0 auto'}}>
           <Grid item xs={12}>
            <div style={tagLineStyle}>
              <section style={contentStyle}>
                <div style={recorderStyle}>
                  <h1>Be Heard</h1>
                  <p>Press record and tell us what you think</p>
                  <Recorder />
                </div>
                <h1 style={tagLineFontStyle}>Overview</h1>
                <p>
                Ea pri harum deleniti, ne pri labore deserunt. Amet paulo ancillae ea vis, impetus intellegam id duo. Legimus vituperatoribus ex eos, ea est sanctus efficiantur, usu no nisl dolores liberavisse. An vix exerci imperdiet, et cum tation feugiat suscipiantur, eam ei dolores invenire democritum. At ludus admodum antiopam eam, vix verterem iudicabit an. Usu eu veri quas cetero, ex pro modo oratio fabulas. Nemore labitur recusabo cum ei.
                </p>
                <p>
                Ea pri harum deleniti, ne pri labore deserunt. Amet paulo ancillae ea vis, impetus intellegam id duo. Legimus vituperatoribus ex eos, ea est sanctus efficiantur, usu no nisl dolores liberavisse. An vix exerci imperdiet, et cum tation feugiat suscipiantur, eam ei dolores invenire democritum. At ludus admodum antiopam eam, vix verterem iudicabit an. Usu eu veri quas cetero, ex pro modo oratio fabulas. Nemore labitur recusabo cum ei.
                </p>
                <p>
                Ea pri harum deleniti, ne pri labore deserunt. Amet paulo ancillae ea vis, impetus intellegam id duo. Legimus vituperatoribus ex eos, ea est sanctus efficiantur, usu no nisl dolores liberavisse. An vix exerci imperdiet, et cum tation feugiat suscipiantur, eam ei dolores invenire democritum. At ludus admodum antiopam eam, vix verterem iudicabit an. Usu eu veri quas cetero, ex pro modo oratio fabulas. Nemore labitur recusabo cum ei.
                </p>
                <p>
                Ea pri harum deleniti, ne pri labore deserunt. Amet paulo ancillae ea vis, impetus intellegam id duo. Legimus vituperatoribus ex eos, ea est sanctus efficiantur, usu no nisl dolores liberavisse. An vix exerci imperdiet, et cum tation feugiat suscipiantur, eam ei dolores invenire democritum. At ludus admodum antiopam eam, vix verterem iudicabit an. Usu eu veri quas cetero, ex pro modo oratio fabulas. Nemore labitur recusabo cum ei.
                </p>
              </section>
            </div>
           </Grid>
        </div>
        <div style={{marginTop:'100px','height':'200px', width:'100%', background:'#eaeaea'}}></div>
      </div>
    )
  }
}

export default MainContent;
