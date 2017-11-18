import React from 'react';
import {inject, observer} from 'mobx-react';


import IssueListItem from "./IssueListItem";


class IssueList extends React.Component {



  render() {
    console.log(this.props);

    return (
      <div>



{this.props.issues.length > 0 &&
        <div> {this.props.issues.map((issue) =>  <IssueListItem key={issue.id} issue={issue} />) } </div>
      }


      </div>
    );
  }
}

export default inject('auth')(observer(IssueList));

IssueList.defaultProps = {
  issues: [],
}