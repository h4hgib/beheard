import React from 'react';
import styled from "styled-components";
import RecordingsSection from "../beheard/presentation/RecordingsSection";
import BH from "../../service/Issues";
import RawBody from "../RawBody";
import Typography from 'material-ui/Typography';
import CommentCreate from "../beheard/presentation/CommentCreate";
import CommentListView from "../beheard/presentation/CommentListView";
import ReactionListView from "../beheard/presentation/ReactionListView";
import ReactionCreate from "../beheard/presentation/ReactionCreate";
import RecordingListView from "../beheard/presentation/RecordingListView";
import HeroSection from "./HeroSection";
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Recorder from '../Recorder';
import {withRouter} from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';
import InLineQuestionaire from "../beheard/InLineQuestionaire";

class MainContent extends React.Component {

  state = {};


  constructor(props) {
    super(props);
  }

  componentDidMount() {

    BH.getIssue(this.props.match.params.issueId).then((doc) => {
      const docdata = {...doc.data(), id: doc.id};
      console.log(docdata);

      this.setState(docdata);

      BH.getAllVoiceReactions(this.state.id, (recordings) => {
        console.log(recordings);
        this.setState({"recordings": recordings});
      })

    });

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
      marginTop:'30px', marginBottom:'30px'
    }
    var contentStyle = {
      width:'800px',
      margin:'0 auto',
      fontFamily:'Merriweather, serif',
      fontWeight:'400',
      fontSize:'18px',
      lineHeight:'26px',
      color:'#444'
    }
    var recorderStyle = {
      padding:'20px',
      background:'#f9f9f9',
      borderRadius:'6px',
      height:'574px',
      clear:'both',
    }
    var overviewStyle = {
      marginBottom:'20px'
    }
    var reactionContainerStyle = {
      marginBottom:'20px',
      width:'100%',
      float:'left'
    }

    return (
      <div>
        <div style={{'maxWidth':'1200px', margin:'0 auto'}}>
           <Grid item xs={12}>
            <div style={tagLineStyle}>
              <section style={contentStyle}>

                <div style={overviewStyle}>
                  <h1 style={tagLineFontStyle}>Overview</h1>
                  <Typography type="subheading" style={contentStyle}>
                   {this.props.desc ? this.props.desc : <Skeleton count={3}/>}
                  </Typography>
                </div>

                <div style={recorderStyle}>
                  <h1>Share Your Reaction</h1>
                  <div style={reactionContainerStyle}>
                  {this.state.id && (<div>
                    <ReactionListView issueId={this.state.id}/>
                    <ReactionCreate issueId={this.state.id}/>
                    {/*<RecordingCreate issueId={this.state.id} />*/}
                    </div>
                  )}
                  </div>
                  <div style={{float:'left', borderTop:'1px solid #e5e5e5',marginTop:'15px', paddingTop:'15px', width:'100%'}}>
                    <h1>Be Heard</h1>
                    <p style={{'clear':'both'}}>Press record and tell us what you think</p>
                    <Recorder  issueId={this.state.id}/>
                    {this.state.id && (<div style={{float:'left', width:'100%'}}>
                      <RecordingListView issueId={this.state.id}/>
                      <RecordingsSection issueId={this.state.id}/>
                    </div>)}
                  </div>
                </div>
                <Typography type="subheading" style={contentStyle}>
                  {this.props.content ? <RawBody content={this.props.content}/> : <Skeleton count={10}/>}
                </Typography>
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

export default withRouter(MainContent);
