var React = require('react'),
    Reflux = require('reflux'),
    MainDisplayBox = require('./maindisplaybox.jsx'),
    Row = require('react-bootstrap').Row,
    Col = require('react-bootstrap').Col,
    Nav = require('react-bootstrap').Nav,
    Navbar = require('react-bootstrap').Navbar,
    NavItem = require('react-bootstrap').NavItem,
    NavDropdown = require('react-bootstrap').NavDropdown,
    MenuItem = require('react-bootstrap').MenuItem,
    NavBrand = require('react-bootstrap').NavBrand,
    Accordion = require('react-bootstrap').Accordion,
    Panel = require('react-bootstrap').Panel,
    ListGroup = require('react-bootstrap').ListGroup,
    ListGroupItem = require('react-bootstrap').ListGroupItem,
    Button = require('./DragButton'),
    DragDropContext = require('react-dnd').DragDropContext,
    HTML5BackEnd = require('react-dnd-html5-backend'),
    Actions = require('../action/actions'),
    Stroe = require('../store/stores'),
    LeftMenu = require('./lefttoolbar.jsx');

/**
 * 中心核心区域布局
 * @type {*|exports|module.exports}
 */

require('../styles/style.css');


var HeadLayout = React.createClass({
    render: function () {
        return (
            <Navbar inverse toggleNavKey={0}>
                <NavBrand><a href="#">React-Bootstrap LayoutIt</a></NavBrand>
                <Nav right eventKey={0} className="navbar"> {/* This is the eventKey referenced */}
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="collapsible-navbar-dropdown">
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey="4">Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
});



var ContentLayout = React.createClass({

        mixin: [Reflux.connect(Stroe)],

        getInitialState: function () {
            return {}
        },
        handleDrop: function () {
            console.log('handle drop');
            Actions.dropHandle();
        },
        render: function () {
            return (
                <Row className="mainDisPlay">
                    <Col xs={4} md={2} className="leftToolBox">
                        <LeftMenu/>
                    </Col>
                    <Col xs={14} md={10} className="mainDisPlay">
                        <MainDisplayBox
                            onDrop={this.handleDrop}
                            />
                    </Col>
                </Row>
            )
        }
    })
    ;

module.exports = {
    MainLayout: DragDropContext(HTML5BackEnd)(ContentLayout),
    HeadLayout: HeadLayout
};
