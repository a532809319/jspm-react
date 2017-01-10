'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
class CommentForm extends React.Component{
  render(){
    return (
      <form className="ui reply form">
        <div className="field">
          <input type="text" placeholder="姓名"/>

        </div>
         <div className="field">
         <textarea placeholder="评论"></textarea>
        </div>
        <button type="submit" className="ui blue button">a  a 参加评论</button>

      </form>
    );
  }
}
export {CommentForm as default}
