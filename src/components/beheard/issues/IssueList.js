import React from 'react';
import {inject, observer} from 'mobx-react';


import IssueListItem from "./IssueListItem";
import BHService from "../../../service/Issues";

const bhs = new BHService() ;

class IssueList extends React.Component {

  handleVoteUp = (issueId) => {
      bhs.voteUp(issueId, {uid: this.props.auth.currentUser.uid});
  };



  render() {

    return (
      <div>



{this.props.issues.length > 0 &&
        <div> {this.props.issues.map((issue) =>  <IssueListItem key={issue.id} issue={issue} handleVoteUp={this.handleVoteUp}/>) } </div>
      }


      </div>
    );
  }
}

export default inject('auth')(observer(IssueList));

IssueList.defaultProps = {
  issues: [],
}