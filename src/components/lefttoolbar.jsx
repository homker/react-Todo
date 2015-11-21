var React = require('react'),
    ReactDom = require('react-dom'),
    Accordion = require('react-bootstrap').Accordion,
    Panel = require('react-bootstrap').Panel,
    ListGroup = require('react-bootstrap').ListGroup,
    ListGroupItem = require('react-bootstrap').ListGroupItem,
    Button = require('./DragButton');

var LeftMenu = React.createClass({

    render: function () {
        return (
            <Accordion>
                <Panel header="Collapsible Group Item #1" eventKey="1">
                    <ListGroup>
                        <ListGroupItem>
                            <Button name="Label">
                                this is a button;
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Panel>
                <Panel header="Collapsible Group Item #2" eventKey="2">
                    <ListGroup>
                        <ListGroupItem>
                            this is a button
                        </ListGroupItem>
                    </ListGroup>
                </Panel>
                <Panel header="Collapsible Group Item #3" eventKey="3">
                    <ListGroup>
                        <ListGroupItem>
                            this is a button
                        </ListGroupItem>
                    </ListGroup>
                </Panel>
            </Accordion>
        )
    }
});

module.exports = LeftMenu;