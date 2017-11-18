import React from 'react';
import { ReactMic } from 'react-mic';
import Button from 'material-ui/Button';

class Recorder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      record: false,
      blobObject: null,
      isRecording: false
    }
  }

  startRecording = () => {
    this.setState({
      record: true,
      isRecording: true
    });
  }

  stopRecording = () => {
    this.setState({
      record: false,
      isRecording: false
    });
  }

  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
  }

  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          audioBitsPerSecond= {128000}
          strokeColor="#000000"
          backgroundColor="#9c27b0" />

        <div>
          <audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio>
        </div>

        <Button raised color="primary" onClick={this.startRecording}>
          Record
        </Button>

        <Button raised color="primary" onClick={this.stopRecording}>
          Stop
        </Button>
      </div>
    )
  }
}

export default Recorder;
