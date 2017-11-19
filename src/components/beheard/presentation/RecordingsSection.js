import React from 'react';
import {inject, observer} from 'mobx-react';
import BH from "../../../service/Issues";




class RecordingsSection extends React.Component {

  state = {recordings: []}


  componentDidMount() {

    BH.getAllVoiceReactions(this.props.issueId, (recordings) => {
        console.log('getAllVoiceReactions')
        console.log(recordings);
        this.setState({"recordings": recordings});
    })
  }

  render() {

    return (
      <div>
        
        {this.state.recordings && this.state.recordings.map((rec) => 
            <div> 
                <audio ref="audioSource" controls="controls" src={rec.url}></audio>
            </div>)}

      </div>
    );
  }
}

export default inject('auth')(observer(RecordingsSection));

