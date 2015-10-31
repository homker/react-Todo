/**
 * Created by homker on 15/10/23.
 */

require('../node_modules/bootstrap/dist/css/bootstrap.css');
require('../styles/style.css');

var React = require('react'),
    ReactDom = require('react-dom'),
    HeadLayout = require('./layout.jsx').HeadLayout,
    MainLayout = require('./layout.jsx').MainLayout,
    Grid = require('react-bootstrap').Grid;

var App = React.createClass({
    render: function () {
        return (
            <Grid>
                <HeadLayout/>
                <MainLayout/>
            </Grid>
        )
    }
});

ReactDom.render(
    <App/>,
    document.getElementById('container')
);