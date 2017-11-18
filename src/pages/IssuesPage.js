import React from 'react';


import styled from "styled-components";
import IssueList from "../components/beheard/issues/IssueList";
import BH from "../service/Issues";
import IssueCreate from "../components/beheard/issues/IssueCreate";

class IssuesPage extends React.Component {

  state = {"issues": []};

  componentDidMount() {
    BH.getAllIssues((docs) => {
      this.setState({"issues": docs});
    })
  }


  render() {
    return (
      <IssuePageContainer>

        <IssueCreate />

        <IssueList issues={this.state.issues}/>

      </IssuePageContainer>
    );
  };

}

export default IssuesPage;


const IssuePageContainer = styled.div`

  max-width: 500px;
  margin: auto auto;
  

`;
