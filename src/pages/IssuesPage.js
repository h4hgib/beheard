import React from 'react';

import Button from 'material-ui/Button';

import styled from "styled-components";
import IssueList from "../components/beheard/issues/IssueList";
import BH from "../service/Issues";
import {Link} from "react-router-dom";

class IssuesPage extends React.Component {

  state = {"issues": []};

  componentDidMount() {
    console.log("getting issues");
    BH.getAllIssues((docs) => {
      console.log("Got Issues:",docs);
      this.setState({"issues": docs});
    })
  }


  render() {
    return (
      <IssuePageContainer>

        <div style={{display:'flex',justifyContent: 'center'}}>
        <Link to={"/issue/create"}>
        <Button raised color="primary">
          Create New Issue
        </Button>
        </Link>
        </div>

        <IssueList issues={this.state.issues}/>

      </IssuePageContainer>
    );
  };

}

export default IssuesPage;


const IssuePageContainer = styled.div`

  //max-width: 500px;
  //margin: auto auto;
  

`;
