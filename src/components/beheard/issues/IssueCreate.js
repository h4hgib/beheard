import React from 'react';
import {inject, observer} from 'mobx-react';
import TextField from 'material-ui/TextField';


import Button from 'material-ui/Button';
import BHService from "../../../service/Issues";

const bhs = new BHService() ;

class IssueCreate extends React.Component {

  state = {
    title: '',
    desc: '',

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submit = () => {
    bhs.addIssue(this.state);
  };


  render() {
    console.log(this.props);

    return (
      <div>

        <TextField
          id="title"
          label="Title"
          value={this.state.title}
          onChange={this.handleChange('title')}
          margin="normal"
        />

        <TextField
          id="desc"
          label="Description"
          value={this.state.desc}
          onChange={this.handleChange('desc')}
          margin="normal"
        />

        <Button raised color="primary" onClick={this.submit}>
          Submit Issue
        </Button>


      </div>
    );
  }
}

export default inject('auth')(observer(IssueCreate));

IssueCreate.defaultProps = {
  issues: [],
}


