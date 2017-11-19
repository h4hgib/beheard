import React from 'react';
import {inject, observer} from 'mobx-react';
import TextField from 'material-ui/TextField';

import {withRouter} from 'react-router-dom'

import Button from 'material-ui/Button';
import BH from "../../../service/Issues";

import Typography from 'material-ui/Typography';

import {Editor} from 'react-draft-wysiwyg';
import {convertToRaw} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../../app.css';
import draftToHtml from 'draftjs-to-html';
import styled from "styled-components";

class IssueCreate extends React.Component {

  state = {
    issue: {
      title: '',
      desc: '',
      content: '',
    },
    editor: null,
  };

  constructor(props) {
    super(props);
  }


  handleChange = name => event => {
    this.setState({
      'issue': {...this.state.issue, [name]: event.target.value, }
    });
  };

  onEditorStateChange = state => {
    this.setState({editor: state});
  };

  submit = () => {
    if (this.props.auth.loginShowIfNot()) {
      BH.addIssue({
        uid: this.props.auth.currentUser.uid,
        ...this.state.issue,
        content: draftToHtml(convertToRaw(this.state.editor.getCurrentContent())),
        numVotes: 0
      }).then( () => {
        this.props.history.push('/issues');
      }
    )
    }
  };


  render() {

    return (
      <div>

        <StyledSpacedText type="headline" component="h2">
           Title
        </StyledSpacedText>

        <TextField
          id="title"
          label="Title"
          value={this.state.issue.title}
          onChange={this.handleChange('title')}
          margin="normal"
        />
        
        <StyledSpacedText type="headline" component="h2">
           Background Header URL
        </StyledSpacedText>

        <TextField
          id="bgUrl"
          label="BgUrl"
          value={this.state.issue.bgUrl}
          onChange={this.handleChange('bgUrl')}
          margin="normal"
        />

        <StyledSpacedText type="headline" component="h2">
           Short Description
        </StyledSpacedText>

        <TextField
          id="desc"
          label="Description"
          value={this.state.issue.desc}
          onChange={this.handleChange('desc')}
          margin="normal"
        />

        <StyledSpacedText type="headline" component="h2">
           Content
        </StyledSpacedText>

        <Editor
          editorState={this.state.editor}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />

        <Button raised color="primary" onClick={this.submit}>
          Submit Issue
        </Button>


      </div>
    );
  }
}

export default withRouter(inject('auth')(observer(IssueCreate)));

IssueCreate.defaultProps = {
  issues: [],
}

const StyledSpacedText = styled(Typography)`
  margin:20px;
`;

