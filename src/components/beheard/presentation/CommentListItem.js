import React from 'react';
import {inject, observer} from 'mobx-react';
import BH from "../../../service/Issues";
import styled from 'styled-components';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar';

class Component extends React.Component {

  render() {

    return (
      <StyledContainer>
        <Typography type="caption"> Comment: </Typography>
        <div> {this.props.comment.avatar && (

           <Avatar alt="" src={this.props.comment.avatar} />
        )}  </div>
        <div> {this.props.comment.title} </div>
        <div> {this.props.comment.content} </div>
      </StyledContainer>
    );
  }
}

export default inject('auth')(observer(Component));


const StyledContainer = styled.div`
    border: 1px solid orange;
`;