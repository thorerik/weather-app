var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weater = React.createClass({
  getInitialState: function() {
    return {
      location: "Woof",
      temp: 42
    };
  },
  handleSearch: function(location) {
    this.setState({
      location: location,
      temp: 23
    });
  },
  render: function() {
    var {temp, location} = this.state;
    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});
module.exports = Weater;
