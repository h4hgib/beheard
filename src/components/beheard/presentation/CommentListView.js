import React from 'react';
import {inject, observer} from 'mobx-react';
import BH from "../../../service/Issues";
import styled from 'styled-components';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import CommentListItem from "./CommentListItem";

class Component extends React.Component {

  state = {
    comments: []
  };

  componentDidMount() {

    BH.getAllComments(this.props.issueId, (comments) => {
      // console.log("comments", comments);
      this.setState({"comments": comments});
    });

  }

  handleVoteUp = (commentId) => {
    // console.log("voting up",commentId)
      return BH.voteUpComment(this.props.issueId, commentId, this.props.auth.currentUser.uid);
  }

  render() {

    return (
      <div>
        {this.state.comments && this.state.comments.length > 0 && (
          this.state.comments.map((comment) => {
            return <CommentListItem key={comment.id} comment={comment} handleVoteUp={this.handleVoteUp}/>;
          })
        )}
      </div>
    );
  }
}

export default inject('auth')(observer(Component));
