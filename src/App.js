import * as React from "react";
import "./App.css";
import "./terminal.css";
import logo from "./archan.png";
import Typist from "react-typist";
import BIRDS from 'vanta/dist/vanta.net.min'
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';


class App extends React.Component {
  state = {
    aboutTerminalOpacity: 1,
    contactTerminalOpacity: 1,
    aboutTerminalWidth: '80%',
    aboutTerminalWindowToggle: false,
    aboutZIndex: 100,
    contactTerminalWidth: '30%',
    contactTerminalWindowToggle: false,
    contactZIndex: 100,
  }

  toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      mouseControls: false,
      touchControls: false,
      color: 0xFADEDE,
      backgroundColor: 0x373778,
      points: 12.00,
      maxDistance: 25.00,
      spacing: 20.00
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    const aboutTerminalExit = () => { this.setState({  aboutTerminalOpacity: 0 }); };
    const contactTerminalExit = () => { this.setState({  contactTerminalOpacity: 0 }); };
    const aboutClick = () => { this.setState({  aboutZIndex: 100, contactZIndex: 99 }) };
    const contactClick = () => { this.setState({  aboutZIndex: 99, contactZIndex: 100 }) };
    const aboutTerminalResize = () => {  
      if (!this.state.aboutTerminalWindowToggle) { this.setState({  aboutTerminalWidth: '35%', aboutTerminalWindowToggle: true}); }
      if (this.state.aboutTerminalWindowToggle) { this.setState({  aboutTerminalWidth: '80%', aboutTerminalWindowToggle: false}); }
    };
    const contactTerminalResize = () => { 
      if (!this.state.contactTerminalWindowToggle) { this.setState({  contactTerminalWidth: '65%', contactTerminalWindowToggle: true }); }
      if (this.state.contactTerminalWindowToggle) { this.setState({  contactTerminalWidth: '30%', contactTerminalWindowToggle: false }); }
    };

    return (
      <div className="app">
        <div className="name">
          <b>Archan Rupela</b>
          <div id="content>">
            <img src={logo} className="profile-photo" />
          </div>
        </div>
        <div className="hr"></div>
        <div className="terminal-container" ref={this.vantaRef}>
          <Draggable handle=".terminal-header" bounds={{top:-155, bottom: 270}} grid={[1, 1]} scale={1} onStart={this.handleStart} onDrag={this.handleDrag} onStop={this.handleStop}>
            <Resizable className="terminal-about" style={{opacity: this.state.aboutTerminalOpacity, zIndex: this.state.aboutZIndex}} size={{ width: this.state.aboutTerminalWidth }} 
              onResizeStop={(d) => {this.setState({  aboutTerminalWidth: this.state.aboutTerminalWidth + d.width });}} onClick={aboutClick}>  
              <div className="terminal-header"> about-me 
                <div className="terminal-buttons">
                  <div className="terminal-button terminal-button-min"></div>
                  <div className="terminal-button terminal-button-max" onClick={aboutTerminalResize}></div>
                  <div className="terminal-button terminal-button-close" onClick={aboutTerminalExit}></div>
                </div>
              </div>
              <div>
                <span className="systemTerminalScheme1">system@archan:</span>
                <span className="systemTerminalScheme2">~</span>
                <span color="white">$ </span>
                <Typist avgTypingDelay={30} cursor={{ hideWhenDone: true }} startDelay={1500}>
                  <span>cat readMe.md</span>
                </Typist>
              </div>
              <div>
                <div className="showAboutMe">
                  <p> Hello! My name is Archan Rupela and welcome to my corner of the internet. I'm an engineer, game developer, and leader with <b>{new Date().getFullYear() - 2021}</b> years of industry experience. Check out my published games from the link below! </p>
                  Chances are, you're here to learn more about my <b>professional experience</b>:
                  <ul>
                   <li> Currently a <b>Software Engineer</b> at <b>American Express</b> and: </li>
                   <ul className="innerList">
                    <li> Developing GitHub Actions-based CI/CD pipelines (Python, Bash) that automate build/test/deploy processes</li>
                    <li> Installing, configuring, and upgrading the GitHub Enterprise Server appliance </li>
                    <li> Migrating all company source code to GitHub Enterprise Cloud so teams can collaborate more easily, ship changes faster, and rely on built-in security </li>
                   </ul>
                  </ul>
                  <p>I am always on the lookout for new, challenging opportunities. Feel free to contact me!</p>
                  <span className="systemTerminalScheme2">~</span>
                  <span color="white"> $ </span>
                  <span className="blinking-cursor-about">|</span>
                </div>
              </div>
            </Resizable>
          </Draggable>
          
          <Draggable handle=".terminal-header" bounds={{top:-628, bottom: 20}} grid={[1, 1]} scale={1} onStart={this.handleStart} onDrag={this.handleDrag} onStop={this.handleStop}>
            <Resizable className="terminal-contact" style={{opacity: this.state.contactTerminalOpacity, zIndex: this.state.contactZIndex}} size={{ width: this.state.contactTerminalWidth }} 
              onResizeStop={(d) => {this.setState({  contactTerminalWidth: this.state.contactTerminalWidth + d.width });}} onClick={contactClick}>  
              <div className="terminal-header"> contact-info <div className="terminal-buttons">
                  <div className="terminal-button terminal-button-min"></div>
                  <div className="terminal-button terminal-button-max" onClick={contactTerminalResize}></div>
                  <div className="terminal-button terminal-button-close" onClick={contactTerminalExit}></div>
                </div>
              </div>
              <div>
                <span className="systemTerminalScheme1">system@archan:</span>
                <span className="systemTerminalScheme2">~</span>
                <span color="white">$ </span>
                <div className="showContactMeStart">
                  <Typist avgTypingDelay={30} cursor={{ hideWhenDone: true }} startDelay={5000}>
                    <span>cat contact.md</span>
                  </Typist>
                </div>
              </div>
              <div className="showContactMe">
                <p>
                  <b>Resume: </b>
                  <a href="https://drive.google.com/file/d/1JYVNCHHEAjO7ql8nPIsla70Aqr9l9xt-/view?usp=sharing" target="_blank"> Visit </a>
                </p>
                <p>
                  <b>LinkedIn: </b>
                  <a href="https://www.linkedin.com/in/archanrupela" target="_blank">Visit</a>
                <p>
                  <b>Email: </b>
                  <a href="mailto:archanrupela@outlook.com"> archanrupela@outlook.com </a>
                </p>
                </p>
                <p>
                  <strong>
                    <em>Published Games: </em>
                  </strong>
                  <a href="https://apps.apple.com/us/developer/archan-rupela/id1626881374" target="_blank">iOS</a>
                  <b>, </b>
                  <a href="https://play.google.com/store/apps/developer?id=Archan+Rupela" target="_blank">Android</a>
                </p>
              </div>
              <div className="showContactMe">
                <span className="systemTerminalScheme2">~</span>
                <span color="white"> $ </span>
                <span className="blinking-cursor-contact">|</span>
              </div>
            </Resizable>
          </Draggable>
        </div>
      </div>
    );
  }
}

export default App;
