const React = require('react');
const ReactDOM = require('react-dom');
const bindAll = require('lodash.bindall');
const arduinoIcon = require('./arduino.png');

import {Button,FormControl,MenuItem,ButtonGroup,DropdownButton } from 'react-bootstrap';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/theme/eclipse';
import {Icon} from 'react-fa';

class ArduinoPanelComponent extends React.Component {
    constructor (props) {
        super(props);

        bindAll(this, ['consoleSend','consoleEnter']);
    }
    consoleSend(){
        var txt = ReactDOM.findDOMNode(this.refs.consoleInput).value;
        this.props.consoleSend(txt);
    }
    consoleEnter(e){
        e.preventDefault();
        this.consoleSend();
        return false;
    }
    componentDidUpdate(){
        var logs = this.refs.arduinolog;
        var lastLog = logs.childNodes[logs.childNodes.length-1];
        if(lastLog) {
            lastLog.scrollIntoView();
        }
    }
    render() {
        const {
            code,
            consoleMsg,
            restoreFirmware,
            openIno,
            uploadProj,
            codeRef,
            consoleClear,
            translateCode,
            firmwares,
            windowHeight,
            ...componentProps
        } = this.props;
        var visible = this.props.visible?'block':'none';
        const  msgs = [];
        for (var i = 0; i < this.props.consoleMsg.length; i += 1) {
            var t = this.props.consoleMsg[i];
            msgs.push(<p style={{color:t.color}} key={i}>{t.msg}</p>);
        };
        var firmwareItems  = firmwares.map(f => (
            <MenuItem eventKey={{ 'name':f.name,'path':f.path}} key={f.name}>{f.name}</MenuItem>
        ));
        var panelHeight = windowHeight-80;
        return (<div
                style={{
                    position: 'absolute',
                    display: visible,
                    right: 1,
                    width: 500,
                    height: panelHeight,
                    top: 80,
                    bottom: 8,
                    backgroundColor: '#0097a7'
                }}
            >
            <div className="group" id="code-buttons" style={{top:4,left:4,width:480,position:'absolute'}}>
                <Button style={{marginLeft:5,height:34}} onClick={translateCode}><input type="checkbox"/>{Blockly.Msg.TRANSLATE}</Button>
                <ButtonGroup style={{marginLeft:5}}>
                    <DropdownButton title={Blockly.Msg.RESTORE}
                                    onSelect={restoreFirmware}
                                    id="portDropdown">{
                        firmwareItems
                    }
                    </DropdownButton>
                </ButtonGroup>
                <Button style={{marginLeft:5}} onClick={uploadProj}>{<Icon name="arrow-up"/>}{Blockly.Msg.UPLOAD}</Button>
                <Button style={{float:'right'}} onClick={openIno}>{<img style={{height: 20}} src={arduinoIcon}/>}{Blockly.Msg.OPENWITHARDUINO}</Button>
            </div>
            <AceEditor
                style={{top:45,left:2,height:panelHeight*0.5,width:495}}
                mode="c_cpp"
                theme="eclipse"
                name="arduino-code"
                value={code}
                editorProps={{$blockScrolling: true}}
                ref={codeRef}
            />
            <div id="console-log"
                style={{
                    position: 'absolute',
                    left:2,
                    width:495,
                    height:panelHeight*0.5-100,
                    top:panelHeight*0.5+50,
                    overflowY: 'scroll',
                    backgroundColor: '#000000',
                    color: '#008000',
                    fontSize:18
                }}
                ref="arduinolog"
            >{msgs}
            </div>
            <form className="form-inline" id="console-input"
                  onSubmit={this.consoleEnter}
                 style={{
                     position:'absolute',
                     bottom:5,
                     width:500,
                     marginLeft:4,
                     marginTop:8
                 }}
            >
                <FormControl
                    type="text"
                    style={{
                        width: '70%',
                        backgroundColor: '#FFFFFF',
                        border: '0px',
                        color: '#000000'
                    }}
                    ref="consoleInput"
                />
                <Button style={{marginLeft:3}} onClick={this.consoleSend}>{Blockly.Msg.SEND}</Button>
                <Button style={{marginLeft:2}} onClick={consoleClear}>C</Button>
            </form>

            </div>
        );
    }
};


module.exports = ArduinoPanelComponent;


