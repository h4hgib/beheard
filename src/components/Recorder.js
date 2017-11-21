import React from 'react';
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';
import { ReactMic } from 'react-mic';
import Icon from 'material-ui/Icon';
import BH from "../service/Issues";
import styled from 'styled-components';


class Recorder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      record: false,
      isRecording: false,
      file: null,
      fileUrl: null
    }
  }

  startRecording = () => {
    if (!this.state.isRecording) {
      this.setState({
        record: true,
        isRecording: true
      });
    }

  }

  stopRecording = () => {
    if (this.state.isRecording) {
      this.setState({
        record: false,
        isRecording: false
      });
    }
  }

  onStop = (recordedBlob) => {
    recordedBlob.timeStamp = Date.now();
    console.log('recordedBlob is: ', recordedBlob);
    this.setState({
      file: recordedBlob,
      fileUrl: recordedBlob.blobURL
    })
  }

  saveRecording = () => {
    const issueId = this.props.issueId;
    const userId = this.props.auth.currentUser.uid;
    const file = this.state.file;
    const storageRef = firebase.storage().ref(`recordings/${file.timeStamp}`);
    storageRef.put(file.blob).then((snapshot) => {
      const url = {url: snapshot.task.metadata_.downloadURLs[0]};
      BH.addReactionVoice(issueId, userId, url)
      this.setState({
        file: null,
        fileUrl: null        
      })
      //document.querySelector('.recorder').clearRect(0, 0, 300, 50);
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
        <div style={{display:'flex'}}>

          <div style={buttonDock}>
            <div style={buttonContainerStyle}>
              <div style={iconContainerStyle}><Icon className = 'button' onClick={this.startRecording} style={recordButton}>mic</Icon></div>
              <div style={buttonTextStyle}> Record </div>
            </div>

            <div style={buttonContainerStyle}>
              <div style={iconContainerStyle}><Icon className = 'button' onClick={this.stopRecording} style={stopButton}>stop</Icon></div>
              <div style={buttonTextStyle}>Stop</div>
            </div>

            { this.state.fileUrl &&
              <div style={buttonContainerStyle}>
                <div style={iconContainerStyle}><Icon className = 'button' onClick={this.saveRecording} style={saveButton}>save</Icon></div>
                <div style={buttonTextStyle}> Save </div>
              </div> 
            }
          </div>

          <StyledPlayerContainer>
              <ReactMic
                height={50}
                width={300}
                record={this.state.record}
                className="sound-wave recorder"
                onStop={this.onStop}
                audioBitsPerSecond= {128000}
                strokeColor="#000000"
                backgroundColor="#fff"
                style={{borderRadius:'6px'}} />
              <div style={{width:300}}></div>
              <audio ref="audioSource" controls="controls" src={this.state.fileUrl}></audio>
          </StyledPlayerContainer>

        </div>
      </div>
    )
  }
}

export default inject('auth')(observer(Recorder));

const StyledPlayerContainer = styled.div`

  padding-left: 30px;
  position: relative;
  float: left;
`;