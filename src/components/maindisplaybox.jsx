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
    DragTarget = require('react-dnd').DropTarget;


var Type = {
    Button:"button"
};

var boxTarget = {
    drop:function(props,monitor,components){
        console.log(monitor.didDrop());
        var hasChild = monitor.didDrop();
        props.onDrop(monitor.getItem());
        components.setState({
            hasDropped:true,
            hasDroppedOnChild:hasChild
        })
    }
};

function collect(connect,monitor){
    return {
        child:monitor.getItem(),
        connectDropTarget:connect.dropTarget(),
        isOver:monitor.isOver(),
        isOverCurrent:monitor.isOver({
            shallow:true
        })
    }
}


var MainDisplayBox = React.createClass({

    propTypes:{
        connectDropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired,
        isOverCurrent: PropTypes.bool.isRequired,
        greedy: PropTypes.bool,
        children: PropTypes.node
    },

    render: function () {
        var children = this.props.child,
            connectTarget = this.props.connectDropTarget;
        console.log(this.props);
        return connectTarget(
            <div>
                {
                    (children&&children.name)?
                    '<'+children.name+'>'+'</'+ children.name+'>' :"null"
                }
            </div>
        );
    }
});

module.exports = DragTarget(Type.Button,boxTarget,collect)(MainDisplayBox);