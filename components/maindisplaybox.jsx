/**
 * 核心显示区域的布局
 * @type {*|exports|module.exports}
 */
var React = require('react'),
    ReactDom = require('react-dom'),
    Row = require('react-bootstrap').Row,
    Col = require('react-bootstrap').Col,
    Grid = require('react-bootstrap').Grid;

const GridInterFace = (
    <Grid>
        <Row className="show-grid">
            <Col xs={12} md={8}>{'hello'}</Col>
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        </Row>

        <Row className="show-grid">
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            <Col xs={12} md={8}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        </Row>
    </Grid>
);


var MainDisplayBox = React.createClass({
    render : function(){
        return GridInterFace;
    }
});

module.exports = MainDisplayBox;