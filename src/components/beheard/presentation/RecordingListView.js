import React from 'react';
import {inject, observer} from 'mobx-react';
import BH from "../../../service/Issues";
import styled from 'styled-components';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import RecordingListItem from "./RecordingListItem";

class Component extends React.Component {

  state = {
    recordings: []
  };

  componentDidMount() {

    BH.getAllRecordings(this.props.issueId, (recordings) => {
      console.log(recordings);
      this.setState({"recordings": recordings});
    });

  }

  render() {

    return (
      <div>
        {this.state.recordings && this.state.recordings.length > 0 && (
          this.state.recordings.map((recording) => {
            return <RecordingListItem key={recording.id} recording={recording}/>;
          })
        )}
      </div>
    );
  }
}

export default inject('auth')(observer(Component));