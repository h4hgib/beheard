import React from 'react';
import styled from 'styled-components';

import MaterialAppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import LoginAvatar from "./LoginAvatar";
import {Link} from "react-router-dom";

const AppBar = function AppBar(props) {
  return (
    <div>

      <StyledMaterialAppBar position="static">
        <Toolbar style={{width: '1200px', margin: '0 auto'}}>

          <Link to={`/`}>
            <img style={{height:'48px', marginTop:'2px'}} src="/images/logo.png"/>
          </Link>
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
    display: flex;
    flex: 1;
    flex-direction: row-reverse;
`;

const StyledMaterialAppBar = styled(MaterialAppBar)`
    background-color: #fafafa;
    color: #444;
    margin: 0 auto;
    box-shadow: 0px;
`;

const StyledRight = styled.div`

`;
