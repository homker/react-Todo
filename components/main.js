/**
 * Created by homker on 15/10/23.
 */

var React = require('react'),
    ReactDom = require('react-dom'),
    Button = require('react-bootstrap').button;

var App = React.createClass({
    render: function () {
        return (<h1>hello world</h1>)
    }
})

React.render(
    <App/>,
    document.getElementById('container')
);