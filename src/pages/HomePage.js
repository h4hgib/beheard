import React from 'react';

import Card, {CardActions, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styled from "styled-components";
import InLineQuestionaire from "../components/beheard/InLineQuestionaire";
import {Link} from "react-router-dom";

import Recorder from '../components/Recorder';


const HomePage = function HomePage(props) {


  return (
    <div>
      <StyledCard>
        <CardContent>

            <Typography type="display1" gutterBottom>
            Home Page
            </Typography>
            <Link to={"/home"}> View home page </Link>


        </CardContent>

        <CardActions>
            <Typography type="headline" component="h2" gutterBottom>
            </Typography>
        </CardActions>

      </StyledCard>


            <StyledCard>
        <CardContent>
          <Link to={"/issues"}> Issues Page </Link>
        </CardContent>
      </StyledCard>



      <StyledCard>
        <CardContent>



         <InLineQuestionaire />
        </CardContent>
      </StyledCard>

         {/*<LoggedIn/>*/}


    </div>
  );
};


export default HomePage;


const StyledCard = styled(Card)`
    max-width: 600px;
    margin: 40px auto;

    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
    }

`;
