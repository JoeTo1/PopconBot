const React = require('react');
const logo = require('../media/logo.png');
const bindAll = require('lodash.bindall');

import { Navbar,Nav,NavItem,ButtonGroup,Button,DropdownButton,FormControl,MenuItem  } from 'react-bootstrap';
import {Icon} from 'react-fa';

class HeaderBarComponent extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, ['handleTitle']);
    }
    handleTitle(e){
        var title = e.target.value;
        this.props.changeTitle(title);
    }
    render() {
        const {
            serialDev,
            boards,
            refreshPort,
            selectPort,
            selectBoard,
            toggleIpopconPanel,
            toggleStage,
            connectedPort,
            selectedBoard,
            openSetupModal,
            openLoadProjectDialog,
            openSaveProjectDialog,
            projectName,
            changeTitle,
            ...componentProps
        } = this.props;
        var portMenuItem;
        var portDropdownTxt;

        if(this.props.connectedPort!=null) {
            portDropdownTxt = this.props.connectedPort;
            portMenuItem =
                <MenuItem eventKey={{
                    'path': this.props.connectedPort,
                    'type': 'disconnect'
                }} key={this.props.connectedPor}>Disconnect</MenuItem>;

        }else{
            portMenuItem =
                    serialDev.map(dev => (
                    <MenuItem eventKey={dev} key={dev.path}>{dev.path}</MenuItem>
                ));
            portDropdownTxt = Blockly.Msg.SERIAL_PORT_NOTCONNECTED;
        }

        var boardMenuItem = boards.map(b=>(
            <MenuItem eventKey={{'name':b.name,'type':b.type}} key={b.name}>{b.name}</MenuItem>
        ));

        return (
            <Navbar
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    backgroundColor: '#0099CC',
                    backgroundImage: 'url()',
                    height: '45px'
                }}
                {...componentProps}
                fixedTop
                fluid
            >
                <Navbar.Header
                    style={{paddingTop: '5px'}}
                >
                    <a><img src={logo} alt="..." className="img-rounded" style={{height: '35px'}} id="kittenlogo"/></a>
                </Navbar.Header>
                <Nav>
                    <NavItem >
                        <ButtonGroup >
                            <DropdownButton title={selectedBoard.name} bsStyle="warning" id="boardDropdown"
                                            onSelect={selectBoard}
                                            style={{width: '150px'}}>
                                {boardMenuItem}
                            </DropdownButton>
                        </ButtonGroup>
                    </NavItem>
                    <NavItem>
                        <ButtonGroup>
                            <DropdownButton title={portDropdownTxt} bsStyle="success"
                                            onClick={refreshPort}
                                            onSelect={selectPort}
                                            id="portDropdown"
                                            style={{width: '150px'}}>{
                                portMenuItem
                            }
                            </DropdownButton>
                        </ButtonGroup>
                    </NavItem>
                    <NavItem>
                        <FormControl
                            type="text"
                            placeholder="Project Title"
                            style={{
                                width: '200px',
                                backgroundColor: '#0b6684',
                                border: '0px',
                                color: '#FFFFFF'
                            }}
                            value={projectName}
                            onChange={this.handleTitle}
                        />
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem>
                        <Button bsStyle="warning">{Blockly.Msg.EXAMPLE}</Button>
                    </NavItem>
                    <NavItem>
                        <Button bsStyle="warning"
                                onClick={toggleStage}
                        >{Blockly.Msg.STAGE}</Button>
                    </NavItem>
                    <NavItem>
                        <ButtonGroup>
                            <DropdownButton title={Blockly.Msg.PROJECT} bsStyle="warning" id="projDropdown">
                                <MenuItem eventKey="1">{Blockly.Msg.NEW_PROJECT}</MenuItem>
                                <MenuItem eventKey="2" onClick={openSaveProjectDialog}>{Blockly.Msg.SAVE}</MenuItem>
                                <MenuItem eventKey="3" onClick={openLoadProjectDialog}>{Blockly.Msg.LOAD_PROJECT}</MenuItem>
                            </DropdownButton>
                        </ButtonGroup>
                    </NavItem>
                    <NavItem>
                        <Button bsStyle="warning"
                                onClick={toggleIpopconPanel}
                        >Connect</Button>
                    </NavItem>
                    <NavItem>
                        <Button bsStyle="warning"
                            onClick={openSetupModal}
                        >
                            <Icon name="gear"/>
                        </Button>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
};


module.exports = HeaderBarComponent;
