var React = require('react');

var WeaterMessage = React.createClass({
  render: function() {
    var {temp, location} = this.props;
    return (
      <h3>It is {temp} degrees in {location}</h3>
    );
  }
});
module.exports = WeaterMessage;
