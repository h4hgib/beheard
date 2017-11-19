import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    maxWidth: 800,
    margin: 'auto auto'
  },
});

class TabsSubPage extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
<div>
       <h1 style={{fontSize:'22px', marginTop:'40px', marginBottom:'26px'}}>Open Data</h1>
         <hr />
              <br />
      <Paper className={classes.root}>


        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>

        {(this.state.value === 0) && (
          <div>
                <img src="/images/articlebg.png" />
          </div>
        )}

        {(this.state.value === 1) && (
          <div>
                <img src="/images/articlebg.png" />
          </div>
        )}

        {(this.state.value === 2) && (
          <div>
              <img src="/images/articlebg.png" />
          </div>
        )}



      </Paper>
</div>
    );
  }
}

TabsSubPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsSubPage);