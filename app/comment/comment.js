'use strict';
import React from 'react';
class Comment extends React.Component{
  render(){
  return (
       <div className="comment">
        <div className="author">{this.props.author}</div>
        <div className="metadata">
          <span className="date">{this.props.date}</span>
        </div>
        <div className="text"> {this.props.children}</div>
      </div>
    );
  }
}
export {Comment as default}
