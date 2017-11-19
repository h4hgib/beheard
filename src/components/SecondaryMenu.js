import React from 'react';
import styled from 'styled-components';

import MaterialAppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import LoginAvatar from "./LoginAvatar";

const AppBar = function AppBar(props) {
  return (
    <div>

      <StyledMaterialAppBar position="static">
        <Toolbar>
          <StyledToolBarRow>
            <StyledLeft style={{marginLeft:'-20px'}}>Featured</StyledLeft>
            <StyledLeft>Housing & Employment</StyledLeft>
            <StyledLeft>Traffic & Tourism</StyledLeft>
            <StyledLeft>Creative Realm</StyledLeft>
            <StyledLeft>Education</StyledLeft>
            <StyledLeft>Health</StyledLeft>
            <StyledLeft>Sports</StyledLeft>
            <StyledLeft>Whats On</StyledLeft>
            <StyledLeft>Heritage & History</StyledLeft>
            <StyledLeft>Laws & Legislation</StyledLeft>
            <StyledLeft>Tax & Economy</StyledLeft>
          </StyledToolBarRow>

        </Toolbar>
      </StyledMaterialAppBar>
    </div>
  );
};

export default AppBar;

const StyledToolBarRow = styled.div`
  display:flex;
  flex: 1;
`;

const StyledMaterialAppBar = styled(MaterialAppBar)`
  background-color:#fff;
  color:#444;
  border-bottom:1px solid #eaeaea;
  box-shadow:none;

`;

const StyledLeft = styled.div`
  float:left;
  margin-right:15px;
  text-align: center;
`;
