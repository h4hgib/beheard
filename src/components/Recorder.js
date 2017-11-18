import React from 'react';
import firebase from 'firebase';

import { ReactMic } from 'react-mic';
import Button from 'material-ui/Button';


class Recorder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      record: false,
      blobObject: null,
      isRecording: false,
      blobFile: null,
      blobURL: null
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

  onStop = (recordedBlob) => {
    recordedBlob.timeStamp = Date.now();
    console.log('recordedBlob is: ', recordedBlob);
    this.setState({
      blobFile: recordedBlob,
      blobURL: recordedBlob.blobURL
    })
  }

  saveRecording = () => {
    const file = this.state.blobFile;
    const storageRef = firebase.storage().ref(`recordings/${file.timeStamp}`);
    const task = storageRef.put(file.blob);
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

        <Button raised color="primary" onClick={this.saveRecording}>
          Save
        </Button>
      </div>
    )
  }
}

export default Recorder;
