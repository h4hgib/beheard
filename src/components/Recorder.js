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
    });
  }

  render() {

    const recorderConfig = {
          height: 50,
          width: 300,
          record: this.state.record,
          className: 'sound-wave recorder',
          onStop: this.onStop,
          audioBitsPerSecond:  128000,
          strokeColor: '#000000',
          backgroundColor: '#fff',
          style: {
            borderRadius:'6px'
          }
    }

    return (
      <div>
        <StyledRecorderContainer>

          <StyledButtonDock>
            <StyledButtonContainer>
              <StyledIconContainer><StyledIconActive className = 'button' onClick={this.startRecording}>mic</StyledIconActive></StyledIconContainer>
              <StyledButtonText> Record </StyledButtonText>
            </StyledButtonContainer>

            <StyledButtonContainer>
              <StyledIconContainer><StyledIcon className = 'button' onClick={this.stopRecording}>stop</StyledIcon></StyledIconContainer>
              <StyledButtonText>Stop</StyledButtonText>
            </StyledButtonContainer>

            {this.state.fileUrl &&
              <StyledButtonContainer>
                <StyledIconContainer><StyledIcon className = 'button' onClick={this.saveRecording}>save</StyledIcon></StyledIconContainer>
                <StyledButtonText> Save </StyledButtonText>
              </StyledButtonContainer> 
            }
          </StyledButtonDock>

          <StyledPlayerContainer>
              <ReactMic {...recorderConfig}
                 />
              <div style={{width:300}}></div>
              <audio ref="audioSource" controls="controls" src={this.state.fileUrl}></audio>
          </StyledPlayerContainer>

        </StyledRecorderContainer>
      </div>
    )
  }
}

export default inject('auth')(observer(Recorder));

const StyledRecorderContainer = styled.div`
      display: flex;
`;

const StyledIcon = styled(Icon)`
      font-size: 40;
      color: #fff;
      background: #5b5a5a;
      border-radius: 50%;
      padding: 5px;
`;

const StyledIconActive = StyledIcon.extend`
      background: #42b0f4;
`;

const StyledButtonText = styled.div`
      clear: both;
      margin: 0 auto;
      font-size: 16px;
`;

const StyledIconContainer = styled.div`
      margin: 0 auto;
      width: 50%;
`;

const StyledButtonContainer = styled.div`
      width: 100px;
      text-align: center;
      float: left;
      marginLeft: -20px;
`;

const StyledButtonDock = styled.div`
      background: #f2f2f2;
      padding: 15px;
      position: relative;
      float: left;
      border-radius: 5px;
`;   
 
const StyledPlayerContainer = styled.div`
      padding-left: 30px;
      position: relative;
      float: left;
`;

