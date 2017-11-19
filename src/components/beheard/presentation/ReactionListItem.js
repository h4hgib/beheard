import React from 'react';
import {inject, observer} from 'mobx-react';
import BH from "../../../service/Issues";
import styled from 'styled-components';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

class Component extends React.Component {

  render() {

    return (
      <StyledContainer>
        <Typography type="caption"> Reaction: </Typography>
        <img src={`https://raw.githubusercontent.com/twitter/twemoji/gh-pages/36x36/${this.props.reaction}.png`}/>
      </StyledContainer>
    );
  }
}

export default inject('auth')(observer(Component));


const StyledContainer = styled.div`
    border: 1px solid blue;
`;