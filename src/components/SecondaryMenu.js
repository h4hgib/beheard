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
            <StyledLeft>Featured</StyledLeft>
            <StyledLeft>Housing</StyledLeft>
            <StyledLeft>Traffic</StyledLeft>
            <StyledLeft>Tourism</StyledLeft>
            <StyledLeft>Traffic</StyledLeft>
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
`;
