import React from 'react';
import {inject, observer} from 'mobx-react';
import BH from "../../../service/Issues";
import styled from 'styled-components';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';


class ReactionCreate extends React.Component {

  emojis = [
    '1f60d',
    '1f923',
    '1f44d',
    '1f44e',
    '1f44f',
    '1f634',
    '1f630',
  ];


  submit = (emoji) => () => {
    if (this.props.auth.loginShowIfNot()) {
      BH.addReaction(this.props.issueId, this.props.auth.currentUser.uid, emoji).then((ret) => {

          console.log('submitted', ret);
          //this.props.history.push('/issues');
        }
      );
    }
  };

  render() {


    return (
      <StyledContainer>

        {this.emojis.map((emoji) => (
          <Button key={emoji} color="primary" onClick={this.submit(emoji)}>

            <img src={`https://abs.twimg.com/emoji/v2/72x72/${emoji}.png`}/>

          </Button>

        ))}


      </StyledContainer>
    );
  }
}

export default inject('auth')(observer(ReactionCreate));


const StyledContainer = styled.div`
    border: 4px solid blue;
`;