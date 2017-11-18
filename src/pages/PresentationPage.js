import React from 'react';
import styled from "styled-components";
import RecordingsSection from "../components/beheard/presentation/RecordingsSection";


class PresentationPage extends React.Component {

  state = {
    title: "Government unveils plans for schools 'revolution'",
    overview: "Government unveils plans for schools 'revolution' Government unveils plans for schools 'revolution'Government unveils plans for schools 'revolution'Government unveils plans for schools 'revolution'Government unveils plans for schools 'revolution'Government unveils plans for schools 'revolution'Government unveils plans for schools 'revolution'",
    image: "",
    comments: [
      {title: "The school is in the wrong part of town", body: "      ", avatar:""},
      {title: "The school is in the wrong part of town", body: "      ", avatar:""},
    ],
    editorial: " sdsdfsdf sdf ",
    questions: [
      "https://docs.google.com/forms/d/e/1FAIpQLSfsvGePsx5JYFD7NMJFJhbzok2IhaYttq7vR5D2HNOQdagiyQ/viewform?embedded=true"
    ]
  };

  componentDidMount() {

  }


  render() {
    return (
      <PresentationPageContainer>

        {/*<PresentationHero />*/}
        {/*<PresentationSomething />*/}

        <iframe src={this.state.questions[0]} width="760" height="500">Loading...</iframe>

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
