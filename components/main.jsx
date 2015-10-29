/**
 * Created by homker on 15/10/23.
 */

require('../node_modules/bootstrap/dist/css/bootstrap.css');

var React = require('react'),
    ReactDom = require('react-dom'),
    Button = require('react-bootstrap').button;
    HeadBar = require('head.jsx');
    Content = require('content.jsx');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <HeadBar ></HeadBar>
                <Content ></Content>
            </div>
        )
    }
})

ReactDom.render(
    <App/>,
    document.getElementById('container')
);