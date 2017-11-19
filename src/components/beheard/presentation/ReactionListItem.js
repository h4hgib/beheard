import React from 'react';
import {inject, observer} from 'mobx-react';
import BH from "../../../service/Issues";
import styled from 'styled-components';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Badge from "material-ui/Badge";

class Component extends React.Component {

  render() {
    //console.log("reaction list item", this.props);

    var imgStyle={
      width:'24px'
    }
    var countStyle = {
      clear:'both'
    }
    return (
      <StyledContainer>
        <img style={imgStyle} src={`https://raw.githubusercontent.com/twitter/twemoji/gh-pages/36x36/${this.props.reaction}.png`}/>
        <Badge style={countStyle} badgeContent={this.props.count}/>
      </StyledContainer>
    );
  }
}

export default inject('auth')(observer(Component));


const StyledContainer = styled.div`
  float: left;
  margin-left:10px;
  margin-bottom:5px;
  width: 30px;
  height: 30px;
  padding: 10px;
  float:left;
  background:#fff;
  border-radius:100%;
  clear:both;
`;
