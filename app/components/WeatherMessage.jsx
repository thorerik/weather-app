var React = require('react');

var WeaterMessage = ({temp, location}) => {
  return (
    <h3>It is {temp} degrees in {location}</h3>
  );
}
module.exports = WeaterMessage;
