/**
 * 核心显示区域的布局
 * @type {*|exports|module.exports}
 */
var React = require('react'),
    ReactDom = require('react-dom'),
    PropTypes = React.PropTypes,
    Row = require('react-bootstrap').Row,
    Col = require('react-bootstrap').Col,
    Grid = require('react-bootstrap').Grid,
    DragTarget = require('react-dnd').DropTarget,
    Label = require('react-bootstrap').Label,
    Actions = require('../action/actions');


var Type = {
    Button: "button"
};

var boxTarget = {
    drop: function (props, monitor, components) {
        Actions.boxTargetDrop(props, monitor, components);
    }
};

function collect(connect, monitor) {
    return {
        child: monitor.getItem() || monitor.getDropResult(),
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}


var MainDisplayBox = React.createClass({

    propTypes: {
        connectDropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired,
        greedy: PropTypes.bool,
        children: PropTypes.node
    },
    componentWillMount: function () {

    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return !this.props.child;
    },
    render: function () {
        var children = this.props.child,
            connectTarget = this.props.connectDropTarget;
        var Component = children && children.name ? eval(children.name) : Label;
        return connectTarget(
            <div>
                {children && children.name ?
                    <Component>{children.name}</Component> : null
                }
            </div>
        );
    }
});

module.exports = DragTarget(Type.Button, boxTarget, collect)(MainDisplayBox);