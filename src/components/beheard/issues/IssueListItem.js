// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {Link} from "react-router-dom";
import styled from "styled-components";
import RawBody from "../../RawBody";
import Skeleton from 'react-loading-skeleton';

const styles = {
  card: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 50,
  },
};


function IssueListItem(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="http://via.placeholder.com/350x50"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {props.issue ? props.issue.title : <Skeleton />}
          </Typography>
          {/*<Typography component="p">*/}
              {props.issue ? <RawBody content={props.issue.desc}/> : <Skeleton count={3}/>}
          {/*</Typography>*/}
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Share
          </Button>
          { props.issue && (
            <Link to={`/issues/${props.issue.id}`}>
            <Button dense color="primary">
              Learn More
            </Button>
          </Link>
          )}

        </CardActions>
      </Card>
      { props.issue && (
          <Button raised onClick={() => props.handleVoteUp(props.issue.id)}> Vote Up </Button>
      )}

    </div>
  );
}

IssueListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IssueListItem);