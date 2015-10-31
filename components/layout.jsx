/**
 * 中心核心区域布局
 * @type {*|exports|module.exports}
 */

require('../styles/style.css');

var React = require('react'),
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
    ListGoup = require('react-bootstrap').ListGroup,
    ListGroupItem = require('react-bootstrap').ListGroupItem;


var ContentLayout = React.createClass({
    render: function () {
        return (
            <Row className="mainDisPlay">
                <Col xs={4} md={2} className="leftToolBox">{'hello'}</Col>
                <Col xs={14} md={10} className="mainDisPlay">{'word'}</Col>
            </Row>
        )
    }
});

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


var LeftMenu = React.createClass({
    render: function () {
        return (
            <Accordion>
                <Panel header="Collapsible Group Item #1" eventKey="1">
                    <ListGroup>
                        <ListGroupItem>
                            this is a button
                        </ListGroupItem>
                    </ListGroup>
                </Panel>
                <Panel header="Collapsible Group Item #2" eventKey="2">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                </Panel>
                <Panel header="Collapsible Group Item #3" eventKey="3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                    wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                    labore sustainable VHS.
                </Panel>
            </Accordion>
        )
    }
});

module.exports = {
    MainLayout: ContentLayout,
    HeadLayout: HeadLayout
};
