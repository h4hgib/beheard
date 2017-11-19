import React from 'react';
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';
import { ReactMic } from 'react-mic';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import BH from "../service/Issues";



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
    const issueId = this.props.issueId;
    const userId = this.props.auth.currentUser.uid;
    const file = this.state.blobFile;
    const storageRef = firebase.storage().ref(`recordings/${file.timeStamp}`);
    storageRef.put(file.blob).then(function(snapshot) {
      const url = {url: snapshot.task.metadata_.downloadURLs[0]};
      BH.addReactionVoice(issueId, userId, url)
    });
  }

  render() {
    var recordButton = {
      fontSize: 40,
      color:'#fff',
      background:'#42b0f4',
      borderRadius:'50%',
      padding:'5px'
    }
    var stopButton = {
      fontSize: 40,
      color:'#fff',
      background:'#5b5a5a',
      borderRadius:'50%',
      padding:'5px',
      cursor: 'pointer',
    }
    var saveButton = {
      fontSize: 40,
      color:'#fff',
      background:'#5b5a5a',
      borderRadius:'50%',
      padding:'5px',
      cursor: 'pointer',
    }
    var iconContainerStyle = {
      margin:'0 auto',
      width:'50%'
    }
    var buttonContainerStyle = {
      width:'100px',
      textAlign:'center',
      float:'left',
      marginLeft:'-20px'
    }
    var buttonTextStyle = {
      clear:'both', margin:'0 auto',
      fontSize:'16px'
    }
    var buttonDock = {
      background:'#f2f2f2',
      padding:'15px',
      position:'relative',
      float:'left',
      borderRadius:'5px'
    }
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          audioBitsPerSecond= {128000}
          strokeColor="#000000"
          backgroundColor="#fff"
          style={{borderRadius:'6px'}} />

        <div>
          <audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio>
        </div>

        <div style={buttonDock}>
          <div style={buttonContainerStyle}>
          <div style={iconContainerStyle}><Icon className = 'button' onClick={this.startRecording} style={recordButton}>mic</Icon></div>
          <div style={buttonTextStyle}> Record </div>
          </div>

          <div style={buttonContainerStyle}>
          <div style={iconContainerStyle}><Icon className = 'button' onClick={this.stopRecording} style={stopButton}>stop</Icon></div>
          <div style={buttonTextStyle}>Stop</div>
          </div>

          <div style={buttonContainerStyle}>
          <div style={iconContainerStyle}><Icon className = 'button' onClick={this.saveRecording} style={saveButton}>save</Icon></div>
          <div style={buttonTextStyle}> Save </div>
          </div>
        </div>


      </div>
    )
  }
}

export default inject('auth')(observer(Recorder));

