import React from 'react';
import {inject, observer} from 'mobx-react';
import BH from "../../../service/Issues";


class RecordingsSection extends React.Component {

  state = {
    recordings: []
  }

  componentDidMount() {
    BH.getAllVoiceReactions(this.props.issueId, (recordings) => {
        console.log('getAllVoiceReactions')
        console.log(recordings);
        this.setState({"recordings": recordings});
    })
  }

  renderRecordings(record, idx) {
    return (
      <div key={idx}>
        <audio ref="audioSource" controls="controls" src={record.url}></audio>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.recordings && this.state.recordings.map(this.renderRecordings)}
      </div>
    );
  }
}

export default inject('auth')(observer(RecordingsSection));

