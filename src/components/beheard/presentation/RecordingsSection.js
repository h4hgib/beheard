import React from 'react';
import {inject, observer} from 'mobx-react';



class RecordingsSection extends React.Component {



  render() {

    return (
      <div>
         recordings

      </div>
    );
  }
}

export default inject('auth')(observer(RecordingsSection));

