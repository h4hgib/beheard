import React from 'react';
import {inject, observer} from 'mobx-react';
import BH from "../../../service/Issues";
import styled from 'styled-components';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import ReactionListItem from "./ReactionListItem";

class Component extends React.Component {

  state = {
    reactions: []
  };

  componentDidMount() {

    BH.getAllReactions(this.props.issueId, (reactions) => {
      console.log("Reactions", reactions);
      this.setState({"reactions": reactions});
    });

  }

  render() {

    return (
      <div>
        {this.state.reactions && this.state.reactions.length > 0 && (
          this.state.reactions.map((reaction) => {
            return <ReactionListItem key={reaction.id} reaction={reaction.reaction}/>;
          })
        )}
      </div>
    );
  }
}

export default inject('auth')(observer(Component));