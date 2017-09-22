var React = require('react');
var ReactDOM = require('react-dom');

var MainElement = React.createClass({
  render: function () {

  	return(
      <div>
        <HeaderElement />
        <SearchBarElement />
        <UserInfoElement />
        <AuthenElement />
        <CommitElement />
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
  render: function () {
    return(
      <div className='searchBar'>
        <h1>greenfox-academy/</h1>
        <input type='text' placeholder='repository name' />
        <button>Go</button>
      </div>
    );
  }
})

var UserInfoElement = React.createClass({
  render: function () {
  	return (
      <div className='userInfo'>
        <h2>Teaching material</h2>
        <p>dasd</p>
        <p>dasdasd</p>
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
        <p>dsa</p>
        <p>das</p>
        <p>ddsad</p>
        <p>dasdad</p>
      </div>
    );
  }
})

var RecommElement = React.createClass({
  render: function () {
  	return(
      <div className='recomm'>
        <h2>Recommend</h2>
        <p>dasd</p>
        <p>das</p>
        <p>dadsad</p>
        <p>dasd</p>
      </div>
    );
  }	
})

ReactDOM.render(<MainElement />, document.querySelector("div"));