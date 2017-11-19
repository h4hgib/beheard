import React from 'react';
import styled from "styled-components";
import RecordingsSection from "../components/beheard/presentation/RecordingsSection";
import BH from "../service/Issues";
import RawBody from "../components/RawBody";
import Typography from 'material-ui/Typography';
import CommentCreate from "../components/beheard/presentation/CommentCreate";
import CommentListView from "../components/beheard/presentation/CommentListView";
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
      const id = doc.id
      console.log(docdata);

      this.setState(docdata);

    });

  }


  render() {
    return (
      <div>

            <HeroSection title={this.state.title} bgUrl={this.state.bgUrl}></HeroSection>

            <Paper>
              <MainContent desc={this.state.desc} content={this.state.content} issueId={this.state.id} >

                {this.state.questionsLink && (
                <StyledQContainer>
                  <StyledIframe src={this.state.questionsLink} width="650" height="500" >Loading...</StyledIframe>
                </StyledQContainer>
                )}


                <StyledPaper>
                    {this.state.id && (
                          <div>
                            <br/>
                            <br/>
                            <CommentCreate issueId={this.state.id}/>



                    </div>
                    )}
                </StyledPaper>




              </MainContent>


            </Paper>

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

const StyledPaper = styled.div`

margin: auto auto;
width:750px;
padding:20px;
box-shadow:1px 1px 3px 1px rgba(0,0,0,0.1);
border-radius:8px;
margin-top:40px;

`;
