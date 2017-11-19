import React from 'react';
import {inject, observer} from 'mobx-react';
import BH from "../../../service/Issues";
import styled from 'styled-components';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';


class CommentCreate extends React.Component {

  state = {
    comment: {
      title: '',
      content: ''
    }
  };


  submit = () => {
    if (this.props.auth.loginShowIfNot()) {
      BH.addComment(this.props.issueId, {
        uid: this.props.auth.currentUser.uid,
        avatar: this.props.auth.currentUser.photoURL,
        ...this.state.comment,
        numVotes: 0
      }).then((ret) => {

          console.log('submitted', ret);
          //this.props.history.push('/issues');
        }
      );
    }
  };

  handleChange = name => event => {
    this.setState({
      'comment': {...this.state.comment, [name]: event.target.value,}
    });
  };

  render() {


    return (
      <StyledContainer>
        <TextField
        style={{clear:'both', float:'left'}}
          id="title"
          label="Title"
          value={this.state.comment.title}
          onChange={this.handleChange('title')}
          margin="normal"
        />
        <TextField
          style={{clear:'both', float:'left'}}
          id="comment"
          label="Content"
          value={this.state.comment.content}
          onChange={this.handleChange('content')}
          margin="normal"
        />


        <Button style={{float:'left', clear:'both'}} raised color="primary" onClick={this.submit}>
          Submit Response
        </Button>

      </StyledContainer>
    );
  }
}

export default inject('auth')(observer(CommentCreate));


const StyledContainer = styled.div`
    width:100%;
    float:left;
    margin-bottom:20px;
`;
