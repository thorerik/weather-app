var React = require('react');

var WeaterForm = React.createClass({
  render: function() {
    return (
      <div>
        <form>
          <div>
            <input type="text" ref="location" placeholder="Enter location"/>
          </div>
          <div>
            <button>Get weather</button>
          </div>
        </form>
      </div>
    );
  }
});
module.exports = WeaterForm;
