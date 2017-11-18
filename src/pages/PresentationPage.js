import React from 'react';
import styled from "styled-components";
import RecordingsSection from "../components/beheard/presentation/RecordingsSection";


class PresentationPage extends React.Component {

  state = {};

  componentDidMount() {

  }


  render() {
    return (
      <PresentationPageContainer>



        <RecordingsSection />

      </PresentationPageContainer>
    );
  };

}

export default PresentationPage;


const PresentationPageContainer = styled.div`

  max-width: 500px;
  margin: auto auto;
  

`;
