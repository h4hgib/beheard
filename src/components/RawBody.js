import React from 'react';

class RawBody extends React.Component{
    rawMarkup(){
        const rawMarkup = this.props.content;
        return { __html: rawMarkup };
    }
    render(){
        return(
                <div className="modal-body">
                     <div dangerouslySetInnerHTML={this.rawMarkup()} />

                </div>
            )
    }
}

export default RawBody;