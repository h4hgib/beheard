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

          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon/>
          </IconButton>

          <Typography type="title" color="inherit">
            Be Heard
          </Typography>

          <StyledToolBarRow>
            <StyledRight>
               <LoginAvatar/>
            </StyledRight>
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
  flex-direction: row-reverse;
`;

const StyledMaterialAppBar = styled(MaterialAppBar)`
  background-color:#fafafa!important;
  color:#444!important;
`;

const StyledRight = styled.div`

`;
