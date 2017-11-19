import React from 'react';
import styled from "styled-components";
import RecordingsSection from "../components/beheard/presentation/RecordingsSection";
import BH from "../service/Issues";
import RawBody from "../components/RawBody";
import Typography from 'material-ui/Typography';
import CommentCreate from "../components/beheard/presentation/CommentCreate";
import CommentListView from "../components/beheard/presentation/CommentListView";
import ReactionListView from "../components/beheard/presentation/ReactionListView";
import ReactionCreate from "../components/beheard/presentation/ReactionCreate";
import RecordingListView from "../components/beheard/presentation/RecordingListView";
import HeroSection from "../components/ArticlePage/HeroSection";
import MainContent from "../components/ArticlePage/MainContent";
import Paper from 'material-ui/Paper';

import Skeleton from 'react-loading-skeleton';
import InLineQuestionaire from "../components/beheard/InLineQuestionaire";
class PresentationPage extends React.Component {

  state = {};


  // state = {
  //   id: "HHPbogCpzG2d1SnsCrGL",
  //   title: "Government unveils plans for schools 'revolution'",
  //   overview: "Government unveils plans for schools 'revolution' Government unveils plans for schools 'revolution'Government unveils plans for schools 'revolution'Government unveils plans for schools 'revolution'Government unveils plans for schools 'revolution'Government unveils plans for schools 'revolution'Government unveils plans for schools 'revolution'",
  //   image: "",
  //   comments: [
  //     {title: "The school is in the wrong part of town", body: "      ", avatar:""},
  //     {title: "The school is in the wrong part of town", body: "      ", avatar:""},
  //   ],
  //   editorial: " sdsdfsdf sdf ",
  //   questions: [
  //     "https://docs.google.com/forms/d/e/1FAIpQLSfsvGePsx5JYFD7NMJFJhbzok2IhaYttq7vR5D2HNOQdagiyQ/viewform?embedded=true"
  //   ],
  // };

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
    return (
      <div>

            <HeroSection title={this.state.title} bgUrl={this.state.bgUrl}></HeroSection>

            <Paper>
              <MainContent desc={this.state.desc} content={this.state.content}>

                {this.state.questionsLink && (
                                  <StyledQContainer>

                <StyledIframe src={this.state.questionsLink} width="650" height="300" >Loading...</StyledIframe>
                </StyledQContainer>
                )}




              </MainContent>

            </Paper>


        {this.state.id && (
          <div>
           <ReactionListView issueId={this.state.id}/>
            <ReactionCreate issueId={this.state.id}/>
            <br/>
            <br/>
            <RecordingListView issueId={this.state.id}/>
            {/*<RecordingCreate issueId={this.state.id} />*/}
            <br/>
            <br/>
            <CommentListView issueId={this.state.id}/>
            <CommentCreate issueId={this.state.id}/>

        <RecordingsSection/>
          </div>
          )}



            {/*<iframe src={this.state.questions[0]} width="760" height="500">Loading...</iframe>*/}



      </div>
    );
  };

}

export default PresentationPage;


const StyledIframe = styled.iframe`
  margin: auto auto;
   margin: 0;
    padding 0;
  border:none;
  
`;


const StyledQContainer = styled.div`
      margin: auto auto;
    width: 650px;
    max-width: 650px;
 
`;
