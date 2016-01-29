var react = require('react');
var Press = require('press');

var Main = React.createClass({
  render: function() {
    return {
      <div>
        This is the Main page
        Click <a href="#click">here</a> to go to the press page.
      </div>
    };
  }
});
