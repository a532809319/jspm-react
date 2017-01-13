'use strict';
import  'semantic-ui/semantic.min.css!';
import React from 'react';
import  ReactDOM from  'react-dom';
import {Router,Route,Link,IndexRoute,Redirect} from 'react-router';
class App extends React.Component{
  componentWillReceiveProps(){
    console.log('app  wiil  receive props');
  }
  componentDidUpdate(){
    console.log('app will up date');

  }

     componentDidMount(){
            console.log('app did mount');
      }
  constructor(props){
    super(props);
    console.log(this.props);
    let {query} = this.props.location;
    console.log(query);
  }
  render(){

     return (
      <div>
        <div className="ui secondary pointing menu">
             <Link to="/" className="item">首页</Link>
              <Link to="/tv" className="item" query={{orderBy:'data'}}>电视</Link>
        </div>
        {this.props.children}

      </div>
      );


}

}
class TV extends React.Component {

  componentDidMount(){
    console.log('tv di  mount');
  }
  render(){
    return (
      <div>

          {this.props.children}
      </div>

    );
  }
}


class Show extends React.Component{
   componentDidMount(){
     console.log('show di mount');
   }
      constructor(props){
        super(props);
        console.log(this.props.params);
      }

  render(){
    return(

      <h3>节目{this.props.params.id}</h3>

    );
  }
}
class Home extends React.Component{
  componentWillUnmout(){
    console.log( 'home will  unmount');
  }
  componentDidMount(){
    console.log('Home will did mount');
  }
  render (){
    return(
      <div className="ui info message">首页内容</div>
    );
  }
}

class ShowIndex extends React.Component{
  render (){
    return (
      <div className="ui  info message">电视节目列表</div>
    );
  }
}

function handleEner() {
  console.log('enter');
}
function handleLeave() {
  console.log('leave');
  alert('are you sure leave');
}
ReactDOM.render((
  <Router>

   <Route path="/" component={App}>
     <IndexRoute component={Home}></IndexRoute>
   <Route path="tv" component={TV}>
     <IndexRoute component={ShowIndex}></IndexRoute>
     <Route path="/shows/:id" component={Show}
     onEnter={handleEner}
     onLeave={handleLeave}
   />
     <Redirect from="shows/:id" to="/show/:id"></Redirect>


   </Route>
   </Route>
</Router>),document.getElementById('app'));

//ReactDOM.render(<CommentBox url="app/comments.json"/>,document.getElementById('app'));
