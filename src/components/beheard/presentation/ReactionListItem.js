import React from 'react';
import {inject, observer} from 'mobx-react';
import BH from "../../../service/Issues";
import styled from 'styled-components';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Badge from "material-ui/Badge";

class Component extends React.Component {

  render() {
    console.log("reaction list item", this.props);

    return (
      <StyledContainer>
        <Typography type="caption"> Reaction: </Typography>
        <img src={`https://raw.githubusercontent.com/twitter/twemoji/gh-pages/36x36/${this.props.reaction}.png`}/>
        <Badge colorPrimary badgeContent={this.props.count}/>
      </StyledContainer>
    );
  }
}

export default inject('auth')(observer(Component));


const StyledContainer = styled.div`
    border: 1px solid blue;
`;