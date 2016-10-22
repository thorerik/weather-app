var GreeterMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Some h1</h1>
        <p>Some paragraph</p>
      </div>
    );
  }
});
var GreeterForm = React.createClass({
  render: function() {
    return (
      <div>
        <form>
          <input type="text" ref="name"/>
          <button>Set name</button>
        </form>
      </div>
    );
  }
});
var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: '💣',
      message: '🐭🐈😸'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();

    var nameRef = this.refs.name;

    var name = nameRef.value;
    nameRef .value = "";

    if(typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    }


  },
  render: function () {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Meow 🐈 {name}</h1>
        <p>{message}</p>
        <GreeterMessage/>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set name</button>
        </form>
        <GreeterForm/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="👯" message="🖕🏻"/>,
  document.getElementById('app')
);
