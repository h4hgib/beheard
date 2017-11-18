import Anchor from '@trendmicro/react-anchor';
import Dropdown from '@trendmicro/react-dropdown';
import Navbar from '@trendmicro/react-navbar';
import { Nav, NavDropdown, NavItem, MenuItem } from '@trendmicro/react-navs';
import PropTypes from 'prop-types';
import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import SecondaryMenu from '../SecondaryMenu';
import PageContent from './PageContent';

const noop = () => {};

const StickyNavbar = ({ state, actions }) => {
    return (
        <StickyContainer>
            <Sticky>
              <SecondaryMenu></SecondaryMenu>
            </Sticky>
            <PageContent sectionName={'Featured Debates'} />
            <div style={{marginTop:'100px'}}>
              <PageContent sectionName={'Traffic and Tourism'} />
            </div>
        </StickyContainer>
    );
};

StickyNavbar.propTypes = {
    state: PropTypes.object,
    actions: PropTypes.object
};

export default StickyNavbar;
