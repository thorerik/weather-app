var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var openWeatherMap = require('openWeatherMap');

var Weater = React.createClass({
  getInitialState: function() {
    return {
      location: "Woof",
      temp: 42
    };
  },
  handleSearch: function(location) {
    var that = this;
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        temp: temp,
        location: location
      });
    }, function (errorMessage) {
      alert(errorMessage);
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
