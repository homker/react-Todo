var React = require('react'),
    PropTypes = React.PropTypes,
    ItemType = require('./contants').ItemType,
    DragSource = require('react-dnd').DragSource,
    Button = require('react-bootstrap').Button;


var buttonSource = {
    beginDrag: function (props) {
        return {
            name: props.name
        }
    },
    endDrag: function (props,monitor) {
        console.log('do it');
        var result = monitor.getDropResult(),
            item = monitor.getItem();
        return {
            name: props.name,
            result : result,
            item:item
        }
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}


var DragButton = React.createClass({
    propTypes: {
        connectDragSource: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired
    },
    render: function () {
        var connectDragSource = this.props.connectDragSource,
            isDragging = this.props.isDragging;
        return connectDragSource(
            <div>
                <Button
                    style={{
                    opacity: isDragging?0.5:1,
                    cursor:"move"
                }}
                    >{this.props.children}</Button>
            </div>
        )
    }
});


module.exports = DragSource(ItemType.Button, buttonSource, collect)(DragButton);