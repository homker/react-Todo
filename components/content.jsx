/**
 * 中心核心区域布局
 * @type {*|exports|module.exports}
 */
var React = require('react'),
    ReactDom = require('react-dom'),
    LeftToolBar = require('lefttoolbar.jsx'),
    MainDisplayBox = require('maindisplaybox.jsx');

var Content  = React.createClass({
    render: function(){
        return (
            <div>
                <LeftToolBar/>
                <MainDisplayBox/>
            </div>
        )
    }
});

module.exports = Content;
