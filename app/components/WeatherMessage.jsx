var React = require('react');

var WeaterMessage = (props) => {
  var {temp, location} = props;
  return (
    <h3>It is {temp} degrees in {location}</h3>
  );
}
module.exports = WeaterMessage;
