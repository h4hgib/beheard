import React from 'react';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar';

class Component extends React.Component {

  state = {
    voted: false,
  };

  handleVoteUp = () => {
    this.props.handleVoteUp(this.props.comment.id);
    this.setState({'voted': true});

  };


  render() {

    return (
      <StyledContainer>
        <Typography type="caption"> Comment: </Typography>
        <div> {this.props.comment.avatar && (

           <Avatar alt="" src={this.props.comment.avatar} />
        )}  </div>
        <div> {this.props.comment.title} </div>
        <div> {this.props.comment.content} </div>
        <div style={{marginTop:'8px', marginBottom:'10px'}}>
        {this.state.voted ?
          <Button raised disabled> Vote Up </Button>
          : <Button raised onClick={this.handleVoteUp} > Vote Up </Button>
        }
        </div>

      </StyledContainer>
    );
  }
}

export default inject('auth')(observer(Component));


const StyledContainer = styled.div`
  margin-bottom:20px;
`;
