import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
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
        results 1
          </div>
        )}

        {(this.state.value === 1) && (
          <div>
sdfsf
          </div>
        )}

        {(this.state.value === 2) && (
          <div>
sdfdsf
          </div>
        )}



      </Paper>
    );
  }
}

TabsSubPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsSubPage);