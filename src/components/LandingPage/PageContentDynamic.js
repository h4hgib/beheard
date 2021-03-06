import Anchor from '@trendmicro/react-anchor';
import Dropdown from '@trendmicro/react-dropdown';
import Navbar from '@trendmicro/react-navbar';
import { Nav, NavDropdown, NavItem, MenuItem } from '@trendmicro/react-navs';
import PropTypes from 'prop-types';
import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';


class PageContentDynamic extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){

    return(

          <div
              style={{
                  backgroundColor: '#fff',
                  marginTop: 15,
                  height:'auto',
              }}
          >
              <div className="container-fluid">
              <Grid item xs={12}>
              <h1 style={{fontSize:'22px', marginTop:'40px', marginBottom:'26px'}}>{this.props.sectionName}</h1>

              <hr />
              <br />
              <Grid container justify="center" spacing={Number(16)}>
              {this.props.children}
              </Grid>
              </Grid>
              </div>
          </div>
    )
  }
}


export default PageContentDynamic;
