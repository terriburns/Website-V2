React.render(<Main />, document.getElementById('app'));

var Main = React.createClass({
  render: function() {
    return {
      <div>Hello, haters!</div>
    };
  }
});
