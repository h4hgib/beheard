import React from 'react';
import {inject, observer} from 'mobx-react';
import BH from "../../../service/Issues";
import styled from 'styled-components';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import ReactionListItem from "./ReactionListItem";

class Component extends React.Component {

  state = {
    reactions: [],
    reactionsByKey: {

    }
  };

  componentDidMount() {

    BH.getAllReactions(this.props.issueId, (reactions) => {
      console.log("Reactions", reactions);
      this.setState({"reactions": reactions});

      let reactionsByKey = {};
      for (let r in reactions) {
        if (reactionsByKey.hasOwnProperty(reactions[r].reaction)) {
           reactionsByKey[reactions[r].reaction] =  reactionsByKey[reactions[r].reaction] +1;

        } else {
           reactionsByKey[reactions[r].reaction] = 1;
        }

      }
      this.setState({"reactionsByKey": reactionsByKey});
    });

  }

  render() {

    var items = [];

    for (let r in this.state.reactionsByKey) {
      items.push(<ReactionListItem key={r} reaction={r} count={this.state.reactionsByKey[r]} />);
    }

    return (
      <div>
        {items}
      </div>
    );
  }
}

export default inject('auth')(observer(Component));