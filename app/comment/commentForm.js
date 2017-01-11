'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
class CommentForm extends React.Component{
  handleSubmit (event){
    event.preventDefault();
  console.log('提交表单');
  // console.log(this);
  let   author=this.refs.author.value;
  let   text=this.refs.text.value;
  console.log(text);
  console.log(author);
  this.props.onCommentSubmit({author,text})

  }
  a(event){
    event.preventDefault();
    alert(this.refs.a.innerHTML);
  }
  render(){
    return (
      <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="field">
          <input type="text" placeholder="姓名" ref="author"/>

        </div>
         <div className="field">
         <textarea placeholder="评论" ref="text"></textarea>
        </div>
        <button type="submit" className="ui blue button">a  a 参加评论</button>
        <button type="button" className="ui blue button" ref="a" onClick={this.a.bind(this)}>点击</button>

      </form>
    );
  }
}
export {CommentForm as default}
