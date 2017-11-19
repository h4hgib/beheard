import React from 'react';

import Card, {CardActions, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styled from "styled-components";
import InLineQuestionaire from "../components/beheard/InLineQuestionaire";
import HeroSection from "../components/LandingPage/HeroSection";
import MainContent from "../components/LandingPage/MainContent";
import Paper from 'material-ui/Paper';

import {Link} from "react-router-dom";

import Recorder from '../components/Recorder';
import IssuesPage from "./IssuesPage";


const LandingPage = function LandingPage(props) {


  return (
    <div>
      <HeroSection></HeroSection>
      <Paper>
        <IssuesPage/>
        <MainContent></MainContent>
      </Paper>
    </div>
  );
};


export default LandingPage;


const StyledCard = styled(Card)`
    max-width: 600px;
    margin: 40px auto;

    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
    }

`;
