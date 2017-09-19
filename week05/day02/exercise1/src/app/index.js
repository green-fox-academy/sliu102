var React = require('react');
var ReactDOM = require('react-dom');

var TodoElement = React.createClass({
  getInitialState: function () {
  	return{
  	  todos:[1,2,3,4]
  	}
  },
  render: function () {
    var todos = this.state.todos;
    todos = todos.map(function (item,index) {
      return(<TodoItem item = {item} key = {index} onDelete={this.delete}/>);
    }.bind(this));

  	return(
      <div><ul>{todos}</ul></div>
  	);
  },
  delete: function (item) {
  	var newTodos = this.state.todos.filter(function (val) {
  	  return item !== val;
  	})
  	this.setState({
  	  todos: newTodos
  	})
  }

});

var TodoItem = React.createClass({
  render: function () {
  	return(
  	  <div>
  		<span>{this.props.item}</span>
  		<span onClick={this.handleDelete}> x </span>
  	  </div>);
  },

  handleDelete: function () {
    this.props.onDelete(this.props.item);
  }
})

ReactDOM.render(<TodoElement/>, document.querySelector("div"));