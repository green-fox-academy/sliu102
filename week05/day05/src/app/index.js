var React = require('react');
var ReactDOM = require('react-dom');
var get = require('./fetch.js');
var getCommits = require('./getCommits.js');
var getNames = require('./search.js');

var MainElement = React.createClass({
  render: function () {

  	return(
      <div>
        <HeaderElement />
        <SearchBarElement />
        <AuthenElement />
        <RecommElement />
      </div>
  	);
  },

});

var HeaderElement = React.createClass({
  render: function () {
    return(
      <header>
        <button className='headerBtn'>Github</button>
        <button className='headerBtn'>MDN</button>
        <button className='headerBtn'>Stack Overflow</button>
      </header>
    );
  }
})

var SearchBarElement = React.createClass({
  getInitialState: function() {
    return {
      inputValue: '',
      name:'',
      description:'',
      time:'',
      commitTime:'',
      commitName:'',
      commitMessage:'',
      space:'',
      space2:''
    };
  },
  render: function () {
    return(
      <div className='searchBar'>
        <h1>greenfox-academy/</h1>
        <input type='text' placeholder='repository name' value={this.state.inputValue} onChange={this.updateInputValue} />
        <button onClick={this.display}>Go</button>
        <UserInfoElement name={this.state.name} description = {this.state.description} time = {this.state.time} space2 ={this.state.space2} />
        <CommitElement space={this.state.space} message={this.state.commitMessage} time = {this.state.commitTime} name = {this.state.commitName}/>
      </div>
    );
  },
  updateInputValue: function(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  },
  display: function() {
    var list = get(this.state.inputValue, function(list){
      console.log('list:', list);
      this.setState({
        name: list[0],
        description: list[1],
        time: list[2],
        space2:'Last update at '
      });
    }.bind(this));

    var list2 = getCommits(this.state.inputValue, function(list){
      console.log('list:', list);
      this.setState({
        commitMessage: list[0],
        commitTime: list[1],
        commitName: list[2],
        space:'  at  '
      });
    }.bind(this));
    
  }
})

var UserInfoElement = React.createClass({
  render: function () {
  	return (
      <div className='userInfo'>
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
        <p>{this.props.spaces}{this.props.time}</p>
  	  </div>
    )
  }
})

var AuthenElement = React.createClass({
  render: function () {
  	return(
      <div className='authen'>
        <h2>Authenticate</h2>
        <input type='text' placeholder='Username' />
        <input type='text' placeholder='token or password' />
        <button>Login</button>
  	  </div>
    );
  }
})

var CommitElement = React.createClass({
  render: function () {
  	return(
      <div className='commits'>
        <h2>Commits</h2>
        <p>{this.props.message}</p>
        <p>{this.props.name}{this.props.space}{this.props.time}</p>
      </div>
    );
  }
})

var RecommElement = React.createClass({
  getInitialState:function() {
    return {
      name1:''
    };
  },
  render: function () {
    var list = get(function(list){
      console.log('list:', list);
      this.setState({
        name1: list[1]
      });
    }.bind(this));
  	return(
      <div className='recomm'>
        <h2>Recommend</h2>
        <p>{this.state.name1}</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    );
  }	
})

ReactDOM.render(<MainElement />, document.querySelector("div"));