var React = require('react');
var OverlayMixin = require('./OverlayMixin');
var cloneWithProps = require('./utils/cloneWithProps');

var createChainedFunction = require('./utils/createChainedFunction');

var ModalTrigger = React.createClass({displayName: "ModalTrigger",
  mixins: [OverlayMixin],

  propTypes: {
    modal: React.PropTypes.node.isRequired
  },

  getInitialState: function () {
    return {
      isOverlayShown: false
    };
  },

  show: function () {
    this.setState({
      isOverlayShown: true
    });
  },

  hide: function () {
    this.setState({
      isOverlayShown: false
    });
  },

  toggle: function () {
    this.setState({
      isOverlayShown: !this.state.isOverlayShown
    });
  },

  renderOverlay: function () {
    if (!this.state.isOverlayShown) {
      return React.createElement("span", null);
    }

    return cloneWithProps(
      this.props.modal,
      {
        onRequestHide: this.hide
      }
    );
  },

  // Original
  // render: function () {
  //   var child = React.Children.only(this.props.children);
  //   return cloneWithProps(
  //     child,
  //     {
  //       onClick: createChainedFunction(child.props.onClick, this.toggle)
  //     }
  //   );
  // }
  // https://github.com/react-bootstrap/react-bootstrap/issues/527
  render: function render() {
    var child = React.Children.only(this.props.children);
    var props = {};
    props.onClick = createChainedFunction(child.props.onClick, this.toggle);
    for (var name in this.props) {
      if (name.indexOf('on') === 0) {
        props[name] = createChainedFunction(child.props[name], this.props[name]);
      }
    }
    return cloneWithProps(
      child,
      props
    );
  }
});

module.exports = ModalTrigger;
