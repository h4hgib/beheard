import React from 'react';


import styled from "styled-components";
import BH from "../service/Issues";
import IssueCreate from "../components/beheard/issues/IssueCreate";

class CreateIssuePage extends React.Component {

  state = {"issues": []};

  componentDidMount() {
    BH.getAllIssues((docs) => {
      this.setState({"issues": docs});
    })
  }


  render() {
    return (
      <IssuePageContainer>

      <IssueCreate/>

      </IssuePageContainer>
    );
  };

}

export default CreateIssuePage;


const IssuePageContainer = styled.div`

  max-width: 800px;
  margin: auto auto;
  

`;
