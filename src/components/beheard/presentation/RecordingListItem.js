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
        <Typography type="caption"> Recording: </Typography>
        <div> {this.props.recording.title} </div>
        <div> {this.props.recording.content} </div>
      </StyledContainer>
    );
  }
}

export default inject('auth')(observer(Component));


const StyledContainer = styled.div`
    border: 1px solid purple;
`;