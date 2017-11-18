import React from 'react';

import Card, {CardActions, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styled from "styled-components";
import InLineQuestionaire from "../components/beheard/InLineQuestionaire";
import {Link} from "react-router-dom";

import Recorder from '../components/Recorder';


const IssuePage = function IssuePage(props) {


  return (
    <div>
      <StyledCard>
        <CardContent>

            <Typography type="display1" gutterBottom>
            Home Page
            </Typography>

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

      <Recorder/>

      {/*<ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          strokeColor="#000000"
          backgroundColor="#FF4081" />*/}

    </div>
  );
};


export default IssuePage;


const StyledCard = styled(Card)`
    max-width: 600px;
    margin: 40px auto;

    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
    }

`;
