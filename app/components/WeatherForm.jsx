var React = require('react');

var WeaterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = "";
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="location" placeholder="Enter location"/>
          </div>
          <div>
            <button className="hollow button expanded">Get weather</button>
          </div>
        </form>
      </div>
    );
  }
});
module.exports = WeaterForm;
