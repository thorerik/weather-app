var Greeter = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Meow 🐈</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
